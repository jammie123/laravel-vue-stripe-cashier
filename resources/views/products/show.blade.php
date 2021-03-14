<x-guest-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12 container mx-auto">
        <h1 class="text-3xl text-bold pb-16">Editovat produkt</h1>
        <form class="container mx-auto flex flex-col gap-4" action="{{ route('products.update', $product->id) }}"
            method="POST">
            {{ csrf_field() }}
            @method('PUT')
            <label>Název produktu</label>
            <input id="name" type="text" name="name" value={{ $product->name }}>
            <label>Cena produktu</label>
            <input id="prize" type="number" name="prize" value={{ $product->prize }}>
            <label>Popisek</label>
            <textarea id="description" rows="3" name="description" value={{ $product->description }}></textarea>
            <label>Váha</label>
            <input id="weight" type="number" name="weight" value={{ $product->weight }}>
            <label>Množství na skladě</label>
            <input id="sku" type="number" name="sku" value={{ $product->sku }}>
            <input type="submit" name="send" value="Submit">
    </div>
</x-guest-layout>
