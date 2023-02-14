<?php

declare(strict_types=1);

namespace App\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;


class HomeController extends AbstractController
{
    public function index(ServerRequestInterface $request, ResponseInterface $response, array $args): ResponseInterface
    {
        if (!isset($_SESSION)) {
            session_start();
        }

        return $this->view->render(
            $response,
            'pages/home.html.twig',
            []
        );
    }
}
