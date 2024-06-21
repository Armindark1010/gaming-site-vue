<template>
    <div>
        <div class="w-full md:px-12 px-6 h-screen flex flex-wrap pt-16" :style="`
      background: linear-gradient(
    to top,
    #3b2a9e,rgb(0 0 0 / 0%)),
    url(${game_detail.background_image});background-size: 100% 100%;`">

    <div class="w-full h-48 flex justify-center ">
      <div class="bg-black h-52 w-52 crop relative" >
        <div class="crop bg-red-500 absolute inset-1 z-10">

        </div>
        <div class="crop rgb absolute inset-0 z-0"></div>
      </div>
    </div>
    <div class="w-1/3 h-20" v-for="screenshots in game_screenshots">
        <img class="h-full w-full" :src="screenshots.image" alt="">
    </div>
    
</div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            game_id:null,
            game_detail:[],
            game_screenshots:[]
        }
    },mounted(){
        let name_title = this.$route.params.slug
        let lastIndex = name_title.lastIndexOf("-");
        this.game_id = name_title.substring(lastIndex + 1);
        this.getscreenshots(this.game_id)
        this.getGame(this.game_id)
    },methods:{
        async getGame(id) {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=78019d6b3e5a4c02aa7dc916416a0afc`);
        this.game_detail = response.data
        console.log(this.game_detail.id)
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    },
        async getscreenshots(id) {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=78019d6b3e5a4c02aa7dc916416a0afc`);
        this.game_screenshots = response.data.results
        console.log(this.game_screenshots)
      } catch (error) {
        console.error(error);
      }
    }
    }
}
</script>

<style scoped>
.crop{
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}
.rgb{
  background: rgb(63,94,251);
background: linear-gradient(0deg, rgba(63,94,251,1) 0%, rgba(212,57,11,1) 15%, rgba(174,164,67,1) 26%, rgba(70,232,97,1) 45%, rgba(75,175,216,1) 81%, rgba(252,70,107,1) 100%);
animation: rgbchange 10s;
}
@keyframes rgbchange{
  0%{background: linear-gradient(0deg, rgba(63,94,251,1) 0%, rgba(212,57,11,1) 15%, rgba(174,164,67,1) 26%, rgba(70,232,97,1) 45%, rgba(75,175,216,1) 81%, rgba(252,70,107,1) 100%)},
  100%{background: linear-gradient(360deg, rgba(63,94,251,1) 0%, rgba(212,57,11,1) 15%, rgba(174,164,67,1) 26%, rgba(70,232,97,1) 45%, rgba(75,175,216,1) 81%, rgba(252,70,107,1) 100%)}
}
</style>