<?php

namespace App\Models;

use App\Models\Pancong;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Penjualan extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function Pancong(){
        return $this->belongsTo(Pancong::class);
    }
    public function Minuman(){
        return $this->belongsTo(Minuman::class);
    }
}
