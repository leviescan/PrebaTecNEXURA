<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/empleados', 'App\Http\Controllers\EmpleadosController@index');
Route::post('/empleados', 'App\Http\Controllers\EmpleadosController@store');
Route::put('/empleados/{id}', 'App\Http\Controllers\EmpleadosController@update');
Route::delete('/empleados/{id}', 'App\Http\Controllers\EmpleadosController@destroy');
Route::get('/empleados/{id}', 'App\Http\Controllers\EmpleadosController@read1');
