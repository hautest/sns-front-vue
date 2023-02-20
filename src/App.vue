<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import { fetcher } from "./fetch";
import router from "@/router";

onBeforeMount(async () => {
  const currentUrl = location.pathname;
  if (currentUrl === "/sign-in" || currentUrl === "/sign-up") return;
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
