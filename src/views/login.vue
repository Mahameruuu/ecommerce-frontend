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
                <p v-if="errorMessage" class="mt-2 text-red-500 text-sm text-center">{{ errorMessage }}</p>
            </form>

            <!-- login with -->
            <div class="mt-6 flex justify-center relative">
                <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">facebook</a>
                <a href="http://localhost:8000/api/login/google"
                    class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500">Google</a>
            </div>
            <!-- ./login with -->

            <p class="mt-4 text-center text-gray-600">Don't have account? 
                <RouterLink to="/register" class="text-primary">Register Now</RouterLink>
            </p>
        </div>
    </div>
    
    <!-- audio login -->
    <audio id="successSound" src="../../public/audio/KIW KIW CUKURUKUK SFX_vdpqL8V13N8.mp3"></audio>
    <audio id="errorSound" src="../../public/audio/KIW KIW CUKURUKUK SFX_vdpqL8V13N8.mp3"></audio>

    <!-- ./login -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { login } from '../api/auth'
import { setToken, isLoggedIn, getToken } from '../utils/auth'

const router = useRouter()
const email = ref(null)
const password = ref(null)
const errorMessage = ref('')
const isLoading = ref(false)

onMounted(async () => {
  if(useRoute().query.token) {
      setToken(useRoute().query.token)
      console.log(getToken())
      if (isLoggedIn()) {
        router.push('/')
        showLoginAlert('', false)
      }
  }
})

const showLoginAlert = (message, isError = false) => {
  const successSound = document.getElementById('successSound');
  const errorSound = document.getElementById('errorSound');
  
  if (isError) {
    const popup = document.createElement('div')
    popup.className = 'popup-3d'
    popup.textContent = 'Login Gagal!'
    document.body.appendChild(popup)
    
    setTimeout(() => {
      document.body.removeChild(popup)
    }, 7000)

    errorSound.currentTime = 0;
    errorSound.play();
  } else {
    const popup = document.createElement('div')
    popup.className = 'popup-3d'
    popup.textContent = 'Login Successful!'
    document.body.appendChild(popup)
    
    setTimeout(() => {
      document.body.removeChild(popup)
    }, 7000)

    successSound.currentTime = 0;
    successSound.play();
  }
}

const loginClick = async () => {
  isLoading.value = true
  try {
    const response = await login({
      'email': email.value,
      'password': password.value,
    })

    if (response.data.status) {
      setToken(response.data.token)
      if (isLoggedIn()) {
        router.push('/')
        showLoginAlert('', false)
      }
    }
  } catch (error) {
    showLoginAlert(error.response.data.message, true)
  }
  isLoading.value = false
}
</script>

<style>
  .popup-3d {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.1);
  padding: 100px;
  background-color: #fff;
  border-radius: 10px; 
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  animation: popupAnimation 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes popupAnimation {
  0% {
    transform: translate(-50%, -50%) scale(0.1) rotate(0deg);
    opacity: 0;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.2) rotate(15deg); 
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
    opacity: 1;
  }
}

</style>
