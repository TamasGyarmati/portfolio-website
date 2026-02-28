<script setup>
import CardItem from './Card.vue'

const cards = [
  {
    mainTitle: "Experience",
    title: "SOFTWARE DEVELOPER, INTERNSHIP (2025 JUNE - 2026 MARCH)",
    location: "ROBERT BOSCH KFT., BUDAPEST",
    content: [
      "Refactored and optimized legacy code in active .NET projects to improve performance and maintainability",
      "Implemented Unit and Integration tests using xUnit, following Test-Driven Development (TDD) principles",
      "Used Git for version control and Azure DevOps for agile task management",
      "Utilized Bruno (similar to Postman), to develop automated E2E testing scripts for API endpoints to validate workflows and inter-service dependencies",
      "Collaborated closely with developers on API design and the implementation of shared featured",
    ]
  },
  {
    mainTitle: "Studies",
    title: "BSC, COMPUTER SCIENCE ENGINEERING (2023 SEPT - 2027 JAN)",
    location: "OBUDA UNIVERSITY, BUDAPEST",
    content: [
      "Currently in the 6th semester, specializing in Software Design and Development",
      "Developed a strong foundation in .NET, OOP, algorithms, and data structures",
      "Experienced in building clean, maintainable backend solutions using layered architectures and design patterns",
      "Proficient in unit and integration testing to ensure software quality and reliability"
    ]
  }
]
</script>

<template>
    <div class="container">
        <CardItem
            v-for="(card, index) in cards"
            :key="index"
            :main-title="card.mainTitle"
            :title="card.title"
            :location="card.location"
            :content="card.content"
        />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
</style>