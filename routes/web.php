<?php

use App\Http\Controllers\ContactController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');
