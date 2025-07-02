<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Minuman extends Model
{
    use HasFactory;
    protected $table = 'minumans';
    protected $guarded = [];
    public function Penjualan(){
        return $this->hashMany(Penjualan::class);
    }
}
