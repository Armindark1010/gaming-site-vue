<template>
    <div>
        <div class=" md:mx-12 columns-3 mx-6 pt-28">
            <div v-for="game in games" class="mt-5 px-5">
            <router-link :to="`/games/${game.slug}-${game.id}`">
              <div>
                <div>
                  <img
                    class="w-full h-full rounded-t-md"
                    :src="game.background_image"
                    alt="please wait"
                    loading="lazy"
                  />
                </div>
                <div class="p-2 bg-black rounded-b-md">
                    <!-- system icon -->
                  <div class="mt-2 text-left">
                    <span class="mx-1" v-for="icon in game.parent_platforms">
                    <font-awesome-icon
                      icon="fa-brands fa-windows"
                      v-if="icon.platform.id == 1"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-playstation"
                      v-if="icon.platform.id == 2"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-xbox"
                      v-if="icon.platform.id == 3"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-android"
                      v-if="icon.platform.id == 8"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-apple"
                      v-if="icon.platform.id == 5"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-linux"
                      v-if="icon.platform.id == 6"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-neos"
                      v-if="icon.platform.id == 7"
                    />
                  </span>
                  </div>
                  <div class="mt-2 hover:text-slate-400 border-slate-600 border-t pt-2 text-3xl font-bold">
                    {{ game.name }}
                  </div>
                  <div class="flex text-center items-center justify-center mt-2 pt-2 border-slate-600 border-t">
              <span class="p-2"
                ><img
                  class="inline w-6 h-6"
                  src="../img/icon/fire-1.svg"
                  alt="" /></span
              ><span class="mr-2 md:text-base text-xs">{{
                game.ratings_count
              }}</span
              ><span class="md:text-base text-xs">Followers</span>
            </div>
                </div>
              </div>
            </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data(){
        return{
            games:[]
        }
    },
    methods: {
    async getGames() {
      try {
        const response = await axios.get(
          "https://api.rawg.io/api/games?key=78019d6b3e5a4c02aa7dc916416a0afc"
        );
        this.games = response.data.results
        console.log(this.games)
      } catch (error) {
        console.error(error);
      }
    },
  },mounted() {
    this.getGames();
  },
}
</script>