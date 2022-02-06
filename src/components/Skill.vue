<template>
    <div class="mx-3 flex flex-col mb-10">
        <h3 class="text-3xl my-1">
            <i class="fas fa-book mr-3"></i>專業技能
        </h3>
        <div class="h-1 bg-gradient-to-tl from-yellow-300 via-red-500 to-indigo-500" />
        <SkillKindGroup title="程式語言" :skill-infos="skill.languages" />
        <SkillKindGroup title="前端框架" :skill-infos="skill.frontends" />
        <SkillKindGroup title="行動裝置" :skill-infos="skill.mobiles" />
        <SkillKindGroup title="後台服務" :skill-infos="skill.backends" />
        <SkillKindGroup title="工具應用" :skill-infos="skill.tools" />
    </div>
</template>

<script setup lang="ts">
import SkillKindGroup from './SkillKindGroup.vue';

export interface SkillInfo {
    icon: string,
    name: string,
}

export interface SkillData {
    languages: SkillInfo[],
    frontends: SkillInfo[],
    backends: SkillInfo[],
    mobiles: SkillInfo[],
    tools: SkillInfo[]
}

const props = defineProps<{ skill: SkillData }>();

</script>

<style scoped>
</style>