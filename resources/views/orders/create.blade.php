<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12 container mx-auto">
        <h1 class="text-3xl text-bold pb-16">Nová objednávka</h1>
        <form class="container mx-auto flex flex-col gap-4" action="{{ route('orders.store') }}"
            method="POST">
            {{ csrf_field() }}
            <label>Množství</label>
            <input id="name" type="text" name="amount">
            <label>Adresa</label>
            <input id="prize" type="text" name="order_adress">
            <label>Telefon</label>
            <input id="description" type="text" name="order_phone"></input>
            <label>Email</label>
            <input id="weight" type="text" name="order_email">
            <label>Datum objednávky</label>
            <input id="sku" type="date" name="order_date">
            <input type="submit" name="send" value="Submit">
        </form>
    </div>
</x-app-layout>

