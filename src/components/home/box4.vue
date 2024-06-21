<template>
    <div class="mt-36 bg-jungle">
      <div
        class="text-center md:text-3xl text-xl pt-24 md:w-1/2 w-11/12 mx-auto"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div class="flex text-center justify-center mt-16">
        <div class="md:w-1/2 w-11/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-wrap justify-center icone-box mt-20 mb-16">
          <div class="w-1/4 text-center" v-for="icon_data in icon_box">
            <div
              class="flex justify-center items-center cursor-pointer rounded-full mx-auto mt-5 bg-white w-12 h-12"
            >
              <img :src="require(`../../img/icon/${icon_data.url}`)" alt="" />
            </div>
            <div class="mt-6 cursor-pointer">{{ icon_data.text_icon }}</div>
            <div>
              <img
                class="mt-5 mx-auto cursor-pointer"
                src="../../img/icon/arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "box4",
  data() {
    return {
      icon_box: [
        { url: "smartphone.png", text_icon: "Mobile Game Development" },
        { url: "pc.png", text_icon: "PC Game Development" },
        { url: "ps4.png", text_icon: "PS4 Game Development" },
        { url: "vr-glasses.png", text_icon: "AR/VR Solutions" },
        { url: "desktop.png", text_icon: "AR/ VR design" },
        { url: "3d-cube.png", text_icon: "3D Modelings" },
      ],
    }
}
}
      
</script>

<style scoped>
.bg-jungle {
  background-size: cover;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    rgba(0, 0, 0, 0.54) url(../../img/home/db4d123c4b390965f684f22d4bf13849-1.png);
}
</style>