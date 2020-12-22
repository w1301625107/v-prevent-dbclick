<template>
  <div class="pdc_wrapper"
       @click.capture="tapClick">
    <slot :onTap="onTap"
          :status="status"
          :customInfo="customInfo">
      put something here!!!like a button!!!
    </slot>
  </div>
</template>


<script>
// counting status
const READY = "READY";
const RUNNING = "RUNING";
const END = "END";
// counting status

const GROUP = {};

const noop = () => {};

export default {
  props: {
    debounce: {
      type: Number,
      default: 0,
    },
    group: {
      type: String,
    },
    stopPropagation:{
      type: Boolean,
      default: true
    },
    doNothing:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      status: false,
      counting: READY,
      timer: undefined,
      customInfo: undefined,
      leaveGroup: noop,
      op: undefined,
      GROUP,
    };
  },
  watch: {
    group() {
      this.leaveGroup();
      this.jionGroup();
    },
  },
  created() {
    this.jionGroup();
  },
  beforeDestroy() {
    this.leaveGroup();
    this.clearDebounce();
  },
  methods: {
    jionGroup() {
      let groupName = this.group;
      if (typeof groupName == "string" && groupName.trim() != "") {
        let g = GROUP[groupName];
        if (!g) {
          g = GROUP[groupName] = [];
        }

        let op = (this.op = {
          on: (info) => {
            this.status = false;
            this.customInfo = info;
          },
          off: () => {
            this.status = true;
            this.clearDebounce(); // 将其他组的延迟点击清理掉
          },
        });
        g.push(op);
        this.leaveGroup = () => {
          this.status = false;
          let idx = g.findIndex((item) => item == op);
          if (idx > -1) {
            g.splice(idx, 1);
          }
          this.leaveGroup = noop;
        };
      }
    },
    noticeGroup(type) {
      let groupName = this.group;
      if (typeof groupName == "string" && groupName.trim() != "") {
        let g = GROUP[groupName];
        if (!g) {
          g = [];
        }
        g.forEach((op) => {
          if (this.op == op) {
            return;
          }
          op[type]();
        });
      }
    },
    tapClick(e) {
      if(this.doNothing){
        return
      }

      if (this.status) {
        this.$emit("invalidClick");
        this.stopPropagation && e.stopPropagation();
        return;
      }

      if (
        typeof this.debounce == "number" &&
        this.debounce > 0 &&
        [RUNNING, READY].includes(this.counting)
      ) {
        console.log(`It's set timer`);

        this.counting = RUNNING;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.counting = END;
          this.fireOriginEvent(e.target);
        }, this.debounce);

        e.stopPropagation();
        return;
      }

      this.offTap();
      this.clearDebounce();
    },
    fireOriginEvent(el) {
      if (el.click) {
        el.click();
      } else {
        try {
          var evt = document.createEvent("Event");
          evt.initEvent("click", true, true);
          el.dispatchEvent(evt);
        } catch (e) {
          console.error(e);
        }
      }
    },
    onTap(info) {
      console.log(`it's release now.`);
      this.status = false;
      this.$emit("onTap");
      this.noticeGroup("on");
      this.customInfo = info;
    },
    offTap() {
      this.status = true;
      this.$emit("offTap");
      this.noticeGroup("off");
    },
    clearDebounce() {
      clearTimeout(this.timer);
      this.counting = READY;
      this.timer = undefined;
    },
  },
};
</script>


<style scoped>
.pdc_wrapper {
  display: inline;
  display: contents;
}
</style>