<template>
    <div>
        <div class="bg-box mt-12 relative">
            <div class="text-3xl ">Say hello</div>
            <div>Lorem Ipsum is simply dummy text of the printing .</div>
            <form action="" class="w-1/2 mx-auto mt-16 z-10 relative">
                <div class="flex text-left">
                <div class="w-1/2">
                     <label for="First Name" class="text-left text-box">First Name</label>
                     <br>
                     <input id="First Name" class="bg-box2 p-1 w-11/12 rounded-md border-2 mt-2 outline-none border-slate-500" type="text">
                </div>
                <div class="w-1/2">
                     <label for="First Name" class="text-left text-box">Last Name</label>
                     <br>
                     <input id="First Name" class="bg-box2 p-1 w-full rounded-md border-2 mt-2 outline-none border-slate-500" type="text">
                </div>
            </div>
            <div class="text-left mt-5">
                <div class="" >
                    <label class="text-left z-10 text-box" for="Email">Email Address</label>
                </div>
                <div class="z-10">
                    <input class="bg-box2 p-1  w-full rounded-md border-2 mt-2 outline-none border-slate-500" type="email" name="" id="Email">
                </div>
            </div>
            <div class="text-left mt-5 z-10">
                <label class="text-left text-box" for="Message">Message</label>
                <br>
                <textarea id="Message" class="bg-box2 p-2 w-full rounded-md border-2 mt-2 outline-none border-slate-500" rows="10" cols="100" name="comment"></textarea>
            </div>
            <div class="mt-12 py-12 text-right">
                <input type="submit" class="px-5 py-2 bg-orange-500 rounded-md" value="Get in touch">
            </div>
            </form>
            <img class="absolute top-0 right-0 z-0 w-4/5" src="../../img/icon/Vector3.png" alt="">
            <img class="absolute bottom-0 left-0 z-0 w-2/5" src="../../img/icon/Vector4.png" alt="">
        </div>
    </div>
</template>
<style scoped>
.text-box{
    color: #4F4F4F;
}
.bg-box2{
    background-color: #4f4f4f73;
}
</style>