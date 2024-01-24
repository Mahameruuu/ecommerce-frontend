<template>
    <!-- shop wrapper -->
    <div class="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <!-- sidebar -->
        <!-- drawer init and toggle -->
        <div class="text-center md:hidden" >
            <button
                class="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
                type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example"
                aria-controls="drawer-example">
                <ion-icon name="grid-outline"></ion-icon>
            </button>
        </div>


<!-- drawer component -->
    <!-- ./sidebar -->
    <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
        <div class="divide-y divide-gray-200 space-y-5">
            <div>
                <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                <div class="space-y-2">
                <div v-for="category in categories" :key="category.id" class="flex items-center">
                    <input
                    type="checkbox"
                    :id="`cat-${category.id}`"
                    v-model="selectedCategories"
                    :value="category.name"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                    />
                    <label :for="`cat-${category.id}`" class="text-gray-600 ml-3 cursor-pointer">{{ category.name }}</label>
                    <div class="ml-auto text-gray-600 text-sm">({{ category.item_count }})</div>
                </div>
                </div>
            </div>
        </div>
    </div>

        <!-- products -->
        <div class="col-span-3">
            <div class="grid md:grid-cols-3 grid-cols-2 gap-6">
                <div v-for="product in filteredProducts" :key="product.id" class="bg-white shadow rounded overflow-hidden group">
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
                            <p class="text-xl text-primary font-semibold">{{product.Price}}</p>
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
                    <button 
                        @click="addItem(product)"
                        class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                    >Add Cart</button>
                </div>
            </div>
        </div>

        <!-- ./products -->
    </div>
    <!-- ./shop wrapper -->
</template>

<script setup>
import {ref, onMounted, watch, watchEffect, computed} from 'vue'
import {getProducts} from '../api/product'
import {getCategories} from '../api/category'
import { insertItem } from '../api/cart'
import { decodeToken, isLoggedIn } from '../utils/auth'
import router from '../router'
import { useRoute } from 'vue-router'

const url = 'https://imt.mma.my.id/storage/products/'
const products = ref([])
const categories = ref([])
const selectedCategories = ref([])
const searchQuery = ref('')
const route = useRoute()

onMounted(async () =>{
    await setProducts()
    await setCategory()
})

const setSearchQuery = async () => {
  // Set searchQuery based on the query parameter
  const searchParam = route.query.search;
  searchQuery.value = searchParam || '';
}

const setCategory = async () => {
    const response = await getCategories()
    if(response.data.status){
        categories.value = response.data.categories
    }else{

    }
}
        console.log(selectedCategories)

const setProducts = async () => {
    const response = await getProducts()
    if(response.data.status){
        products.value = response.data.products
    }else{
        
    }
}

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const categoryFilter = selectedCategories.value.length === 0 || selectedCategories.value.includes(product.category)
    const searchFilter = searchQuery.value === '' || product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return categoryFilter && searchFilter
  })
})

const addItem = async (product) => {
    if(!isLoggedIn()) {
        router.push('/login')
    }

    const data = {
        user_id: decodeToken().id,
        product_id: product.id,
        quantity: 1,
        sub_total: product.price
    }

    const response = await insertItem(data)
    console.log(response.data.message)
}

watchEffect(() => {
  // Watch for changes in route.query and update selectedCategories and searchQuery accordingly
  const categoryQuery = route.query.category;
  selectedCategories.value = categoryQuery ? categoryQuery.split('+') : [];

  // Update searchQuery when search parameter changes
  setSearchQuery();
});

watch(selectedCategories, () => {
  const categoryQuery = selectedCategories.value.join('+')
  router.push({ query: { category: categoryQuery } })
});
</script>