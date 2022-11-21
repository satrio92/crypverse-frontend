<template>
    <div class="bg-main w-full h-screen flex flex-col">
        <nav class="w-full flex justify-between px-10 h-28 items-center">
            <!-- logo -->
            <div class="flex gap-2">
                <div class="flex gap-2 items-center mb-2">
					<img src="../assets/logo-white.svg" alt="logo" class="w-14 h-14">
					<h4 class="text-[24px] font-bold text-white">Crypverse</h4>
				</div>
            </div>
            <div class="flex gap-2 items-center">
                <div class="bg-blue-gradient rounded-lg h-12 flex items-center px-4">
                    <p class="text-main font-semibold">{{ user.nama }}</p>
                </div>
                <i class="ti text-2xl text-white cursor-pointer" :class="[dropdown ? 'ti-chevron-up' : 'ti-chevron-down']" @click="dropdown = !dropdown"></i>
            </div>
        </nav>
        <div v-if="dropdown" class="absolute top-[92px] right-10 text-main bg-slate-200 px-8 py-4 rounded-md font-semibold flex flex-col gap-3 items-center">
            <p>Detail Profile</p>
            <p>Setting</p>
            <p class="cursor-pointer" @click="logOut()">Logout</p>
        </div>
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-rounded-gradient w-[550px] h-[550px] rounded-full absolute z-0"></div>
            <div class="rounded-full px-2 py-2 absolute top-32 left-72">
                <img src="../assets/Shield-done.svg" alt="shield icon">
            </div>
            <div class="rounded-full w-6 h-6 absolute top-60 left-[420px] bg-blue-gradient"></div>
            <div class="rounded-full px-2 py-2 absolute top-64 right-72">
                <img src="../assets/Send.svg" alt="shield icon">
            </div>
            <div class="rounded-full px-2 py-2 absolute bottom-52 left-80">
                <img src="../assets/Star.svg" alt="shield icon">
            </div>
            <div class="rounded-full px-2 py-2 absolute bottom-36 right-80">
                <img src="../assets/Star.svg" alt="shield icon">
            </div>
            <div class="rounded-full w-6 h-6 absolute top-48 right-[420px] bg-blue-gradient"></div>
            <div class="flex flex-col items-center gap-10 z-20">
                <div class="flex flex-col gap-6 items-center">
                    <h2 class="text-5xl font-semibold text-white">Welcome</h2>
                    <h1 class="title text-gradient text-7xl font-bold">{{ user.nama }}</h1>
                </div>
                <div class="bg-blue-gradient rounded-lg h-12 flex items-center px-7">
                    <p class="text-main font-semibold">Explore Now</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import baffle from 'baffle'

export default {
    name: 'Home',
    components: {},
    data() {
        return {
            id: sessionStorage.getItem('user'),
            user: {},
            dropdown: false
        }
    },
    methods: {
        getUser() {
            axios.get('https://api-crypverse.vercel.app/user/'+this.id)
            .then(res => this.setUser(res.data))
            .catch(err => console.log(err))
        },
        setUser(data) {
            this.user = data
            // console.log(document.querySelector(".title"))
            setTimeout(() => {
                this.randomText()    
            }, 50);
            // if (this.user.nama) {
            // }
        },
        randomText() {
            const text = baffle(".title")
            text.set({
                characters: '<x/{?>/}x;[!/>]:',
                speed: 120
            })
            text.start()
            text.reveal(3000)
        },
        logOut() {
            sessionStorage.clear()
            this.$router.push({ name : 'Login' })
        }
    },
    mounted() {
        this.getUser()
    }
}
</script>