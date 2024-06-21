<template>
    <div class="">
        <box_1/>
        <div class="mt-12">

            <div >
                  <form action="" @submit.prevent="searchf" id="form" class="form rounded-full flex overflow-hidden md:w-2/5 w-11/12 h-12 mx-auto items-center pl-6 p-1 bg-box">
                  <label for="search"><font-awesome-icon id="serch-icon"  class="cursor-pointer" icon="fa-solid fa-magnifying-glass" /></label>
                  <input id="search-box" v-model="search" autocomplete="off" class="bg-transparent outline-none ml-2 w-full border-0" type="text" placeholder="search">
                  <div id="serch-btn">
  <button disabled type="button" v-if="loading" class="text-white serch-btn bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center m-px inline-flex items-center">
      <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
      </svg>
      Loading...
  </button>
  <button v-else class="text-white rounded-full bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center m-px inline-flex items-center" type="submit">search</button>
                  </div>
  
              </form>
          </div>
        <div v-if="loading" class="flex justify-center mt-5">
            <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-black animate-spin fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
  </div></div>
        
  
  
        </div>
        
        
        <!-- box2 -->
        <div class="md:flex md:mx-12 mx-6 pt-52">
            <div class="md:w-1/2">
                <div :id="`item-${index}`" :class="{'border-y-2 border-white md:mt-12 md:pt-12 mt-6 pt-6 md:mb-12 md:pb-12 mb-6 pb-6':index == 1,'md:border-b-2 border-b-2 border-white md:mb-12 md:pb-12 mb-6 pb-6':index == 2,'border-b-2 border-white md:mb-12 md:pb-12 mb-6 pb-6':index == 3}" v-for="(box1,index) in news_first">
                    <div class="relative w-full h-60 animated-background rounded-3xl overflow-hidden">
                        <router-link :to="`/games/${box1.slug}-${box1.id}`">
                        <img  :class="`w-full h-full img-${box1.id}`" :src="box1.background_image" alt="" loading="lazy">
                        <img  :class="`absolute inset-0 w-full  img-${box1.id} opacity-0 h-full img-${box1.id}-${index+1}`" v-for="(url,index) in box1.short_screenshots" :src="url.image" alt="" loading="lazy">
                        </router-link>
                        <div class="absolute mb-2 inset-0 flex justify-between items-end" >
                          <div :class="`flex group/box-item items-end h-full w-full mx-2 item-${box1.id}-${index+1}`" v-for="(screen,index) in box1.short_screenshots" @mouseover="hover(box1.id,index+1)">
                          <div class="bg-blur group-hover/box-item:bg-slate-700  h-1 w-full rounded-md hover:bg-slate-700"></div>
                        </div>
                        </div>
                    </div>
                    <div class="flex items-center mt-5">
                        <div class="md:px-5 px-3 md:py-2 py-1 mr-2  bg-static" :style="`background:#${box1.dominant_color};`">{{ box1.released }}</div>
                        <div>
                        <router-link :to="`/games/${box1.slug}-${box1.id}`">
                            {{ box1.name }}
                        </router-link>
  
                        </div>
                    </div>
                    <div class="flex justify-between items-center overflow-hidden">
                        <div class="mt-5 md:text-3xl text-base text-left">
                        <div class="text-3xl ">
                        <platform class="top " :data="box1.parent_platforms"/>
                        </div>
                    
                    </div>
                    <div class="bg-black text-green-600 border-1 border-green-600 p-2 rounded-md relative">
                        <div>
                            <font-awesome-icon class=" text-yellow-500 absolute top-0 left-1/2 center" icon="fa-regular fa-star" />
                        </div>
                        {{ box1.rating }}
                    </div>
                    </div>
                </div>
                
            </div>
            
            <div class="md:w-1/2 ml-5 grid content-between">
                    <div class="flex h-full items-center md:mb-12 mb-6" :id="`index-${index}`" v-for="(box2,index) in news_end">
                    <div class="md:w-1/5 w-1/2 h-20 bg-static">
                        <router-link :to="`/games/${box2.slug}-${box2.id}`">
                            <img class="w-full h-full" :src="box2.background_image" alt="" loading="lazy">
                        </router-link>
                    </div>
                    <div class="md:w-4/5 w-1/2 md:ml-5 ml-2">
                        <div class="md:flex items-center">
                            <div class="md:px-5  px-1 rounded-xl md:rounded-none md:py-2 py-1 md:text-base text-xs bg-blue-700 md:mr-2">{{ box2.released }}</div>
                            <div class="md:text-base text-xs">
                                <router-link :to="`/games/${box2.slug}-${box2.id}`">
                                  {{ box2.name }}
                                </router-link>
                            </div>
                        </div>
                        <div class="text-left overflow-hidden md:text-base text-xs md:mt-5 mt-2">
                            <platform class="top" :data="box2.parent_platforms"/>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
  
  
        <div class="flex justify-center">
            <div class="flex">
                <div v-if="next2">
                    <button disabled type="button" v-if="loading" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center">
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
                    </button>
                    <div v-else>
                    <button class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center" v-if="next2" @click="nextpage">
                    next
                    </button>
                    </div>
                    
                    
                </div>
                <div v-if="previous2">
                    
                    <button disabled type="button" v-if="loading" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center">
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
                    </button>
                    <div v-else>
                        <button v-if="previous2" class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center" @click="previouspage">
                previous
                    </button>
                    </div>
                </div>
            </div>
  
        </div>
  
  
  
  
  
    </div>
  </template>
  
  
  <script>
  import box_1 from '../components/games/box1.vue'
  import platform from '../components/platform'
  import {sleep} from '../functions/sleep'
  import {startLoading,reload} from '../functions/startLoading'
  import axios from 'axios'
  import { gsap } from "gsap";
  import $ from 'jquery'
  
  
  export default {
    components:{box_1,platform},
    data(){
        return{
            search:'',
            news_first:[
                {},{},{},{},{}
            ],
            news_end:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
            loading:false,
            next:null,
            next2:false,
            previous:null,
            previous2:false,
        }
    },mounted(){
        this.serch_box()
        this.searchf()
        startLoading()
        $(".test").click(function(){
          alert("test")
        })
    },watch:{
    },methods:{
        async searchf(){
            this.news_first = []
            this.news_end = []
            this.loading = true;
            reload()
            try {
            let search = this.search.charAt(0).toUpperCase()
            this.search = search + this.search.slice(1).toLowerCase()
            let search_data = (await axios.get(`https://api.rawg.io/api/games?key=78019d6b3e5a4c02aa7dc916416a0afc&search=${this.search}`)) 
            this.$store.state.status = search_data.status
            search_data = search_data.data
            if(search_data.next != null){
                this.next2 = true
                this.next = search_data.next
            }else{
                this.next2 = false
            }
            search_data = search_data.results
            this.news_first = search_data.slice(0,5);
            this.news_end = search_data.slice(5);
            console.log(this.news_first)
            console.log(this.news_end)
  
            } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
  
        },
        async nextpage(){
            this.news_first = []
            this.news_end = []
            this.loading = true;
            reload()
            try {
            let search_data = (await axios.get(this.next)).data 
            if(search_data.next != null){
                this.next2 = true
                this.next = search_data.next
            }else{
                this.next2 = false
            }
            if(search_data.previous != null){
                this.previous2 = true
                this.previous = search_data.previous
            }
            else{
                this.previous2 = false
            }
            search_data = search_data.results
            this.news_first = search_data.slice(0,4);
            this.news_end = search_data.slice(4);
            console.log(this.news_first)
            console.log(this.news_end)
            } catch (error) {
        console.error(error);
      } finally {
            this.loading = false;
      }
        },
        async previouspage(){
            this.news_first = []
            this.news_end = []
            this.loading = true;
            reload()
            try {
            let search_data = (await axios.get(this.previous)).data 
            if(search_data.next != null){
                this.next2 = true
                this.next = search_data.next
            }else{
                this.next2 = false
            }
            if(search_data.previous != null){
                this.previous2 = true
                this.previous = search_data.previous
            }
            else{
                this.previous2 = false
            }
            search_data = search_data.results
            this.news_first = search_data.slice(0,4);
            this.news_end = search_data.slice(4);
            console.log(this.news_first)
            console.log(this.news_end)
            } catch (error) {
        console.error(error);
      } finally {
            this.loading = false;
      }
        },serch_box(){
          var timeline = gsap.timeline({delay:1,paused:true})
        //   gsap.from("#form",{duration:1,y:"-100",ease:"back.out(1.7)"})
        //   gsap.from("#serch-icon",{duration:1,x:"-100",delay:1,ease:"back.out(1.7)"})
        //   gsap.from("#serch-btn",{duration:1,x:"200",delay:1,ease:"back.out(1.7)"})
        //   gsap.from("#search-box",{duration:1,delay:1,autoAlpha:0})
        timeline.from("#form",{duration:1,y:"-100",ease:"back.out(1.7)",opacity:0})
        timeline.from("#form",{duration:1,width:"0%",ease:"back.out(1.7)"})
        timeline.from("#serch-icon",{duration:1,x:"-100",ease:"back.out(1.7)",opacity:0})
        timeline.from("#serch-btn",{duration:1,x:"100",ease:"back.out(1.7)",opacity:0})

          timeline.play()
        },hover(id,index){
          $(`.img-${id}`).removeClass("active").addClass("opacity-0")
          $(`.img-${id}-${index}`).addClass("active")
          console.log(`item-${id}-${index}`)
        },
        }
  }
  
  
  </script>
  <style spoced>
  /* .body1{
    background: linear-gradient(176deg, #3165CB -34.57%, #030115 96.75%)!important;
  } */
  .loadline{
    transition: all 1s;
    width: 1%;
    opacity: 0;
  }
  .active{
      opacity: 1 !important;
  }
  .form{
          position: relative;
        }
  .form::after{
            content: "";
            display: block;
            position: absolute;
            height: 18px;
            width: 5px;
            right: -0px;
            bottom: -10px;
            background-color: black;
            transform: rotate(320deg);
  }
  </style>