<script setup>
import { useAuthStore } from "@/stores/auth";
const runtimeConfig = useRuntimeConfig();
const authStore = useAuthStore();

const route = useRoute();

const otpCode = useState('optCoder',()=>({
    one:null,
    two:null,
    four:null,
    five:null   
}));

const inputOne = ref(null);
const inputTwo = ref(null);
const inputThree = ref(null);
const inputFour =  ref(null);
const buttonConfirm = ref(null);


function focusNext(e,inputRef){
    if(e.target.value.length>0){
        inputRef.focus();
    }
}

const one =  useInputCode()
const two =  useInputCode()
const three =  useInputCode()
const four =  useInputCode()

// login user
async function login(item) {
  try {
    const r = await $fetch(
    `${runtimeConfig.public.API_BASE_URL}otp/send-otp`,
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/json",
        // Add other headers as needed
      },
      body: {
        model: route.query.type,
        mobile: authStore.loginData.mobile
      },
    }
  );
  } catch (error) {
    
  }

}



onMounted(()=>{
  inputOne.value.focus()
  login()
})





</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100"
  >
    <div class="mb-8 flex h-52 w-52 -mr-24 justify-center">
      <img alt="Phone" class="h-40 mx-auto" src="/images/otp.webp" />
    </div>

    <div class="mt-4 text-center">
      <form action="" method="post">
        <div class="flex flex-col space-y-16">
          <div class="flex flex-col gap-4 items-center">
          <div
            class="flex flex-row items-center justify-between mx-auto w-full max-w-xs"
          >
            <div class="w-16 h-16 pr-1 mr-2">

              <input
              @keyup="(e)=>focusNext(e,inputTwo)"

                ref="inputOne"
                class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-4 border-gray-400 h-full flex flex-col items-center justify-center text-center px-5 outline-none  bg-transparent focus:bg-gray-50 focus:ring-1 rounded-none "
                type="text"
                pattern="[0-9]"
                v-model="one"
                required
              />
            </div>
            <div class="w-16 h-16 pr-1 mr-2">
              <input
                @keyup="(e)=>focusNext(e,inputThree)"
                ref="inputTwo"
                class="text-4xl  text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-4 border-gray-400 h-full flex flex-col items-center justify-center text-center px-5 outline-none  bg-transparent focus:bg-gray-50 focus:ring-1 rounded-none "
                type="text"
                v-model="two"
                pattern="[0-9]"
                required
              />
            </div>
            <div class="w-16 h-16 pr-1 mr-2">
              <input
                @keyup="(e)=>focusNext(e,inputFour)"
              
              ref="inputThree"
              class="text-4xl text-light-green-number  w-full border-l-0 border-r-0 border-t-0 border-b-4 border-gray-400 h-full flex flex-col items-center justify-center text-center px-5 outline-none  bg-transparent focus:bg-gray-50 focus:ring-1 rounded-none "
              type="text"
              v-model="three"
              pattern="[0-9]"
              required
              />
            </div>
            <div class="w-16 h-16 pr-1 mr-2">
                <input
                @keyup="(e)=>focusNext(e,buttonConfirm)"
                
                ref="inputFour"
                class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-4 border-gray-400 h-full flex flex-col items-center justify-center text-center  pl-5 pr-5 outline-none  bg-transparent focus:bg-gray-50 focus:ring-1 rounded-none "
                type="text"
                v-model="four"
                size="1"
                pattern="[0-9]"
                required
              />
            </div>
          </div>
          <div>
              <p class="flex gap-1 items-center " dir="rtl">
                  <span class="text-lg">صبر کنید، در حال دریافت کد تایید!!</span>
                  <span class="pt-1">
                      <nuxt-icon class="animate-spin text-2xl "  name="PointPontSpinner" />
                  </span>
              </p>
          </div>
          </div>

          <div class="flex  flex-col space-y-3">
            <div>
              <button
              ref="buttonConfirm"
                class="inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full max-w-xs bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                تایید
              </button>
            </div>

            <div
              class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500"
            >
              <a
                class="flex flex-row items-center text-blue-600"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                >ارسال مجدد!</a
              >
              <p>کد را دریافت نکردید؟</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped>
</style>