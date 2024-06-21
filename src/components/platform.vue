<template>
    <div>
        <span class="mx-1" v-for="icon in data">
                    <font-awesome-icon
                      icon="fa-brands fa-windows"
                      v-if="icon.platform.id == 1"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-playstation"
                      v-if="icon.platform.id == 2"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-xbox"
                      v-if="icon.platform.id == 3"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-android"
                      v-if="icon.platform.id == 8"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-apple"
                      v-if="icon.platform.id == 5"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-linux"
                      v-if="icon.platform.id == 6"
                    />
                    <font-awesome-icon
                      icon="fa-brands fa-neos"
                      v-if="icon.platform.id == 7"
                    /></span>
    </div>
</template>

<script>

export default{

    name:'alert',

    props:["data"]

}

</script>