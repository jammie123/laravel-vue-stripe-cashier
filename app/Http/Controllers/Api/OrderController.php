<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //
    public function index()

    {
        
        return Order::all();
    }

    public function store(Order $order)
    {
        dd($order);
        // $order = new Order();
        // $order->customer_id = 1;
        // $order->amount = $request->amount;
        // $order->order_adress = $request->order_adress;
        // $order->order_email = $request->order_email;
        // $order->order_phone = $request->order_phone;
        // $order->order_status = "1";
        // $order->order_date = Carbon::now();
        // $order->save();
        // return $product;
    }
}
