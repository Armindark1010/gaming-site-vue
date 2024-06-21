<template>
    <div class="mt-12">
        <div class="flex md:mx-12 mx-6">
            <div class="w-1/2">
                <div :class="{'border-t-2 border-white md:mt-20 md:pt-20 mt-10 pt-10':index == 1}" v-for="(box1,index) in news_first">
                    <div>
                        <img class="w-full h-auto" :src="require(`../../img/news/${box1.url}`)" alt="">
                    </div>
                    <div class="flex items-center mt-5">
                        <div class="md:px-5 px-3 md:py-2 py-1 bg-blue-700 mr-2">{{ box1.send }}</div>
                        <div>{{ box1.time }}</div>
                    </div>
                    <div class="mt-5 md:text-3xl text-base text-left">
                        {{ box1.descripyion }}
                    </div>
                    <div class="mt-5 md:text-base text-xs text-left">
                        {{ box1.content }}
                    </div>
                </div>
            </div>
            <div class="w-1/2 ml-5 grid content-between"> 
                    <div class="flex h-full items-center md:mb-12 mb-6" v-for="box2 in news_end">
                    <div class="md:w-1/5 w-1/2">
                        <img class="w-full h-auto" :src="require(`../../img/news/${box2.url}`)" alt="">
                    </div>
                    <div class="md:w-4/5 w-1/2 md:ml-5 ml-2">
                        <div class="md:flex items-center">
                            <div class="md:px-5  px-1 rounded-xl md:rounded-none md:py-2 py-1 md:text-base text-xs bg-blue-700 md:mr-2">{{ box2.send }}</div>
                            <div class="md:text-base text-xs">{{ box2.time }}</div>
                        </div>
                        <div class="text-left md:text-base text-xs md:mt-5 mt-2">
                            {{ box2.descripyion }}
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            news:[
                {url:'Rectangle271.png',time:'1min',send:"John smash",descripyion:"Lorem Ipsum is simply dummy text dummy text ?",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
                {url:'Rectangle272.png',time:'2min',send:"John smash",descripyion:"Lorem Ipsum is simply dummy text dummy text ?",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
                {url:'Rectangle273.png',time:'3min',send:"John smash",descripyion:"Lorem Ipsum is simply dummy text dummy text ?",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
                {url:'Rectangle274.png',time:'4min',send:"John smash",descripyion:"Lorem Ipsum is simply dummy text dummy text ?",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
                {url:'Rectangle275.png',time:'5min',send:"John smash",descripyion:"Lorem Ipsum is simply dummy text dummy text ?",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
                {url:'Rectangle276.png',time:'6min',send:"John smash",descripyion:"Lorem Ipsum is simply dummy text dummy text ?",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
                {url:'Rectangle277.png',time:'7min',send:"John smash",descripyion:"Lorem Ipsum is simply dummy text dummy text ?",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
                {url:'Rectangle278.png',time:'8min',send:"John smash",descripyion:"Lorem Ipsum is simply dummy text dummy text ?",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
                {url:'Rectangle279.png',time:'9min',send:"John smash",descripyion:"Lorem Ipsum is simply dummy text dummy text ?",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
            ],
            news_first:[],
            news_end:[]
        }
    },
    mounted() {
    this.splitArray();
  },
  methods: {
    splitArray() {
      this.news_first = this.news.slice(0, 2);
      this.news_end = this.news.slice(2);
    }
  }
}
</script>