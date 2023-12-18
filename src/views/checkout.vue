<template>
        <!-- breadcrumb -->
        <div class="container py-4 flex items-center gap-3">
        <RouterLink to="/" class="text-primary text-base"><i class="fa-solid fa-house"></i></RouterLink>
        <span class="text-sm text-gray-400">
            <i class="fa-solid fa-chevron-right"></i>
        </span>
        <p class="text-gray-600 font-medium">Checkout</p>
    </div>
    <!-- ./breadcrumb -->

    <!-- wrapper -->
    <form @submit.prevent="checkoutClick">
        <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
            <div class="col-span-7 border border-gray-200 p-4 rounded">
                <h3 class="text-lg font-medium capitalize mb-4">Checkout</h3>
                <div class="space-y-4">
                    <div>
                        <label for="first-name" class="text-gray-600">Nama Lengkap <span class="text-primary">*</span></label>
                        <input v-model="form.name" required type="text" name="first-name" id="first-name" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                    </div>
                    <div>
                        <label for="phone" class="text-gray-600">Phone number <span class="text-primary">*</span></label>
                        <input v-model="form.phone_number" required type="text" name="phone" id="phone" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                    </div>
                    <div>
                        <label for="address" class="text-gray-600">Street address <span class="text-primary">*</span></label>
                        <input v-model="form.address" required type="text" name="address" id="address" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                    </div>
                </div>
            </div>
            <div class="col-span-5 border border-gray-200 p-4 rounded">
                <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">Order Summary</h4>
                <div v-for="item in items" :key="item.id" class="space-y-2">
                    <div class="flex justify-between pt-1">
                        <div>
                            <h5 class="text-gray-800 font-medium">{{ item.name }}</h5>
                        </div>
                        <p class="text-gray-600">x{{ item.quantity }}</p>
                        <p class="text-gray-800 font-medium">Rp {{ item.price }}</p>
                    </div>
                </div>
                <div class="flex justify-between border-t border-gray-200 mt-1 text-gray-800 font-medium pt-3 uppercas">
                    <p>Subtotal</p>
                    <p>Rp {{ subTotal }}</p>
                </div>
                <div class="flex justify-between text-gray-800 font-medium pt-2 uppercas">
                    <p>PPN 10%</p>
                    <p>Rp {{ pajak }}</p>
                </div>
                <div class="flex justify-between text-gray-800 font-medium pt-2 uppercas">
                    <p>Ongkos Kirim</p>
                    <p>Rp {{ kirim }}</p>
                </div>
                <div class="flex justify-between border-t border-gray-200 mt-1 text-gray-800 font-medium pt-3 uppercas">
                    <p class="font-semibold">Total</p>
                    <p>Rp {{ total }}</p>
                </div>
                <div class="flex items-center mb-4 mt-2">
                    <input type="checkbox" name="agreement" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3">
                    <label for="agreement" class="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <a href="#" class="text-primary">Terms & Conditions</a></label>
                </div>
                    <input type="submit" value="Pilih Pembayaran"
                    class="cursor-pointer block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover-bg-transparent hover-text-primary transition font-medium">
                <!-- <a href="#" class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover-bg-transparent hover-text-primary transition font-medium">Place Order</a> -->
            </div>
        </div>
    </form>
    <!-- ./wrapper -->
</template>

<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { getItems } from '../api/cart'
import { decodeToken } from '../utils/auth'
import { checkout } from '../api/order'

const items = ref([])
const form = ref({
    'name': decodeToken().name,
    'phone_number': '',
    'address': ''
})

onMounted(async () => {
    await setItems()
})

const checkoutClick = async () => {
    const data = {
        'user_id': decodeToken().id,
        'date': getCurrentDateTime(),
        'total': {
            'sub_total': subTotal.value,
            'ppn': pajak.value,
            'shipping_cost': kirim.value,
            'total': total.value,
        },
        'status': 'unpaid',
        'items': items.value,
    }

    const response = await checkout(data)

    if(response.data.status) {
        console.log('Berhasil!,. lanjut midtrans')
    }
    else {
        console.log(response.data.message)
    }
}

const subTotal = computed(() => {
    return items.value.reduce((subTotal, item) => subTotal + item.sub_total, 0)
})

const pajak = computed(() => {
    return subTotal.value * 0.1
})

const kirim = computed(() => {
    return 10000
})

const total = computed(() => {
    return subTotal.value + pajak.value + kirim.value
})

const getCurrentDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

const setItems = async () => {
    const response = await getItems(decodeToken().id)

    if(response.data.status) {
        items.value = response.data.items
    }
}
</script>