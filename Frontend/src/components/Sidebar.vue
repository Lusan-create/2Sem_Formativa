<script> 
</script>

<!-- HTML -->
<template>
        <body class=" flex flex-col items-center h-[100dvh] w-[10dvw] bg-cyan-300 shadow-black shadow-sm">
            <section class="basis-1/3 w-[100%] h-[5dvh]">
                <img src="" alt="" >
            </section>

            <section class="flex flex-col basis-1/3 w-[100%] gap-1 justify-center">
                <button id="botao">HOME</button>
                <button id="botao">AGENDAMENTO</button>
                <button id="botao">CADASTRO</button>
                <button id="botao">FOLLOW UP</button>
            </section>

            <section class="flex flex-col justify-end h-[100%] w-[100%] basis-1/3">
                <p class="flex self-start justify-center w-[100%] mb-4">MADE BY QUARTZ</p>
            </section>
        </body>
</template>


<!-- CSS -->
<style scoped>
    #botao{
        width:              8dvw;
        height:             4dvh;
        background-color:   black;
        justify-self:       center;
        align-self:         center;
        border-style:       solid;
        border-color:       black;
        border-width:       0.3dvh;
        border-radius:      0.5dvh;
        color:              white;
        text-shadow:        20%
    }

    #botao:hover{
        background-color:   white;
        color:              black;
    }
</style>