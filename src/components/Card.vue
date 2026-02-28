<script setup>
import Card from 'primevue/card';

    defineProps({
        title: String,
        content: Array
    })
</script>

<template>
    <Card class="myCard">
        <template #title>{{ title }}</template>
        <template #content>
            <ul class="uniList">
                <li v-for="(item, index) in content" :key="index">{{ item }}</li>
            </ul>
        </template>
  </Card>
</template>

<style scoped>
.uniList {
  padding-left: 10px;
  margin-left: 0;
}

.uniList > li {
  padding-bottom: 15px;
  list-style-type: none;
}

.uniList > li:last-child {
  padding-bottom: 0;
}

.myCard {
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  transition: .4s;
  width: 700px;
  height: 300px;
}

.myCard:hover {
  transform: translateY(-10px);
}
</style>