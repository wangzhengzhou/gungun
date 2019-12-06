<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" 
    @click="$emit('click')"><!-- @click="$emit('click')"等同于在methods里面写事件this.$emit('click'),标签中可以不用this -->
        <g-icon v-if="icon&&!loading" :name="icon" class="icon"></g-icon>
        <!-- <svg class="icon" v-if="icon"><use :xlink:href="`#i-${icon}`"></use></svg> -->
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>
<script lang="ts">
import Vue from 'vue'
import Icon from './icon.vue'
export default Vue.extend({
    //props:['icon','iconPosition']
    components:{
        'g-icon' : Icon
    },
    props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return value==='left'||value==='right'
                }//验证器，验证iconPosition为left或right中的一个否则报错
            }
        }    
})
</script>
<style lang="scss" scoped>
    @keyframes spin{/* 自定义动画spin */
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .loading{
        animation: spin 1s infinite linear;/* infinite无限滚动，linear线性动 */
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 15px;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        vertical-align: middle;
        align-items: center;
        .icon{
            order: 1;
            margin-right: 4px;
        }
        .content{
            order: 2
        }
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
        &.icon-right{
            .content{
                order: 1;
            }
            .icon{
                order: 2;
                margin:0 0 0 4px
            }
        }
    }
</style>