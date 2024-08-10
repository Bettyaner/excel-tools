<script setup lang="ts">
import { ref } from 'vue'
import {readFile} from "../service/readFile"
defineProps<{ msg: string }>()

const count = ref(0)
const value = ref(null)

async function onUpload(event){
  const data = new FormData();
  const file = event.target.files[0];
  data.append("file", file);
  const res = (await fetch("/api/excel/upload", { method: "POST", body: data })).json();
  const result = await fetch(`/api/excel/read?fileName=${(await res).fileName}`);
  console.log(result)

}
</script>

<template>
  <label>
    <span>请上传</span>
    <input id="input" type="file" placeholder="请选择一个excel文件" @change="onUpload" v-bind="value"/>
  </label>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
