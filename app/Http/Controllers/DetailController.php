<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Pancong;
use Illuminate\Http\Request;

class DetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia::render('Pancong/Detail');
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
        $produk = Pancong::findOrFail($id);
        return inertia::render('Components/Detail', [
            'produk' =>$produk
        ]);
    }
    public function cek_status($order_id)
{
    $serverKey = 'SB-Mid-server-Ll9mtJlqG_u5TrP0I1MzQVq1';
    $auth = base64_encode($serverKey . ':');
    $url = "https://api.sandbox.midtrans.com/v2/$order_id/status";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Accept: application/json",
        "Content-Type: application/json",
        "Authorization: Basic $auth"
    ]);

    $response = curl_exec($ch);
    curl_close($ch);
    header('Content-Type: application/json');
    echo $response;
    // return redirect()->back()->with('message', 'sukses');
}

    public function keranjang()
    {
        return inertia::render('Components/Keranjang');
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
