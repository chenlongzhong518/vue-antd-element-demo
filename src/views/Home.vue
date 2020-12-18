<template>
  <div class="home">
    <Title msg="element-ui 组件" />
    <div>
      <el-button type="primary" size="small">主要按钮</el-button>
      <el-button type="success" size="small">成功按钮</el-button>
      <el-button type="info" size="small">信息按钮</el-button>
    </div>
    <div style="margin:10px 0;">
      <el-button type="warning" round size="small">警告按钮</el-button>
      <el-button type="success" circle icon="el-icon-download" size="small"></el-button>
      <el-button type="danger" round size="small">危险按钮</el-button>
    </div>
    <div>
      <el-rate v-model="value" show-text></el-rate>
    </div>
    <div style="margin:10px 0;">
      <el-input-number
        v-model="num"
        @change="handleChange"
        :min="0"
        :max="999999999999"
        label="描述文字"
        :step="1"
        step-strictly
      ></el-input-number>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Title from "@/components/Title.vue";
//组件按需加载
import { Button, Rate, InputNumber } from "element-ui";
const uiArr = [Button, Rate, InputNumber];
uiArr.map(item => {
  Vue.use(item);
});

export default {
  name: "Home",
  components: {
    Title
  },
  data() {
    return {
      value: 4,
      num: 10
    };
  },
  methods: {
    handleChange(value) {
      // console.log(value);
    }
  }
};
</script>
<style lang="scss">
.el-button {
  font-size: 14px !important;
  margin: 0 8px 10px 0 !important;
}
.el-rate__icon {
  font-size: 24px !important;
}
</style>
