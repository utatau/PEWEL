<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Minuman;
use App\Models\Pancong;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class Menupancong extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pancong = Pancong::all();
        $minuman = Minuman::all();

        return inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'pancong' => $pancong,
            'minuman' => $minuman
        ]);
    }

    public function pancong(){
        $pancong = Pancong::all();
        return inertia::render('Components/Menu/AllPancong', [
            'pancong' => $pancong
        ]);
    }
    public function minuman(){
        $minuman = Minuman::all();
        return inertia::render('Components/Menu/AllMinuman', [
            'minuman' => $minuman
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
