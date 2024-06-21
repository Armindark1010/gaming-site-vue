<template>
  <div class="home text-left">
    <!-- box1 -->
    <box_1/>
    <!-- box2 -->
    <box_2/>
    <!-- box3 -->
    <box_3/>
    <!-- box4 -->
    <box_4/>
    <!-- box5 -->
    <box_5/>
  </div>
</template>

<script>
import box_1 from '../components/home/box1.vue'
import box_2 from '../components/home/box2.vue'
import box_3 from '../components/home/box3.vue'
import box_4 from '../components/home/box4.vue'
import box_5 from '../components/home/box5.vue'
import axios from 'axios'

export default {
  name: "home",
  components:{box_1,box_2,box_3,box_4,box_5},
  data() {
    return {
    };
  },
  mounted() {
    
  },
  methods: {
  }
};

</script>
<style>

</style>
