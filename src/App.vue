<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Skill, { SkillInfo, SkillData } from "./components/Skill.vue";

let hello = 'Hello Vue 3 + TypeScript + Vite';

let skillData: SkillData = {
  languages: [
    {
      icon: '@/assets/logo_kotlin.svg',
      name: 'Kotlin'
    },
    {
      icon: '@/assets/logo_c_sharp.svg',
      name: 'C#'
    },
    {
      icon: '@/assets/logo_golang.svg',
      name: 'Golang'
    },
    {
      icon: '@/assets/logo_java.svg',
      name: 'Java'
    },
    {
      icon: '@/assets/logo_dart.svg',
      name: 'Dart'
    },
    {
      icon: '@/assets/logo_javascript.svg',
      name: 'Javascript'
    },
    {
      icon: '@/assets/logo_html_5.svg',
      name: 'Html5'
    },
    {
      icon: '@/assets/logo_css3.svg',
      name: 'Css3'
    },
    {
      icon: '@/assets/logo_typescript.svg',
      name: 'Typescript'
    }
  ],
  frontends: [
    {
      icon: '@/assets/logo_vue_js.svg',
      name: 'Vue'
    },
    {
      icon: '@/assets/logo_tailwindcss.svg',
      name: 'Tailwind'
    },
  ],
  backends: [
    {
      icon: '@/assets/logo_microsoft_sql_server.svg',
      name: 'SqlServer'
    },
    {
      icon: '@/assets/logo_redis.svg',
      name: 'Redis'
    },
    {
      icon: '@/assets/logo_asp_net_core.png',
      name: '.NET Core'
    },
    {
      icon: '@/assets/logo_asp_net_mvc.png',
      name: '.NET MVC'
    },
  ],
  mobiles: [
    {
      icon: '@/assets/logo_android_os.svg',
      name: 'Android'
    },
    {
      icon: '@/assets/logo_flutter.svg',
      name: 'Flutter'
    },
  ],
  tools: [
    {
      icon: '@/assets/logo_git.svg',
      name: 'Git'
    },
    {
      icon: '@/assets/logo_docker.svg',
      name: 'Docker'
    },
  ]
}

function years() {
  let born = new Date(1993, 8, 21);
  let diff = (Math.abs(born.getTime() - Date.now())).valueOf();
  return Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
}

</script>

<template>
  <div id="resume" class="h-full overflow-y-scroll flex flex-col items-center font-sans">
    <div class="w-full flex justify-center bg-yellow-50 shadow-zinc-400">
      <div
        id="profile"
        class="w-full md:w-[600px] flex flex-col items-center justify-center md:flex-row py-4"
      >
        <img
          class="h-64 w-64 md:h-52 md:w-52 rounded-full bg-gradient-to-tl from-yellow-300 via-red-500 to-indigo-500 p-1.5"
          alt="Picture"
          src="./assets/picture.jpg"
        />

        <div class="m-4 w-full md:text-left text-center px-8">
          <p>
            <span class="block text-5xl font-extrabold tracking-widest">邱昱翔</span>
            <span class="block text-3xl">KNightING</span>
            <span class="block text-xl mt-2">
              {{ years() }}歲，現居台北市
              <br />
              <i class="w-10 fas fa-graduation-cap"></i>
              <span class="font-bold">德明財經科技大學</span>
              <br />
              <i class="w-10 fas fa-briefcase"></i>
              <span class="font-bold">統智科技股份有限公司</span>
              <p class="mx-10">
                擔任
                <span class="font-bold">高階系統工程師</span>
              </p>
            </span>
          </p>

          <div id="social-group" class="w-full flex md:justify-start justify-center mt-1">
            <a href="https://github.com/KNightING" target="_blank" rel="noreferrer noopener">
              <i class="fab fa-github text-2xl text-gray-400 hover:text-gray-900"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col md:flex-row">
      <div class="flex-1">
        <Skill :skill="skillData"></Skill>
      </div>

      <div class="flex-1 h-10 bg-blue-500"></div>
    </div>

    <HelloWorld :msg="hello" />
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
