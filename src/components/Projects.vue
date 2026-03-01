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
                    <p>Room Planner (Web Application)</p>
                    <div class="tags">
                        <Tag class="tag csharp" severity="success" value="C#" />
                        <Tag class="tag javascript" severity="danger" value="JavaScript"></Tag>
                        <Tag class="tag html-css" severity="danger" value="HTML, CSS"></Tag>
                    </div>
                </div>
            </template>
            <template #content>
                <div class="sub-container">
                    <img src="../assets/furniture.png" alt="">
                </div>
                <p class="description">
                    This application arranges given furniture items within a room so that none of them overlap. 
                    The output is presented in a tabular format where each table cell represents 10 cm. 
                    For example, if a bed measures 160 cm by 200 cm and is located in a corner, it occupies 16 cells in width and 20 cells in length. 
                    These cells are merged, colored with a random color, and labeled with the furniture name, such as "Bed".
                </p>
            </template>
        </Card>
        <Card class="myCard">
             <template #title>
                <div class="title-container">
                    <p>Food Order (API)</p>
                    <div class="tags">
                        <Tag class="tag csharp" severity="success" value="C#" />
                        <Tag class="tag" severity="success" value="SignalR" />
                        <Tag class="tag" severity="success" value="Hangfire" />
                        <Tag class="tag" severity="success" value="JWT" />
                        <Tag class="tag" severity="success" value="EFCore" />
                    </div>
                </div>
            </template>
            <template #content>
                <div class="sub-container">
                    <img src="../assets/foodorder.png" alt="">
                </div>
                <p class="description">
                    A layered .NET 8.0 food ordering API built with clean architecture principles. 
                    The system supports JWT-based authentication, role-based authorization, 
                    real-time order notifications via SignalR, and delayed background processing 
                    with Hangfire. It follows a structured separation of concerns using Entity 
                    Framework Core, AutoMapper, and the Repository pattern to ensure scalability, 
                    maintainability, and clean code practices.
                </p>
            </template>
        </Card>
    </div>
</template>

<style scoped>
.myHeader {
    text-align: center;
    color: burlywood;
    padding-top: 60px;
}
.container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin: 0 auto;
    max-width: 1400px;
    padding: 0 20px;
}
.myCard {
    transition: .4s;
    max-width: 700px;
    flex: 1;
}
.myCard:hover {
  transform: translateY(-10px);
}
.sub-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;
}
.tag {
    transition: .4s;
    max-height: 20px;
    margin: 0;
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
::v-deep(.aspnet), ::v-deep(.csharp) {
    background-color: #5A2E90;
    color: #ddcef0;
    border: none;
}
::v-deep(.javascript) {
    background-color: #F8E017;
    color: #695e03; 
    border: none;
}
::v-deep(.html-css) {
    background-color: #F15B2A;
    color: white;
    border: none;
}
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin-left: 15px;
        margin-right: 15px;
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
        padding-top: 30px;
        font-size: 2rem;
    }
}
</style>