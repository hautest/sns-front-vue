<template>
  <li class="post">
    <div class="titleAndAuthor">
      <h3>
        {{ props.title }}
      </h3>
      <span>{{ props.author }}</span>
    </div>
    <hr />
    <div class="content">
      {{ content }}
    </div>
    <hr />
    <div
      v-for="item in props.comment"
      v-bind:key="item.content"
      class="comment"
    >
      <span class="commentAuthor"> {{ item.email }}: </span>
      <span>
        {{ item.content }}
      </span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
interface PostProps {
  title: string;
  content: string;
  author: string;
  id: number;
  comment: {
    email: string;
    content: string;
  }[];
}

const props = defineProps<PostProps>();
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  border: solid 1px gray;
  padding: 8px;
  height: 450px;
}
.titleAndAuthor {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
hr {
  width: 100%;
}
.content {
  overflow-y: scroll;
  height: 100%;
}
</style>
