<template>
  <div class="about">
    <box_1/>
    <box_2/>
    <box_3/>
    <box_4/>
    <!-- <slider/> -->
  </div>
</template>

<script>
import box_1 from '../components/about/box1.vue' 
import box_2 from '../components/about/box2.vue' 
import box_3 from '../components/about/box3.vue' 
import box_4 from '../components/about/box4.vue' 
// import slider from '../components/slider.vue' 
export default {
  name:"about",
  components:{
    box_1,box_2,box_3,box_4,
  }
}
</script>