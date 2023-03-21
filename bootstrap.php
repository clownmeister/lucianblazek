<?php

declare(strict_types=1);

use ClownMeister\Handlers\HttpErrorHandler;
use ClownMeister\Handlers\ShutdownHandler;
use ClownMeister\ResponseEmitter\ResponseEmitter;
use ClownMeister\Settings\SettingsInterface;
use DI\ContainerBuilder;
use Slim\Factory\AppFactory;
use Slim\Factory\ServerRequestCreatorFactory;
use Slim\Views\Twig;
use Slim\Views\TwigMiddleware;

require __DIR__ . '/vendor/autoload.php';

$appType = $_ENV['APP'] ?? 'app';
$environment = $_ENV['ENVIRONMENT'] ?? 'local';

// Instantiate PHP-DI ContainerBuilder
$containerBuilder = new ContainerBuilder();

if ($environment === 'prod') {
    $containerBuilder->enableCompilation(__DIR__ . '/../var/cache');
}

// Set up settings
$basePath = __DIR__ . '/app';
$appPath = __DIR__ . '/app/' . $appType;
if ($appType !== 'app' && file_exists($appPath . '/settings.php')) {
    $settings = require $appPath . '/settings.php';
} else {
    $settings = require $basePath . '/settings.php';
}
$settings($containerBuilder);

// Set up dependencies
if ($appType !== 'app' && file_exists($appPath . '/dependencies.php')) {
    $dependencies = require $appPath . '/dependencies.php';
} else {
    $dependencies = require $basePath . '/dependencies.php';
}
$dependencies($containerBuilder);

// Build PHP-DI Container instance
$container = $containerBuilder->build();

// Instantiate the app
AppFactory::setContainer($container);
$app = AppFactory::create();
$callableResolver = $app->getCallableResolver();

$app->add(TwigMiddleware::create($app, $container->get(Twig::class)));

// Register routes
if ($appType !== 'app' && file_exists($appPath . '/routes.php')) {
    $routes = require $appPath . '/routes.php';
} else {
    $routes = require $basePath . '/routes.php';
}
$routes($routes);

/** @var SettingsInterface $settings */
$settings = $container->get(SettingsInterface::class);

$displayErrorDetails = $settings->get('displayErrorDetails');
$logError = $settings->get('logError');
$logErrorDetails = $settings->get('logErrorDetails');

// Create Request object from globals
$serverRequestCreator = ServerRequestCreatorFactory::create();
$request = $serverRequestCreator->createServerRequestFromGlobals();

// Create Error Handler
$responseFactory = $app->getResponseFactory();
$errorHandler = new HttpErrorHandler($callableResolver, $responseFactory);

// Create Shutdown Handler
$shutdownHandler = new ShutdownHandler($request, $errorHandler, $displayErrorDetails);
register_shutdown_function($shutdownHandler);

// Add Routing Middleware
$app->addRoutingMiddleware();

// Add Body Parsing Middleware
$app->addBodyParsingMiddleware();

// Add Error Middleware
$errorMiddleware = $app->addErrorMiddleware($displayErrorDetails, $logError, $logErrorDetails);
$errorMiddleware->setDefaultErrorHandler($errorHandler);

// Run App & Emit Response
$response = $app->handle($request);
$responseEmitter = new ResponseEmitter();
$responseEmitter->emit($response);
