<template>
  <div class="">
    <div class="w-full h-screen">
  <div class="h-1/2 md:h-full md:px-12 px-6 items-center flex md:pt-16 pt-96"  :style="`
    background: linear-gradient(
  to top,
  #3b2a9e,rgb(0 0 0 / 50%)),
  url(${game_detail.background_image});background-size: 100% 100%;`">
  <div class="md:w-1/2 w-2/3 text-left text-white ">

<div class="text-white ">
  <span class="hover:text-slate-500">
    <router-link to="/">Home</router-link>
  </span>
  <span class="mx-1">/</span>
  <span class="hover:text-slate-500 ">
    <router-link to="/games">GAMES</router-link></span>
  <span class="mx-1">/</span>
  <span class="text-orange-500"> {{game_detail.name}}</span>
</div>

<div class="text-3xl text-sh-white text-black">
    {{game_detail.name}}
</div>

<div class="mt-5 flex items-center">
  <div class=" hover:text-white  md:text-base text-xs hover:bg-black hover:border-white text-black bg-white border-black mr-2 rounded-md p-2  border">
  {{ released }}
</div>
<!-- platform -->
  <div class="text-3xl">
    <platform :data="game_detail.parent_platforms"/>
  </div>

</div>

<div class="mt-5 font-bold">
  AVERAGE PLAYTIME: {{game_detail.playtime}} HOURS
</div>
<div class="mt-5 flex items-center">
  <!-- <a target="-blank" :href="game_detail.background_image" download> -->
    <button class="inline-block md:text-2xl text-base rounded bg-zinc-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-zinc-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-zinc-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-zinc-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"  
    @click="modal_btn(game_detail.background_image)"
data-te-toggle="modal"
data-te-target="#exampleModal"
data-te-ripple-init
data-te-ripple-color="light">
See Background Image
</button>
  <!-- </a> -->
</div>


<div class="flex items-center text-left mt-12">
<div class="text-9xl text-blue-500" >
  {{ first_screenshots.length + end_screenshots.length }}
</div>
<div class="text-2xl">
  <div>
    Screenshot Of
  </div>
  <div>
    Game
  </div>
</div>
</div>

</div>
  </div>




<!-- about game text -->


    </div>


<!-- Button trigger modal -->


<!-- Modal -->


<div class="w-full flex justify-around relative flex-wrap mb-12">

<div class="bg-green-500 absolute inset-0 -z-10" style="clip-path: polygon(0 5%, 100% 18%, 100% 100%, 0% 100%);background:linear-gradient(#2a1e61,#3b2a9e);">

</div>
<div class="md:w-1/5 mx-12 h-72 bg-red-500 " :class="`screen-${index} screen`,{'mt-16':index == 1,'mt-32':index == 2}" v-for="(screenshot,index) in first_screenshots" >
  <div class="inline-block cursor-pointer rounded h-full w-full bg-primary text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"  
  @click="modal_btn(screenshot.image)"
  data-te-toggle="modal"
  data-te-target="#exampleModal"
  data-te-ripple-init
  data-te-ripple-color="light">
    <img  class="h-full w-full" :src="screenshot.image" alt="" loading="lazy">
  </div>

</div>
<div class="md:w-1/5 mx-12 h-72 bg-red-500 " :class="`screen-${index+3} screen mt-16`,{'md:mt-16':index == 1,'md:mt-32':index == 2}" v-for="(screenshot,index) in end_screenshots" >
  <div class="inline-block cursor-pointer rounded h-full w-full bg-primary text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"  
  @click="modal_btn(screenshot.image)"
  data-te-toggle="modal"
  data-te-target="#exampleModal"
  data-te-ripple-init
  data-te-ripple-color="light">
    <img  class="h-full w-full" :src="screenshot.image" alt="" loading="lazy">
  </div>
</div>
<div class="w-full my-12" v-if="screenshots">
<router-link :to="`/games/${game_detail.slug}-${game_detail.id}/screenshots`">
      <div class="mx-5 bg-blur h-full rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-300 flex items-center justify-center">
        <div>
          <div>. . .</div>
          <div>view all
          </div>
        </div>
      </div>
      </router-link>
</div>
</div>



    <div class="flex  text-left ">
    <div class="md:px-12 px-6 w-1/2">
      <div class="text-3xl">About</div>
      <div class="md:text-base text-xs">
      <span>{{firs_about}}</span><span v-if="!more">...</span>
      <span class="ml-2" v-if="!more">
        <button
        class="inline-block rounded bg-orange-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-orange-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
       @click="more = !more"
  type="button">
  Read more
</button>
      </span> 
  <span v-if="more">
    {{ end_about }}
  </span>

    <span v-if="more">
      <button
      class="inline-block rounded bg-orange-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-orange-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0" 
    @click="more = !more"
  type="button">
  Show less
</button>
    </span>
      </div>
      
    </div>
    <div class="w-1/2 text-3xl text-slate-500">
      <div>Where to buy</div>
      <div class="flex flex-wrap items-center text-base">
      <div class=" bg-slate-700 md:w-2/5 w-full hover:bg-slate-500 p-2 text-slate-300 text-center mx-2 mt-2 rounded-md" v-for="store in game_detail.stores">
        {{ store.store.name }}
      </div>
      </div>
    </div>
    </div>
    <div>
      <div class="timeline_games overflow-x-scroll scroll-bar">
        <div class="mt-5 flex justify-between relative" :style="`width:${time_line.length * 30}%;`">
          <div class="inline md:w-52 w-24 md:h-80 h-48 mx-5" v-for="detail in time_line">
          <div class="md:w-52 w-24 md:h-48 h-24">
            <div class="md:h-40 h-20 w-full shadow-md shadow-black overflow-hidden">
              <a :href="`/games/${detail.slug}-${detail.id}`">
              <img class="h-full w-full left" :src="detail.background_image" alt="" loading="lazy">
              </a>
            </div>
            <div class="relative w-full md:h-8 h-4">
              <div class="text-orange-500 text-left absolute bottom-0 left-2 font-bold">
                {{ detail.released}}
              </div>
              <a :href="`/games/${detail.slug}-${detail.id}`">
              <div class="w-3 h-3 rounded-full bg-orange-500 absolute -bottom-6 -black z-10 left-6">
                
              </div>
            </a>
            </div>
          </div>
          <div class="text-left md:mt-10 mt-8">
            <div>{{detail.name}}</div>
          </div>
          </div>
        <div class="absolute md:bottom-24 bottom-16 w-full">
          <div class="w-full h-2 bg-orange-500"></div>
          <div class="w-full h-0.5 bg-orange-500 mt-2"></div>
        </div>
        </div>
      </div>
    </div>


    <!-- trailer -->
    <div v-if="trailer">
      <div class="mt-12">
      {{trailername}}
    </div>
    <div class="md:mx-12 mx-6 rounded-md">
      <video class="w-full h-full rounded-2xl" :src="trailerurl" controls></video>
    </div>
    </div>
    <!-- loading -->
    <div v-if="loading" class="flex justify-center items-center bg-black absolute inset-0" style="z-index:999">
      <div class="w-full h-screen absolute top-0 flex justify-center items-center">
        <div role="status">
  <svg aria-hidden="true" class="w-8 h-8 mr-2 text-black animate-spin fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
  <span class="sr-only">Loading...</span>
</div>
      </div>
      
    </div>
  </div>
</template>
<script>
// tw element
import {Modal,Ripple,initTE,Collapse,} from "tw-elements";

//  ------------
import axios from 'axios'
import $ from 'jquery'
import platform from '../components/platform'
import {startLoading,reload} from '../functions/startLoading'



export default {
components:{platform},
  data(){
      return{
          game_id:null,
          game_detail:[],
          first_screenshots:[],
          end_screenshots:[],
          time_line:[],
          released:'',
          loading:false,
          trailername:null,
          trailerurl:null,
          trailer:false,
          screenshots:false,
          firs_about:'',
          end_about:'',
          more:false
      }
  },
  mounted(){
  initTE({ Modal, Ripple,Collapse });
    $('.back').click(function(){
    $('.control-box').addClass("opacity-0")
    $('.cover').addClass("opacity-0 hidden")
    $('.full').removeClass('full')
    })
      startLoading()
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      this.get_game_id()
      this.getGame(this.game_id,options);
      this.getscreenshots(this.game_id)
      this.getfullapi(`https://api.rawg.io/api/games/${this.game_id}/game-series?key=78019d6b3e5a4c02aa7dc916416a0afc`)
      this.gettrailers(this.game_id)
  },
