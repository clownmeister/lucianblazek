<?php

declare(strict_types=1);

use ClownMeister\Dnd\Settings\Settings;
use ClownMeister\Dnd\Settings\SettingsInterface;
use DI\ContainerBuilder;
use Monolog\Logger;

return function (ContainerBuilder $containerBuilder) {

    // Global Settings Object
    $containerBuilder->addDefinitions([
        SettingsInterface::class => function () {
            $local = $_ENV['ENVIRONMENT'] ?? null === 'local';
            return new Settings([
                'environment' => $_ENV['ENVIRONMENT'] ?? 'local',
                'displayErrorDetails' => true, // Should be set to false in production
                'logError' => false,
                'logErrorDetails' => false,
                'logger' => [
                    'name' => 'slim-app',
                    'path' => isset($_ENV['docker']) ? 'php://stdout' : __DIR__ . '/../logs/app.log',
                    'level' => Logger::DEBUG,
                ],
                'twig' => [
                    'path' => [
                        __DIR__ . '/../src/view',
                        'dndBundle' => __DIR__ . '/../src/view'
                    ],
                    'cache' => $local ? false : __DIR__ . '/../../../var/cache/twig/',
                    'debug' => $local
                ]
            ]);
        }
    ]);
};
