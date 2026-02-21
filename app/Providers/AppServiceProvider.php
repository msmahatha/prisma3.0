<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Configure writable paths for Vercel serverless environment
        if (env('VERCEL') || env('APP_ENV') === 'production') {
            $this->app->useStoragePath('/tmp/storage');

            config([
                'view.compiled' => '/tmp/views',
                'cache.stores.file.path' => '/tmp/cache',
                'logging.channels.single.path' => '/tmp/logs/laravel.log',
                'session.files' => '/tmp/sessions',
            ]);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
