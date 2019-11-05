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
        } 
</style>