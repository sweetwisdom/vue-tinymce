<template>
  <div class="contents" v-html="data"></div>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.data = window.localStorage.getItem("text");
    }
  }
};
</script>

<style lang="less" scoped>
.contents {
  width: 45%;
  margin: 0 auto;
}
</style>
