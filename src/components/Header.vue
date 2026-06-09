<template>
    <div class="title-group">
        <h1 class="myHeader typewriter">Tamas Gyarmati</h1>
        <h1 class="myHeaderType">Software Engineering student</h1>
    </div>
    <div class="subclass">
        <h2>
            <a :href="'mailto:' + 'tamasgy56' + '@' + 'gmail.com'" class="contactLink" target="_blank" rel="noopener noreferrer">
                <i class="iconPad pi pi-envelope"></i>
                <span class="contactText">tamasgy56 [at] gmail (dot) com</span>
            </a>
        </h2>
        <h2>
            <a href="https://github.com/TamasGyarmati" class="contactLink" target="_blank" rel="noopener noreferrer">
                <i class="iconPad pi pi-github"></i> 
                <span class="contactText">TamasGyarmati</span>
            </a>
        </h2>
        <h2>
            <a href="https://www.linkedin.com/in/tamasgyarmati" class="contactLink" target="_blank" rel="noopener noreferrer">
                <i class="iconPad pi pi-linkedin"></i>
                <span class="contactText">tamasgyarmati</span>
            </a>
        </h2>
    </div>
</template>

<style scoped>
    .title-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .title-group h1 {
        margin: 0;
    }

    .myHeader {
        font-size: clamp(36px, 8vw, 80px);
        letter-spacing: 10px;
    }

    .myHeaderType {
        font-size: clamp(18px, 3vw, 32px);
        letter-spacing: 5px;
    }

    .subclass {
        display: flex;
        flex-direction: row;
        gap: 40px;
        font-size: 10px;
    }

    .subclass h2 {
        margin: 0;
    }

    .iconPad {
        margin-right: 10px;
        color: white;
    }

    .contactLink {
        text-decoration: none;
        display: inline-flex;        
        color: #91a081;
        transition: transform 0.5s, color 0.5s ease;        
    }

    .contactText {
        color: #91a081;
        transition: color .5s ease;
    }

    .contactLink i.iconPad,
    .contactLink .contactText {
        transition: transform 0.5s ease, color 0.5s ease;
    }

    .contactLink:hover .contactText {
        color: white;
        transform: translateY(-8px);
    }

    .contactLink:hover i.iconPad {
        transform: translateY(-8px);
    }

    /*
    .typewriter {
        overflow: hidden;
        display: inline-block;
        border-right: .15em solid white;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: 
            typing 5s steps(40, end),
            blink-caret .75s step-end infinite;
    }
 
    @keyframes typing {
        from { width: 0 }
        to { width: 18ch }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: white; }
    }*/

    @media (max-width: 768px) {
        .subclass {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
            font-size: 10px;
        }
    }
</style>
