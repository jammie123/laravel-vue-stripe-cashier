<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /* Display all products.
     */
    public function index()
    {
        $orders = Order::all();
        return view('orders.index')->with('orders', $orders);
    }
    /* Show the form for create the specified resource with filled specified product.
     */
    public function edit(Order $order)
    {
        // dd($product);
        return view('orders.edit')->with('order', $order);
    }

    /* Show the form for create the specified resource.
     */
    public function create()
    {
        return view('orders.create');
    }

    /* Delete the specified resource in storage.
     */
    public function destroy($id)
    {

        Order::destroy($id);
        // $order->delete();

        return redirect()->route('orders.index')
            ->with('success', 'Product deleted successfully');
    }

    /* Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $request->validate([

        ]);
        $order->update($request->all());

        return redirect()->route('orders.index')
            ->with('success', 'Project updated successfully');

    }
    /* Save the specified resource in storage.
     */
    public function store(Request $request)
    {

        $order = new Order();
        $order->customer_id = 1;
        $order->amount = $request->amount;
        $order->order_adress = $request->order_adress;
        $order->order_email = $request->order_email;
        $order->order_phone = $request->order_phone;
        $order->order_status = "1";
        $order->order_date = Carbon::now();
        $order->save();
        // $order->products()->attach([1=>[
        //     'quantity' => "20",
        //     'price' => "200 kč",
        //     'total' => "4000 kč"
        // ],2=>[
        //     'quantity' => "30",
        //     'price' => "200 kč",
        //     'total' => "4000 kč"
        // ]]);
        // $order->save();
        return redirect()->route('orders.index')
            ->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {

        return view('orders.show')->with('order', $order);
    }

    public function deleteProduct($order_id, $product_id)
    {

        $order = Order::findOrFail($order_id);
        

        if($order->products()->count()==1){
            $order->delete();
            return redirect()->route('orders.index')
            ->with('success', 'Project updated successfully');
        }
        else{
            $product = Product::findOrFail($product_id);
            $order->total = $order->total - $product->price;
            $order->products()->detach($product_id);
            $order->save();
        }

        return redirect()->back()
            ->with('success', 'Project updated successfully');
    }

}
