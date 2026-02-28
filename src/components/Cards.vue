<script setup>
import CardItem from './Card.vue'

const cards = [
  {
    title: "BSC, COMPUTER SCIENCE ENGINEERING (2023 SEPT - 2027 JAN) OBUDA UNIVERSITY, BUDAPEST",
    content: [
      "Currently in the 6th semester, specializing in Software Design and Development",
      "Developed a strong foundation in .NET, OOP, algorithms, and data structures",
      "Experienced in building clean, maintainable backend solutions using layered architectures and design patterns",
      "Proficient in unit and integration testing to ensure software quality and reliability"
    ]
  },
  {
    title: "MSc, Software Engineering (2027 FEB - 2029 JAN) Example University",
    content: [
      "Focus on advanced software architecture and cloud solutions",
      "Hands-on experience with modern JS frameworks",
      "Team projects and collaboration"
    ]
  }
]
</script>

<template>
    <div class="container">
        <CardItem
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :content="card.content"
        />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>