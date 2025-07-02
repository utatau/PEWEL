<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Minuman;
use Illuminate\Http\Request;

class MinumanController extends Controller
{
       public function index()
    {
        $items = Minuman::orderBy('created_at', 'desc')->get();
        return Inertia::render('Dashboard/Minuman', [
            'auth' => ['user' => auth()->user()],
            'items' => $items,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'menu' => 'required',
            'harga' => 'required|numeric',
            'gambar' => 'nullable|image|max:2048',
        ]);

        $gambar = $request->file('gambar') ? $request->file('gambar')->store('minuman', 'public') : null;

        Minuman::create([
            'menu' => $request->menu,
            'harga' => $request->harga,
            'gambar' => $gambar,
        ]);

        return redirect()->route('minuman')->with('message', 'Minuman berhasil ditambahkan.');
    }

    public function destroy($id)
    {
        Minuman::findOrFail($id)->delete();
        return redirect()->route('minuman')->with('message', 'Minuman dihapus.');
    }
    public function update(Request $request, $id)
    {
        $minuman = Minuman::findOrFail($id);

        $request->validate([
            'menu' => 'required|string|min:2',
            'harga' => 'required|numeric|min:1000',
            'gambar' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            $minuman->gambar = $request->file('gambar')->store('minuman', 'public');
        }

        $minuman->update([
            'menu' => $request->menu,
            'harga' => $request->harga,
        ]);

        $minuman->save();

        return redirect()->route('minuman')->with('message', 'Minuman berhasil diupdate.');
    }

}
