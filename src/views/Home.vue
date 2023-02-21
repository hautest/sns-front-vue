<script setup lang="ts">
import { fetcher } from "@/fetch";
import post from "../components/Post.vue";
import { onMounted, ref } from "vue";

const list = ref([]);

const getPostList = async () => {
  const result = await fetcher.get("/post/list");
  console.log(result.data.list);
  list.value = result.data.list;
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
  <main>
    <div v-for="item in list">
      <post
        :title="item.title"
        :content="item.content"
        :author="item.email"
        :id="item.id"
        :comment="JSON.parse(item.comment)"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
