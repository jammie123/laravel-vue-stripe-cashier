<template>
    <div class="w-full lg:w-1/2 flex gap-2 flex-col " @click="toggleModal()">
        <div class="relative">
            <img
                alt="ecommerce"
                class="w-full h-auto object-cover rounded-xl"
                :src="mainImage"
            />
            <div
                class="bg-gray-800 absolute bottom-4 right-4 text-white p-4 rounded-xl text-xl flex justify-center items-center "
                v-text="`+ další ${getImages.length} fotky`"
            ></div>
        </div>
        <ul class="w-full gap-2 lg:flex flex-row flex-shrink hidden">
            <img
                v-for="item in subImages"
                :key="item"
                alt="ecommerce"
                class="w-full h-40 object-cover rounded-xl"
                :src="item"
            />
        </ul>

        <!--Modal-->

        <div
            v-if="showModal"
            class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
        >
            <transition name="fade" appear>
                <div
                    @click="toggleModal()"
                    class="modal-overlay absolute w-full h-full bg-white opacity-95"
                ></div>
            </transition>
            <div
                class="modal-container fixed w-full h-full z-50 overflow-y-auto "
            >
                <div
                    @click="toggleModal()"
                    class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50"
                >
                    <svg
                        class="fill-current text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                    >
                        <path
                            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        ></path>
                    </svg>
                    (Esc)
                </div>

                <!-- Add margin if you want to see grey behind the modal-->
                <div
                    class="modal-content container mx-auto h-auto text-left py-20"
                >
                    <!--Title-->

                    <!--Body-->

                    <ul class="container mx-auto flex gap-2 flex-col ">
                        <li class="" v-for="item in getImages" :key="item">
                            <img
                                alt="ecommerce"
                                class="w-full  lg:px-0 lg:w-2/4 mx-auto h-auto max-h-screen object-cover"
                                :src="item"
                                @click="toggleModal()"
                            />
                        </li>
                    </ul>

                    <!--Footer-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    name: "gallery",
    data() {
        return {
            showModal: false
        };
    },
    props: ["images"],
    methods: {
        toggleModal() {
            if (this.showModal == false) {
                this.showModal = true;
                console.log(this.showModal);
            } else {
                console.log(this.showModal);
                this.showModal = false;
            }
        }
    },

    computed: {
        mainImage() {
            console.log(this.images[0]);
            return this.images[0];
        },
        getImages() {
            return this.images;
        },
        subImages() {
            console.log(this.images.slice(1));
            return this.images.slice(1, 3);
        }
    }
};
</script>
