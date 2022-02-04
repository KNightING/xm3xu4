<template>
    <h4 class="mt-3 text-xl">{{ props.title }}</h4>
    <div class="flex flex-wrap gap-3">
        <div
            v-for="skillInfo in props.skillInfos"
            :key="skillInfo.name"
            class="flex items-center justify-center bg-white shadow-gray-500 shadow-md rounded-xl p-3"
        >
            <img :src="skillInfo.icon" class="h-10" />
            <span class="text-xl pl-1">{{ skillInfo.name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SkillInfo } from "./Skill.vue";

const props = defineProps<{ title: string, skillInfos: SkillInfo[] }>();
</script>

<style scoped>
</style>