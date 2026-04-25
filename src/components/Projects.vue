<script setup>
    import Card from 'primevue/card'
    import Tag from 'primevue/tag'
</script>

<template>
    <h1 class="myHeader">Projects</h1>
    <div class="container">
        <Card class="myCard">
             <template #title>
                <div class="title-container">
                    <p>GYM Tracker (Desktop Application)</p>
                    <div class="tags">
                        <Tag class="tag python" value="Python" />
                        <Tag class="tag kivy" value="KivyUI" />
                        <Tag class="tag mediapipe" value="MediaPipe" />
                        <Tag class="tag opencv" value="OpenCV" />
                        <Tag class="tag sqlite" value="SQLite" />
                    </div>
                </div>
            </template>
            <template #content>
                <div class="sub-container">
                    <img src="../assets/gym.png" alt="">
                </div>
                <div class="sub-sub-container">
                    <p class="description">
                        A modular Python-based gym tracking application built with clean architecture-inspired design. 
                        It provides real-time exercise rep counting through MediaPipe and OpenCV, workout plan and set management with SQLite persistence, 
                        plus smart automation features like countdown/rest timers, inactivity-based auto stop, 
                        and live fatigue feedback for a seamless and refined fitness experience.
                    </p>
                    <Tag class="tag button-tag-closed" severity="secondary">
                        <a href="#" @click.prevent>Closed Source</a>
                    </Tag>
                </div>
            </template>
        </Card>
        <Card class="myCard">
             <template #title>
                <div class="title-container">
                    <p>Food Order (API)</p>
                    <div class="tags">
                        <Tag class="tag csharp" value="C#" />
                        <Tag class="tag" severity="secondary" value="SignalR" />
                        <Tag class="tag" severity="secondary" value="Hangfire" />
                        <Tag class="tag" severity="secondary" value="JWT" />
                        <Tag class="tag" severity="secondary" value="EFCore" />
                        <Tag class="tag" severity="secondary" value="AutoMapper" />
                    </div>
                </div>
            </template>
            <template #content>
                <div class="sub-container">
                    <img src="../assets/foodorder.png" alt="">
                </div>
                <div class="sub-sub-container">
                    <p class="description">
                        A layered .NET 8.0 food ordering API built with clean architecture principles. 
                        The system supports JWT-based authentication, role-based authorization, 
                        real-time order notifications via SignalR, and delayed background processing 
                        with Hangfire. It follows a structured separation of concerns using Entity 
                        Framework Core, AutoMapper, and the Repository pattern to ensure scalability, 
                        maintainability, and clean code practices.
                    </p>
                    <Tag class="tag button-tag" severity="success">
                        <a href="https://github.com/TamasGyarmati/food-order-api" target="_blank">View Source on GitHub</a>
                    </Tag>
                </div>
            </template>
        </Card>
    </div>
    <div class="container">
        <Card class="myCard">
             <template #title>
                <div class="title-container">
                    <p>Room Planner (Web Application)</p>
                    <div class="tags">
                        <Tag class="tag csharp" value="C#" />
                        <!--<Tag class="tag aspnet" value="ASP.NET Core" />-->
                        <Tag class="tag html" value="HTML" />
                        <Tag class="tag css" value="CSS" />
                        <Tag class="tag javascript" value="JavaScript" />
                    </div>
                </div>
            </template>
            <template #content>
                <div class="sub-container">
                    <img src="../assets/furniture.png" alt="">
                </div>
                <div class="sub-sub-container">
                    <p class="description">
                        This application arranges given furniture items within a room so that none of them overlap. 
                        The output is presented in a tabular format where each table cell represents 10 cm. 
                        For example, if a bed measures 160 cm by 200 cm and is located in a corner, it occupies 16 cells in width and 20 cells in length. 
                        These cells are merged, colored with a random color, and labeled with the furniture name, such as "Bed".
                    </p>
                    <Tag class="tag button-tag" severity="success">
                        <a href="https://github.com/TamasGyarmati/furniture-arrangement-webapp" target="_blank">View Source on GitHub</a>
                    </Tag>
                </div>
            </template>
        </Card>
        <Card class="myCard">
             <template #title>
                <div class="title-container">
                    <p>Shipment Manager (Console Application)</p>
                    <div class="tags">
                        <Tag class="tag csharp" value="C#" />                 
                        <Tag class="tag" severity="secondary" value="EFCore" />   
                        <Tag class="tag" severity="secondary" value="NUnit" />
                        <Tag class="tag" severity="secondary" value="Reflection" />
                        <Tag class="tag" severity="secondary" value="XML export" />
                    </div>
                </div>
            </template>
            <template #content>
                <div class="sub-container">
                    <img src="../assets/console.png" alt="">
                </div>
                <div class="sub-sub-container">
                    <p class="description">
                        A layered .NET 8.0 console application designed to manage shipments, cargo, and pirate ships with a clear separation of responsibilities across components. 
                        The system provides full CRUD operations, database interaction through Entity Framework Core, and supports filtering and searching of records. 
                        It also includes automated delay handling and XML-based report generation, with LINQ used for data processing and NUnit tests ensuring reliable core functionality.
                    </p>
                    <Tag class="tag button-tag" severity="success">
                        <a href="https://github.com/TamasGyarmati/shipment-manager-consoleapp" target="_blank">View Source on GitHub</a>
                    </Tag>
                </div>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.myHeader {
    text-align: center;
    color: burlywood;
    margin-top: 10rem;
}
::v-deep(.p-card-content) {
    display: flex;
    flex-direction: column;
    height: 100%;
}
::v-deep(.p-card-body) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.sub-sub-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
    gap: 15px;
}
::v-deep(.button-tag),
::v-deep(.button-tag-closed) {
    padding: 15px 15px;
    transition: transform 0.2s ease;
}
::v-deep(.button-tag>a) {
    text-decoration: none;
    color: #86EFAC;
}
::v-deep(.button-tag-closed>a) {
    text-decoration: none;
    color: #D4D4D8;
    cursor: default;
}
::v-deep(.button-tag-closed):hover,
::v-deep(.button-tag):hover {
    border-radius: 15px;
}
::v-deep(.button-tag:has(a:active)) {
    transform: scale(0.90);
}
.container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
    margin: 0 auto;    
    padding: 0 20px;
    margin-bottom: 5rem; /* DELETE IF YOU ADD NEW COMPONENT BELOW */
}
.myCard {
    display: flex;
    flex-direction: column;
    transition: .4s;
    max-width: 700px;
    flex: 1;
}
.myCard:hover {
  transform: translateY(-10px);
}
.sub-container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tag {
    transition: .4s;
    max-height: 20px;
    margin: 0;
    align-self: flex-start;
}
.tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: flex-end;
}
.tag:hover {
    transform: scale(1.1);
}
.sub-container>img {
    width: 550px;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.4s ease;
    max-height: 350px;
}
.sub-container>img:hover {
    transform: scale(1.1);
}
.title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
}
.title-container>p {
    margin: 0 !important;
    line-height: 1.2;
}
.description {
    padding-top: 1em;
    text-align: justify;
    margin-bottom: 0;
}
::v-deep(.python) {
    background-color: #3776AB;
    color: #FFD43B;
    border: none;
}
::v-deep(.mediapipe) {
    background-color: #0F9D58;
    color: #FFFFFF;
    border: none;
}
::v-deep(.opencv) {
    background-color: #5C3EE8;
    color: #FFFFFF;
    border: none;
}
::v-deep(.kivy) {
    background-color: #2D2D2D;
    color: #8BC34A;
    border: none;
}
::v-deep(.sqlite) {
    background-color: #003B57;
    color: #FFFFFF;
    border: none;
}
::v-deep(.aspnet), ::v-deep(.csharp) {
    background-color: #5A2E90;
    color: white;
    border: none;
}
::v-deep(.javascript) {
    background-color: #F8E017;
    color: black; 
    border: none;
}
::v-deep(.html) {
    background-color: #F15B2A;
    color: white;
    border: none;
}
::v-deep(.css) {
    background-color: #2581FF;
    color: white;
    border: none;
}
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .myCard {
        max-width: 100%;
        width: 100%;
    }

    .title-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    .tags {
        justify-content: flex-start;
        width: 100%;
    }

    .sub-container > img {
        width: 100%;
        max-width: 450px;
    }

    .myHeader {
        margin-top: 3rem;
        font-size: 2rem;
    }
}
</style>
