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
                                <Tag class="tag typescript" value="TypeScript" />
                                <Tag class="tag python" value="Python" />
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Frameworks & Web</span>
                            <div class="web-development">
                                <Tag class="tag aspnet" value="ASP.NET Core" />
                                <Tag class="tag angular" value="Angular" />
                                <Tag class="tag vue" value="Vue.js" />
                                <Tag class="tag html" value="HTML" />
                                <Tag class="tag css" value="CSS" />
                                <Tag class="tag bootstrap" value="Bootstrap" />
                                <Tag class="tag sass" value="Sass" />
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Database & ORM</span>
                            <div class="database">
                                <Tag class="tag sql" value="SQL" />
                                <Tag class="tag mssql" value="Microsoft SQL Server" />
                                <Tag class="tag oracle-sql" value="Oracle Database" />
                                <Tag class="tag ef-core" value="Entity Framework Core" />
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Tools & Technologies</span>
                            <div class="tools-technologies">
                                <Tag class="tag azure" value="Azure DevOps" />
                                <Tag class="tag docker" value="Docker" />
                                <Tag class="tag" severity="secondary" value="Zsh, Bash" />                                
                                <Tag class="tag git" value="Git, GitHub" />
                                <Tag class="tag postman-bruno" value="Postman, Bruno" />
                                <Tag class="tag agile-scrum" value="Agile, Scrum" />
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
::v-deep(.typescript) {
    background-color: #257ACC;
    color: white; 
    border: none;
}
::v-deep(.angular) {
    background-color: #DD0330;
    color: white; 
    border: none;
}
::v-deep(.vue) {
    background-color: #35495E;
    color: #41B882; 
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
::v-deep(.mssql) {
    background-color: #D10A15;
    color: white;
    border: none;
}
::v-deep(.sql) {
    background-color: #0C3863;
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
::v-deep(.bootstrap) {
    background-color: #8512FB;
    color: white;
    border: none;
}
::v-deep(.sass) {
    background-color: #CD6497;
    color: white;
    border: none;
}
::v-deep(.python) {
    background-color: #3776AB;
    color: #FFD43B;
    border: none;
}
::v-deep(.agile-scrum) {
    background-color: #2581FF;
    color: white;
    border: none;
}
::v-deep(.azure) {
    background-color: #2375D1;
    color: white;
    border: none;
}
::v-deep(.git) {
    background-color: #DE4C36;
    color: white; /* #3D2D00 */
    border: none;
}
::v-deep(.docker) {
    background-color: #1C63ED;
    color: white;
    border: none;
}

.container {
    margin: 0 auto;
    max-width: 70rem;
    width: 100%;
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
  background: rgba(0, 0, 0, 0.3);
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
    color: #91a081;
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
        max-width: 90%;
        margin: 0 auto;
    }

    .main > h1 {
        font-size: 28px;
        padding-bottom: 15px;
    }
}
</style>