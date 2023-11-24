<template>
    <div class="container py-26">
        <h1 class="my-5 flex justify-center text-3xl font-medium text-gray-800 uppercase mb-6 bg-center">Keranjang Belanja</h1>
    </div>
    <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
    
        <div class="col-span-full border border-gray-200 p-4 rounded">
            <div class="my-1">
                    <div class="flex justify-center my-5">
                        <img src="../../public/image/noted.png">
                    </div>
                    <div class="flex justify-center text-gray-500">
                        <p>Keranjang Belanja Anda Kosong</p>
                    </div>
                    <div class="flex justify-center py-6">
                            <RouterLink to="/checkout" class="text-white bg-red-500 p-2 rounded">Belanja Sekarang</RouterLink>
                    </div>
                </div>
        </div>
    </div>
    <div class="flex items-center justify-between flex-grow md:pl-32">
        <div class="flex items-center space-x-6 capitalize">
           <h2 class="text-gray-500">KAMU MUNGKIN JUGA SUKA</h2>
        </div>
        <div class="px-36 text-primary">
            <RouterLink to="/recommend">Lihat Semua > </RouterLink>
        </div>
    </div>

    <!-- STATIS -->
    
    <!-- <div class="col-span-3">
            <div class="grid md:grid-cols-5 grid-cols-2 gap-20 px-32 py-5">
                <div class="bg-white shadow rounded overflow-hidden group">
                    <div class="relative">
                        <img src="../../public/image/products/nasgor_jancuk.jpg" class="w-full">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>    
                        </div>
                    </div>
                    <div class="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Nasi Goreng Jancuk</h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-primary font-semibold">Rp 30.000</p>
                        </div>
                        <div class="flex items-center">
                            <div class="flex gap-1 text-sm text-yellow-400">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    
        <!-- DINAMIS -->
        
        <div class="col-span-3">
            <div class="grid md:grid-cols-5 grid-cols-2 gap-20 px-32 py-5">
                <div v-for="product in products" :key="product.id" class="bg-white shadow rounded overflow-hidden group">
                    <div class="relative">
                        <img :src="url+product.image" :alt="product.name" class="w-full">
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#"
                                class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                title="view product">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>    
                        </div>
                    </div>
                    <div class="pt-4 pb-3 px-4">
                        <a href="#">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{{product.name}}</h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-primary font-semibold">Rp {{product.price}}</p>
                        </div>
                        <div class="flex items-center">
                            <div class="flex gap-1 text-sm text-yellow-400">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {getProducts} from '../api/product';

const url = 'http://127.0.0.1:8000/storage/products/'
const products = ref([]) 

onMounted(async () =>{
    await setProducts()
})

const setProducts = async () =>{
    const response = await getProducts()
    if(response.data.status){
        products.value = response.data.products
    }else{
        
    }
}
</script>