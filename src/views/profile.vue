<template>
    <!-- breadcrumb -->
    <div class="container py-4 flex items-center gap-3">
        <a class="text-primary text-base">
            <RouterLink to="/"><i class="fa-solid fa-house"></i></RouterLink>
        </a>
        <span class="text-sm text-gray-400">
            <i class="fa-solid fa-chevron-right"></i>
        </span>
        <p class="text-gray-600 font-medium">Profile</p>
    </div>
    <!-- ./breadcrumb -->

    <!-- wrapper -->
    <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">

        <!-- sidebar -->
        <div class="col-span-3">
            <div class="px-4 py-3 shadow flex items-center gap-4">
                <div class="flex-shrink-0">
                    <img src="../../public/image/user-profile.jpg" alt="profile"
                        class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover">
                </div>
                <div class="flex-grow">
                    <p class="text-gray-600">Hello,</p>
                    <h4 class="text-gray-800 font-medium">{{ account.name }}</h4>
                </div>
            </div>

            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div class="space-y-1 pl-8">
                    <a class="relative text-primary block font-medium capitalize transition">
                        <RouterLink to="/account">Profile</RouterLink>
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-address-card"></i>
                        </span>
                    </a>
                    <a class="relative hover:text-primary block capitalize transition">
                       <RouterLink to="/account/updatepw">Change Password</RouterLink>
                    </a>
                </div>

                <div class="space-y-1 pl-8 pt-4">
                    <a href="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-solid fa-box-archive"></i>
                        </span>
                        <RouterLink to="/account/myorder">My Order</RouterLink>
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
            <div class="col-span-9 shadow rounded px-6 pt-5 pb-7">
                <h4 class="text-lg font-medium capitalize mb-4">
                    Profile information
                </h4>
                <form @submit.prevent="editAccount">
                    <div class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="first">Name</label>
                                <input required disabled v-model="account.name" type="text" name="first" id="first" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                            </div>
                            <div>
                                <label for="birthday">Birthday</label>
                                <input required v-model="account.birth_date" type="date" name="birthday" id="birthday" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="email">Email</label>
                                <input required disabled v-model="account.email" type="email" name="email" id="email" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                            </div>
                            <div>
                                <label for="phone">Phone number</label>
                                <input required v-model="account.phone_number" type="text" name="phone" id="phone" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                            </div>
                        </div>
                        <div>
                            <label for="address">Address</label>
                            <input required v-model="account.address" type="text" name="address" id="address" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                        </div>
                    </div>

                    <div class="mt-4">
                        <button type="submit"
                            class="py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">save
                            changes</button>
                    </div>
                </form>
            </div>
        
        <!-- ./info -->

    </div>
    <!-- ./wrapper -->
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { decodeToken } from '../utils/auth'
import { getAccount, updateAccount } from '../api/account'

const account = reactive({
    'name': decodeToken().name,
    'email': decodeToken().email,
    'birth_date': '',
    'phone_number': '',
    'address': '',
})

onMounted(async () => {
    await setAccount()
})

const setAccount = async () => {
    const response = await getAccount(decodeToken().id)

    if(response.data.status) {
        account.phone_number = response.data.profile.phone_number
        account.birth_date = response.data.profile.birth_date
        account.address = response.data.profile.address
    }
}

const editAccount = async () => {
    const formData = {
        'name': account.name,
        'birth_date': account.birth_date,
        'phone_number': account.phone_number,
        'address': account.address,
    }
    
    const response = await updateAccount(decodeToken().id, formData)

    if(response.data.status) {
        console.log('success')
    }else {
        console.log(response.data.message)
    }
}

</script>