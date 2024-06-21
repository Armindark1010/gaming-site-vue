<template>
  <div class="box5">
    <div class="text-center mt-36 text-3xl font-bold">Our Recent Projects</div>
    <div class="mt-2 w-1/3 text-center mx-auto">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
    <div class="flex flex-wrap md:mx-12 mx-6 mt-16">
      <div
        class="md:h-52 h-28 px-3 md:mt-5 mt-2"
        v-for="(imgs, index) in Our_Recent"
        :class="{
          'w-1/3': index < 3,
          'w-1/5': index === 3,
          'w-402': index > 3,
        }"
      >
        <img
          class="md:h-52 h-28 w-full"
          :src="require(`../../img/home/${imgs.url}`)"
          alt=""
        />
      </div>
    </div>
    <div class="mt-16 text-center">
      <button
        class="transparent-btn md:p-3 md:text-base p-2 text-xs rounded-xl"
      >
        SEE ALL
      </button>
    </div>
  </div>
</template>
<script>
export default {
    name:"box5",
    data(){
        return{
            Our_Recent:[
            { url: "Rectangle-15.png" },
            { url: "Rectangle-16.png" },
            { url: "Rectangle-17.png" },
            { url: "Rectangle-19.png" },
            { url: "Rectangle-18.png" },
            { url: "Rectangle-20.png" },
      ],
        }
    }
}
</script>