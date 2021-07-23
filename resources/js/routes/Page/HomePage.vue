<template>
    <div class="w-full m-auto ">
        <img class="w-screen h-half bg-no-repeat bg-cover bg-hero" />

        <div class="container grid grid-flow-row grid-cols-main m-auto">
            <div class="col-start-3 col-span-8 justify-center">
                <h1 class="text-7xl mt-32 mb-16 leading-tight font-serif">
                    Ochutnejte hovězí maso z Vysočiny
                </h1>
                <p class="text-2xl text-gray-600 leading-relaxed max-w-text-50">
                    Na kraji Vysočiny máme vlastní pastviny, kde chováme
                    převážně český strakatý skot. Maso necháváme hezky uzrát,
                    takže je perfektně připravené na finální úpravu.
                </p>
                
                <p
                    class="text-2xl text-gray-600 leading-relaxed mt-4 max-w-text-50"
                >
                     Objednáte si jednoduše skrze náš formulář nebo nám můžete
                     napsat na email, zavolat a kontaktovat skrze facebook. 
                </p>
            </div>
            <div class="col-start-3 col-span-8 justify-center ">
            <h2 class="text-4xl mt-32 leading-tight font-serif">Naše produkty</h2>
                <Products width="w-1/2" />
                <h3
                    class="text-lg font-bold mb-2 leading-tight uppercase text-gray-600 mt-32"
                >
                    Náš přístup
                </h3>
                <ul
                    class="text-xl text-gray-700 list-none flex gap-3 leading-relaxed"
                >
                    <li class="py-1">
                        Chováme šlechtěná hovězí plemena na našich vlastních
                        pastvách.
                    </li>
                    <li class="py-1">
                        Přirozený chov dobytka je naší fylozofií a v souladu s
                        ekologickým zemědělství.
                    </li>
                    <li class="py-1">
                        Dbáme na vyzrání, takže při dinální přípravě bude maso
                        krásně křehké.
                    </li>
                    <li class="py-1">Garantujeme původ masa s rodokmenem.</li>
                </ul>
            </div>
        </div>
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
