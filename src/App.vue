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
    content: `進入統智擔任<b class='text-blue-600'>系統工程師</b>，並接手維運<b class='text-purple-600'>黑貓宅急便</b>送貨司機、事務員等用的手持裝置，
    系統使用<b class='text-blue-600'>WinCE</b>並使用<b class='text-blue-600'>C#寫WinForm</b>，該專案持續維運至2021年中左右。
    <br/>
    <span class='font-bold'>參與新專案</span>
    <ul class='list-disc pl-10'>
    <li>
      <b class='text-purple-600'>黑貓宅急便</b>資訊工程維護系統<small class='text-gray-500'>(Golang、Angular.js)</small><br/>
      
    </li>
    <li>
      <b class='text-purple-600'>家樂福</b>揀貨程式<small class='text-gray-500'>(WinCE、C#)</small>
    </li>
    </ul>
    <span class='font-bold'>新商機開發</span>
     <ul class='list-disc pl-10'>
    <li>
    <b class='text-blue-600'>WEB客服聊天室</b><small class='text-gray-500'>(asp.net MVC、signalR)</small>
    </li>
    </ul>
    `,
  },
  {
    date: new Date(2017, 3),
    title: "取得AAD",
    content: `取得<b class='text-blue-600'>Associate Android Developer</b>證照，並開始參與Android相關專案
    <a href='https://www.credential.net/23cca15b-bea9-4689-a0c7-7c1c793a171d' target="_blank" rel="noreferrer noopener" alt='Associate Android Developer'><img class='md:max-w-sm' src='https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/10942288'></img></a>
    <span class='font-bold'>參與新專案</span>
    <ul class='list-disc pl-10'>
    <li>
     <b class='text-purple-600'>首阜</b>查核App<small class='text-gray-500'>(Andorid、Java)</small>
    </li>
    <li>
      <b class='text-purple-600'>沐春</b>盤點App<small class='text-gray-500'>(Andorid、Kotlin)</small>
    </li>
    </ul>
    <span class='font-bold'>新商機開發</span>
    <ul class='list-disc pl-10'>
    <li>
    <b class='text-blue-600'>排隊App</b><small class='text-gray-500'>(Andorid、Kotlin)</small>
    </li>
    <li>
    <b class='text-purple-600'>台鐵</b>便當販售App<small class='text-gray-500'>(Andorid、Kotlin)</small>
    </li>
    `,
  },
  {
    date: new Date(2017, 6),
    title: "大智通物流士APP次代開發",
    content: `<b class='text-purple-600'>大智通</b>物流士App從<b class='text-blue-600'>WinCE</b>移植至<b class='text-blue-600'>Android</b>，
    在專案內擔任<b class='text-blue-600'>SA</b>與<b class='text-blue-600'>PG</b>的角色，負責依照<b class='text-blue-600'>WinCE</b>版本的程式碼寫成設計書與App共通類與部分功能的開發。<br/>
    `,
  },
  {
    date: new Date(2018, 3),
    title: "大智通物流士APP次代上線",
    content: `
    `,
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
    <div class="w-full flex justify-center bg-sky-100">
      <div
        id="profile"
        class="w-full md:w-[600px] flex flex-col items-center justify-center md:flex-row py-4"
      >
        <img
          class="object-cover h-64 w-64 md:h-52 md:w-52 rounded-full bg-gradient-to-tl from-yellow-300 via-red-500 to-indigo-500 p-1.5"
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
              <i
                class="leading-none fab fa-github text-2xl text-gray-400 hover:text-gray-900 relative after:hover:opacity-100 after:hover:animate-ping after:opacity-0 after:rounded-full after:w-full after:h-full after:bg-gray-300 after:absolute after:top-0 after:left-0"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col md:flex-row my-4">
      <div class="flex-1">
        <Skill :skill="skillData"></Skill>
      </div>

      <div class="flex-[1.4_0_0]">
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
