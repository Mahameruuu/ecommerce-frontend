<template>
        <!-- wrapper -->
        <div class="container py-26">
            <h1 class="my-5 flex justify-center text-3xl font-medium text-gray-800 uppercase mb-6 bg-center">Contact Us</h1>
        </div>
        <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
            
        <div class="col-span-8 border border-gray-200 p-4 rounded">
            <div class="space-y-4">
                <div>
                    <label for="first-name" class="text-gray-600">Name</label>
                    <input type="text" name="first-name" id="first-name" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                </div>
                <div>
                    <label for="email" class="text-gray-600">Email</label>
                    <input type="text" name="address" id="address" class="input-box block w-full border border-gray-300 px-4 py-3 text-gray-600 rounded">
                </div>
                <div>
                    <label for="message" class="text-gray-600">Message</label>
                    <textarea name="message" id="message" class="input-box block w-full border border-gray-300 px-4 py-3 my-5 text-gray-600 rounded" cols="30" rows="10"></textarea>
                </div>
                <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                    <button class="py-3 px-10 text-white bg-primary rounded">Send</button>
                </div>
            </div>
        </div>
        <div class="col-span-4 border border-gray-200 p-4 my-5 rounded">
            <address>
                <div class="space-y-2 my-5">
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="https://maps.app.goo.gl/8cz8exBNuUnVyRQe9" class="inline-block mx-5 text-red-600">Kampus ITATS</a>
                </div>
            </address>
            <address>
                <div>
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:itats@itats.ac.id" class="inline-block mx-5 my-5 text-red-600">pmb@itats.ac.id</a>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.55959141187!2d112.77657437483921!3d-7.2908429927166365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa469f2b37b5%3A0x8d971ebe4e20a0d5!2sInstitut%20Teknologi%20Adhi%20Tama%20Surabaya!5e0!3m2!1sid!2sid!4v1697698813126!5m2!1sid!2sid" width="350" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </address>
        </div>
    </div>
    <!-- ./wrapper -->
</template>

<script setup>

</script>