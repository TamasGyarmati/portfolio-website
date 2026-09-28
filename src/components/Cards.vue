<script setup>
import CardItem from './Card.vue'

const cards = [
  {
    mainTitle: "Experience",
    title: "Software Developer, Internship (2025 June - 2026 March)",
    location: "Robert Bosch Kft., Budapest",
    content: [
      "Refactored and optimized legacy code in active .NET projects to improve performance and maintainability",
      "Implemented unit and integration tests using xUnit, following Test-Driven Development (TDD) practices",
      "Used Git for version control and Azure DevOps for agile task management",
      "Developed automated E2E API tests using Bruno to validate API workflows and endpoints",
      "Collaborated with developers on API design and the implementation of shared features",
    ]
  },
  {
    mainTitle: "Studies",
    title: "Bsc, Computer Science Engineering (2023 Sept - 2027 Jan [expected])",
    location: "Obuda University, Budapest",
    content: [
      "Currently in my 7th semester, specializing in Software Design and Development",
      "Developed applications using C#/.NET, object-oriented programming, databases, web technologies, algorithms and data structures",
      "Experienced in building clean, maintainable backend solutions using both vertical and horizontal architectures and design patterns",
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
  justify-content: center;
  gap: 60px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
}
</style>
