<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    protected $fillable = ['title','description','category_id','tags'];
    
    
    public function category(){
        return $this->belongsTo('\App\Category');
    }
}
