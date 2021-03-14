<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use App\Models\Product;

class ProductController extends Controller
{
    /* Display all products.
    */
    public function index()
    {
        $products = Product::all();
        return view('products.index')->with('products', $products);
    }
    /* Show the form for create the specified resource with filled specified product.
    */
    public function edit(Product $product)
    {
        // dd($product);
        return view('products.edit')->with('product', $product);
    }

    /* Show the form for create the specified resource.
    */
    public function create()
    {
        return view('products.create');
    }

    /* Delete the specified resource in storage.
    */
    public function destroy($id)
    {
        Product::destroy($id);
        $product->delete();

        return redirect()->route('products.index')
                        ->with('success','Product deleted successfully');
    }

    /* Update the specified resource in storage.
    */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required',
            'prize' => 'required',
            'weight' => 'required',
            'description' => 'required',
            'sku' => 'required'
        ]);
        $product->update($request->all());

        return redirect()->route('products.index')
            ->with('success', 'Project updated successfully');

    }
    /* Save the specified resource in storage.
    */
    public function store(Request $request)
    {

        $product = new Product;
        $product->name = $request->name;
        $product->prize = $request->prize;
        $product->description = $request->description;
        $product->weight = $request->weight;
        $product->sku = 1;
        $product->create_date = Carbon::now();
        $product->save();
        return redirect()->route('products.index')
            ->with('success', 'Product created successfully.');
    }

      /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return view('products.show',compact('product'));
    } 
     
}
