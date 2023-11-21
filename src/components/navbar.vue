<template>
    <header class="py-4 shadow-sm bg-white border border-red-600">
        <div class="container flex items-center justify-between">
            <a href="/public/index.html">
                <img src="../../public/image/logo.png" alt="Logo" class="w-32">
            </a>

            <div class="w-full max-w-xl relative flex">
                <input type="text" name="search" id="search"
                    class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                    placeholder="search">
                    <button
                    class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
            </div>
            
            <div class="flex items-center space-x-4">
                <a href="#" class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div class="text-xs leading-3">Cart</div>
                    <div
                        class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                        2</div>
                </a>
                <a class="text-center text-gray-700 hover:text-primary transition relative">
                    <div class="text-2xl">
                        <i class="fa-regular fa-user"></i>
                    </div>
                    <RouterLink to="/account" class="text-xs leading-3">account</RouterLink>
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
                <button @click="toggleSidebar" class="text-white">
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
        <div class="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
            <span class="text-white">
                <i class="fa-solid fa-bars"></i>
            </span>
            <span class="capitalize ml-2 text-white hidden">All Categories</span>
        </div>    

        <!-- navbar -->
        <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
            <div class="flex items-center space-x-6 capitalize">
                <RouterLink to="/" class="text-gray-200 hover:text-white transition">Home</RouterLink>
                <RouterLink to="/shop" class="text-gray-200 hover:text-white transition">Shop</RouterLink>
                <RouterLink to="/about" class="text-gray-200 hover:text-white transition">About Us</RouterLink>
                <RouterLink to="/contact" class="text-gray-200 hover:text-white transition">Contact Us</RouterLink>
            </div>
            <RouterLink to="/login" class="text-gray-200 hover:text-white transition">Login</RouterLink>
        </div>
        </div>
    </nav>
    <!-- ./navbar -->
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const showSidebar = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>