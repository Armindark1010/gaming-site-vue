<template>
    <div id="box1" class="box flex">
      <!-- linebox1 -->
      <div class="linebox w-1/12 flex items-center justify-center">
        <div id="line1" class="md:w-2 w-0.5 h-0 rounded-lg" style="background: linear-gradient(#39289F, #ffffff, #39289F);"></div>
      </div>
      <!-- itembox1 -->
      <div id="itembox1" class="itembox">
      <div class="flex">
      <div class="w-1/2 md:mt-56 mt-20">
        <div class="text-orange-500 md:text-base">Proved By prodesigner</div>
        <div class="md:text-4xl md:mt-10 text-xl md:mr-24 h-20 mt-5">
          <span class="text-orange-500">Welcome to :</span><br>
          <span id="test"></span>
        </div>
        <div class="md:text-sm md:mt-16 md:pr-28 text-xs mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </div>
        <div class="md:mt-16 mt-6">
          <button class="btn-orange group/btn-orange px-4 py-2 rounded-3xl flex justify-center items-center">
            <div>Get more details </div>
            <div class="flex items-center text-black">
              <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                <path class="octicon-chevrow-stem" style="stroke-width: 1.5px;" stroke="currentColor" d="M1.75 8H11" stroke-width="" stroke-linecap="round"></path></svg>
            </div>
          </button>
        </div>
      </div>
      <div class="w-1/2 relative">
        <img
          class="top-0 w-full right-0 bottom-0 m-0"
          src="../../img/home/joy_stick-1.png"
          alt=""

        />
        <img
          style="left: 10%"
          class="md:top-1/4 md:w-auto md:h-auto absolute top-10 w-12 h-12 item-1"
          src="../../img/home/cry-1.png"
          alt=""
        />
        <img
          class="absolute item-2 md:top-2/4 md:-left-24 md:w-auto md:h-auto top-1/3 -left-16 w-16 h-6"
          src="../../img/home/unity-1.png"
          alt=""
        />
        <img
          class="md:w-auto item-3 md:h-auto md:top-1/3 left-1/2 absolute w-10 h-10 top-12"
          src="../../img/home/unreal-1.png"
          alt=""
        />
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  mounted(){
    gsap.to('#line1',{delay:1,height:"70%"})
    var typed = new Typed("#test",{
            strings:["immerse yourself in epic gaming adventures","unleash your gaming potential","discover the thrill of virtual worlds","embark on thrilling gaming experiences","master the art of gaming","explore new dimensions of gaming","dive into a world of gaming excitement","experience gaming like never before","unravel the secrets of virtual realms","engage in epic gaming quests"],
            typeSpeed:150,
            backSpeed:150,
            loop:true,
        })
  }
}
</script>
<style spoced>
.octicon-chevrow-stem{
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  transition: stroke-dashoffset 0.2s linear;
}
.btn-orange:hover  .octicon-chevrow-stem  {
    animation:animate-vector 0.5s linear both;
}
@keyframes animate-vector{
           from{
            stroke-dashoffset: 30;
            stroke-dasharray: 30;
           }
           to{
            stroke-dashoffset: 1;
            stroke-dasharray:  0;
           }
        }
/* #line1{
  height: 0%;
} */
</style>