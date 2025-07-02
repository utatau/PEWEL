<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Minuman;
use App\Models\Pancong;
use App\Models\Penjualan;
use Illuminate\Http\Request;

class Dashboard extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transaksiBerhasil = Penjualan::where('status', 'PAID')->count();
        $menuPancong = Pancong::count('menu');
        $menuMinuman = Minuman::count('menu');
        $totalMenu = $menuMinuman + $menuPancong;
        $totalPenjualan =Penjualan::sum('total');
        $totalPesanan = Penjualan::sum('jumlah_pesanan');
        $penjualans = Penjualan::orderBy('created_at', 'desc')->get();
        return Inertia::render('Dashboard', [
            'auth' => [
                'user' => auth()->user(),
            ],
            'totalPesanan' => $totalPesanan,
            'totalPenjualan' => $totalPenjualan,
            'menuPancong' => $menuPancong,
            'menuMinuman' => $menuMinuman,
            'totalMenu' => $totalMenu,
            'transaksiBerhasil' => $transaksiBerhasil,
             'penjualans' => $penjualans
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
