<?php

// Set compiled views path to /tmp (writable on Vercel)
$_ENV['VIEW_COMPILED_PATH'] = '/tmp/views';
putenv('VIEW_COMPILED_PATH=/tmp/views');

// Ensure the views directory exists
if (!is_dir('/tmp/views')) {
    mkdir('/tmp/views', 0755, true);
}

// Ensure the cache directory exists
if (!is_dir('/tmp/cache')) {
    mkdir('/tmp/cache', 0755, true);
}

// Ensure the sessions directory exists
if (!is_dir('/tmp/sessions')) {
    mkdir('/tmp/sessions', 0755, true);
}

// Ensure the logs directory exists
if (!is_dir('/tmp/logs')) {
    mkdir('/tmp/logs', 0755, true);
}

require __DIR__ . '/../public/index.php';
