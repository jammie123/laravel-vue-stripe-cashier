<x-app-layout>
    @if($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Detail transakce') . ": " . $order->user->name}}
        </h2>
        <p>{{   $order->transaction_id }}</p>
    </x-slot>

    <div class="py-12 container mx-auto">



    @if(count($order->products) >0)
    




    <table class="table-auto">
            <thead>

                <tr>
                    <th class="text-left px-4 py-2 text-light-blue-600">Název produktu</th>
                    <th class="text-left px-4 py-2 text-light-blue-600">Cena produktu</th>
                    <th class="text-left px-4 py-2 text-light-blue-600">Váha</th>
                    <th class="text-left px-4 py-2 text-light-blue-600">Počet produktů skladem</th>
                    <th class="text-left"></th>
                    <th class="text-left"></th>
                </tr>
            </thead>
            <tbody>
            @foreach($order->products as $orderdetail)

                <tr>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $orderdetail->name }}</td>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $orderdetail->price }}</td>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $orderdetail->weight }}</td>
                    <td class="w-1/5 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $orderdetail->sku }}</td>
                    <!-- <td class="border border-gray-900 px-4 py-2 text-light-blue-600 font-medium"><a href="{{ route('orders.edit', $order->id) }}">Editovat</a></td> -->
                    <td class="border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">
                        <form action="{{ route('orders.delete', ["order_id" => $order->id, "product_id" => $orderdetail->id]) }}"
                            method="POST">
                            @csrf
                            <button type="submit" class="btn btn-danger">Smazat</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <p class="text-3xl text-black-50 py-8">Celková cena objednávky je: {{ $order->total     }} kč</p>
        @endif
        
        @if(count($order->products)< 1)
            <p class="text-3xl text-black-50 py-8 text-center">K této objednávce již nejsou data</p>
        @endif

    </div>
</x-app-layout>
