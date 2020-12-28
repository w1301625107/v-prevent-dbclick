/* eslint-disable */
import { expect } from "chai"
import { mount } from "@vue/test-utils"
import Vue from "vue"
import help from "./group.spec.vue"
Vue.config.productionTip = false

describe("v-prevent-dbclick group测试", () => {
  describe("same group", () => {
    const wrapper = mount(help)
    const v1 = wrapper.find("#v1").vm
    const v2 = wrapper.find("#v2").vm

    it("click A", (done) => {
      wrapper.find("#b1").trigger("click")
      expect(v1.status).to.equal(v2.status)
      expect(v1.isEmitter).to.equal(true)
      expect(v2.isEmitter).to.equal(false)

      setTimeout(() => {
        expect(v1.status).to.equal(v2.status)
        expect(v1.isEmitter).to.equal(false)
        done()
      }, 1100)
    })
  })

  describe("emit and leave", () => {
    const wrapper = mount(help)
    const v2 = wrapper.find("#v2").vm

    it("click A", async () => {
      wrapper.find("#b1").trigger("click")
      wrapper.setProps({ showV1: false })
      expect(v2.status).to.equal(true)

      await Vue.nextTick()
      expect(v2.status).to.equal(false)
    })
  })

  describe("emit and join", () => {
    const wrapper = mount(help, {
      propsData: {
        showV2: false,
      },
    })

    it("click A", async () => {
      wrapper.find("#b1").trigger("click")
      wrapper.setProps({ showV2: true })
      await Vue.nextTick()
      const v2 = wrapper.find("#v2").vm
      expect(v2.status).to.equal(true)

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve()
        }, 1100)
      )
      expect(v2.status).to.equal(false)
    })
  })

  describe("customInfo transfer", () => {
    const wrapper = mount(help)
    const v1 = wrapper.find("#v1").vm
    const v2 = wrapper.find("#v2").vm

    it("from v1 to v2", (done) => {
      v1.sendInfo("test")
      expect(v2.customInfo).to.equal("test")
      done()
    })
  })
})
