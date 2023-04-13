<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label> 제목 </label>
      <input v-model="title" />
    </div>
    <div>
      <label>내용</label>
      <textarea v-model="content" />
    </div>
    <footer>
      <button>작성</button>
    </footer>
  </form>
</template>
<script setup lang="ts">
import { fetcher } from "@/fetch";
import { ref } from "vue";
import { useRouter } from "vue-router";

const title = ref("");
const content = ref("");

const router = useRouter();

const handleSubmit = async () => {
  if (!title.value || !content.value) {
    alert("제목과 내용을 모두 입력해주세요.");
    return;
  }
  const result = await fetcher.post("/post/create", {
    title: title.value,
    content: content.value,
  });
  if (result.data.isSuccess) {
    alert("작성이 완료되었습니다.");
    router.back();
  } else {
    console.error(result.data.err);
  }
};
</script>

<style>
div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

textarea {
  height: 300px;
}
</style>
