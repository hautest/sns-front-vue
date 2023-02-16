<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const rePassword = ref("");

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log(email.value, password.value, rePassword.value);
};
</script>

<template>
  <h1>회원가입</h1>
  <form @submit="handleSubmit">
    <div>
      <label for="email">Email</label>
      <input v-model="email" id="email" />
    </div>
    <div>
      <label for="password">비밀번호</label>
      <input id="password" />
    </div>
    <div>
      <label for="rePassword">비밀번호 재확인</label>
      <input id="rePassword" />
    </div>
    <div class="submitButton">
      <button>회원가입</button>
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
div {
  display: flex;
  flex-direction: column;
}
button {
  width: 50%;
}
.submitButton {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
