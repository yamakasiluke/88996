<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="container">
    <div class="box">asdffsf</div>
    <div class="box">dfasdfasdf</div>
    <div class="box">asdfsf</div>
  </div>
  <p>a;kdfj;dkasjf;aksdf;kasjdf;kjasd;fkjsad;kfj;askjdf;ksadjf;kajs;fk</p>
  <actionsheet :menus="menus2"></actionsheet>
  <button @click="chage">change me</button>
  <agree v-model="show2"
    >阅读并同意<a href="javascript:void(0);">《相关条款》</a></agree
  >
  <x-dialog v-model="show2" class="dialog-demo">
    <div class="img-box">
      <img
        src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg"
        style="max-width: 100%"
      />
    </div>
    <div @click="show = false">
      <span class="vux-close"></span>
    </div>
  </x-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Actionsheet from "./components/actionsheet/index.vue";
import Agree from "./components/agree/index.vue";
import Dialog from "./components/x-dialog/index.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Actionsheet,
    Agree,
    Dialog,
  },
  data() {
    return {
      show2: false,
      valueTrue: true,
      menus2: {
        menu1: 1,
        menu2: 2,
      },
    };
  },
  methods: {
    chage() {
      this.show2 = !this.show2;
    },
  },
});
</script>

<style lang="less" scoped>
p {
  width: 100px;
  position: relative;
  text-align: left;
  word-break: break-all;
  line-height: 1.4em;
  /*设置容器高度为3倍行高就是显示3行*/
  height: 4.2em;
  overflow: hidden;
}

p::after {
  content: "...";
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 0px 1px 5px;
  background: #fff;
}
.container {
  display: flex;
}

.container::after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.box {
  align-self: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dialog-demo {
  .weui-dialog {
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>
