<template>
  <div class="about">
    <Title msg="ant-design-vue 组件" />
    <div>
      <a-button type="primary">主要按钮</a-button>
      <a-button type="danger">危险按钮</a-button>
    </div>
    <div style="margin:10px 0;">
      <a-button type="primary" shape="circle" icon="download"></a-button>
      <a-button type="danger" shape="round" icon="download">危险按钮</a-button>
    </div>
    <div>
      <span>
        <a-rate v-model="value" :tooltips="desc" />
        <span class="ant-rate-text">{{ desc[value - 1] }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Title from "@/components/Title.vue";
//组件按需加载
import { Button, Rate } from "ant-design-vue";
const uiArr = [Button, Rate];
uiArr.map(item => {
  Vue.use(item);
});
export default {
  name: "About",
  components: { Title },
  data() {
    return {
      value: 4,
      desc: ["差", "一般", "正常", "很好", "非常好"]
    };
  }
};
</script>
<style lang="less">
.ant-btn {
  font-size: 14px !important;
  margin: 0 8px 10px 0 !important;
}
</style>
