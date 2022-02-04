<template>
    <div class="mx-3 flex flex-col">
        <h3 class="text-4xl">
            <i class="fas fa-running mr-3"></i>經歷
        </h3>
        <div class="h-1 bg-gradient-to-tl from-yellow-300 via-red-500 to-indigo-500" />
        <div class="mt-4">
            <div
                class="group relative min-h-[100px] pb-8 before:absolute before:z-20 before:top-[5px] before:left-0 before:rounded-full before:border-4 before:border-gray-400 before:h-5 before:w-5 before:bg-blue-400 after:absolute after:w-1 after:h-full after:bg-gray-400 after:top-[8px] after:left-2"
                v-for="experience in props.experiences"
                :key="experience.title"
            >
                <div
                    class="relative before:absolute before:z-10 before:rounded-full before:top-[5px] before:left-0 before:h-5 before:w-5 before:bg-blue-400 before:group-hover:animate-ping"
                ></div>
                <p class="px-8">
                    <span
                        v-if="experience.date"
                        class="text-lg"
                    >{{ experience.date?.getFullYear() }} 年 {{ experience.date?.getMonth() }} 月</span>
                    <span class="block text-xl font-bold">{{ experience.title }}</span>
                    <span v-html="experience.content" v-if="experience.content" class="block"></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface ExperienceInfo {
    date?: Date,
    title: string,
    content: string,
    iconSrc?: string,
    iconLink?: string
}

const props = defineProps<{ experiences: ExperienceInfo[] }>();

</script>

<style scoped>
</style>