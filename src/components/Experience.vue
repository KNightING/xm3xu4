<template>
    <div class="mx-3 flex flex-col">
        <h3 class="text-3xl my-1">
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
                    >{{ experience.date?.getFullYear() }} 年 {{ experience.date?.getMonth() + 1 }} 月</span>
                    <span class="block text-xl font-bold">{{ experience.title }}</span>
                    <span v-html="experience.content" v-if="experience.content" class="block"></span>
                    <template v-if="experience.project">
                        <div class="mt-2">
                            <span class="font-bold">參與專案</span>
                            <ul class="list-disc pl-10">
                                <li
                                    v-for="detail in experience.project"
                                    :key="detail.projectName"
                                    class="mt-1"
                                >
                                    <b class="text-purple-600">{{ detail.customer }}</b>
                                    {{ detail.projectName }}
                                    <small
                                        v-if="detail.isDemo"
                                        class="font-mono text-red-700 font-bold italic"
                                    >DEMO</small>
                                    <div>
                                        <div class="flex flex-wrap">
                                            <small
                                                v-if="detail.isSingle"
                                                class="p-1 px-2 rounded-md bg-yellow-200 text-gray-800 mr-1 my-1"
                                            >獨立作業</small>
                                            <small
                                                v-for="role in detail.role"
                                                :key="role"
                                                class="p-1 px-2 rounded-md bg-lime-300 text-gray-800 mr-1 my-1"
                                            >{{ role }}</small>
                                            <small
                                                v-for="useSkill in detail.useSkill"
                                                :key="useSkill"
                                                class="p-1 px-2 rounded-md bg-green-300 text-gray-800 mr-1 my-1"
                                            >{{ useSkill }}</small>
                                        </div>
                                        <span
                                            v-html="detail.content"
                                            v-if="detail.content"
                                            class="block text-sm"
                                        ></span>
                                        <a
                                            v-if="detail.iconSrc"
                                            :href="detail.iconLink"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <img
                                                class="object-cover w-20 inline-block rounded-lg"
                                                :src="detail.iconSrc"
                                            />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </template>
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
    iconLink?: string,
    project?: ExperienceDetail[]
}

export interface ExperienceDetail {
    customer?: string,
    projectName: string,
    content: string,
    useSkill: string[],
    role?: string[],
    iconSrc?: string,
    iconLink?: string,
    isDemo?: boolean,
    isSingle?: boolean
}


const props = defineProps<{ experiences: ExperienceInfo[] }>();

</script>

<style scoped>
</style>