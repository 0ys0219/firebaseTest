<template>
  <div class="container" style="margin-top: 20px">
    <Toast></Toast>
    <span class="p-float-label">
      <InputText ref="inputText" id="todo" v-model="input" autocomplete="off" />
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

    <Button
      style="margin-left: 10px"
      :label="isShowDeleteCheckBox ? '確認刪除' : '刪除'"
      severity="secondary"
      size="small"
      text
      raised
      @click="deleteIdList.length > 0 ? confirmDelete() : showDeleteCheckBox()"
    >
    </Button>
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
      <div v-for="item in list" :key="item.id">
        <div
          v-if="isShowDeleteCheckBox"
          style="margin-top: 10px; display: flex; align-items: center"
        >
          <Checkbox
            v-model="deleteIdList"
            :inputId="item.id"
            name="category"
            :value="item.id"
          />
          <label :for="item.id" style="margin-left: 10px">{{
            item.value
          }}</label>
        </div>
        <div v-if="!isShowDeleteCheckBox" style="margin-top: 10px">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import db from "@/config/firebase.js";
import isBlank from "is-blank";
import { useToast } from "primevue/usetoast";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { onMounted } from "vue";
import { useConfirm } from "primevue/useconfirm";
import { onUpdated } from "vue";

type Todo = {
  id: string;
  value: string;
};
const inputText = ref();
const checkbox = ref();
const input = ref("");

const list = ref<Todo[]>([]);

const deleteIdList = ref<string[]>([]);

const isShowDeleteCheckBox = ref(false);

const toast = useToast();

const confirm = useConfirm();

async function add() {
  if (isBlank(input.value)) {
    toast.add({
      severity: "error",
      detail: "輸入不可為空",
      life: 1000,
    });
    return;
  }
  const docRef = await addDoc(collection(db, "toDoList"), {
    value: input.value,
  });
  input.value = "";

  const listDocRef = doc(db, "toDoList", docRef.id);
  await updateDoc(listDocRef, { id: docRef.id });
}

function showDeleteCheckBox() {
  isShowDeleteCheckBox.value = !isShowDeleteCheckBox.value;
}

async function confirmDelete() {
  deleteIdList.value.forEach(async (id) => {
    await deleteDoc(doc(db, "toDoList", id));
  });
  toast.add({
    severity: "info",
    detail: "已刪除",
    life: 3000,
  });
  deleteIdList.value = [];
}

async function getAllList() {
  let arr: Todo[] = [];

  (await getDocs(collection(db, "toDoList"))).forEach((doc) => {
    arr.push({ id: doc.data().id, value: doc.data().value });
  });

  list.value = arr;
}

onMounted(async () => {
  await getAllList();
});

onUpdated(async () => {
  await getAllList();
});
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
