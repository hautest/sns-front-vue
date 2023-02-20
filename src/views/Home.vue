<script setup lang="ts">
import { fetcher } from "@/fetch";
import router from "@/router";
import { onMounted } from "vue";

const getPostList = async () => {
  const result = await fetcher.get("/post/list");
  console.log(result);
};

onMounted(() => {
  getPostList();
});
</script>

<template>
  <header>
    <span> 유저이름 </span>
    <span>마이페이지</span>
  </header>
  <div>
    <button>새 글 작성</button>
  </div>
  <main>글 리스트</main>
</template>
