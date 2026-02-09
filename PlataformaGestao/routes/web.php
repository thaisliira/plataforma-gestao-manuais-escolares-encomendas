<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Rotas para encomendas
Route::get('/encomendas', [OrderController::class, 'index'])->name('orders.index');
Route::get('/encomendas/create', [OrderController::class, 'create'])->name('orders.create');
Route::post('/encomendas', [OrderController::class, 'store'])->name('orders.store');

// APIs para suporte à criação de encomendas
Route::get('/api/students/lookup', [OrderController::class, 'studentLookup'])->name('api.students.lookup');
Route::get('/api/books/search', [OrderController::class, 'searchBooks'])->name('api.books.search');

// APIs para processamento de encomendas
Route::patch('/api/orders/{orderId}/items/{itemId}', [OrderController::class, 'updateItem'])->name('api.orders.updateItem');
Route::get('/api/orders/{orderId}/history', [OrderController::class, 'getHistory'])->name('api.orders.history');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/encomendas/clientes', [OrderController::class, 'index'])->name('orders.clientes.index');
    Route::get('/encomendas/editora', [OrderController::class, 'index'])->name('orders.editora.index');
    Route::get('/catalogo/livros', [OrderController::class, 'index'])->name('catalogo.livros.index');
});

require __DIR__.'/auth.php';
