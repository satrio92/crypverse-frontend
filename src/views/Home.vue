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
                    <p class="text-main font-semibold">Kukuh Satrio</p>
                </div>
                <i class="ti ti-chevron-down text-2xl text-white cursor-pointer"></i>
            </div>
        </nav>
        <div class="w-full h-full flex items-center justify-center">
            <div class="flex flex-col items-center gap-10">
                <div class="flex flex-col gap-6 items-center">
                    <h2 class="text-5xl font-semibold text-white">Welcome</h2>
                    <h1 class="title text-gradient text-7xl font-bold">Kukuh Satrio</h1>
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
            user: {}
        }
    },
    methods: {
        getUser() {
            axios.get('http://localhost:3000/user/'+this.id)
            .then(res => this.setUser(res.data))
            .catch(err => console.log(err))
        },
        setUser(data) {
            this.user = data
            this.randomText()
        },
        randomText() {
            const text = baffle(".title")
            text.set({
                characters: '<x/{?>/}x;[!/>]:',
                speed: 120
            })
            text.start()
            text.reveal(3000)
        }
    },
    mounted() {
        this.getUser()
    }
}
</script>