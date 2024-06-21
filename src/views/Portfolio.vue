<template>
    <div class="Portfolio">
        <box_1/>
        <box_2/>
        <box_3/>
        <box_4/>
    </div>
</template>
<script>
import box_1 from '../components/portfolio/box1.vue' 
import box_2 from '../components/portfolio/box2.vue' 
import box_3 from '../components/portfolio/box3.vue' 
import box_4 from '../components/portfolio/box4.vue' 

export default {
    components:{
    box_1,box_2,box_3,box_4
  },
    data(){
    }
}
</script>