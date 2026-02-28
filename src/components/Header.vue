<template>
    <div class="container">
        <h1 class="myHeader">Tamas Gyarmati</h1>
        <h1 class="myHeaderType">Software Developer</h1>
        <div class="subclass">
            <h2><i class="iconPad pi pi-phone"></i> +36501215346</h2>
            <h2><i class="iconPad pi pi-envelope"></i> tamasgy56@gmail.com</h2>
            <h2>
                <a href="https://www.linkedin.com/in/tamasgyarmati" class="contactLink" target="_blank" rel="noopener noreferrer">
                    <i class="iconPad pi pi-linkedin"></i>
                    in/tamasgyarmati
                </a>
            </h2>
        </div>
    </div>
</template>

<style scoped>    
    .contactLink {
        color: white;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    .myHeaderType {
        margin-top: 0;
        padding-top: 0;
    }

    .myHeader {
        font-size: 50px;
        margin-bottom: 10px;
        padding-bottom: 0;
    }

    .iconPad {
        margin-right: 10px;
    }

    .container {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    .subclass {
        display: flex;
        flex-direction: row;
        gap: 40px;
        font-size: 10px;
    }
</style>