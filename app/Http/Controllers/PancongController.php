<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Pancong;
use Illuminate\Http\Request;

class PancongController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Pancong::orderBy('created_at', 'desc')->get();
        return Inertia::render('Dashboard/Pancong', [
            'auth' => [
                'user' => auth()->user(),
            ],
            'items' => $items
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'menu' => 'required',
            'harga' => 'required|numeric',
            'gambar' => 'nullable|image|max:2048',
        ]);

        $gambar = $request->file('gambar') ? $request->file('gambar')->store('menu', 'public') : null;

        Pancong::create([
            'menu' => $request->menu,
            'harga' => $request->harga,
            'gambar' => $gambar,
        ]);

        return redirect()->route('pancong')->with('message', 'Pancong berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $pancong = Pancong::findOrFail($id);

        $request->validate([
            'menu' => 'required',
            'harga' => 'required|numeric',
            'gambar' => 'nullable|image|max:2048',
        ]);

        if ($request->file('gambar')) {
            $gambar = $request->file('gambar')->store('menu', 'public');
            $pancong->gambar = $gambar;
        }

        $pancong->update([
            'menu' => $request->menu,
            'harga' => $request->harga,
        ]);

        return redirect()->route('pancong')->with('message', 'Pancong berhasil diupdate.');
    }

    public function destroy($id)
    {
        Pancong::findOrFail($id)->delete();
        return redirect()->route('pancong')->with('message', 'Pancong dihapus.');
    }
}
