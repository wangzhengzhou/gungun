<template>
    <svg class="g-icon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:['name']
})
</script>
<style lang="scss" scoped>
        .g-icon{
            width: 1em;
            height: 1em;
            fill: rgba(60,134,255,0.8)/* 改变svg图标颜色 */
        } 
</style>