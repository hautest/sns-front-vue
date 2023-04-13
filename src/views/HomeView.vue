<template>
  <header>
    <span> 유저이름 </span>
    <span>마이페이지</span>
  </header>
  <div>
    <button @click="handleRouteWritePage">새 글 작성</button>
  </div>
  <main>
    <div v-for="item in list" v-bind:key="item.id">
      <Post
        :title="item.title"
        :content="item.content"
        :author="item.email"
        :id="item.id"
        :comment="item.comment"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { fetcher } from "@/fetch";
import Post from "../components/PostList.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const handleRouteWritePage = () => {
  router.push("/write");
};

interface PostRes {
  id: number;
  title: string;
  content: string;
  email: string;
  comment: {
    email: string;
    content: string;
  }[];
}

const list = ref<PostRes[]>([]);

const getPostList = async () => {
  const result = await fetcher.get("/post/list");
  list.value = result.data.list;
};

onMounted(() => {
  getPostList();
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
