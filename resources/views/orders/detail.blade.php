<x-app-layout>
    @if($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Objednávky') }}
        </h2>
    </x-slot>

    <div class="py-12 container mx-auto">
        <h1 class="text-3xl text-bold pb-16">Výpis objednávek</h1>




        <table class="table-auto">
            <thead>

                <tr>
                    <th class="text-left px-4 py-2 text-light-blue-600 font-bold">Transakce</th>
                    <th class="text-left px-4 py-2 text-light-blue-600 font-bold">Email</th>
                    <th class="text-left px-4 py-2 text-light-blue-600 font-bold">Total</th>
                    <th class="text-left px-4 py-2 text-light-blue-600 font-bold">Datum</th>
                    <th class="text-left px-4 py-2 text-light-blue-600 font-bold"></th>
                    <th class="text-left px-4 py-2 text-light-blue-600 font-bold"></th>
                </tr>
            </thead>
            <tbody>
            @foreach($orders as $order)

                <tr>
                    <td class="w-1/4 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $order->transaction_id }}</td>
                    <td class="w-1/4 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $order->user->name }}</td>
                    <td class="w-1/4 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $order->total }}</td>
                    <td class="w-1/4 border border-gray-900 px-4 py-2 text-light-blue-600 font-medium">{{ $order->created_at }}</td>
                    <td class="border border-gray-900 px-4 py-2 text-light-blue-600 font-medium"><a href="{{ route('orders.edit', $order->id) }}">Editovat</a></td>
                    <td class="border border-gray-900 px-4 py-2 text-light-blue-600 font-medium"> 
                        <form action="{{ route('orders.destroy',$order->id) }}"
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
