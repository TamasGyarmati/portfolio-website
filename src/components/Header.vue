<template>
    <div class="container">
        <h1 class="myHeader typewriter">Tamas Gyarmati</h1>
        <h1 class="myHeaderType">Software Developer</h1>
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
                    <span class="contactText">@TamasGyarmati</span>
                </a>
            </h2>
            <h2>
                <a href="https://www.linkedin.com/in/tamasgyarmati" class="contactLink" target="_blank" rel="noopener noreferrer">
                    <i class="iconPad pi pi-linkedin"></i>
                    <span class="contactText">tamasgyarmati</span>
                </a>
            </h2>
        </div>
    </div>
</template>

<style scoped>
    .myHeader {
        font-size: 50px;
        padding-top: 15px;        
        margin-bottom: 10px;
        padding-bottom: 0;
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

    .iconPad {
        margin-right: 10px;
        color: white;
    }

    .contactLink {
        text-decoration: none;
        display: inline-flex;
        font-family: 'Inter', sans-serif; 
        color: burlywood;
        transition: transform 0.5s, color 0.5s ease;        
    }

    .contactText {
        color: burlywood;
        transition: color .5s ease;
    }

    .contactLink i.iconPad,
    .contactLink .contactText {
        transition: transform 0.5s ease, color 0.5s ease;
    }

    .contactLink:hover .contactText {
        color: lightskyblue;
        transform: translateY(-8px);
    }

    .contactLink:hover i.iconPad {
        transform: translateY(-8px);
    }

    .myHeaderType {
        margin-top: 0;
        padding-top: 0;
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
        flex-direction: column; /* sorba rendezi az ikon+szöveg párokat */
        gap: 15px; /* kisebb rés a mobilhoz */
        align-items: center;
        font-size: 12px; /* kicsit nagyobb, mobilon olvashatóbb */
    }

    .myHeader {
        font-size: 36px; /* kisebb címsor mobilon */
    }

    .myHeaderType {
        font-size: 24px; /* kisebb alcím mobilon */
    }
}
</style>