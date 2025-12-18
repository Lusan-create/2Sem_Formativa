<script setup>
    import Sidebar from "../components/Sidebar.vue";
</script>

<template>
    <body class="flex flex-row">
        <Sidebar/>
        <main class="flex justify-center items-center  w-[90%]" >
            <section id="infos" class="grid w-[80dvw] h-[90dvh]">
                <div id="box01" class="flex flex-col items-center w-[100dvw] gap-7">
                    <button class="w-[70%] h-[10dvh] bg-white mt-[3dvh] flex flex-col items-center justify-center shadow-lg border-[0.3dvh] border-gray-100" id="">
                        <p>MANUTENÇÕES PENDENTES</p>
                        <P>5</P>
                    </button>
                    <button class="w-[90%] h-[50dvh]  flex items-center justify-center shadow-lg border-[0.3dvh] border-gray-100" id="grafico">
                        <P class="text-[2dvw]">GRÁFICOS</P>
                    </button>
                </div>

                <div id="box02" class=" flex flex-col items-center gap-7">
                    <div class="w-[70%] h-[10dvh] mt-[3dvh] flex flex-col items-center justify-center shadow-lg  border-[0.3dvh] border-gray-100" id="">
                        <p>MANUTENÇÕES AGENDADAS</p>
                        <P>15</P>
                    </div>
                    <div class="w-[90%] h-[50dvh] flex items-center justify-center shadow-lg border-[0.3dvh] border-gray-100" id="grafico">
                        <p class="text-[2dvw]">GRÁFICO</p>
                    </div>
                </div>
                
            </section>
        </main>
    </body>
</template>

<style>

</style>