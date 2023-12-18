<template>
    <div class="container py-26">
        <h1 class="my-5 flex justify-center text-3xl font-medium text-gray-800 uppercase mb-6 bg-center">Keranjang Belanja</h1>
    </div>

      <!-- Nasi Goreng -->
      <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
      <div class="col-span-8 border border-gray-200 p-4 shadow rounded">
          <div v-for="item in items" :key="item.id" class="relative">
              <div class="flex items-center py-4">
                <img :src="url+item.image" alt="absolute" class="w-36 h-28 shadow rounded">
                <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a href="#"
                        class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="view product">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>    
                </div>
                <div class="pl-14">
                    <h4 class="uppercase font-medium text-xm text-gray-800 hover:text-primary transition">{{ item.name }}</h4>
                </div>
                <div class="mr-4 flex items-center pl-14">
                    <div class="relative flex items-center">
                        <button @click="decreaseItem(item)" aria-label="Decrease" class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md mr-1">
                            <svg viewBox="0 0 10 10" class="w-4 h-4 text-gray-600">
                                <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                            </svg>
                        </button>
                        <input class="w-10 h-8 pl-2 text-center bg-gray-100 border border-gray-300 rounded-md mr-1" disabled type="text" role="spinbutton" aria-live="assertive" aria-valuenow="1" :value="item.quantity">
                        <button @click="increaseItem(item)" aria-label="Increase" class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md">
                            <svg viewBox="0 0 10 10" class="w-4 h-4 text-gray-600">
                              <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                          </svg>
                      </button>
                      <div class="flex items-baseline mb-1 space-x-2 pl-14">
                            <p class="text-xm text-primary font-semibold">Rp {{ item.price }}</p>
                        </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
        
      <!-- Summary -->
      <div class="col-span-4 border border-gray-200 p-4 rounded">
          <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">Order Summary</h4>
          <table class="space-y-2 w-[100%] mb-2">
            <tr v-for="item in items" :key="item.id">
                <td class="text-gray-800 font-medium">{{ item.name }}</td>
                <td align="right" class="text-gray-600">x{{ item.quantity }}</td>
                <td align="right" class="text-gray-800 font-medium">Rp {{ item.sub_total }}</td>
            </tr>
          </table>
          <div class="flex justify-between border-t border-gray-200 mt-1 text-gray-800 font-medium pt-3 uppercas">
              <p>Total</p>
              <p>Rp {{ total }}</p>
          </div>
          <div class="pt-5">
            <RouterLink v-if="total !== 0" to="/checkout" class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover-bg-transparent hover-text-primary transition font-medium">
                Checkout
            </RouterLink>
            <span v-else class="cursor-pointer block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover-bg-transparent hover-text-primary transition font-medium">
                Checkout
            </span>
            <!-- <a href="#" class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover-bg-transparent hover-text-primary transition font-medium">Check Out</a> -->
          </div>
      </div>
  </div>

    <div class="flex items-center justify-between flex-grow md:pl-32">
        <div class="flex items-center space-x-6 capitalize">
           <h2 class="text-gray-500">KAMU MUNGKIN JUGA SUKA</h2>
        </div>
        <div class="px-36 text-primary">
            <RouterLink to="/shop">Lihat Semua > </RouterLink>
        </div>
    </div>
    
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
import { ref, onMounted, computed } from 'vue'
import { getProducts } from '../api/product'
import { getItems, updateItem, deleteItem } from '../api/cart'
import { decodeToken } from '../utils/auth'

const url = 'http://127.0.0.1:8000/storage/products/'
const products = ref([]) 
const items = ref([])

onMounted(async () => {
    await setProducts()
    await setItems()
})

const total = computed(() => {
    return items.value.reduce((total, item) => total + item.sub_total, 0)
})

const setItems = async () => {
    const response = await getItems(decodeToken().id)

    if(response.data.status) {
        items.value = response.data.items
    }
}

const editItem = async (id, data) => {
    const response = await updateItem(id, data)
    console.log(response.data.message)
}

const removeItem = async (id) => {
    const response = await deleteItem(id)
    console.log(response.data.message)
}

const setProducts = async () => {
    const response = await getProducts()
    if(response.data.status){
        products.value = response.data.products
    }else{
        
    }
}

const increaseItem = (item) => {
    item.quantity++
    item.sub_total = item.price * item.quantity
    const data = {
        id: item.id,
        user_id: decodeToken().id,
        product_id: item.product_id,
        quantity: item.quantity,
        sub_total: item.sub_total
    }

    editItem(item.id, data)
}

const decreaseItem = (item) => {
    if (item.quantity > 1) {
        item.quantity--;
        item.sub_total = item.price * item.quantity;
        const data = {
            id: item.id,
            user_id: decodeToken().id,
            product_id: item.product_id,
            quantity: item.quantity,
            sub_total: item.sub_total
        }

        editItem(item.id, data)
    } else {
        const index = items.value.findIndex((i) => i.id === item.id);
        removeItem(item.id)
        if (index !== -1) {
            items.value.splice(index, 1);
        }
    }
}

</script>