<script setup>
import Card from "primevue/card";
import Tag from "primevue/tag";
</script>

<template>
    <section class="projects">
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
                        <img src="../assets/gym.png" alt="" />
                    </div>
                    <div class="sub-sub-container">
                        <p class="description">
                            A modular Python-based gym tracking application
                            build in Python using MediaPipe and OpenCV. It
                            provides real-time exercise rep counting, workout
                            plan and set management with SQLite persistence,
                            plus smart automation features like countdown/rest
                            timers, inactivity-based auto stop, and live fatigue
                            feedback for a seamless and refined fitness
                            experience.
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
                        <p>Venus (Web Application)</p>
                        <div class="tags">
                            <Tag class="tag angular" value="Angular" />
                            <Tag class="tag typescript" value="TypeScript" />
                            <Tag class="tag sass" value="Sass" />
                            <Tag
                                class="tag material"
                                value="Angular Material UI"
                            />
                            <Tag class="tag csharp" value="C#" />
                            <Tag class="tag csharp" value="ASP.NET Core" />
                            <Tag class="tag neutral" value="EFCore" />
                        </div>
                    </div>
                </template>
                <template #content>
                    <div class="sub-container">
                        <img src="../assets/venus3.png" alt="" />
                    </div>
                    <div class="sub-sub-container">
                        <p class="description">
                            A university subject and teacher management
                            application built with Angular frontend and C#
                            backend. It provides full CRUD for subjects and
                            teachers with SQL Server persistence, served through
                            an Angular Material interface, plus features like
                            teacher-subject linking, JWT-secured routes, and
                            session-aware access for a seamless and refined
                            academic experience.
                        </p>
                        <Tag class="tag button-tag" severity="success">
                            <a
                                href="https://github.com/TamasGyarmati/venus-webapp"
                                target="_blank"
                                >View Source on GitHub</a
                            >
                        </Tag>
                    </div>
                </template>
            </Card>
            <Card class="myCard">
                <template #title>
                    <div class="title-container">
                        <p>Social Media Platform (API)</p>
                        <div class="tags">
                            <Tag class="tag csharp" value="C#" />
                            <Tag class="tag aspnet" value="ASP.NET Core" />
                            <Tag class="tag neutral" value="Identity" />
                            <Tag class="tag neutral" value="EFCore" />
                            <Tag class="tag neutral" value="ImageSharp" />
                            <Tag class="tag neutral" value="Mailpit" />
                        </div>
                    </div>
                </template>
                <template #content>
                    <div class="sub-container">
                        <img src="../assets/socialmedia.png" alt="" />
                    </div>
                    <div class="sub-sub-container">
                        <p class="description">
                            A layered ASP.NET Core Web API built with clean
                            architecture for a social media platform. Features
                            JWT authentication via ASP.NET Core Identity,
                            role-based access, and token-based email
                            confirmation flows. It supports full user
                            management, follows, posts, nested comments, and
                            likes, alongside ImageSharp for media processing and
                            Mailpit for email testing. All async workflows
                            enforce cancellation tokens for optimal performance,
                            laying the backend foundation for an upcoming
                            full-stack web application.
                        </p>
                        <Tag class="tag button-tag" severity="success">
                            <a
                                href="https://github.com/TamasGyarmati/social-media-api"
                                target="_blank"
                                >View Source on GitHub</a
                            >
                        </Tag>
                    </div>
                </template>
            </Card>
            <Card class="myCard">
                <template #title>
                    <div class="title-container">
                        <p>Food Ordering (API)</p>
                        <div class="tags">
                            <Tag class="tag csharp" value="C#" />
                            <Tag class="tag aspnet" value="ASP.NET Core" />
                            <Tag class="tag neutral" value="SignalR" />
                            <Tag class="tag neutral" value="Hangfire" />
                            <Tag class="tag neutral" value="Identity" />
                            <Tag class="tag neutral" value="EFCore" />
                            <Tag class="tag neutral" value="AutoMapper" />
                        </div>
                    </div>
                </template>
                <template #content>
                    <div class="sub-container">
                        <img src="../assets/foodorder.png" alt="" />
                    </div>
                    <div class="sub-sub-container">
                        <p class="description">
                            A .NET 8.0 food ordering API built with clean
                            architecture principles. The system supports
                            JWT-based authentication, role-based authorization,
                            real-time order notifications via SignalR, and
                            delayed background processing with Hangfire. It
                            follows a structured separation of concerns using
                            Entity Framework Core, AutoMapper, and the
                            Repository pattern to ensure scalability,
                            maintainability, and clean code practices.
                        </p>
                        <Tag class="tag button-tag" severity="success">
                            <a
                                href="https://github.com/TamasGyarmati/food-order-api"
                                target="_blank"
                                >View Source on GitHub</a
                            >
                        </Tag>
                    </div>
                </template>
            </Card>
            <Card class="myCard">
                <template #title>
                    <div class="title-container">
                        <p>Room Planner (Web Application)</p>
                        <div class="tags">
                            <Tag class="tag csharp" value="C#" />
                            <Tag class="tag aspnet" value="ASP.NET Core" />
                            <Tag class="tag javascript" value="JavaScript" />
                            <Tag class="tag html" value="HTML" />
                            <Tag class="tag css" value="CSS" />
                            <Tag class="tag bootstrap" value="Bootstrap" />
                            <Tag class="tag docker" value="Docker" />
                        </div>
                    </div>
                </template>
                <template #content>
                    <div class="sub-container">
                        <img src="../assets/furniture2.png" alt="" />
                    </div>
                    <div class="sub-sub-container">
                        <p class="description">
                            This application arranges given furniture items
                            within a room so that none of them overlap. The
                            output is presented in a tabular format where each
                            table cell represents 10 cm. For example, if a bed
                            measures 160 cm by 200 cm and is located in a
                            corner, it occupies 16 cells in width and 20 cells
                            in length. These cells are merged, colored with a
                            random color, and labeled with the furniture name,
                            such as "Bed".
                        </p>
                        <Tag class="tag button-tag" severity="success">
                            <a
                                href="https://github.com/TamasGyarmati/furniture-arrangement-webapp"
                                target="_blank"
                                >View Source on GitHub</a
                            >
                        </Tag>
                    </div>
                </template>
            </Card>
            <Card class="myCard">
                <template #title>
                    <div class="title-container">
                        <p>Notion Automation (Script)</p>
                        <div class="tags">
                            <Tag class="tag python" value="Python" />
                            <Tag class="tag yaml" value="YAML" />
                            <Tag class="tag neutral" value="Notion API" />
                            <Tag class="tag neutral" value="GitHub Actions" />
                        </div>
                    </div>
                </template>
                <template #content>
                    <div class="sub-container">
                        <img src="../assets/notion2.png" alt="" />
                    </div>
                    <div class="sub-sub-container">
                        <p class="description">
                            A Python script that automates the management of
                            recurring weekly tasks in Notion. Using GitHub
                            Actions and a YAML workflow configuration, the
                            script runs automatically at a scheduled time each
                            week and updates the corresponding tasks through the
                            Notion API. API credentials are securely stored as
                            GitHub Actions secrets rather than being exposed in
                            the source code.
                        </p>
                        <Tag class="tag button-tag" severity="success">
                            <a
                                href="https://github.com/TamasGyarmati/notion-todo-script"
                                target="_blank"
                                >View Source on GitHub</a
                            >
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
                            <Tag class="tag neutral" value="EFCore" />
                            <Tag class="tag neutral" value="NUnit" />
                            <Tag class="tag neutral" value="Reflection" />
                            <Tag class="tag neutral" value="XML export" />
                        </div>
                    </div>
                </template>
                <template #content>
                    <div class="sub-container">
                        <img src="../assets/console.png" alt="" />
                    </div>
                    <div class="sub-sub-container">
                        <p class="description">
                            A layered .NET 8.0 console application designed to
                            manage shipments, cargo, and pirate ships with a
                            clear separation of responsibilities across
                            components. The system provides full CRUD
                            operations, database interaction through Entity
                            Framework Core, and supports filtering and searching
                            of records. It also includes automated delay
                            handling and XML-based report generation, with LINQ
                            used for data processing and NUnit tests ensuring
                            reliable core functionality.
                        </p>
                        <Tag class="tag button-tag" severity="success">
                            <a
                                href="https://github.com/TamasGyarmati/shipment-manager-consoleapp"
                                target="_blank"
                                >View Source on GitHub</a
                            >
                        </Tag>
                    </div>
                </template>
            </Card>
        </div>
    </section>
