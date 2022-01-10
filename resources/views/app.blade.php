<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Farma Častrov </title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap');
    </style>

    <link type="text/css" rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body class="antialiased">
    <div class="mx-auto">
        <div id="app">

        </div>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>