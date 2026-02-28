<script setup>
import Card from 'primevue/card';

    defineProps({
        mainTitle: String,
        title: String,
        location: String,
        content: Array
    })
</script>

<template>
    <div class="main">
        <h1>{{ mainTitle }}</h1>
        <Card class="myCard">
             <template #title>
                <div class="spans">
                    <span>{{ title }}</span><br>
                    <span>{{ location }}</span>
                </div>
            </template>
            <template #content>
                <ul class="uniList">
                    <li v-for="(item, index) in content" :key="index">{{ item }}</li>
                </ul>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.main>h1 {
    margin-left: 5px;
    margin-bottom: 0;
    padding-bottom: 10px;
}

.main {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;
}

.spans {
    display: flex;
    flex-direction: column;
}

.uniList {
  padding-left: 10px;
  margin-left: 0;
}

.uniList > li {
  padding-bottom: 15px;
  padding-left: 15px;
  list-style-type: none;
}

.uniList > li::marker {
  content: "#"; 
  color: white;
  font-size: 16px;
}

.uniList > li:last-child {
  padding-bottom: 0;
}

.myCard {
  transition: .4s;
  max-width: 700px;
  flex: 1;
}

.myCard:hover {
  transform: translateY(-10px);
}
</style>