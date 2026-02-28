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
                                <Tag class="tag csharp" severity="success" value="C#"></Tag>
                                <Tag class="tag javascript" severity="danger" value="JavaScript"></Tag>
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Web Development</span>
                            <div class="web-development">
                                <Tag class="tag aspnet" severity="info" value="ASP.NET Core"></Tag>
                                <Tag class="tag" severity="success" value="Vue.js"></Tag>
                                <Tag class="tag html-css" severity="danger" value="HTML, CSS"></Tag>
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Database</span>
                            <div class="database">
                                <Tag class="tag" severity="info" value="Microsoft SQL Server"></Tag>
                                <Tag class="tag ef-core" severity="success" value="Entity Framework (ORM)"></Tag>
                                <Tag class="tag oracle-sql" severity="danger" value="Oracle SQL Developer"></Tag>
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Tools & Technologies</span>
                            <div class="tools-technologies">
                                <Tag class="tag" severity="info" value="Microsoft Azure"></Tag>
                                <Tag class="tag" severity="secondary" value="Git, GitHub"></Tag>
                                <Tag class="tag postman-bruno" severity="danger" value="Postman, Bruno"></Tag>
                                <Tag class="tag agile-scrum" severity="warn" value="Agile / Scrum methodologies"></Tag>
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
    color: #695e03; 
    border: none;
}

::v-deep(.aspnet), ::v-deep(.csharp), ::v-deep(.ef-core) {
    background-color: #5A2E90;
    color: #ddcef0;
    border: none;
}

::v-deep(.oracle-sql) {
    background-color: #D12024;
    color: #f8d0d1;
    border: none;
}

::v-deep(.postman-bruno) {
    background-color: #FD6C36;
    color: #fec4af;
    border: none;
}

::v-deep(.html-css) {
    background-color: #F15B2A;
    color: #fec4af;
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
    flex-direction: column; /* sorok egymás alatt */
    gap: 15px; /* gap a sorok között */
}

.stack-row {
    display: flex;
    justify-content: space-between; /* bal-jobb elrendezés */
    align-items: center; /* függőleges középre */
}

.programming-languages,
.web-development,
.database,
.tools-technologies {
    display: flex;
    gap: 10px; /* gap a tag-ek között */
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
</style>