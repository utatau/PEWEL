<?php

namespace App\Http\Controllers\Api;

use App\Models\Penjualan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class CekPembayaran extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $orderId = $request->order_id;
        $statusCode = $request->status_code;
        $grossAmount = $request->gross_amount;

        $signature = hash('sha512', $orderId.$statusCode.$grossAmount.'SB-Mid-server-Ll9mtJlqG_u5TrP0I1MzQVq1');

        Log::info('incoming-notification', $request->all());
        if($signature != $request->signature_key){
            return response()->json(['message' => 'invalid signature'], 400);
        }
            $transaction = Penjualan::find($request->order_id);
            if($transaction){
                $statusCode = 'PENDING';
                if($request->transaction_status == "settlement"){
                    $statusCode = 'PAID';
                } else if($request->transaction_status == 'expired'){
                    $statusCode = 'EXPIRED';
                }

                $transaction->status = $statusCode;
                $transaction->save();
            }
            return response()->json(['message' => 'success']);

    }
}
