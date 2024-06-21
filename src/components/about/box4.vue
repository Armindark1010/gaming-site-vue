<template>
    <div>
        <div class="mt-36 mx-12 text-left text-3xl">Our Team</div>
        <div class="flex items-center justify-between md:mx-12 mx-6 mt-12">
            <div v-for="box in our" class="bg-box w-1/5 rounded-lg">
                <div>
                    <img class="mt-5 mx-auto" :src="require(`../../img/about/${box.url}`)" alt="">
                    <div >{{ box.name }}</div>
                    <img class="mx-auto mb-5" src="../../img/about/COO.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            our:[
                {url:"Avatar1.png",name:"Avatar"},
                {url:"Beverly1.png",name:"Beverly"},
                {url:"Bill1.png",name:"Bill"},
                {url:"Claudia1.png",name:"Claudia"},
            ]
        }
    }
    }
</script>