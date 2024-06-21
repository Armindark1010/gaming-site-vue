<template>
    <div class="">
        <div class="w-full bg-box mt-52 ">
            <div class="md:text-3xl text-base md:w-1/5 w-1/2 mx-auto pt-20">Trusted by Thousands of Happy Customer</div>
            <div class="md:w-1/3 w-10/12 mx-auto mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</div>
            <div class="overflow-hidden">
                <div :id="`box-${index + 1}`" :class="{'show':index == 0}" class="md:flex  block text-left md:mx-12 mx-6 md:mt-12  justify-center item" v-for="(box,index) in groupedProfiles()">
                    <div :class="{'md:mx-12':index == 1}" v-for="(box2,index) in box" class="md:w-1/3 w-full md:mt-0 mt-6 border-white hover:border-orange-500 hover:bg-black border-2 rounded-md p-5">
                    <div class="flex justify-between ">
                        <div class="flex items-center">
                            <img class="w-10 h-10 rounded-full" :src="require(`../../img/portfolio/${box2.img_url}`)" alt="">
                            <div class="ml-5">
                                <div>{{box2.name}}</div>
                                <div class="text-slate-600">{{box2.contry}}</div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <span>{{box2.score}}</span>
                            <span class="ml-2"><img src="../../img/icon/star.png" alt=""></span>
                        </div>
                    </div>
                    <div class="mt-5">
                        {{box2.about}}
                    </div>
                </div>
                </div>
            </div>
            <div class="flex justify-between items-center  py-12 md:mx-12 mx-6">
                <div class="flex -space-x-3">
                    <div class="w-8 h-4 rounded-full flex justify-between items-center " :id="`cer-${index+1}`" :class="{'cer': index == 0}" v-for="(box,index) in groupedProfiles()">
                        <div class="w-3 h-3 bg-white rounded-full"></div>
                        <div class="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
                <div class="flex mr-6">
                    <button id="ex" class="p-2 border-2 mr-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white rounded-full flex items-center justify-center"><font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
                    <button id="next" class="p-2 border-2  border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white rounded-full flex items-center justify-center">
                        <font-awesome-icon class="" icon="fa-solid fa-arrow-right" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery"
export default {
    data(){
        return{
            profile:[
                {name:"Viezh Robert",contry:"Warsaw, Poland",img_url:"Ellipse175.png",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",score:"5"},
                {name:"Viezh3 Robert",contry:"Warsaw, Poland",img_url:"Ellipse175.png",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",score:"5"},
                {name:"Yessica Christy",contry:"Shanxi, China",img_url:"Ellipse176.png",about:"Lorem Ipsum is simply dummy text of the printing and ",score:"4.5"},
                {name:"Yessica2 Christy",contry:"Shanxi, China",img_url:"Ellipse176.png",about:"Lorem Ipsum is simply dummy text of the printing and ",score:"4.5"},
                {name:"Viezh2 Robert",contry:"Warsaw, Poland",img_url:"Ellipse175.png",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",score:"5"},
                {name:"Yessica3 Christy",contry:"Shanxi, China",img_url:"Ellipse176.png",about:"Lorem Ipsum is simply dummy text of the printing and ",score:"4.5"},
                {name:"Yessica Christy",contry:"Shanxi, China",img_url:"Ellipse176.png",about:"Lorem Ipsum is simply dummy text of the printing and ",score:"4.5"},
                {name:"Yessica2 Christy",contry:"Shanxi, China",img_url:"Ellipse176.png",about:"Lorem Ipsum is simply dummy text of the printing and ",score:"4.5"},
                {name:"Viezh2 Robert",contry:"Warsaw, Poland",img_url:"Ellipse175.png",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",score:"5"},
                {name:"Yessica3 Christy",contry:"Shanxi, China",img_url:"Ellipse176.png",about:"Lorem Ipsum is simply dummy text of the printing and ",score:"4.5"},
                {name:"Kim Young Jou",contry:"Seoul, South Korea",img_url:"Ellipse177.png",about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",score:"3.5"},
            ]
        }
    },
  methods:{
    groupedProfiles(){
      const result = [];
      for (let i = 0; i < this.profile.length; i += 3) {
        result.push(this.profile.slice(i, i + 3));
      }
      return result;
    }
  },
  mounted(){
    var full_number = this.groupedProfiles().length
    console.log(full_number)
    var show_id = $(".show").attr("id")
    let lastIndex = show_id.lastIndexOf("-");
    let trimmedData = show_id.substring(lastIndex + 1);
    console.log(trimmedData)
    $("#next").click(function(){
      if(trimmedData < full_number){
        trimmedData ++
      }
      else{
        trimmedData = 1
      }
      $(".show").removeClass("show")
      $(".cer").removeClass("cer")
      $(`#box-${trimmedData}`).addClass("show")
      $(`#cer-${trimmedData}`).addClass("cer")
      console.log($(".show").attr("id"))
    })
    $("#ex").click(function(){
      if(trimmedData > 1){
         trimmedData --
      }
      else{
        trimmedData = full_number
      }
      $(".show").removeClass("show")
      $(".cer").removeClass("cer")
      $(`#box-${trimmedData}`).addClass("show")
      $(`#cer-${trimmedData}`).addClass("cer")
      console.log($(".show").attr("id"))
    })
  }
}
</script>
<style scoped>
.bg-active{
    background-color: #0F0901;
}
.show{
    display:flex !important;
    animation: show 2s;
}
@media only screen and (max-width: 600px){
    .show{
    display:block !important;
    animation: show 2s;
}
}
@keyframes show{
    from{transform: translateY(-100%);}
    to{transform: translateY(0%);}
}

.item{
    display: none;
}
.cer{
    background-color: rgb(249 115 22);
    z-index: 100;
}
.cer div {
    background-color: transparent;
}
</style>