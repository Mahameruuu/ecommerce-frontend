<template>
    <!-- register -->
    <div class="contain py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">Create an account</h2>
            <p class="text-gray-600 mb-6 text-sm">
                Register for new Costumer
            </p>
            <form @submit.prevent="registerClick">
                <div class="space-y-2">
                    <div>
                        <label for="name" class="text-gray-600 mb-2 block">Full Name</label>
                        <input type="text" name="name" id="name" v-model="data.name" required
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="fulan fulana">
                    </div>
                    <div>
                        <label for="email" class="text-gray-600 mb-2 block">Email address</label>
                        <input type="email" name="email" id="email" v-model="data.email" required
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com">
                    </div>
                    <div>
                        <label for="password" class="text-gray-600 mb-2 block">Password</label>
                        <input type="password" name="password" id="password" v-model="data.password" required
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******">
                    </div>
                    <div>
                        <label for="confirm" class="text-gray-600 mb-2 block">Confirm password</label>
                        <input type="password" name="confirm" id="confirm" v-model="data.confirmPassword" required
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******">
                    </div>
                    <div>
                        <label for="date" class="text-gray-600 mb-2 block">Birth Day</label>
                        <input type="date" name="date" id="date" v-model="data.birth_date" required
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400">
                    </div>
                    <div>
                        <label for="phone_number" class="text-gray-600 mb-2 block">Phone Number</label>
                        <input type="text" name="phone_number" id="phone_number" v-model="data.phone_number" required
                            class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="085">
                    </div>
                    <div>
                        <label for="address" class="text-gray-600 mb-2 block">Address</label>
                        <textarea name="address" id="address" v-model="data.address" class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Surabaya" cols="30" rows="10" required></textarea>
                    </div>
                </div>
                <div class="mt-6">
                    <div class="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            class="text-primary focus:ring-0 rounded-sm cursor-pointer">
                        <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                href="#" class="text-primary">terms & conditions</a></label>
                    </div>
                </div>
                <div class="mt-4">
                    <input type="submit" class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium" 
                    :value="isLoading ? 'loading...' : 'create account'"
                    :disabled="isLoading">
                </div>
            </form>

            <!-- register with -->
            <div class="mt-6 flex justify-center relative">
                <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">google</a>
            </div>
            <!-- ./register with -->

            <p class="mt-4 text-center text-gray-600">Already have account?
                <RouterLink to="/login" class="text-primary">Login Now</RouterLink>
            </p>
        </div>
    </div>
    <!-- ./register -->
</template>

<script setup>
import {ref} from 'vue';
import {register} from '../api/auth'
import {setToken, isLoggedIn} from '../utils/auth'
import {useRouter} from 'vue-router'

const router = useRouter()
const isLoading = ref(false)

const data = ref({
    'email': '', 
    'password': '',
    'confirmPassword': '',
    'name': '',
    'birth_date': '',
    'phone_number': '',
    'address': ''
})

const registerClick = async () =>{
    isLoading.value = true
    try{
        const response = await register(data.value)
        if(response.data.status){
            setToken(response.data.token)
            if(isLoggedIn()){
                router.push('/')
            }   
        }
    }catch(error){
        console.log(error.response.data.message)
    }
    isLoading.value = false
}

</script>
