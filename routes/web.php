<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\ProductController;

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');


Route::resource('admin/products', ProductController::class);



Route::get('/pokus', [ProductController::class, 'pokus']);
Route::post('/upload', [FileUploadController::class, 'storeUploads']);

Route::any('/{any}', function() {
    return view('app');
})->where('any', '.*');

