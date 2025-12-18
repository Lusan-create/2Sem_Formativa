<template>
    <body>
        <section class = "flex flex-col h-[70dvh] w-[60dvw]  shadow-gray-500 shadow-md rounded-[1dvw]
                         justify-self-center self-center items-center gap-[3dvh] bg-gradient-to-b from-slate-50 via-cyan-50 to-cyan-300 opacity-[93%]">
            <h1 class= "text-[2.5dvw] self-center mt-[4dvh]" >LOGIN</h1>
            <form action="" class="self-center flex flex-col gap-[2dvh]">
                <div class="flex flex-col">
                    <label for="email" class="text-[1.5dvw]">Email</label>
                    <input type="text" 
                    id="email" 
                    placeholder="Email..." 
                    class="border-black border-solid border-[0.3dvh] rounded-md h-[7dvh] w-[35dvw] text-[1.5dvw] pl-[0.5dvw] bg-white
                    focus:outline-black focus:outline-offset-1.95 focus:outline-[0.1]"
                    >
                </div>
                
                <div class="flex flex-col">
                    <label for="senha" class="text-[1.5dvw]">Senha</label>
                    <input type="text" 
                    name="Senha" 
                    id="senha" 
                    placeholder="Senha..." 
                    class="border-black border-solid border-[0.3dvh] rounded-md h-[7dvh] w-[35dvw] text-[1.5dvw] pl-[0.5dvw] bg-white
                    focus:outline-black focus:outline-offset-1.95 focus:outline-[0.1]"
                    ">
                </div>
                
                <button @click="store.login" class="h-[6dvh] w-[15dvw] border-black border-solid border-[0.3dvh] rounded-md justify-self-center self-center mt-[3dvh]
                               bg-black text-white text-[2.7dvh] hover:bg-white hover:text-black active:bg-cyan-100">LOGIN</button>
                
            </form>
        </section>
    </body>
</template>

<script>
//Imports
import { onMounted } from 'vue';
import {useUserStore} from "../stores/userStore"

//Inicializando o store
//const store = useUserStore();

</script>

<style scoped>
    body {
        background:             lightblue;  
        background-image:       url("../assets/Backgrounds/Backgound01.png");
        background-size:        cover;

        display:                flex;
        justify-content:        center;

        height:                 100dvh;
        width:                  100dvw;
    }

</style>