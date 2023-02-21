<script setup lang="ts">
import { defineProps } from "vue";
interface PostProps {
  title: string;
  content: string;
  author: string;
  id: number;
  comment: {
    author: string;
    content: string;
    id: number;
  }[];
}

const { author, content, title, comment } = defineProps<PostProps>();
</script>

<template>
  <li class="post">
    <div class="titleAndAuthor">
      <h3>
        {{ title }}
      </h3>
      <span>{{ author }}</span>
    </div>
    <hr />
    <div class="content">
      {{ content }}
    </div>
    <hr />
    <div v-for="item in comment" v-bind:key="item.id" class="comment">
      <span class="commentAuthor"> {{ item.author }}: </span>
      <span>
        {{ item.content }}
      </span>
    </div>
  </li>
</template>

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
