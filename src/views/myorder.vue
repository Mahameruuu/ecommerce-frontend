<template>
    <!-- breadcrumb -->
    <div class="container py-4 flex items-center gap-3">
        <a class="text-primary text-base">
            <RouterLink to="/"><i class="fa-solid fa-house"></i></RouterLink>
        </a>
        <span class="text-sm text-gray-400">
            <i class="fa-solid fa-chevron-right"></i>
        </span>
        <p class="text-gray-600 font-medium">Account</p>
    </div>
    <!-- ./breadcrumb -->

    <!-- account wrapper -->
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <!-- sidebar -->
        <div class="col-span-3">
            <div class="px-4 py-3 shadow flex items-center gap-4">
                <div class="flex-shrink-0">
                    <img src="../../public/image/diri.jpg" alt="profile"
                        class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover">
                </div>
                <div class="flex-grow">
                    <p class="text-gray-600">Hello,</p>
                    <h4 class="text-gray-800 font-medium">Mahameru</h4>
                </div>
            </div>

            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div class="space-y-1 pl-8">
                    <a href="#" class="relative text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-address-card"></i>
                        </span>
                        <RouterLink to="/account" class="relative hover:text-primary block capitalize transition">Account</RouterLink>
                    </a>
                    <RouterLink to="/profile" class="relative hover:text-primary block capitalize transition">Profile</RouterLink>
                    <a class="relative hover:text-primary block capitalize transition">
                        <RouterLink to="/updatepw">Change Password</RouterLink>
                    </a>
                </div>

                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-solid fa-box-archive"></i>
                        </span>
                        <RouterLink to="/myorder">My Order</RouterLink>
                    </a>
                </div>

                <div class="space-y-1 pl-8 pt-4">
                    <a href="" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </span>
                        <RouterLink to="/logout">Logout</RouterLink>
                    </a>
                </div>

            </div>
        </div>
        <!-- ./sidebar -->

        <!-- info -->
        <div class="col-span-9 grid gap-4">
            <section class="" aria-role="tablist">
                <a class="text-primary underline" title="Semua" aria-role="tab" aria-selected="true" aria-controls="olp_panel_id-0.9573767430992093" id="olp_tab_id-0.9573767430992093" href="#">
                    <span class="_20hgQK">Semua</span>
                </a>
                <a class="px-20" title="Belum Bayar" aria-role="tab" aria-selected="false" aria-controls="olp_panel_id-0.4605949389474002" id="olp_tab_id-0.4605949389474002" href="#">
                    <span class="_20hgQK">Belum Bayar</span>
                </a>
                <a class="px-0" title="Belum Bayar" aria-role="tab" aria-selected="false" aria-controls="olp_panel_id-0.4605949389474002" id="olp_tab_id-0.4605949389474002" href="#">
                    <span class="_20hgQK">DiBatalkan</span>
                </a>
                <a class="px-16" title="Belum Bayar" aria-role="tab" aria-selected="false" aria-controls="olp_panel_id-0.4605949389474002" id="olp_tab_id-0.4605949389474002" href="#">
                    <span class="_20hgQK">Selesai</span>
                </a>
            </section>
            <div class="shadow rounded bg-white px-8 py-10 pt-6 pb-8">
                <div class="flex items-center justify-between mb-4">    
                    <div class="w-full max-w-xl relative flex">
                        <input type="text" name="search" id="search"
                        class="w-full border border-l-stone-600 pl-12 py-3 rounded focus:outline-none"
                        placeholder="search">
                    </div>
                </div>
                <div v-if="!filteredOrder()" class="my-40">
                    <div class="flex justify-center my-5">
                        <img src="../../public/image/noted.png">
                    </div>
                    <div class="flex justify-center text-gray-500">
                        <p>Belum ada pesanan</p>
                    </div>
                </div>
                <div v-else>
                    <table class="w-[70%]">
                        <tr class="my-1">
                            <td>Tanggal</td>
                            <td>Total</td>
                            <td>Status</td>
                        </tr>
                        <tr v-for="order in filteredOrder()" :key="order.id" class="my-5">
                            <td>{{ formatDate(order.date) }}</td>
                            <td>{{ order.total.total }}</td>
                            <td>{{ order.status }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <!-- ./info -->

    </div>
    <!-- ./account wrapper -->
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { getOrder } from '../api/order';
import { decodeToken } from '../utils/auth';

const tabs = ref('all')
const orders = ref([])

onMounted(async () => {
    await setOrders()
})

const setOrders = async () => {
    const response = await getOrder(decodeToken().id)

    if(response.data.status) {
        orders.value = response.data.orders
    }
    else {
        console.log(response.data.message)
    }
}

const formatDate = (datetime) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    const date = new Date(datetime)
    return date.toLocaleDateString('id-ID', options)
}

const tabClick = (tab) => {
    return tabs.value = tab
}

const filteredOrder = () => {
    if(tabs.value !== 'all') {
        return orders.value.filter(order => order.status === tabs.value)
    }
    return orders.value
}
</script>