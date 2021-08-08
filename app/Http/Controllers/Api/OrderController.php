<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;

class OrderController extends Controller
{
    //
    public function getTotalPrice($cart)
    {
        $total = 0;
        foreach ($cart as $item) {
            $total =  $total + ($item["quantity"] * $item["price"]);
        }
        return $total;
    }

    public function getCartItems($cart, $order)
    {
        $cartItems = collect([]);
        foreach ($cart as $item) {
            // $item = collect($item)->only(["id", "quantity"]);
            $order->products()->attach($order->id, ["product_id" => $item["id"], "quantity"=> $item["quantity"]]);
            // $cartItems->push($item);
        }


        return $order;
    }

    public function index()

    {

        return Order::all();
    }

    public function store(Request $request)
    {
        $user = User::firstOrCreate(["email" => $request->email], [
            'name' => $request->name
        ]);
        $order = new Order();
        $order->transaction_id = Str::random(16);
        $cart = collect(json_decode($request->cart, true));
        $order->total = $this->getTotalPrice($cart);
        $order->user()->associate($user);
        $order->save();
        $this->getCartItems($cart, $order);
        

        return response()->json($order);
    }
}
