<?php

declare(strict_types=1);

use App\Controller\HomeController;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });
    $app->get('/', HomeController::class . ':index')->setName('app.home');
    $app->get('/login', HomeController::class . ':index')->setName('app.login');
    $app->get('/logout', HomeController::class . ':index')->setName('app.logout');

};
