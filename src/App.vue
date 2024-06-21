<template>
<div>
    <!-- <div class="loadline h-0.5 bg-orange-500 fixed top-0"></div>
  <nav_bar/>
  <router-view/>
  <foo_ter></foo_ter>  -->
<div class="box1 z-50">
  <div class="loadline h-0.5 z-20 bg-orange-500 fixed top-0"></div>
  <pc_navbar  class="z-10"/>
  <modal/>
  <button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  class="!fixed hidden bottom-5 right-10 z-50 rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg"
  id="btn-back-to-top">
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    class="h-4 w-4"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
    <path
      fill="currentColor"
      d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
  </svg>
</button>

</div>
<div class="box2 h-screen overflow-y-scroll" id="box2">
  <router-view/>
  <foo_ter></foo_ter>
</div>

<div
  data-te-modal-init
  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
    <div
      class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <!--Modal title-->
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalLabel">
          Modal title
        </h5>
        <!--Close button-->
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!--Modal body-->
      <div class="relative flex-auto p-4" data-te-modal-body-ref>
        Modal body text goes here.
      </div>

      <!--Modal footer-->
      <div
        class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <button
          type="button"
          class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          data-te-modal-dismiss
          data-te-ripple-init
          data-te-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>




import $ from "jquery"
import pc_navbar from './components/pc-navbar'
import foo_ter from './components/footer.vue'
import modal from './components/modal.vue'
export default{
  name:'app',
    components:{pc_navbar,foo_ter,modal},
  mounted(){
    $("#box2").scroll(function(){
  if ($(this).scrollTop() > 20) {
    $('#btn-back-to-top').removeClass('hidden');
  } else {
    $('#btn-back-to-top').addClass('hidden');
  }
});

// وقتی روی دکمه کلیک می‌شود، به بالای صفحه اسکرول می‌شود
$('#btn-back-to-top').click(function() {
  $('#box2').animate({ scrollTop: 0 }, 'smooth');
});
  },
  watch: {
    '$route' (to, from) {
      $('#box2').animate({ scrollTop: 0 }, 'smooth');
    },
  },
  }
</script>
<style>
.box2{
  background: linear-gradient(181deg, #39289F 0.82%, #422F9C 129.1%);
  /* background-color: black; */
  backdrop-filter: blur(7px);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100vh;
}
nav a {
  font-weight: bold;
  color: #ffffff;
  text-shadow: 2px 2px 2px black;
}

/* nav a.router-link-exact-active {
  
} */
.router-link-exact-active div{
color: #DC7000;
opacity: 1;
}
.btn-orange {
  background: linear-gradient(92deg, #fa8305 2.08%, #fb9e3c 117.25%);
}
.transparent-btn {
  background: rgba(255, 255, 255, 0.11);
}
.w-402{
  width:40%;
}
.linebox{
  width: 3.3333%;
}
.itembox{
  width:96.3333%;
}
.bg-blur{
  backdrop-filter: blur(20px); background-color: rgba(226, 226, 226, 0.107);
}
.bg-box{
  background: #1c140f
}

.left{
    animation: left 2s;
}
@keyframes left{
    from{transform: translateX(-100%);}
    to{transform: translateX(0%);}
}
.right{
    animation: right 2s;
}
@keyframes right{
    from{transform: translateX(100%);}
    to{transform: translateX(0%);}
}
.top{
  animation: top 2s;
}
@keyframes top{
    from{transform: translateY(-100%);}
    to{transform: translateY(0%);}
}
.bottom{
  animation: bottom 2s;
}
@keyframes bottom{
    from{transform: translateY(100%);}
    to{transform: translateY(0%);}
}
.text-sh-black{
  text-shadow: 2px 2px 2px black;
}
.text-sh-white{
  text-shadow: 2px 2px 2px white;
}
.scroll-bar{

}
.scroll-bar::-webkit-scrollbar {
  width: 2px;
}
.scroll-bar::-webkit-scrollbar-thumb {
  background: rgb(63, 63, 63); 
  border-radius: 10px;
  width: 2px;
}
.scroll-bar::-webkit-scrollbar-thumb:hover {
  background: #f97316; 
}
.center{
  transform: translate(-50%, -50%);
}
.loadline{
    transition: all 3s;
    width: 1%;
}
.bg-static{
  background-color: #f6f7f8;
}
.bg-blur-active{
  backdrop-filter: blur(20px);
  background-color: rgb(91 91 91 / 11%);
}

/* animation bg */
@keyframes placeHolderShimmer {
  0% {
    background-position: -800px 0
  }
  100% {
    background-position: 800px 0
  }
}

.animated-background {
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background-color: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;
}
</style>
