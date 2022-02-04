<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Skill, { SkillInfo, SkillData } from "./components/Skill.vue";
import Experience, { ExperienceInfo } from "./components/Experience.vue";
import logo_kotlin from "./assets/logo_kotlin.svg";
import logo_c_sharp from "./assets/logo_c_sharp.svg";
import logo_golang from "./assets/logo_golang.svg";
import logo_java from "./assets/logo_java.svg";
import logo_dart from "./assets/logo_dart.svg";
import logo_html_5 from "./assets/logo_html_5.svg";
import logo_css3 from "./assets/logo_css3.svg";
import logo_javascript from "./assets/logo_javascript.svg";
import logo_typescript from "./assets/logo_typescript.svg";
import logo_vue_js from "./assets/logo_vue_js.svg";
import logo_tailwindcss from "./assets/logo_tailwindcss.svg";
import logo_microsoft_sql_server from "./assets/logo_microsoft_sql_server.svg";
import logo_redis from "./assets/logo_redis.svg";
import logo_asp_net_mvc from "./assets/logo_asp_net_mvc.png";
import logo_asp_net_core from "./assets/logo_asp_net_core.png";
import logo_android_os from "./assets/logo_android_os.svg";
import logo_flutter from "./assets/logo_flutter.svg";
import logo_git from "./assets/logo_git.svg";
import logo_docker from "./assets/logo_docker.svg";

let skillData: SkillData = {
  languages: [
    {
      icon: logo_kotlin,
      name: "Kotlin",
    },
    {
      icon: logo_c_sharp,
      name: "C#",
    },
    {
      icon: logo_golang,
      name: "Golang",
    },
    {
      icon: logo_java,
      name: "Java",
    },
    {
      icon: logo_dart,
      name: "Dart",
    },
    {
      icon: logo_javascript,
      name: "Javascript",
    },
    {
      icon: logo_html_5,
      name: "Html5",
    },
    {
      icon: logo_css3,
      name: "Css3",
    },
    {
      icon: logo_typescript,
      name: "Typescript",
    },
  ],
  frontends: [
    {
      icon: logo_vue_js,
      name: "Vue",
    },
    {
      icon: logo_tailwindcss,
      name: "Tailwind",
    },
  ],
  backends: [
    {
      icon: logo_microsoft_sql_server,
      name: "SqlServer",
    },
    {
      icon: logo_redis,
      name: "Redis",
    },
    {
      icon: logo_asp_net_core,
      name: ".NET Core",
    },
    {
      icon: logo_asp_net_mvc,
      name: ".NET MVC",
    },
  ],
  mobiles: [
    {
      icon: logo_android_os,
      name: "Android",
    },
    {
      icon: logo_flutter,
      name: "Flutter",
    },
  ],
  tools: [
    {
      icon: logo_git,
      name: "Git",
    },
    {
      icon: logo_docker,
      name: "Docker",
    },
  ],
};

let experiences: ExperienceInfo[] = [
  {
    date: new Date(2016, 5),
    title: "加入 統智股份有限公司",
    content: `進入統智擔任<b class='text-blue-600'>系統工程師</b>，並接手維運<b class='text-blue-600'>黑貓宅急便</b>SD用的手持裝置，
    系統使用<b class='text-blue-600'>WinCE</b>並使用<b class='text-blue-600'>C#寫WinForm</b>，該專案持續維運至2021年中
    `,
  },
  {
    date: new Date(2016, 5),
    title: "統智股份有限公司",
    content: "",
  },
];

function years() {
  let born = new Date(1993, 8, 21);
  let diff = Math.abs(born.getTime() - Date.now()).valueOf();
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
            <a
              href="https://github.com/KNightING"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i class="fab fa-github text-2xl text-gray-400 hover:text-gray-900"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col md:flex-row my-4">
      <div class="flex-1">
        <Skill :skill="skillData"></Skill>
      </div>

      <div class="flex-[1.25_0_0]">
        <Experience :experiences="experiences"></Experience>
      </div>
    </div>
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
