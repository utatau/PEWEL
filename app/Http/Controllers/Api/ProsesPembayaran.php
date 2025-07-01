<?php

namespace App\Http\Controllers\Api;

use App\Models\Penjualan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class ProsesPembayaran extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $validasi = Validator::make($request->all(),[
            'total' => 'required'
        ]);
        if ($validasi->failed()){
            return response()->json(data: $validasi->errors(), status:400);
        }

        $penjualan = Penjualan::create([
            'pesanan' => $request->pesanan,
            'jumlah_pesanan' => $request->jumlah_pesanan,
            'pembayaran' => $request->pembayaran,
            'total' => $request->total,
            'status' => $request->status
        ]);

        $resp = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json'
        ])->withBasicAuth('SB-Mid-server-Ll9mtJlqG_u5TrP0I1MzQVq1', '')
        ->post('https://api.sandbox.midtrans.com/v2/charge',[
            'payment_type' => 'gopay',
            'transaction_details' => [
                "order_id" => $penjualan->id,
                "gross_amount" => $penjualan->jumlah_pesanan
            ]
        ]);
        if($resp->status() == 201 || $resp->status() == 200){
            $actions = $resp->json('actions');
            if(empty($actions)){
                return response()->json(['message' => $resp['status_message']], 500);
            }
            $actionMap = [];
            foreach ($actions as $action) {
                $actionMap[$action['name']] = $action['url'];
            }
            return response()->json(['qr' => $actionMap['generate-qr-code'], 'status' => $actionMap['get-status']]);
            
        }
        return response()->json(['message' => $resp->body()], 500);
    }
}
