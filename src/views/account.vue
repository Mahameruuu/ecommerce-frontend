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
                        Account
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

            <div class="shadow rounded bg-white px-8 py-10 pt-6 pb-8">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-medium text-gray-800 text-lg">Profile</h3>
                    <button type="button" class="px-5 py-2 text-white bg-primary rounded" data-hs-overlay="#hs-focus-management-modal">
                      Edit
                    </button>
                    <div id="hs-focus-management-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                            <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                    <h3 class="font-bold text-gray-800 dark:text-white">
                                    Edit Profile
                                    </h3>
                                    <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-focus-management-modal">
                                    <span class="sr-only">Close</span>
                                    <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                                    </svg>
                                    </button>
                                </div>
                                <div class="p-4 overflow-y-auto">
                                    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Nama</label>
                                    <input type="name" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Mahameru" autofocus>
                                </div>
                                <div class="p-4 overflow-y-auto">
                                    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
                                    <input type="email" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="ariya@gmail.com" autofocus>
                                </div>
                                <div class="p-4  overflow-y-auto">
                                    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Phone</label>
                                    <input type="phone" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="0812 3456 7890" autofocus>
                                </div>
                                <div class="p-4  overflow-y-auto">
                                    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Gender</label>
                                    <select name="gender" id="gender" class="input-box">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div class="p-4  overflow-y-auto">
                                    <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Birthday</label>
                                    <input type="date" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="0812 3456 7890" autofocus>
                                </div>
                                <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                                    <button type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-focus-management-modal">
                                        Close
                                    </button>
                                    <a class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                                        Save changes
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-11">
                    <div>
                        <h2 class="text-gray-950 font-medium my-4">Nama</h2>
                        <h4 class="text-gray-700 font-medium">M. Mahameru. A</h4>
                    </div>
                    <div>
                        <h2 class="text-gray-950 font-medium my-4">Email</h2>
                        <p class="text-gray-800">mahameru0504@gmail.com</p>
                    </div>
                    <div>
                        <h2 class="text-gray-950 font-medium my-4">Phone</h2>
                        <p class="text-gray-800">0811 8877 988</p>
                    </div>
                    <div>
                        <h2 class="text-gray-950 font-medium my-4">Gender</h2>
                        <p class="text-gray-800">Male</p>
                    </div>
                    <div>
                        <h2 class="text-gray-950 font-medium my-4">Birthday</h2>
                        <p class="text-gray-800">04-05-2003</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- ./info -->

    </div>
    <!-- ./account wrapper -->
</template>

<script setup>

</script>