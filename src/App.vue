<template>
  <div>
    <new-message-form />
  </div>
</template>

<script>
import NewMessageForm from "./components/NewMessageForm";

export default {
  name: "App",
  components: {
    NewMessageForm,
  },
};
</script>