</template>

<style scoped>
.projects {
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(2rem, 5vw, 4rem);
}
.myHeader {
    text-align: center;
    color: #91a081;
    margin: 0;
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
::v-deep(.button-tag > a) {
    text-decoration: none;
    color: #86efac;
}
::v-deep(.button-tag-closed > a) {
    text-decoration: none;
    color: #d4d4d8;
    cursor: default;
}
::v-deep(.button-tag-closed):hover,
::v-deep(.button-tag):hover {
    border-radius: 15px;
}
::v-deep(.button-tag:has(a:active)) {
    transform: scale(0.9);
}
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: clamp(1.5rem, 4vw, 4rem);
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    justify-items: center;
}

.myCard {
    display: flex;
    flex-direction: column;
    transition: 0.4s;
    width: 100%;
    min-width: 0;
    background: rgba(0, 0, 0, 0.3);
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
.sub-container > img {
    width: 100%;
    max-width: 550px;
    margin-top: 20px;
    border-radius: 20px;
    /*border: 2px solid #91a08150;*/
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease;
    max-height: 350px;
}
.sub-container > img:hover {
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
.title-container > p {
    margin: 0 !important;
    line-height: 1.2;
}
.description {
    padding-top: 1em;
    text-align: justify;
    margin-bottom: 0;
}
::v-deep(.neutral) {
    background-color: rgba(255, 255, 255, 0.08);
    color: #d4d4d8;
    border: 1px solid rgba(255, 255, 255, 0.15);
}
::v-deep(.typescript) {
    background-color: rgba(37, 122, 204, 0.12);
    color: #4d9bea;
    border: 1px solid rgba(37, 122, 204, 0.25);
}
::v-deep(.material) {
    background-color: rgba(255, 64, 129, 0.12);
    color: #ff4081;
    border: 1px solid rgba(255, 64, 129, 0.25);
}

::v-deep(.sass) {
    background-color: rgba(205, 100, 151, 0.1);
    color: #df7eaa;
    border: 1px solid rgba(205, 100, 151, 0.25);
}
::v-deep(.bootstrap) {
    background-color: rgba(133, 18, 251, 0.1);
    color: #a75cff;
    border: 1px solid rgba(133, 18, 251, 0.25);
}
::v-deep(.angular) {
    background-color: rgba(221, 3, 48, 0.1);
    color: #ff4568;
    border: 1px solid rgba(221, 3, 48, 0.25);
}

::v-deep(.python) {
    background-color: rgba(55, 118, 171, 0.12);
    color: #5b9bd5;
    border: 1px solid rgba(55, 118, 171, 0.25);
}
::v-deep(.yaml) {
    background-color: rgba(216, 216, 216, 0.08);
    color: #e05254;
    border: 1px solid rgba(204, 32, 34, 0.25);
}

::v-deep(.mediapipe) {
    background-color: rgba(49, 152, 166, 0.1);
    color: #5cc2d0;
    border: 1px solid rgba(49, 152, 166, 0.25);
}

::v-deep(.opencv) {
    background-color: rgba(39, 39, 42, 0.35);
    color: #d4d4d8;
    border: 1px solid rgba(212, 212, 216, 0.15);
}

::v-deep(.kivy) {
    background-color: rgba(45, 45, 45, 0.3);
    color: #9ccc65;
    border: 1px solid rgba(139, 195, 74, 0.25);
}

::v-deep(.docker) {
    background-color: rgba(28, 99, 237, 0.1);
    color: #5b91f5;
    border: 1px solid rgba(28, 99, 237, 0.25);
}

::v-deep(.sqlite) {
    background-color: rgba(0, 59, 87, 0.15);
    color: #4d9fc4;
    border: 1px solid rgba(0, 59, 87, 0.35);
}

::v-deep(.aspnet),
::v-deep(.csharp) {
    background-color: rgba(90, 46, 144, 0.12);
    color: #b47bea;
    border: 1px solid rgba(90, 46, 144, 0.3);
}

::v-deep(.javascript) {
    background-color: rgba(248, 224, 23, 0.1);
    color: #f8e017;
    border: 1px solid rgba(248, 224, 23, 0.25);
}

::v-deep(.html) {
    background-color: rgba(241, 91, 42, 0.1);
    color: #f4774e;
    border: 1px solid rgba(241, 91, 42, 0.25);
}

::v-deep(.css) {
    background-color: rgba(37, 129, 255, 0.1);
    color: #5b9cff;
    border: 1px solid rgba(37, 129, 255, 0.25);
}

.tag {
    transition: 0.25s ease;
    max-height: 20px;
    margin: 0;
    align-self: flex-start;
}
@media (max-width: 1100px) {
    .container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 10px;
        gap: 30px;
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
}
</style>
