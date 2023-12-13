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
                            <div @click="search(product.name)" class="block border border-gray-300 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md">
                                {{ product.name }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex items-center space-x-4">
                <a href="#" class="text- center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <RouterLink to="/cart" class="text-xs leading-3">Cart</RouterLink>
                    <div
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">2
                    </div>
                </a>
                <a class="text-center text-gray-700 hover:text-primary transition relative">
                <div class="text-2xl">
                    <i class="fa-regular fa-user"></i>
                </div>
                <RouterLink to="/account" class="text-xs leading-3">Account</RouterLink>
                </a>        
            </div>
        </div>
    </header>
    <!-- ./header -->

    <!-- navbar -->
    <nav class="bg-gray-800">
        <div class="container flex">
             <!-- Sidebar button for mobile -->
        <button @click="toggleSidebar" class="px-4 py-2 text-white md:hidden">
            <i class="fa-solid fa-bars"></i>
        </button>
        
         <!-- Sidebar for mobile -->
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
                    <!-- Dropdown content here -->
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

const router = useRouter()

const searchTerm = ref('')
const products = ref([])
const showSidebar = ref(false)

onMounted(async () =>{
    await setProducts()
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