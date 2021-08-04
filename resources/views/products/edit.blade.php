<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Editace produktu:') }} {{ $product->name }}
        </h2>
    </x-slot>

    <div class="py-12 container mx-auto">
        <form class="container mx-auto flex flex-col gap-4" action="{{ route('products.update', $product->id) }}" method="POST" enctype="multipart/form-data">
            {{ csrf_field() }}
            @method('PUT')
            @if ($product->image)
            @foreach(json_decode($product->image) as $value)
            <div class="col-md-2">
                <img src="{{ asset('images/'.$value) }}" width="300">
            </div>
            @endforeach
            @endif

            <label>Obrázky produktu</label>
            <input type="file" name="image[]" accept="image/*" multiple="multiple" class="form-control">




            <label>Název produktu</label>
            <input id="name" type="text" name="name" value={{ $product->name }}>
            <label>Cena produktu</label>
            <input id="price" type="number" name="price" value={{ $product->price }}>
            <label>Popisek</label>
            <textarea id="description" rows="3" name="description" class="ckeditor">{{ $product->description }}</textarea>
            <label>Váha</label>
            <input id="weight" type="number" name="weight" value={{ $product->weight }}>
            <label>Množství na skladě</label>
            <input id="sku" type="number" name="sku" value={{ $product->sku }}>
            <button type="submit" value="Submit" class="btn btn-primary">Odelsat</button>
    </div>
    <script src="//cdn.ckeditor.com/4.14.1/standard/ckeditor.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('.ckeditor').ckeditor();
        });
    </script>
</x-app-layout>