<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { fetcher } from "./fetch";
import router from "@/router";

onMounted(async () => {
  try {
    const result = await fetcher.post("/verify");
    localStorage.setItem("token", result.data.token);
  } catch (err) {
    router.push("/sign-in");
  }
});
</script>
<template>
  <RouterView />
</template>

<style scoped></style>
