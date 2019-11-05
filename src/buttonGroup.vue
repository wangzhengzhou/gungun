<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        mounted(){
            for(let node of this.$el.children){
                let name = node.nodeName.toLowerCase()
                if(name!=='button'){
                    console.warn(`g-gutton-group 的子元素应该全是 g-gutton,但你写的是 ${name}`)//判断用户的写法是否标准，以免引起css混乱
                }
            }
        }
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