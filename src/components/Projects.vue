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
                    <p>Room Furniture Arrangement App</p>
                    <div class="tags">
                        <Tag class="tag csharp" severity="success" value="C#" />
                        <Tag class="tag javascript" severity="danger" value="JavaScript"></Tag>
                        <Tag class="tag html-css" severity="danger" value="HTML, CSS"></Tag>
                    </div>
                </div>
            </template>
            <template #content>
                <div class="sub-container">
                    <img src="../assets/placeholder.jpg" alt="">
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
                    <p>Food Order API</p>
                    <div class="tags">
                        <Tag class="tag csharp" severity="success" value="C#" />
                        <Tag class="tag" severity="success" value="SignalR" />
                        <Tag class="tag" severity="success" value="Hangfire" />
                    </div>
                </div>
            </template>
            <template #content>
                <div class="sub-container">
                    <img src="../assets/placeholder.jpg" alt="">
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
    gap: 100px;
    margin-left: 50px;
    margin-right: 50px;
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
    width: 300px;
    margin-top: 20px;
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
        gap: 40px;
        margin-left: 20px;
        margin-right: 20px;
    }

    .sub-container {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .sub-container > img {
        width: 100%;
        max-width: 350px;
    }

    .title-container {
        flex-direction: column;
        gap: 10px;
    }

    .myCard {
        max-width: 100%;
    }

    .myHeader {
        padding-top: 30px;
    }
}
</style>