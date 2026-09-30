<script setup>
import Card from "primevue/card";
import Tag from "primevue/tag";
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
                                <Tag
                                    class="tag javascript"
                                    value="JavaScript"
                                />
                                <Tag
                                    class="tag typescript"
                                    value="TypeScript"
                                />
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
                                <Tag
                                    class="tag mssql"
                                    value="Microsoft SQL Server"
                                />
                                <Tag
                                    class="tag oracle-sql"
                                    value="Oracle Database"
                                />
                                <Tag
                                    class="tag ef-core"
                                    value="Entity Framework Core"
                                />
                            </div>
                        </div>
                        <div class="stack-row">
                            <span>Tools & Technologies</span>
                            <div class="tools-technologies">
                                <Tag class="tag azure" value="Azure DevOps" />
                                <Tag class="tag docker" value="Docker" />
                                <Tag class="tag bash" value="Zsh, Bash" />
                                <Tag class="tag git" value="Git, GitHub" />
                                <Tag
                                    class="tag postman-bruno"
                                    value="Postman, Bruno"
                                />
                                <Tag
                                    class="tag agile-scrum"
                                    value="Agile, Scrum"
                                />
                            </div>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>
.tag {
    border: 1px solid transparent;
    transition: 0.25s ease;
}

::v-deep(.bash) {
    background-color: rgba(78, 170, 86, 0.1);
    color: #72c47a;
    border: 1px solid rgba(78, 170, 86, 0.25);
}
::v-deep(.javascript) {
    background-color: rgba(248, 224, 23, 0.1);
    color: #f8e017;
    border-color: rgba(248, 224, 23, 0.25);
}

::v-deep(.typescript) {
    background-color: rgba(37, 122, 204, 0.12);
    color: #4d9bea;
    border-color: rgba(37, 122, 204, 0.25);
}

::v-deep(.angular) {
    background-color: rgba(221, 3, 48, 0.1);
    color: #ff4568;
    border-color: rgba(221, 3, 48, 0.25);
}

::v-deep(.vue) {
    background-color: rgba(65, 184, 130, 0.1);
    color: #41b882;
    border-color: rgba(65, 184, 130, 0.25);
}

::v-deep(.aspnet),
::v-deep(.csharp),
::v-deep(.ef-core) {
    background-color: rgba(90, 46, 144, 0.12);
    color: #b47bea;
    border-color: rgba(90, 46, 144, 0.3);
}

::v-deep(.python) {
    background-color: rgba(55, 118, 171, 0.12);
    color: #5b9bd5;
    border-color: rgba(55, 118, 171, 0.3);
}

::v-deep(.html) {
    background-color: rgba(241, 91, 42, 0.1);
    color: #f4774e;
    border-color: rgba(241, 91, 42, 0.25);
}

::v-deep(.css) {
    background-color: rgba(37, 129, 255, 0.1);
    color: #5b9cff;
    border-color: rgba(37, 129, 255, 0.25);
}

::v-deep(.bootstrap) {
    background-color: rgba(133, 18, 251, 0.1);
    color: #a75cff;
    border-color: rgba(133, 18, 251, 0.25);
}

::v-deep(.sass) {
    background-color: rgba(205, 100, 151, 0.1);
    color: #df7eaa;
    border-color: rgba(205, 100, 151, 0.25);
}

::v-deep(.sql) {
    background-color: rgba(12, 56, 99, 0.2);
    color: #5595cf;
    border-color: rgba(12, 56, 99, 0.35);
}

::v-deep(.mssql) {
    background-color: rgba(209, 10, 21, 0.1);
    color: #ef5961;
    border-color: rgba(209, 10, 21, 0.25);
}

::v-deep(.oracle-sql) {
    background-color: rgba(209, 32, 36, 0.1);
    color: #f15c60;
    border-color: rgba(209, 32, 36, 0.25);
}

::v-deep(.docker) {
    background-color: rgba(28, 99, 237, 0.1);
    color: #5b91f5;
    border-color: rgba(28, 99, 237, 0.25);
}

::v-deep(.azure) {
    background-color: rgba(35, 117, 209, 0.1);
    color: #5c9ce8;
    border-color: rgba(35, 117, 209, 0.25);
}

::v-deep(.git) {
    background-color: rgba(222, 76, 54, 0.1);
    color: #ed7969;
    border-color: rgba(222, 76, 54, 0.25);
}

::v-deep(.postman-bruno) {
    background-color: rgba(253, 108, 54, 0.1);
    color: #ff9169;
    border-color: rgba(253, 108, 54, 0.25);
}

::v-deep(.agile-scrum) {
    background-color: rgba(37, 129, 255, 0.1);
    color: #65a4ff;
    border-color: rgba(37, 129, 255, 0.25);
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
    transition: 0.4s;
    flex: 1;
    background: rgba(0, 0, 0, 0.3);
}

.myCard:hover {
    transform: translateY(-10px);
}

.tag:hover {
    transform: scale(1.05);
}

.main > h1 {
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
