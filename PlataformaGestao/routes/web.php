<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\EncomendasEditoraController;
use App\Http\Controllers\CatalogoLivrosController;
use App\Http\Controllers\EscolasController;
use App\Http\Controllers\AlunosController;

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

Route::middleware(['auth', 'verified'])->group(function () {

    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // ---------- ENCOMENDAS ----------
    Route::get('/encomendas/clientes', [OrderController::class, 'index'])
        ->name('orders.clientes.index');

    Route::get('/encomendas/editora', [EncomendasEditoraController::class, 'index'])
        ->name('orders.editora.index');

    Route::post('/encomendas/editora', [EncomendasEditoraController::class, 'store'])
        ->name('orders.editora.store');

    Route::post('/encomendas/editora/receber', [EncomendasEditoraController::class, 'receive'])
        ->name('orders.editora.receive');

    // ---------- CATÁLOGO ----------
    Route::get('/catalogo/livros', [CatalogoLivrosController::class, 'index'])
        ->name('catalogo.livros.index');

    Route::post('/catalogo/livros', [CatalogoLivrosController::class, 'store'])
        ->name('catalogo.livros.store');

    Route::put('/catalogo/livros/{livro}', [CatalogoLivrosController::class, 'update'])
        ->name('catalogo.livros.update');

    Route::patch('/catalogo/livros/{livro}/toggle', [CatalogoLivrosController::class, 'toggleActive'])
        ->name('catalogo.livros.toggle');

    Route::delete('/catalogo/livros/{livro}', [CatalogoLivrosController::class, 'destroy'])
        ->name('catalogo.livros.destroy');

    // ---------- ESCOLAS  ----------
    Route::get('/escolas', [EscolasController::class, 'index'])
        ->name('escolas.index');

    Route::post('/escolas', [EscolasController::class, 'store'])
        ->name('escolas.store');

    Route::put('/escolas/{escola}', [EscolasController::class, 'update'])
        ->name('escolas.update');

    Route::patch('/escolas/{escola}/toggle', [EscolasController::class, 'toggleActive'])
        ->name('escolas.toggle');

    Route::delete('/escolas/{escola}', [EscolasController::class, 'destroy'])
        ->name('escolas.destroy');


    // ---------- ALUNOS ----------
    Route::get('/alunos/criar', [AlunosController::class, 'create'])
        ->name('alunos.create');

    Route::post('/alunos', [AlunosController::class, 'store'])
        ->name('alunos.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';