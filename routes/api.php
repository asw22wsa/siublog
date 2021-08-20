<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/study', [StudyController::class,'index'])->name('study.index');
Route::get('/study/{id}', [StudyController::class, 'show'])->name('study.show');
Route::post('/study',[StudyController::class, 'store'])->name('study.store');
Route::put('/study/{id}',[StudyController::class,'update'])->name('study.update');
Route::delete('/study/{id}',[StudyController::class, 'destroy'])->name('study,delete');