<template>
    <h1 class="title text-pink-600">Home</h1>
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