<template>
  <div class="pdc_wrapper" style="display: inline;display: contents;"
       @click.capture="tapClick">
    <slot :release="release"
          :status="status"
          :customInfo="customInfo"
          :sendInfo="sendInfo"
          :isEmitter="isEmitter">
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

function log ( message) {
  if (process.env.NODE_ENV !== 'production') {
    // useful when testing
    console.log(`[v-prvent-dbclik] ${message}`)
  }
}

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
      isEmitter:false,
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
    getGroup(key){
      if (typeof key == "string" && key.trim() != "") {
        let g = GROUP[key];
        if (g) {
          return g
        }
      }
      return undefined
    },
    jionGroup() {
      let groupName = this.group;
      if (typeof groupName == "string" && groupName.trim() != "") {
        let g = GROUP[groupName];
        if (!g) {
          g = GROUP[groupName] = {
            sub:[],
            obs:undefined
          };
        }

        let op = (this.op = {
          on: () => {
            this.status = false;
          },
          off: () => {
            this.status = true;
            this.clearDebounce(); // 将其他组员的延迟点击清理掉,以触发者为准
          },
          mes: (info) =>{
            this.customInfo = info
          }
        });
        g.sub.push(op);

        if(g.obs){ // 新加入的组员需要同步组内状态
          this.status = g.obs.status
          this.customInfo = g.obs.customInfo
        }

        this.leaveGroup = () => {
          this.status = false;
          let idx = g.sub.findIndex((item) => item == op);
          if (idx > -1) {
            g.sub.splice(idx, 1);
          }
          if(g.obs == this){
            g.obs = undefined
            // 如果触发者是自己，需要通知其他取消状态
            if(this.status == true){
              this.noticeGroup('on')
            }
            
          }
          this.leaveGroup = noop;
        };
      }
    },
    sendInfo(info){
      this.customInfo = info
      this.noticeGroup('mes',info)
    },
    noticeGroup(type,info) {
      let g = this.getGroup(this.group)
      if (g) {
        g.obs = this
        g.sub.forEach((op) => {
          if (this.op == op) {
            return;
          }
          op[type](info);
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
        log(`It's set timer`);

        this.counting = RUNNING;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.counting = END;
          this.fireOriginEvent(e.target);
        }, this.debounce);

        e.stopPropagation();
        return;
      }

      this.trap();
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
    release() {
      log(`it's release now.`);
      this.isEmitter = false
      this.status = false;
      this.$emit("release");
      this.noticeGroup("on");
    },
    trap() {
      this.isEmitter = true
      this.status = true;
      this.$emit("trap");
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
