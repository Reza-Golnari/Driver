<script setup>
</script>

<template>
  <div class="min-h-screen bg-gray-100 rtl">
    <div class="flex flex-col items-center justify-center">
      <div class="p-4 w-full max-w-md bg-white rounded-lg shadow-md mt-8">
        <div class="flex justify-between items-center mb-4">
          <span
            class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
          >
            <img
              class="aspect-square h-full w-full"
              alt="Profile picture"
              src="../driver/src/images/panel-slider.jpg?height=40&amp;width=40"
            />
          </span>
          <div class="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-500"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-500"
            >
              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
            </svg>
          </div>
        </div>
        <div class="mb-4">
          <h1 class="text-lg font-semibold text-gray-900 rtl text-right">
            سلام مجتبی غریب رضا یزدی خوش آمدید
          </h1>
          <p class="text-sm text-gray-600 text-right">
            امروز برای سفر آماده ای ؟
          </p>
        </div>
        <div class="mb-6">
          <div class="relative">
            <img
              alt="Desert landscape"
              class="w-full h-48 object-cover rounded-lg"
              height="200"
              src="../driver/src/images/truck.PNG"
              width="350"
              style="aspect-ratio: 350 / 200; object-fit: cover"
            />
            <div
              class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg"
            >
              <h2 class="text-white font-semibold text-right">
                اولین اکوسیستم حمل و نقلی برتر کشور !
              </h2>
              <p class="text-right">ما با واسطه ها میانه ای نداریم!</p>
            </div>
            <div
              class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1"
            >
              <div class="h-2 w-2 bg-white rounded-full"></div>
              <div class="h-2 w-2 bg-white rounded-full"></div>
              <div class="h-2 w-2 bg-white rounded-full"></div>
              <div class="h-2 w-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-red-500 text-white mb-4"
        >
          شما هنوز احراز هویت نشده اید !
        </button>
        <div class="mb-4">
          <div class="" data-v0-t="card">
            <div
              class="p-6 rounded-lg border bg-card text-card-foreground shadow-sm w-full"
            >
              <div class="flex items-center justify-between">
                <button
                  class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-gray-500"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
                <img
                  src="../driver/src/images/nearbyIcon.svg"
                  alt="SVG Icon"
                  width="40"
                  height="40"
                />
              </div>
              <p class="text-gray-800 text-sm mt-2 text-center">
                بارهای اطراف خود را مشاهده کنید
              </p>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full mt-4"
              data-v0-t="card"
            >
              <div class="p-6">
                <div class="flex items-center justify-between">
                  <button
                    class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-gray-500"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <img
                    src="../driver/src/images/search-advertiesment.svg"
                    alt="SVG Icon"
                    width="40"
                    height="40"
                  />
                </div>
                <p class="text-gray-800 text-sm mt-2 text-center">
                  بر اساس مبدا و مقصد جستجو کنید
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full mt-4"
              data-v0-t="card"
            >
              <div class="p-6">
                <div class="flex items-center justify-between">
                  <button
                    class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-gray-500"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <img
                    src="../driver/src/images/driver-history.svg"
                    alt="SVG Icon"
                    width="40"
                    height="40"
                  />
                </div>
                <p class="text-gray-800 text-sm mt-2 text-center">
                  تاریخچه بارهای خود را مشاهده کنید
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed bottom-0 left-0 right-0 bg-white py-2 shadow-md">
          <div class="flex justify-around items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-800"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-500"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <button
              class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-red-500 text-white p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="35"
                height="35"
                viewBox="0 0 256 256"
                xml:space="preserve"
              >
                <defs></defs>
                <g
                  style="
                    stroke: none;
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: none;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="translate(22.611673151750978 22.61167315175095) scale(2.33 2.33)"
                >
                  <path
                    d="M 45 90 c -1.415 0 -2.725 -0.748 -3.444 -1.966 l -4.385 -7.417 C 28.167 65.396 19.664 51.02 16.759 45.189 c -2.112 -4.331 -3.175 -8.955 -3.175 -13.773 C 13.584 14.093 27.677 0 45 0 c 17.323 0 31.416 14.093 31.416 31.416 c 0 4.815 -1.063 9.438 -3.157 13.741 c -0.025 0.052 -0.053 0.104 -0.08 0.155 c -2.961 5.909 -11.41 20.193 -20.353 35.309 l -4.382 7.413 C 47.725 89.252 46.415 90 45 90 z"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: rgb(255, 255, 255);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M 45 45.678 c -8.474 0 -15.369 -6.894 -15.369 -15.368 S 36.526 14.941 45 14.941 c 8.474 0 15.368 6.895 15.368 15.369 S 53.474 45.678 45 45.678 z"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: rgb(218, 0, 55);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  ></path>
                </g>
              </svg>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-500"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-500"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>