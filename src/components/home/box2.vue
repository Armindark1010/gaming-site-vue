<template>
  <div id="box2" class="box flex">
    <!-- line2 -->
    <div class=" hidden w-1/12 md:flex flex-col items-center justify-center">
      <div class="text-3xl text-slate-300 relative z-10">
        <font-awesome-icon icon="fa-solid fa-headset" class="z-10 relative" />
        <div class="bg-black blur-sm absolute inset-0 z-0">

        </div>
      </div>
      <div
        id="line2"
        class="md:w-2 w-0.5 h-4/5 rounded-lg mt-3"
        style="background: linear-gradient(#39289f, #000000, #39289f)"
      ></div>
    </div>
    
    <!-- itembox2 -->
    <div id="itembox2" class="itembox md:w-11/12 w-full">
      <div class="Currently-Trending-Games md:mr-12 mr-5 mt-10">
        <div class="flex justify-between items-center">
          <div class="md:text-xl">Currently Trending Games</div>
          <div>
            <button
              class="transparent-btn md:p-3 md:text-base p-2 text-xs rounded-xl"
            >
            <router-link to="/games">SEE ALL GAMES</router-link>
              
            </button>
          </div>
        </div>
        <div class="md:flex relative justify-center mt-5">
          <div v-for="(box,index) in games" :class="`item-${index}`"  class="relative text-center md:w-1/4 w-11/12 md:mt-0 mt-8 mx-2 md:block flex">
            <div class="w-1/12 flex justify-center items-center">
              <div
                id="line2"
                class="md:w-2 w-0.5 h-4/5 rounded-lg mt-3"
                style="background: linear-gradient(#39289f, #000000, #39289f)"
               ></div>
               <platform class="md:hidden block" :data="box.parent_platforms"/>
            </div>
            <router-link :to="`/games/${box.slug}-${box.id}`" class="w-11/12 relative">
            <div :style="`right:${20*index}%;`" class="absolute md:hidden md:h-36 md:w-52 -top-5 w-24 h-16 -z-10"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACaCAYAAAD2IufsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKuSURBVHgB7d0xahRRHMfx/3sJWNgotilcRNYbaKfewzNoIx5DIngN77CthX0iYixsJZWIuLPjzgSZR5yww4RAHvl8qmWG/aZadmfZ/CbF1tc3sWx+xzKnuN1u4nR/E8f338dJXIKmZo3N9O11LJp1PDn/hFs5Ph28jc8xg6Zmrc28XsejsSf9asaPT6GpWWtz+44Rd8ZOdm8lMZOmZq3NvGnj59jJNsVpzKSpWWszNxHHYyfXf8aPT6GpWWszdQ+OthcZ+00sUxt3u1dP3oujBzMvWP7R1LxpTQAAAAAAAAAAAAC4Wv3Pv/2zuaamkQFNzf+aRgY0NYumkQFNzaJpZEBTs2gaGdDULJpGBjQ1jQwAAAAAAAAAAAAAUAUjA5qaRgY0NY0MaGrubBoZ0NQsmkYGNDWLppEBTc2iaWRAU9PIAAAAAAAAAAAAAABVMDKgqWlkQFPTyICm5s6mkQFNzaJpZEBTs2gaGdDULJpGBjQ1jQwAAAAAAAAAAAAAUAUjA5qaRgY0NY0MaGrubBoZ0NQsmkYGNDWLppEBTc2iaWRAU9PIAAAAAAAAAAAAAABVMDKgqWlkQFPTyICm5s6mkQFNzaJpZEBTs2gaGdDULJpGBjQ1jQwAAAAAAAAAAAAAUIX+599fXsbzlONp28a97YHvOWK1eBcf4xI0NWtsppNX8biJeHH+CXspPiwOYxUzaGrW2sybiGdjT7ro+BSa049rXq9mbiMOxk52byUxk6Zmrc2cUvwYO9l9roqZNDVrbebuYmLs5EXHp9CcflzzejX7b5m6i4zu81P3VtK9eraPVw8P5/9BTc2b2AQAAAAAAAAAAACAq9X//Nsd7TU1z5rJHe01NYdmdkd7Tc2hmd3RXlNzaGZ3tNfUHJrZHe01NYdm/y2TO9prap41/wIADri93C8FtwAAAABJRU5ErkJggg==" alt=""></div>
              <div>
                <div class="relative">
                  <div class="animated-background md:h-60 h-32 rounded-t-md">
                      <img  :class="`w-full  h-full rounded-t-md img-${box.id}`" :src="box.background_image" alt="" loading="lazy">
                      <img  :class="`absolute inset-0 w-full  img-${box.id} opacity-0 h-full img-${box.id}-${index+1}`" v-for="(url,index) in box.short_screenshots" :src="url.image" alt="" loading="lazy">
                  </div>
                  <div class="absolute mb-2 inset-0 flex justify-between items-end" >
                        <div :class="`flex group/box-item items-end h-full w-full mx-1 item-${box.id}-${index+1}`" v-for="(screen,index) in box.short_screenshots" @mouseover="hover(box.id,index+1)">
                        <div class="bg-blur group-hover/box-item:bg-slate-700  h-1 w-full rounded-md hover:bg-slate-700"></div>
                  </div>
                  </div>
                </div>
                <div class="p-2 z-10 bg-blur relative rounded-b-md">
                  <div class="mt-2 text-left h-20">
                    <platform class="top md:block hidden" :data="box.parent_platforms"/>
                  </div>
                  <div class="mt-2 hover:text-slate-400 md:text-base text-xs border-slate-600 border-t pt-2 h-20 font-bold">
                    {{ box.name }}
                  </div>
                  <div class="md:flex text-center items-center justify-center mt-2 pt-2 border-slate-600 border-t">
              <span class="p-2"
                ><img
                  class="inline w-6 h-6"
                  src="../../img/icon/fire-1.svg"
                  alt="" /></span
              ><span class="mr-2 md:text-base text-xs">{{
                box.ratings_count
              }}</span
              ><br>
              <span class="md:text-base text-xs">Followers</span>
            </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>




    

  </div>
