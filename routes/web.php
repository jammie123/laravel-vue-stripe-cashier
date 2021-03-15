<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\ProductController;

Auth::routes();



Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    Route::resource('admin/products', ProductController::class);
    Route::resource('admin/orders', ProductController::class);
});



Route::get('/pokus', [ProductController::class, 'pokus']);
Route::post('/upload', [FileUploadController::class, 'storeUploads']);

Route::any('/{any}', function() {
    return view('app');
})->where('any', '.*');


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
