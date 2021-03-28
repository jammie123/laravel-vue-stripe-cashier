

<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Editovat Objednávku: ') }}{{ $order->user->email }}
        </h2>
    </x-slot>

    <div class="py-12 container mx-auto">
        
        <form class="container mx-auto flex flex-col gap-4" action="{{ route('orders.update', $order->id) }}"
            method="POST">
            {{ csrf_field() }}
            @method('PUT')
            <label>Množství</label>
            <input id="name" type="text" name="amount" value={{$order->amount}}>
            <label>Adresa</label>
            <input id="prize" type="text" name="order_adress" value={{$order->order_adress}}>
            <label>Telefon</label>
            <input id="description" type="text" name="order_phone" value={{$order->order_phone}}></input>
            <label>Email</label>
            <input id="weight" type="text" name="order_email" value={{$order->order_email}}>
            <label>Datum objednávky</label>
            <input id="sku" type="date" name="order_date" value={{$order->order_date}}>
            <input type="submit" name="send" value="Submit">
        </form>
    </div>
</x-guest-layout>


