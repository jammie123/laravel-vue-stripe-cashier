<x-app-layout>
    @if($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Výpis produktů') }}
        </h2>
    </x-slot>

    <div class="py-12 container mx-auto">
        <table class="table-auto">
            <thead>

                <tr>
                    <th class="text-left px-4 py-2 text-light-blue-600">Název</th>
                    <th class="text-left px-4 py-2 text-light-blue-600">Cena</th>
                    <th class="text-left px-4 py-2 text-light-blue-600">Váha</th>
                    <th class="text-left px-4 py-2 text-light-blue-600">Počet produktů skladem</th>
                    <th class="text-left"></th>
                    <th class="text-left"></th>
                </tr>
            </thead>
            <tbody>
            @foreach($products as $product)

                <tr>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $product->name }}</td>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $product->price }}</td>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $product->weight }}</td>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $product->sku }}</td>
                    <td class="border border-gray-900 px-4 py-2 text-light-blue-600 font-medium"><a href="{{ route('products.edit', $product->id) }}">Editovat</a></td>
                    <td class="border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">
                        <form action="{{ route('products.destroy',$product->id) }}"
                            method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">Smazat</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</x-app-layout>
