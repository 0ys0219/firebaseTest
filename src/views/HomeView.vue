<template>
  <div class="container" style="margin-top: 20px">
    <Toast></Toast>
    <span class="p-float-label">
      <InputText id="todo" v-model="input" autocomplete="off" />
      <label for="todo">新增事項</label>
    </span>
    <Button
      style="margin-left: 10px"
      label="新增"
      severity="contrast"
      size="small"
      text
      raised
      @click="add"
    ></Button>
  </div>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    "
  >
    <div>
      <div v-for="(item, index) in list" :key="index">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import isBlank from "is-blank";
import { useToast } from "primevue/usetoast";
const input = ref("");

const list = ref<string[]>([]);

const toast = useToast();

function add() {
  if (isBlank(input.value)) {
    toast.add({
      severity: "error",

      detail: "輸入不可為空",
      life: 1000,
    });
    return;
  }

  list.value.push(input.value);
}
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
