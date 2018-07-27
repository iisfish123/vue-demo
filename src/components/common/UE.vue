<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>
<script>
export default {
  name: "UE",
  data() {
    return {
      editor: null
    };
  },
  props: {
    defaultMsg: {
      type: String
    },
    config: {
      type: Object
    }
  },
  mounted() {
    const _this = this;
    this.editor = UE.getEditor("editor", this.config); // 初始化UE
    this.editor.addListener("ready", function() {
      _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
    });
  },
  methods: {
    getUEContent() { // 获取内容
        return this.editor.getContent()
    },
    setUEContent(newMsg) { // 设置内容
      const _this = this;
      return _this.editor.setContent(newMsg);
    }
  },
  destroyed() {
    this.editor.destroy();
  }
};
</script>