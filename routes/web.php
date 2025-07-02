<?php

use Inertia\Inertia;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\Menupancong;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DetailController;
use App\Http\Controllers\MinumanController;
use App\Http\Controllers\PancongController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::get('/dashboard', [Dashboard::class, 'index'])
//     ->middleware(['auth', 'verified'])
//     ->name('dashboard');
// Route::get('/pancong', function () {
//     return Inertia::render('Pancong/Pancong');
// })->middleware(['auth', 'verified'])->name('pancong');
// Route::get('/minuman', function () {
//     return Inertia::render('Pancong/Minuman');
// })->middleware(['auth', 'verified'])->name('minuman');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [Dashboard::class, 'index'])->name('dashboard');
    Route::get('/pancong', [PancongController::class, 'index'])->name('pancong');
    Route::post('/pancong', [PancongController::class, 'store'])->name('pancong.store');
    Route::put('/pancong/{id}', [PancongController::class, 'update'])->name('pancong.update');
    Route::post('/pancong/{id}', [PancongController::class, 'update'])->name('pancong.update');
    Route::delete('/pancong/{id}', [PancongController::class, 'destroy'])->name('pancong.destroy');
    Route::get('/minuman', [MinumanController::class, 'index'])->name('minuman');
    Route::post('/minuman/{id}', [MinumanController::class, 'update'])->name('minuman.update');
    Route::post('/minuman', [MinumanController::class, 'store'])->name('minuman.store');
    Route::delete('/minuman/{id}', [MinumanController::class, 'destroy'])->name('minuman.destroy');
});



Route::get('/', [MenuPancong::class, 'index']);
Route::get('/detail/{id}', [DetailController::class, 'show']);
Route::get('/detail', [DetailController::class, 'index']);
Route::get('/allpancong', [MenuPancong::class, 'pancong']);
Route::get('/allminuman', [MenuPancong::class, 'minuman']);
Route::get('/cart', [CartController::class, 'index']);
Route::get('/keranjang', [DetailController::class, 'keranjang']);
Route::get('/pembayaran', [PaymentController::class, 'index']);
Route::get('/qris', [PaymentController::class, 'qris']);
Route::get('/cek_status/{id}', [DetailController::class, 'cek_status']);

Route::get('/struk', [DetailController::class, 'struk']);
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
