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
                        <input type="text" name="nama" id="nama" placeholder="John Eden" class="border border-[#828282] p-3 w-96">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="johneden@gmail.com" class="border border-[#828282] p-3 w-96">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password">Password</label>
                        <div class="border border-[#828282] px-3 py-[10px] w-96 flex">
                            <input :type="[passShow ? 'text' : 'password']" name="password" id="password" placeholder="secret123" class="w-full outline-none active:outline-dashed">
                            <i class="ti text-2xl cursor-pointer text-slate-500" :class="[passShow ? 'ti-eye-off' : 'ti-eye']" @click="passShow = !passShow"></i>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 mb-2">
                        <label for="repassword">Re-Password</label>
                        <div class="border border-[#828282] px-3 py-[10px] w-96 flex">
                            <input :type="[repassShow ? 'text' : 'password']" name="repassword" id="repassword" placeholder="secret123" class="w-full outline-none">
                            <i class="ti text-2xl cursor-pointer text-slate-500" :class="[repassShow ? 'ti-eye-off' : 'ti-eye']" @click="repassShow = !repassShow"></i>
                        </div>
                    </div>
                    <button class="bg-[#BCF2C0] hover:bg-[#a2e1a5] w-96 h-12 flex items-center justify-center font-semibold mb-2">Sign Up</button>
                    <p class="text-center text-slate-400 text-sm">already have account ? <router-link to="/login" class="font-semibold text-[#0B1E37]">Login</router-link></p>
                </div>
            </div>
        </div>
        <div class="w-full h-screen flex items-center overflow-hidden">
            <img src="../assets/illustration.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    components: {},
    data() {
        return {
            passShow: false,
            repassShow: false
        }
    }
}
</script>