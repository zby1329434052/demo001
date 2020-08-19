<template>
        <div>
            <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler"></baidu-map>
        </div>
</template>

<script>
    export default {
        name: "BaiduMapPath",
        data () {
            return {
                center: {lng: 0, lat: 0},
                zoom: 3
            }
        },
        methods: {
            handler ({BMap, map}) {
                console.log(BMap, map)
                this.center.lng = 118.777332
                this.center.lat = 32.088811
                this.zoom = 18
            }
        }
    }
</script>

<style scoped>
    .map {
        width: 100%;
        height: 750px;
    }
</style>