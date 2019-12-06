import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import buttonGroup from './buttonGroup'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttonGroup)

new Vue({
    el:"#app",
    data: {
        loading1:false,
        loading2:true,
        loading3:false
    }
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
try{
    {
        let Constructor = Vue.extend(Button)//把button组件变成构造函数
        const vm = new Constructor({
            propsData: {
                icon:"setting"
            }
        })//通过构造函数变成实例
        vm.$mount()//将实例挂载到页面上
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-setting')//主观判断我期待use的href为#i-setting
        vm.$el.remove()//测试完删除vm元素
        vm.$destroy()//删除vm对象
    }
    {
        let Constructor = Vue.extend(Button)//把button组件变成构造函数
        const vm = new Constructor({
            propsData: {
                icon:"setting",
                loading:true
            }
        })//通过构造函数变成实例
        vm.$mount()//将实例挂载到页面上
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')//主观判断我期待use的href为#i-loading
        vm.$el.remove()//测试完删除vm元素
        vm.$destroy()//删除vm对象
    }
    {
        const div = document.createElement('div')
        document.body.append(div)//需要页面渲染才能计算样式
        let Constructor = Vue.extend(Button)//把button组件变成构造函数
        const vm = new Constructor({
            propsData: {
                icon:"setting",
            }
        })//通过构造函数变成实例
        vm.$mount(div)//将实例挂载到页面上
        let svg = vm.$el.querySelector('svg')
        let order = window.getComputedStyle(svg).order
        expect(order).to.eq('1')//主观判断我期待svg的order为'1'
        vm.$el.remove()//测试完删除vm元素
        vm.$destroy()//删除vm对象
    }
    {
        const div = document.createElement('div')
        document.body.append(div)//需要页面渲染才能计算样式
        let Constructor = Vue.extend(Button)//把button组件变成构造函数
        const vm = new Constructor({
            propsData: {
                icon:"setting",
                iconPosition:'right'
            }
        })//通过构造函数变成实例
        vm.$mount(div)//将实例挂载到页面上
        let svg = vm.$el.querySelector('svg')
        let order = window.getComputedStyle(svg).order
        expect(order).to.eq('2')//主观判断我期待svg的order为'2'
        vm.$el.remove()//测试完删除vm元素
        vm.$destroy()//删除vm对象
    }
    {
        //mock
        const Constructor = Vue.extend(Button)//把button组件变成构造函数
        const vm = new Constructor({
            propsData: {
                icon:"setting",
            }
        })//通过构造函数变成实例
        vm.$mount()//将实例挂载到页面上
        let spy = chai.spy(function(){})//声明一个spy间谍函数
        vm.$on('click', spy)//事件触发时spy会替代执行函数
        let button = vm.$el
        button.click()//触发click
        expect(spy).to.have.been.called()//主观判断我期待spy间谍函数被调用
    }
} catch (error){
    window.errors = [error]
} finally {
    window.errors && window.errors.forEach((error) => {
        console.error(error.message);
    }); 
}
