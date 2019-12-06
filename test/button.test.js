const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

/* 行为驱动测试BDD：描述了button的一系列行为,由Mocha引入 */
describe('Button', () => {
    it('存在.', () => {//描述它存在
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {//描述它可以设置icon
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        /* expect(xxx).to.equal(yyy)期待xxx等于yyy也可简写为expect(xxx).to.eq(yyy) */
        /* 里面的to可省略，是虚词，如可以写成expect(xxx).eq(yyy) */
        /* expect([1,2]).to.deep.eq([1,2]) 当判断两个对象/数组时需要用deep，比较内部内容*/
        /* expect(xxx).to.have.property(yyy)判断xxx拥有yyy的属性 */
        /* expect(xxx).to.have.property(yyy).but.not.own.property(yyy)判断xxx拥有yyy的属性但是不拥有自己的属性yyy,是继承的属性 */
        vm.$destroy()
    })
    it('可以设置loading.', () => {//描述它可以设置loading
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
        vm.$destroy()
    })
    it('icon 默认的 order 是 1', () => {//描述icon默认的order是1
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })
    it('设置 iconPosition 可以改变 order', () => {//描述它可以设置iconPosition改变order
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {//描述它被点击可以触发click事件
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()

        const callback = sinon.fake();//callback等于sinon提供的fack函数（假函数，其知道自己是否被调用）
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})