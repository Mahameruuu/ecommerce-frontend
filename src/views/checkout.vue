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
    <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <div class="col-span-8 border border-gray-200 p-4 rounded">
            <h3 class="text-lg font-medium capitalize mb-4">Checkout</h3>
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="first-name" class="text-gray-600">First Name <span class="text-primary">*</span></label>
                        <input type="text" name="first-name" id="first-name" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                    </div>
                    <div>
                        <label for="last-name" class="text-gray-600">Last Name <span class="text-primary">*</span></label>
                        <input type="text" name="last-name" id="last-name" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                    </div>
                </div>
                <div>
                    <label for="address" class="text-gray-600">Street address <span class="text-primary">*</span></label>
                    <input type="text" name="address" id="address" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                </div>
                <div>
                    <label for="phone" class="text-gray-600">Phone number <span class="text-primary">*</span></label>
                    <input type="text" name="phone" id="phone" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                </div>
                <div>
                    <label for="email" class="text-gray-600">Email address <span class="text-primary">*</span></label>
                    <input type="email" name="email" id="email" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                </div>
                <div>
                    <label for="company" class="text-gray-600">Company <span class="text-primary">*</span></label>
                    <input type="text" name="company" id="company" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                </div>
            </div>
        </div>
        <div class="col-span-4 border border-gray-200 p-4 rounded">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">Order Summary</h4>
            <div class="space-y-2">
                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">Nasi Goreng Merah</h5>
                        <p class="text-sm text-gray-600">Food</p>
                    </div>
                    <p class="text-gray-600">x2</p>
                    <p class="text-gray-800 font-medium">Rp 30.000</p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">Kentang Goreng</h5>
                        <p class="text-sm text-gray-600">Snack</p>
                    </div>
                    <p class="text-gray-600">x1</p>
                    <p class="text-gray-800 font-medium">Rp 10.000</p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">Tahu Crispy</h5>
                        <p class="text-sm text-gray-600">Snack</p>
                    </div>
                    <p class="text-gray-600">x1</p>
                    <p class="text-gray-800 font-medium">Rp 10.000</p>
                </div>
                <div class="flex justify-between">
                    <div>
                        <h5 class="text-gray-800 font-medium">Es Teh</h5>
                        <p class="text-sm text-gray-600">Drink</p>
                    </div>
                    <p class="text-gray-600">x2</p>
                    <p class="text-gray-800 font-medium">Rp 5.000</p>
                </div>
            </div>
            <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>Subtotal</p>
                <p>$1280</p>
            </div>
            <div class="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <div class="flex justify-between text-gray-800 font-medium py-3 uppercas">
                <p class="font-semibold">Total</p>
                <p>$1280</p>
            </div>
            <div class="flex items-center mb-4 mt-2">
                <input type="checkbox" name="agreement" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3">
                <label for="agreement" class="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <a href="#" class="text-primary">Terms & Conditions</a></label>
            </div>
            <a href="#" class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover-bg-transparent hover-text-primary transition font-medium">Place Order</a>
        </div>
    </div>
    <!-- ./wrapper -->
</template>

<script setup>

</script>