methods: {
  async getGame(id,options) {
    this.loading = true;

    try {
      const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=78019d6b3e5a4c02aa7dc916416a0afc`);
      this.$store.state.status = response.status
      this.game_detail = response.data
      var about_game_test = this.game_detail.description_raw
      this.firs_about =  about_game_test.substring(0, 200);
      this.end_about = about_game_test.substring(200);
      console.log(this.firs_about)
      console.log(this.end_about)
      var today  = new Date(this.game_detail.released)
      this.released = today.toLocaleDateString("en-US", options)
    } catch (error) {
      console.error(error);
    }finally {
      this.loading = false;
    }
  },
  async getscreenshots(id) {
    this.loading = true;
    try {
      const response = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=78019d6b3e5a4c02aa7dc916416a0afc`);
      if(response.data.results.length > 6){
        this.screenshots = true
      }
      let screenshot = response.data.results.slice(0,6);
      this.first_screenshots = screenshot.slice(0,3)
      this.end_screenshots = screenshot.slice(3,6)
    } catch (error) {
      console.error(error);
    }finally {
      this.loading = false;
    }
  },
  async getfullapi(api){
    this.loading = true;
    try {
    let response = await axios.get(api);
    let data = response.data.results
    let next = response.data.next
    for(;next != null;){
    let next_data = await axios.get(next);
    let data2 = next_data.data.results
    next = next_data.data.next
    data = [...data,...data2]
    }
    this.time_line = data
    } catch (error) {
      console.error(error);
    }finally {
      this.loading = false;
    }

  },
  async gettrailers(id){
    this.loading = true;
    try {
      const response = (await axios.get(`https://api.rawg.io/api/games/${id}/movies?key=78019d6b3e5a4c02aa7dc916416a0afc`)).data.results
      if(response.length > 0 ){
        this.trailername = response[0].name
        this.trailerurl = response[0].data.max
        this.trailer = true
      }else{
        console.log("it hasn't trailer")
        this.trailer = false
      }
      

    } catch (error) {
      console.error(error);
    }finally {
      this.loading = false;
    }
  },get_game_id(){
    let name_title = this.$route.params.slug
    let lastIndex = name_title.lastIndexOf("-");
    this.game_id = name_title.substring(lastIndex + 1);
  },modal_btn(img_url){
    $("#modal_img").attr('src','')
    $("#modal_img").attr('src',img_url)
    $('#download').attr('herf',img_url)
  }
}

}
</script>
<style scoped>
.text{
color:"#0f0f0f";
}
.full{
position: absolute;
inset: 0;
width: 100%;
height: 100%;
margin:0;
transition: all 5s;
z-index:25;
}
</style>