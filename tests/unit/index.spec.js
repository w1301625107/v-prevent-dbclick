/* eslint-disable */
import { expect } from "chai"
import { mount, render } from "@vue/test-utils"
import PreventDbClick from "../../src/lib/index.vue"
import Vue from "vue"
Vue.config.productionTip = false

function noop() {}

describe("v-prevent-dbclick测试", () => {
  describe("基本测试", () => {
    let clickCount = 0
    let slotPropFc = {}
    const clickTest = (slotProp) => {
      slotPropFc = slotProp
      clickCount++
    }
    const wrapper = mount(PreventDbClick, {
      scopedSlots: {
        default: function(arg) {
          return this.$createElement(
            "button",
            {
              on: {
                click: () => clickTest(arg),
              },
              attrs: {
                id: "foo",
              },
            },
            "click here"
          )
        },
      },
    })

    it("first click",  (done) => {
      wrapper.find("#foo").trigger("click")
      expect(clickCount).to.equal(1)
      expect(wrapper.vm.status).to.equal(true)
      done()
    })

    it("double click",  (done) => {
      wrapper.find("#foo").trigger("click")
      expect(clickCount).to.equal(1)
      done()
    })

    it("release",  (done) => {
      slotPropFc.release()
      expect(wrapper.vm.status).to.equal(false)
      wrapper.find("#foo").trigger("click")
      expect(clickCount).to.equal(2)
      done()
    })

    it("customInfo",  (done) => {
      slotPropFc.sendInfo('test')
      expect(wrapper.vm.customInfo).to.equal('test')
      done()
    })
  })



  describe("debounce", () => {
    let clickCount = 0

    const wrapper = mount(PreventDbClick, {
      propsData:{
        debounce:1000
      },
      scopedSlots: {
        default: function(arg) {
          return this.$createElement(
            "button",
            {
              on: {
                click: () => clickCount++,
              },
              attrs: {
                id: "foo",
              },
            },
            "click here"
          )
        },
      },
    })

    it("click",  (done) => {
      wrapper.find("#foo").trigger("click")
      expect(clickCount).to.equal(0)
      expect(wrapper.vm.status).to.equal(false)
      setTimeout(() => {
        expect(clickCount).to.equal(1)
        done()
      }, 1100);
    })
  })

  
})
