<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import router from "@/router";

const email = ref("");
const password = ref("");

const errorMessage = ref("");

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  try {
    const result = await axios.post("http://localhost:8080/sign-in", {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("token", result.data.token);
    router.push("/");
  } catch (error: any) {
    errorMessage.value = error.response.data.message;
  }
};
const handleRouteSignUp = () => {
  router.push("/sign-up");
};
</script>

<template>
  <header>
    <h1>로그인</h1>
    <button @click="handleRouteSignUp">회원가입</button>
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
    <div class="submitButton">
      <span>{{ errorMessage }}</span>
      <button>로그인</button>
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
