<template>
  <div>
    <div v-html="msg"></div>
    <div v-html="data"></div>
    <div class="odd"><tinymce-editor v-model="msg"></tinymce-editor></div>

    <tinymce-editor v-model="data"></tinymce-editor>
  </div>
</template>

<script>
import TinymceEditor from "./HelloWorld";
export default {
  name: "index",
  components: {
    TinymceEditor
  },
  data() {
    return {
      msg: "Welcome to Use Tinymce Editor",
      data: "666",
      disabled: false
    };
  },
  methods: {
    //鼠标单击的事件
    onClick(e, editor) {
      console.log(e);
      console.log(editor);
    },
    //清空内容
    clear() {
      this.$refs.editor.clear();
    }
  }
};
</script>

<style scoped>
.odd {
  width: 300px;
  min-height: 50px;
  border: 1px dashed #bdbdbd;
  text-indent: 0em;
  overflow: hidden;
  padding: 0px 20px 20px;
  position: relative;
}
</style>
