<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
  <template>
    <div  class="pt-48">
      <img src="https://jariz.github.io/vibrant.js/examples/3.jpg" alt="">
    </div>
  </template>
  
  <script>
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import {extractColorsFromImage} from '../functions/get-color'

  export default {
    mounted() {
    this.getColorPalette('https://jariz.github.io/vibrant.js/examples/3.jpg');
  },
  methods: {
    async getColorPalette(url) {
      try {
        const imageUrl = url; // آدرس تصویر مورد نظر شما
        const colors = await extractColorsFromImage(imageUrl);
        console.log(colors);
      } catch (error) {
        console.error('خطا در استخراج رنگ‌ها:', error);
      }
    }
  },
  };
  </script>
  
  <!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
  <style>
  </style>