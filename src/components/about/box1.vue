<template>
        <div class=" md:flex">
      <div class="md:w-1/2 text-left md:ml-12 ml-6 md:mt-52 md:pt-0 pt-14">
        <div>
          <span class="cursor-pointer">
            <router-link to="/">Home</router-link></span>
          <span class="mx-2">></span>
          <span class="text-orange-500">About us</span>
        </div>
        <div class="md:text-3xl text-base md:mt-12 mt-6 md:w-1/2 w-11/12">
          Lorem Ipsum is simply dummy text of the printing and.
        </div>
        <div class="md:mt-12 mt-6 md:w-1/2 w-11/12 md:text-base text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </div>
        <div class="md:mt-12 mt-6 mb-12">
          <button class="flex items-center btn-orange px-4 py-2 rounded-3xl">Get in touch <img class="ml-2" src="../../img/icon/arrow-right.png" alt=""></button>
        </div>
      </div>
      <div class="md:w-1/2 w-full relative md:mt-28 mt-14 md:h-auto h-64">
        <div style="" class="overflow" >
          <div :id="`img-${index+1}`" class="item" :class="{'show': index < 1}" v-for="(img,index) in slider1">
            <img class="w-full h-full absolute inset-0" :src="require(`../../img/about/${img.url}`)" alt="">
            {{ index }}
          </div>
          <div class="flex items-center justify-center number-img md:w-28 h-10 rounded-md absolute md:left-1 left-5 right-5 bottom-1 bg-blur">
          <div id="arrow-left" class="mr-2 cursor-pointer"><img src="../../img/icon/arrow-left.png" alt=""></div>
          <div><span id="num-img">1</span> of {{slid_number}}</div>
          <div id="arrow-right" class="ml-2 cursor-pointer"><img src="../../img/icon/arrow-right.png" alt=""></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  data(){
    return{
      slider1:[
        {url:"1_(11).png"},
        {url:"1_(12).png"},
        {url:"1_(12).jpg"},
        {url:"Rectangle6.png"},
      ],
      slid_number:null
    }
  },
  mounted(){
    this.slid_number = this.slider1.length
    var slid_number = this.slider1.length
    var id = $(".show").attr("id")
    let lastIndex = id.lastIndexOf("-");
    let trimmedData = id.substring(lastIndex + 1);
    $("#arrow-right").click(function(){
      if(trimmedData < slid_number){
        trimmedData ++
      }
      else{
        trimmedData = 1
      }
      $(".show").removeClass("show")
      $(`#img-${trimmedData}`).addClass("show")
      $("#num-img").text(trimmedData)
    })
    $("#arrow-left").click(function(){
      if(trimmedData > 1){
         trimmedData --
      }
      else{
        trimmedData = slid_number
      }
      $(".show").removeClass("show")
      $(`#img-${trimmedData}`).addClass("show")
      $("#num-img").text(trimmedData)
    })
  }
}
</script>
<style scoped>
.show{
  opacity: 1 !important;

}
.item{
  opacity: 0;
  transition:opacity 0.5s ;
}
.next{
  animation: next 2s;
}
.ex{
  animation: ex 2s;
  transform: translateX(100%);
}
@keyframes next {
  from{transform: translateX(-100%);}
  to{transform: translateX(0%);}
}
@keyframes ex {
  from{transform: translateX(0%);}
  to{transform: translateX(100%);}
}
</style>