<template>
    <div class="nav bg-blur rounded-b-md w-100 fixed md:right-5 right-0 left-0 top-0">
        <nav class="w-100   items-center flex justify-between md:m-8 m-2 p-0">
            <div class="md:text-xl font-bold">
                <img class="w-10 h-10" src="../../public/logo.png" alt="logo">
            </div>
            <div class="flex items-center ">
                <div class="md:mx-10 md:text-base mx-2 text-xs">
                <router-link to="/">
                <div>
                    <div>Home</div>
                    <div class="line">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                </router-link>
                
                </div>
                <div class="md:mx-10 md:text-base mx-2 text-xs">
                    <router-link to="/About">
                <div>
                    <div>About us</div>
                    <div class="line">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                </router-link>
                </div>
                <div class="md:mx-10 md:text-base mx-2 text-xs">
                    <router-link to="/Portfolio">
                <div>
                    <div>Portfolio</div>
                    <div class="line">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                </router-link>
                </div>
                <div class="md:mx-10 md:text-base mx-2 text-xs">
                    
                    <router-link to="/games">
                <div>
                    <div>games</div>
                    <div class="line">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                </router-link>
                
                </div>
                <div class="md:mx-10 md:text-base mx-2 text-xs"><router-link to="/Contact-us">
                    <button type="button" class="inline-block md:py-4 py-2 md:px-8 px-4 rounded-lg bg-orange-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-amber-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-amber-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-amber-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Contact us</button>
                <!-- <button class=" bg-orange-500 md:py-4 py-2 md:px-8 px-4 rounded-lg">
                    Contact us
                </button>
            -->
            </router-link>
            </div>
            </div>
        </nav>
        
    </div>
</template>
<style spoce>
.nav{
    z-index: 999;
}
.line{
    width: 80%;
    height: 5px;
    border-radius: 5px;
    display: flex;
    opacity: 0;
    transition: opacity 0.2s;
}
.line div:nth-child(1){
    width: 50%;
    height: 5px;
    border-radius: 5px;
    background-color: #DC7000;
    transition: all 2s;
}
.line div:nth-child(2){
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-left: 2px;
    background-color: #DC7000;
    animation: dot 3s linear infinite;
    opacity: 1;
}
@keyframes dot {
    25%{opacity: 1;}
    50%{opacity: 0;}
    75%{opacity: 1;}
    100%{opacity: 0;}
}
</style>