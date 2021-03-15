<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\ProductController;
<<<<<<< HEAD

Auth::routes();



Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    Route::resource('admin/products', ProductController::class);
    Route::resource('admin/orders', ProductController::class);
});
=======

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');


Route::resource('admin/products', ProductController::class);



Route::get('/pokus', [ProductController::class, 'pokus']);
Route::post('/upload', [FileUploadController::class, 'storeUploads']);
>>>>>>> 6f5545b3a83570089791f44214d6ee78e4c1271a



Route::get('/pokus', [ProductController::class, 'pokus']);
Route::post('/upload', [FileUploadController::class, 'storeUploads']);

Route::any('/{any}', function() {
    return view('app');
})->where('any', '.*');

<<<<<<< HEAD

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
=======
>>>>>>> 6f5545b3a83570089791f44214d6ee78e4c1271a
