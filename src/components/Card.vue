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
    padding-bottom: 20px;
    color: burlywood;
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
  padding-right: 20px;
  list-style-type: none;
  text-align: justify;
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

@media (max-width: 768px) {
  .main {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 30px;
  }

  .main > h1 {
    font-size: 28px;
    text-align: center;
    padding-bottom: 15px;
  }
}

@media (max-width: 768px) {
  .uniList > li {
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
}

@media (max-width: 768px) {
  .myCard {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>