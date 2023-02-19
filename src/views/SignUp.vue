<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import router from "@/router";

const email = ref("");
const password = ref("");
const rePassword = ref("");

const errorMessage = ref("");

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:8080/sign-up", {
      email: email.value,
      password: password.value,
      rePassword: rePassword.value,
    });
    router.push("/sign-in");
  } catch (error: any) {
    errorMessage.value = error.response.data.message;
  }
};
const handleRouteSignIn = () => {
  router.push("/sign-in");
};
</script>

<template>
  <header>
    <h1>회원가입</h1>
    <button @click="handleRouteSignIn">로그인</button>
  </header>
  <form @submit="handleSubmit">
    <div>
      <label for="email">Email</label>
      <input v-model="email" id="email" />
    </div>
    <div>
      <label for="password">비밀번호</label>
      <input
        placeholder="최소 8자 이상, 하나 이상의 숫자 문자 포함"
        v-model="password"
        id="password"
        type="password"
      />
    </div>
    <div>
      <label for="rePassword">비밀번호 재확인</label>
      <input type="password" v-model="rePassword" id="rePassword" />
    </div>
    <div class="submitButton">
      <span>{{ errorMessage }}</span>
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
  width: 30%;
}
.submitButton {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
span {
  color: red;
}
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
