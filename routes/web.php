<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileUploadController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;

Auth::routes();



Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    Route::resource('admin/products', ProductController::class);
    Route::resource('admin/orders', OrderController::class);
    Route::resource('admin/users', UserController::class);
    Route::post('admin/orders/{order_id}/{product_id}', [OrderController::class, 'deleteProduct'])->name('orders.delete');
});



Route::get('/pokus', [ProductController::class, 'pokus']);
Route::get('/sayhello', function() {
    return phpinfo();
});

Route::get('/email', [OrderController::class, 'sendEmail']);

Route::post('/upload', [FileUploadController::class, 'storeUploads']);

Route::any('/{any}', function() {
    return view('app');
})->where('any', '.*');




