<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use App\Models\Product;
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
        $user = User::firstOrCreate(["email" => $request->email]);
        $order = new Order();

        $quantity = json_decode($request->cart, true)[0]['quantity'];
        $productId = json_decode($request->cart, true)[0]['id'];
        $product = Product::findOrFail($productId);
        $order->transaction_id = Str::random(16);
        $order->user()->associate($user);
        $order->save();

        $order->products()->attach($order->id, ['product_id'=>$productId, "quantity"=>$quantity]);




        return response()->json($order);
    }
}
