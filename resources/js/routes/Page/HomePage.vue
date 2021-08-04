<template>
    <div class="container m-auto ">
        <h1 class="text-7xl font-serif w-3/4 leading-normal">Bedýnky z rodinný farmy</h1>
<p class="text-2xl leading-relaxed w-3/4 pt-8 text-gray-500">Na kraji Vysočiny máme vlastní pastviny, kde chováme převážně český strakatý skot Anguse, Šarolé a Lumousiny. Maso necháváme hezky uzrát, takže je perfektně připravené na finální úpravu</p>
        <Products width="w-full" />
        <h3
            class="text-lg font-bold mb-2 leading-tight uppercase text-gray-600 mt-32 px-4 lg:px-0 "
        >
            Náš přístup
        </h3>
        <ul class="text-xl text-gray-700 list-none px-4 lg:px-0 grid grid-cols-1 lg:gap-3 leading-relaxed w-1/2">
            <li class="py-1">
                Chováme šlechtěná hovězí plemena na našich vlastních pastvách.
            </li>
            <li class="py-1">
                Přirozený chov dobytka je naší fylozofií a v souladu s
                ekologickým zemědělství.
            </li>
            <li class="py-1">
                Dbáme na vyzrání, takže při dinální přípravě bude maso krásně
                křehké.
            </li>
            <li class="py-1">Garantujeme původ masa s rodokmenem.</li>
        </ul>
    </div>
</template>
<script>
import Products from "../Products/Index.vue";
export default {
    methods: {},
    computed: {},
    components: {
        Products
    }
};
</script>
