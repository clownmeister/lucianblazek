<?php

declare(strict_types=1);

use ClownMeister\Dnd\Controller\DashboardController;
use ClownMeister\Dnd\Controller\SpellBookController;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        return $response;
    });
    $app->get('/', DashboardController::class . ':index')->setName('dnd.dashboard');
    $app->get('/spell-book', SpellBookController::class . ':index')->setName('dnd.spell_book');
};
