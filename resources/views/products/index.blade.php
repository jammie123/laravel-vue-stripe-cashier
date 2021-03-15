<x-app-layout>
    @if($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
<<<<<<< HEAD
            {{ __('Produkty') }}
=======
            {{ __('Dashboard') }}
>>>>>>> 6f5545b3a83570089791f44214d6ee78e4c1271a
        </h2>
    </x-slot>

    <div class="py-12 container mx-auto">
        <h1 class="text-3xl text-bold pb-16">Výpis produktů</h1>
        <table>
            <tr>
                <th>Název</th>
                <th>Cena</th>
                <th>Váha</th>
                <th>Počet produktů skladem</th>
            </tr>
            @foreach($products as $product)
                <tr>
                    <th>{{ $product->name }}</th>
                    <th>{{ $product->prize }}</th>
                    <th>{{ $product->weight }}</th>
                    <th>{{ $product->sku }}</th>
                    <th><a href="{{ route('products.edit', $product->id) }}">Editovat</a></th>
                    <th>
                        <form action="{{ route('products.destroy',$product->id) }}"
                            method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">Smazat</button>
                        </form>
                    </th>
                </tr>
            @endforeach
        </table>
    </div>
</x-app-layout>
