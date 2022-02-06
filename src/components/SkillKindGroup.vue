<template>
    <div class="group">
        <h4 class="mt-3 text-xl group-hover:font-bold">{{ props.title }}</h4>
        <div class="flex flex-wrap">
            <div
                v-for="skillInfo in props.skillInfos"
                :key="skillInfo.name"
                class="flex items-center justify-center bg-white shadow-gray-500 shadow-md rounded-xl p-3 mr-3 my-[0.375rem]"
            >
                <img :src="skillInfo.icon" class="h-10" />
                <span class="text-xl pl-1 font-semibold">{{ skillInfo.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SkillInfo } from "./Skill.vue";

const props = defineProps<{ title: string; skillInfos: SkillInfo[] }>();
</script>

<style scoped></style>
