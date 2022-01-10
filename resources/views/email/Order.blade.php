
@component('mail::message')
# Děkujeme Vám za objednávku

Nakoupili jste celkově za {{ $order->total }} Kč

### Podrobnosti objednávky
<ul>
    @foreach($cart as $name)
    <li>
    {{ $name["quantity"] }}x {{ $name["name"] }} | Cena:{{ $name["price"] }}Kč
    @endforeach
</ul>




@endcomponent


