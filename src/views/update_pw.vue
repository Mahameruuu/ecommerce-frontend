<template>
    <!-- breadcrumb -->
    <div class="container py-4 flex items-center gap-3">
        <a class="text-primary text-base">
            <RouterLink to="/"><i class="fa-solid fa-house"></i></RouterLink>
        </a>
        <span class="text-sm text-gray-400">
            <i class="fa-solid fa-chevron-right"></i>
        </span>
        <p class="text-gray-600 font-medium">Change Password</p>
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
                    <h4 class="text-gray-800 font-medium">{{ name }}</h4>
                </div>
            </div>

            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div class="space-y-1 pl-8">
                    <a class="relative hover:text-primary block font-medium capitalize transition">
                        <RouterLink to="/account">Profile</RouterLink>
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-address-card"></i>
                        </span>
                    </a>
                    <a class="relative text-primary block capitalize transition">
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
                Change Password
            </h4>
            <form @submit.prevent="changePassword">
                <div class="space-y-4">
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Old Password</label>
                        <input required v-model="formPassword.old_password" type="password" name="password" id="password"
                        class="input-box block w-full border border-gray-300 mb-2 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="*******">
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">New Password</label>
                        <input required v-model="formPassword.password" type="password" name="password" id="password"
                        class="input-box block w-full border border-gray-300 mb-2 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="*******">
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Confirm Password</label>
                        <input required v-model="formPassword.confirm_password" type="password" name="password" id="password"
                        class="input-box block w-full border border-gray-300 mb-2 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                        placeholder="*******">
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
import  { reactive, ref } from 'vue';
import { decodeToken } from '../utils/auth';
import { updatePassword } from '../api/account';
 
const name = ref(decodeToken().name)
const formPassword = reactive({
    'old_password': '',
    'password': '',
    'confirm_password': '',
})

const changePassword = async () => {
    const response = await updatePassword(decodeToken().id, formPassword)

    if(response.data.status) {
        console.log('succes')
    } else {
        console.log(response.data.message)
    }
}
</script>
