<script setup>
import Card from 'primevue/card';
import Tag from 'primevue/tag';
</script>

<template>
    <div class="container">
        <div class="main">
            <h1>Tech Stack</h1>
            <Card class="myCard">
                <template #title>
                    <div class="sub-container">                    
                        <div class="stack-row">
                            <span>Programming Languages</span>
                            <div class="programming-languages">
                                <Tag class="tag csharp" value="C#" />
                                <Tag class="tag javascript" value="JavaScript" />
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Web Development</span>
                            <div class="web-development">
                                <Tag class="tag aspnet" value="ASP.NET Core" />
                                <Tag class="tag" severity="success" value="Vue.js" />
                                <Tag class="tag html" value="HTML" />
                                <Tag class="tag css" value="CSS" />
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Database</span>
                            <div class="database">
                                <Tag class="tag" severity="info" value="Microsoft SQL Server" />
                                <Tag class="tag ef-core" value="Entity Framework (ORM)" />
                                <Tag class="tag oracle-sql" value="Oracle SQL Developer" />
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Tools & Technologies</span>
                            <div class="tools-technologies">
                                <Tag class="tag" severity="info" value="Microsoft Azure" />
                                <Tag class="tag" severity="secondary" value="Git, GitHub" />
                                <Tag class="tag postman-bruno" value="Postman, Bruno" />
                                <Tag class="tag agile-scrum" value="Agile / Scrum methodologies" />
                            </div>
                        </div>
                    </div>
                </template>            
            </Card>
        </div>
    </div>
</template>

<style scoped>
::v-deep(.javascript) {
    background-color: #F8E017;
    color: black; 
    border: none;
}

::v-deep(.aspnet), ::v-deep(.csharp), ::v-deep(.ef-core) {
    background-color: #5A2E90;
    color: white;
    border: none;
}

::v-deep(.oracle-sql) {
    background-color: #D12024;
    color: white;
    border: none;
}

::v-deep(.postman-bruno) {
    background-color: #FD6C36;
    color: white;
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

::v-deep(.agile-scrum) {
    background-color: #2581FF;
    color: white;
    border: none;
}

.container {
    margin: 0 auto;
    /*padding-top: 90px;*/
    max-width: 850px;
}

.sub-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.stack-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.programming-languages,
.web-development,
.database,
.tools-technologies {
    display: flex;
    gap: 10px;
}

.myCard {
  transition: .4s;
  flex: 1;
}

.myCard:hover {
  transform: translateY(-10px);
}

.tag {
    transition: .4s;
}

.tag:hover {
    transform: scale(1.05);
}

.main>h1 {
    margin-left: 5px;
    margin-bottom: 0;
    padding-bottom: 20px;
    color: burlywood;
    text-align: center;
}

@media (max-width: 768px) {
    .sub-container {
        gap: 20px;
    }

    .stack-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .programming-languages,
    .web-development,
    .database,
    .tools-technologies {
        flex-wrap: wrap;
        gap: 8px;
    }

    .myCard {
        max-width: 95%;
        margin: 0 auto;
    }

    .main > h1 {
        font-size: 28px;
        padding-bottom: 15px;
    }
}
</style>