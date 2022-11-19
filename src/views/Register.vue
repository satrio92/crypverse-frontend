<template>
	<div class="flex">
		<div class="w-full">
			<div class="flex flex-col items-center py-[36px] gap-2">
				<div class="flex gap-2 items-center mb-2">
					<img src="../assets/logo.svg" alt="">
					<h4 class="text-[30px] font-extrabold text-[#0B1E37]">Crypverse</h4>
				</div>
				<div class="w-full flex items-center">
					<div class="w-full h-[2px] bg-[#0B1E37]"></div>
					<h3 class="text-[40px] font-extrabold px-10 text-[#0B1E37]">Signup</h3>
					<div class="w-full h-[2px] bg-[#0B1E37]"></div>
				</div>
				<div class="flex flex-col gap-3 text-[#0B1E37]">
					<div class="flex flex-col gap-2">
						<label for="nama">Nama Lengkap</label>
						<input type="text" name="nama" id="nama" placeholder="John Eden" class="border border-[#828282] p-3 w-96" v-model="user.nama">
					</div>
					<div class="flex flex-col gap-2">
						<label for="email">Email</label>
						<input type="email" name="email" id="email" placeholder="johneden@gmail.com" class="border border-[#828282] p-3 w-96" v-model="user.email">
					</div>
					<div class="flex flex-col gap-2">
						<label for="password">Password</label>
						<div class="border border-[#828282] px-3 py-[10px] w-96 flex">
							<input :type="[passShow ? 'text' : 'password']" name="password" id="password" placeholder="secret123" class="w-full outline-none active:outline-dashed9" v-model="user.password">
							<i class="ti text-2xl cursor-pointer text-slate-500" :class="[passShow ? 'ti-eye-off' : 'ti-eye']" @click="passShow = !passShow"></i>
						</div>
					</div>
					<div class="flex flex-col gap-2 mb-2">
						<label for="repassword">Re-Password</label>
						<div class="border border-[#828282] px-3 py-[10px] w-96 flex">
							<input :type="[repassShow ? 'text' : 'password']" name="repassword" id="repassword" placeholder="secret123" class="w-full outline-none" v-model="repass">
							<i class="ti text-2xl cursor-pointer text-slate-500" :class="[repassShow ? 'ti-eye-off' : 'ti-eye']" @click="repassShow = !repassShow"></i>
						</div>
					</div>
					<button class="bg-[#BCF2C0] hover:bg-[#a2e1a5] w-96 h-12 flex items-center justify-center font-semibold mb-2" @click="signup()">Sign Up</button>
					<p class="text-center text-slate-400 text-sm">already have account ? <router-link to="/login" class="font-semibold text-[#0B1E37]">Login</router-link></p>
				</div>
			</div>
		</div>
		<div class="w-full h-screen flex items-center overflow-hidden">
			<img src="../assets/illustration.png" alt="">
		</div>
		<div class="absolute top-8 right-8 bg-orange-300 px-6 py-3 font-medium flex items-center gap-2" v-if="message">
			<i class="ti ti-alert-circle text-xl"></i>
			{{ message }}
		</div>
		<div v-if="popupSuccess" class="w-full h-screen absolute top-0 left-0 z-30 bg-slate-800 opacity-50"></div>
		<div v-if="popupSuccess" class="w-full h-screen absolute top-0 left-0 z-40 flex justify-center items-center" @click="clearPopup()">
			<div class="bg-white h-96 w-80 flex flex-col items-center rounded-xl">
				<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_jbrw3hcz.json" background="transparent"  speed="1"  style="width: 320px; height: 320px; margin-top: -24px;" loop autoplay></lottie-player>
				<h3 class="text-2xl font-bold text-center -mt-16">Registrasi Berhasil</h3>
				<p class="text-center text-sm px-4 mt-3 font-medium">Silahkan cek email untuk melakukan aktivasi akun</p>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios';

export default {
    name: "Register",
    components: {},
    data() {
        return {
            passShow: false,
            repassShow: false,
			repass: "",
			message: "",
			popupSuccess: false,
			user: {}
        }
    },
		methods: {
			signup() {
				if (this.user.nama == null) {
					this.message = "Nama tidak boleh kosong"
				} else if (this.user.email == null) {
					this.message = "Email tidak boleh kosong"
				} else if (this.user.password == null) {
					this.message = "Password tidak boleh kosong"
				} else if (this.user.password.length < 8) {
					this.message = "Password kurang dari 8 karakter"
				} else if (this.user.password.length > 16) {
					this.message = "Password lebih dari 16 karakter"
				} else if (!this.user.password.match(/[a-z]/g)) {
					this.message = "Password harus mengandung huruf kecil"
				} else if (!this.user.password.match(/[A-Z]/g)) {
					this.message = "Password harus mengandung huruf besar"
				} else if (!this.user.password.match(/[0-9]/g)) {
					this.message = "Password harus mengandung angka"
				} else if (this.repass != this.user.password) {
					this.message = "Password yang diinputkan harus sama"
				} else {
					this.message = ""
					axios.post('http://localhost:3000/user', this.user)
					.then(() => this.handlePopup())
					.catch(err => (console.log(err)))
				}

				setTimeout(() => {
					this.message = ""
				}, 3000)
			},
			handlePopup() {
				this.popupSuccess = true
				setTimeout(this.clearPopup, 3000)
			},
			clearPopup() {
				this.popupSuccess = false
				this.$router.push({ name: 'Login' })
			}
		}
}
</script>