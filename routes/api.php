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

Route::prefix('study')->group(function (){
    Route::get('/', [StudyController::class,'index'])->name('study.index');
    Route::get('/{id}', [StudyController::class, 'show'])->name('study.show');
    Route::post('/',[StudyController::class, 'store'])->name('study.store');
    Route::put('/{id}',[StudyController::class,'update'])->name('study.update');
    Route::delete('/{id}',[StudyController::class, 'destroy'])->name('study,delete');
});

//Route::resource('study',StudyController::class);

