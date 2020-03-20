<template>
  <div class="cont">
    <div class="left"><tinymce-editor v-model="msg"></tinymce-editor></div>
  </div>
</template>

<script>
export default {
  data() {
    return { msg: "这是一个富文本编辑器" };
  },
  watch: {
    msg(val) {
      window.localStorage.setItem("text", val);
    }
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.msg = window.localStorage.getItem("text");
    }
  }
};
</script>

<style lang="less" scoped>
.cont {
  max-height: 500px;
}
</style>
