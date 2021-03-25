<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    //
    public function index()

    {
        
        return Order::all();
    }

    public function store(Request $request)
    {
        $user = User::firstOrCreate(["email"=>$request->email]);
        $order = new Order();
        $order->products()->attach($order->id, json_decode($request->cart,true));
        $order->user()->associate($user);
        $order->transaction_id = Str::random(16);
        $order->save();

        return response()->json($order);

    }
}
