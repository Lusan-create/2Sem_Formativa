<script> 
</script>

<!-- HTML -->
<template>
        <body class=" flex flex-col items-center h-[100dvh] w-[10dvw] bg-cyan-300 shadow-black shadow-md">
            <section class="basis-1/3 w-[100%] h-[5dvh]">
                <img src="" alt="" >
            </section>

            <section class="flex flex-col basis-1/3 w-[100%] gap-1 justify-center">
                <button id="botao" class="shadow-gray-500 shadow-sm">HOME</button>
                <button id="botao" class="shadow-gray-500 shadow-sm">AGENDAMENTO</button>
                <button id="botao" class="shadow-gray-500 shadow-sm">CADASTRO</button>
                <button id="botao" class="shadow-gray-500 shadow-sm">FOLLOW UP</button>
            </section>

            <section class="flex flex-col justify-end h-[100%] w-[100%] basis-1/3">
                <p class="flex self-start justify-center w-[100%] mb-4 text-[1dvw]">MADE BY QUARTZ</p>
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
        text-shadow:        20%;
        font-size: 1dvw;
        box-shadow:         100dvh 100dvh, black;
    }

    #botao:hover{
        background-color:   white;
        color:              black;
    }
    
    #botao:active{
        background-color: lavender;
    }
</style>