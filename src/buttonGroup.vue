<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        
    })
</script>
<style lang="scss" scoped>
    .button-group{
        display: inline-flex;
        vertical-align: middle;
        .g-button{
            border-radius: 0;
            margin-left: -1px;
            /* &:not(:first-child){
                border-left: none;
            } */
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>