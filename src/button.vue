<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg class="icon" v-if="icon"><use :xlink:href="`#i-${icon}`"></use></svg>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>
<script>
    export default {
        props:['icon','iconPosition']        
    };
</script>
<style lang="scss" scoped>
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