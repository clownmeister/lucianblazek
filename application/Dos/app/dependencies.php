<?php

declare(strict_types=1);

use ClownMeister\Dos\Settings\SettingsInterface;
use DI\ContainerBuilder;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Monolog\Processor\UidProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Slim\Views\Twig;
use Twig\Extension\DebugExtension;

return function (ContainerBuilder $containerBuilder) {
    $containerBuilder->addDefinitions([
        Twig::class => function (ContainerInterface $container) {
            $settings = $container->get(SettingsInterface::class);
            $twigSettings = $settings->get('twig');
            $twig = Twig::create(
                $twigSettings['path'],
                [
                    'cache' => $twigSettings['cache'],
                    'debug' => $twigSettings['debug']
                ]
            );
            $twig->addExtension(new DebugExtension());

            return $twig;
        },
        LoggerInterface::class => function (ContainerInterface $c) {
            $settings = $c->get(SettingsInterface::class);

            $loggerSettings = $settings->get('logger');
            $logger = new Logger($loggerSettings['name']);

            $processor = new UidProcessor();
            $logger->pushProcessor($processor);

            $handler = new StreamHandler($loggerSettings['path'], $loggerSettings['level']);
            $logger->pushHandler($handler);

            return $logger;
        },
    ]);
};
