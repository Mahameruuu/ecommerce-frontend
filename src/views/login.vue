<template> 
    <!-- login -->
    <div class="contain py-16 sm:py-8 md:py-12 lg:py-16">
        <div class="max-w-lg mx-auto shadow px-4 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8 rounded overflow-hidden">
            <h2 class="text-2xl sm:text-xl md:text-2xl uppercase font-medium mb-2 sm:mb-1 md:mb-2">Login</h2>
            <p class="text-gray-600 mb-6 text-sm">
                Welcome Back Customer
            </p>
            <form @submit.prevent="loginClick">
                <div class="space-y-2">
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block">Email address</label>
                        <input type="email" name="email" id="email" v-model="email" required
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com">
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Password</label>
                        <input type="password" name="password" id="password" v-model="password" required
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******">
                    </div>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center">
                        <input type="checkbox" name="remember" id="remember"
                            class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                        <label for="remember" class="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                    </div>
                    <a href="#" class=" hidden sm:block text-primary">Forgot password</a>
                </div>
                <div class="mt-4">
                    <input 
                        type="submit"
                        :value="isLoading ? 'Loading...' : 'Login'"
                        :disabled="isLoading"
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"   
                    >
                    <!-- <button type="submit"
                        disabled
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Login</button> -->
                </div>
            </form>

            <!-- login with -->
            <div class="mt-6 flex justify-center relative">
                <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div>
            <!-- ./login with -->

            <p class="mt-4 text-center text-gray-600">Don't have account? 
                <RouterLink to="/register" class="text-primary">Register Now</RouterLink>
            </p>
        </div>
    </div>
    <!-- ./login -->
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { login } from '../api/auth'
import { setToken, isLoggedIn } from '../utils/auth'

const router = useRouter()

const email = ref(null)
const password = ref(null)

const isLoading = ref(false)

const loginClick = async () => {
    isLoading.value = true
    try {
        const response = await login({
            'email': email.value,
            'password': password.value,
        })

        if(response.data.status) {
            setToken(response.data.token)
            if(isLoggedIn()) {
                router.push('/')
            }
        }
    } catch (error) {
        console.log(error.response.data.message)
    }
    isLoading.value = false
}
</script>
