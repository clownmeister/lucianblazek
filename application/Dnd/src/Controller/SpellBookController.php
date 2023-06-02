<?php

declare(strict_types=1);

namespace ClownMeister\Dnd\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class SpellBookController extends AbstractController
{
    /**
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws LoaderError
     */
    public function index(ServerRequestInterface $request, ResponseInterface $response, array $args): ResponseInterface
    {
        if (!isset($_SESSION)) {
            session_start();
        }

        return $this->view->render(
            $response,
            'pages/spell-book.html.twig',
            []
        );
    }
}
