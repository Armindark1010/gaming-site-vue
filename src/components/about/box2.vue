<template>
    <div class="text-left">
            <div class="mt-36 mx-12  text-2xl">
        Why work with us
    </div>
    <div class="boxes mt-16 md:flex md:mx-12 mx-6">
        <div class="bg-box md:w-2/6 md:p-0 py-3  mx-6  rounded-xl mt-6" :class="{'md:mx-8': index == 1,'md:mx-0': index !== 1}" v-for="(box,index) in color">
            <div class="ml-12 w-36 p-2 mt-16 rounded-md text-sm"  :style="box.co">Lorem ipsum</div>
            <div class="mt-6 mx-12 ">Lorem Ipsum</div>
            <div class="mt-6 mb-12 mx-12 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
        </div>

    </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            color:[
                {co:"background: rgba(176, 0, 220, 0.11);"},
                {co:"background: rgba(220, 66, 0, 0.11);"},
                {co:"background: rgba(0, 220, 141, 0.11);"},
            ]
        }
    }
    
}
</script>