</template>
<script>
import axios from "axios";
import {startLoading,reload} from '../../functions/startLoading'
import platform from '../platform.vue'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: "box2",
  components:{platform},
  data() {
    return {
      img_and_fo: [
        {
          url: "Rectangle-23.png",
          Followers: 50,
        },
        {
          url: "Rectangle-24.png",
          Followers: 80,
        },
        {
          url: "Rectangle-25.png",
          Followers: 500,
        },
        {
          url: "Rectangle-26.png",
          Followers: 3,
        },
      ],
      games: [
        {},{},{},{}
      ],
    };
  },
  mounted() {
    this.getGames();
    startLoading();
//     const tl = gsap.timeline({
//   scrollTrigger: {
//     scrub: 1,
//     pin: true,
//     trigger: "#line2",
//     start: "50% 50%",
//     endTrigger: "#pin-windmill-wrap",
//     end: "bottom 50%",
//   },
// });
    // const te = gsap.timeline({delay:2,paused:true})
    // te.from(".item-0",{y:"-100",autoAlpha:0,duration:1,ease:"back.out(1.7)"})
    // te.from(".item-1",{y:"+100",autoAlpha:0,duration:1,ease:"back.out(1.7)"})
    // te.from(".item-2",{y:"-100",autoAlpha:0,duration:1,ease:"back.out(1.7)"})
    // te.from(".item-3",{y:"+100",autoAlpha:0,duration:1,ease:"back.out(1.7)"})
    // te.play()
  },
  methods: {
    async getGames() {

      try {
        const response = await axios.get(
          "https://api.rawg.io/api/games?key=78019d6b3e5a4c02aa7dc916416a0afc"
        );
        this.$store.state.status = response.status
        this.games = response.data.results.slice(0, 4);
        console.log(this.games)
      } catch (error) {
        console.error(error);
      }
    },hover(id,index){
        $(`.img-${id}`).removeClass("active").addClass("opacity-0")
        $(`.img-${id}-${index}`).addClass("active")
        console.log(`item-${id}-${index}`)
    }
}
}
</script>
<style scoped>
</style>