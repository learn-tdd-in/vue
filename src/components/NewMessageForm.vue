<template>
  <div>
    <input
      type="text"
      data-test="messageText"
      v-model="inputText"
    />
    <button
      data-test="sendButton"
      @click="send"
    >
      Send
    </button>
  </div>
</template>

<script>
export default {
  name: "NewMessageForm",
  data() {
    return {
      inputText: ""
    };
  },
  methods: {
    send() {
      this.inputText = "";
    }
  },
};
</script>
