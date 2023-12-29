<template>
    <header class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-between">
            <RouterLink to="/">
                <img src="public/image/logo.png" alt="Logo" class="w-32">
            </RouterLink>
            
            <div>
                <div class="w-full max-w-xl relative flex">
                    <input v-model="searchTerm" type="text" id="myInput"
                    class="w-full border border-primary border-r-0 pl-5 py-3 pr-28 rounded-l-md focus:outline-none"
                    placeholder="Search" title="Type in a name">

                    <button
                    @click="search(searchTerm)"
                    class="bg-primary border border-primary text-white px-7 rounded-r-md hover:bg-transparent hover:text-primary transition">
                    Search
                    </button>
                </div>
                <div class="w-full max-w-md absolute">    
                    <ul id="myUL">
                        <li v-for="product in filteredProducts" :key="product.id">
                            <div @click="search(product.name)" class="cursor-pointer block border border-gray-300 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md">
                                {{ product.name }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex items-center space-x-4">
                <!-- Cart -->
                <a href="/cart" class="text-center text-gray-700 hover:text-primary transition relative" data-popover-target="popover-default">
                    <div class="text-2xl">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <span class="text-xs leading-3">Cart</span>
                    <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                        <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                            <h3 class="font-semibold text-gray-900 dark:text-white">Cart products</h3>
                        </div>
                        <div class="px-3 py-2">
                            <p>And here's some amazing content. It's very engaging. Right?</p>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                <div class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">2</div>
                </a>
                <!-- Account -->
                <a href="/account" class="text-center text-gray-700 hover:text-primary transition relative" data-popover-target="popover-user-profile">
                <div class="text-2xl">
                    <i class="fa-regular fa-user"></i>
                </div>
                <span class="text-xs leading-3">Account</span>
                <div data-popover id="popover-user-profile" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity
                duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                    <div class="p-3">
                        <div class="flex items-center justify-between mb-2">
                            <a href="/account">
                                <img class="w-10 h-10 rounded-full" src="../../public/image/user-profile.jpg" alt="Jese Leos">
                            </a>
                            <div>
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{{ name }}</button>
                            </div>
                        </div>
                    </div>
                </div>
                </a>        
            </div>
        </div>
    </header>
    <!-- ./header -->

    <!-- navbar -->
    <nav class="bg-gray-800 px-3">
        <div class="py-4 px-8">
            <!-- All Categories button -->
            <div class="hidden md:flex items-center justify-between text-white">
                <div class="flex">
                    <RouterLink to="/" class="text-gray-200 hover:text-white transition md:px-10">Home</RouterLink>
                    <RouterLink to="/shop" class="text-gray-200 hover:text-white transition md:px-10">Shop</RouterLink>
                    <RouterLink to="/about" class="text-gray-200 hover:text-white transition md:px-10">About Us</RouterLink>
                    <RouterLink to="/contact" class="text-gray-200 hover:text-white transition md:px-10">Contact Us</RouterLink>
                </div>
                    <RouterLink to="/login" class="text-gray-200 hover:text-white transition md:px-3">Login</RouterLink>
            </div>
        </div>
        <div class="flex">
             <!-- Sidebar button for mobile -->
        <button @click="toggleSidebar" class="px-2 py-2 text-white md:hidden">
            <i class="fa-solid fa-bars"></i>
        </button>
        <div v-if="showSidebar" class="fixed top-0 left-0 h-screen w-64 bg-gray-800 z-50">
            <div class="py-4 px-8">
                <!-- All Categories button -->
                <button @click="toggleSidebar" class="px-4 py-2 text-white md:hidden">
                    <i class="fa-solid fa-times"></i>
                </button>
                <div class="text-white mt-4">
                    <h2 class="text-xl font-bold">All Categories</h2>
                    <br>
                    <RouterLink to="/" class="text-gray-200 hover:text-white transition">Home</RouterLink>
                </div>
                <div class="text-white mt-4">    
                    <RouterLink to="/shop" class="text-gray-200 hover:text-white transition">Shop</RouterLink>
                </div>
                <div class="text-white mt-4">
                    <RouterLink to="/about" class="text-gray-200 hover:text-white transition">About Us</RouterLink>
                </div>
                <div class="text-white mt-4">    
                    <RouterLink to="/contact" class="text-gray-200 hover:text-white transition">Contact Us</RouterLink>
                </div>
            </div>
        </div>        
    </div>
</nav>
    <!-- ./navbar -->

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { getProducts } from '../api/product';
import { useRouter } from 'vue-router';
import { decodeToken, isLoggedIn } from '../utils/auth';

const router = useRouter()
const searchTerm = ref('')
const products = ref([])
const showSidebar = ref(false)
const name = ref('')

onMounted(async () =>{
    await setProducts()
    if(isLoggedIn()) {
        name.value = decodeToken().name
    }
})

const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value;
};

const setProducts = async () => {
    const response = await getProducts()
    if(response.data.status){
        products.value = response.data.products
    }else{
        
    }
}

const filteredProducts = computed(() => {
    if(searchTerm.value !== '') {
        return products.value.filter(
            product => product.name.toUpperCase().includes(searchTerm.value.toUpperCase()))
    }
})

const search = (name) => {
    router.push({path: '/shop', query:{'search': name.toLowerCase()}})
    searchTerm.value = ''
}

</script>

<style>
    /* Misalnya, untuk layar dengan lebar kurang dari 768px */
@media (max-width: 767px) {
    .container {
        flex-direction: column; /* Mengubah arah flex menjadi vertikal */
        align-items: center; /* Menengahkan konten vertikal */
    }

    /* Penyesuaian ukuran input dan tombol pencarian */
    .relative {
        width: 100%; /* Lebar penuh */
        max-width: none; /* Tidak ada batasan lebar maksimum */
    }

    /* Penyesuaian elemen Cart dan Account */
    .space-x-4 {
        margin-top: 10px; /* Menambahkan sedikit jarak dari elemen di atasnya */
    }
}
</style>