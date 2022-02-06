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
    date: new Date(2016, 4),
    title: "加入 統智股份有限公司",
    content: `進入統智擔任<b class='text-blue-600'>系統工程師</b>，並接手維運<b class='text-purple-600'>黑貓宅急便</b>送貨司機、事務員等用的手持裝置，
    系統使用<b class='text-blue-600'>WinCE</b>並使用<b class='text-blue-600'>C#寫WinForm</b>，該專案持續維運至2021年中左右。
    `,
    project: [
      {
        customer: "黑貓宅急便",
        projectName: "集配手持終端機",
        useSkill: ["WinCE", "C#"],
        role: ["PG"],
        content: `
        黑貓宅急便司機、事務員、廠內人員使用的APP，提供集貨、配送、販售、日結、開立列印發票、列印小白單等...功能。
        `,
      },
      {
        customer: "家樂福",
        projectName: "揀貨程式",
        useSkill: ["WinCE", "C#"],
        role: ["PG"],
        content: ``,
      },
      {
        customer: "黑貓宅急便",
        projectName: "資訊工程維護系統",
        role: ["PG"],
        useSkill: ["Golang", "AngularJS"],
        content: ``,
      },
      {
        projectName: "WEB客服聊天室",
        useSkill: [".net MVC", "C#", "signalR"],
        role: ["PG"],
        isDemo: true,
        isSingle: true,
        content: `
        提供罐頭回覆，如罐頭回覆無法解決問題，可以連接線上客服一對一進行解答。
        `,
      },
    ],
  },
  {
    date: new Date(2017, 2),
    title: "取得AAD",
    content: `取得<b class='text-blue-600'>Associate Android Developer</b>證照，並開始參與Android相關專案
    <a class='block' href='https://www.credential.net/23cca15b-bea9-4689-a0c7-7c1c793a171d' target="_blank" rel="noreferrer noopener" alt='Associate Android Developer'><img class='md:max-w-sm inline-block' src='https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/10942288'></img></a>
    `,
    project: [
      {
        customer: "首阜",
        projectName: "查核APP",
        useSkill: ["Android", "Java"],
        role: ["PG"],
        content: `
        `,
      },
      {
        projectName: "排隊APP",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        isDemo: true,
        isSingle: true,
        content: `
        目標客戶是消費者、商家，臺灣人喜歡排隊已經不是一兩天的事情，該APP目的是期望消費者可以至商家使用APP刷QR Code取得候位資訊後，消費者不需要在門口排隊，推播通知入店，商家也不需要打電話通知消費者。
        `,
      },
      {
        customer: "沐春",
        projectName: "盤點APP",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        isSingle: true,
        content: ``,
      },
    ],
  },
  {
    date: new Date(2018, 0),
    title: "大智通物流士APP次代開發",
    content: `<b class='text-purple-600'>大智通</b>物流士APP從<b class='text-blue-600'>WinCE</b>移植至<b class='text-blue-600'>Android</b>，
    在專案內擔任<b class='text-blue-600'>SA</b>與<b class='text-blue-600'>PG</b>，負責依照<b class='text-blue-600'>WinCE</b>版本的程式碼寫成設計書與APP共通類與部分功能的開發。<br/>
    `,
    project: [
      {
        customer: "大智通",
        projectName: "物流士APP",
        useSkill: ["Android", "Kotlin"],
        role: ["PG", "SA"],
        content: `
        提供物流士廠內點貨、訊息通知、配送等功能。
        `,
      },
    ],
  },
  {
    date: new Date(2018, 6),
    title: "富邦人壽手機e方便優化專案",
    content: `
    <b class='text-purple-600'>富邦人壽</b>的客戶向APP「手機e方便」，本次需求是將此APP換skin。
    `,
    project: [
      {
        customer: "富邦人壽",
        projectName: "手機e方便",
        useSkill: ["Android", "Java"],
        role: ["PG"],
        iconSrc:
          "https://play-lh.googleusercontent.com/w1cPBNZHRPeB6UdOQGKRPZcaHkDknmDQ2TMBT5MG8EvjtKfxQy4uoCHQbrFFGWGhJQ=s360-rw",
        iconLink:
          "https://play.google.com/store/apps/details?id=com.fubonlife.mobileC&hl=zh_TW&gl=US&showAllReviews=true",
        content: `
        主要是將既有APP換上三種kin，但也有協助客戶修改部分邏輯與既有bug。
        `,
      },
    ],
  },
  {
    date: new Date(2018, 8),
    title: "手機e方便尾聲",
    content: `
    手機e方便到了接近收尾的階段，開始進行其他小型的專案。
    `,
    project: [
      {
        customer: "這一鍋",
        projectName: "店內會員系統",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        isSingle: true,
        content: `
        店內人員使用平板，APP提供今日有訂位的會員的資訊。
        `,
      },
      {
        customer: "台鐵",
        projectName: "便當販售APP",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        isDemo: true,
        isSingle: true,
        content: `
        目標客戶是<b class='text-purple-600'>台鐵</b>，該APP目的是在車箱內販售便當的移動POS，並在販售便當後可以使用藍牙印表機列印發票。
        `,
      },
    ],
  },
  {
    date: new Date(2018, 9),
    title: "Q Burger饗樂餐飲 Phase I",
    content: `
    <b class='text-purple-600'>QBurger</b>的消費者向會員APP，我第一個從頭開始寫的上架APP，開發APP共通與大部分功能，部分後台查詢功能。
    `,
    project: [
      {
        customer: "QBurger",
        projectName: "饗樂餐飲",
        useSkill: ["Android", "Kotlin", "Angular"],
        role: ["PG"],
        iconLink:
          "https://play.google.com/store/apps/details?id=com.qburger.memberapp&hl=zh_TW&gl=US",
        iconSrc:
          "https://play-lh.googleusercontent.com/6jmCraTqX2nS_9oYAx6eYA0lny5CBSQVtZ6mmMqpqAHC_hP2UfC1_r76yT-4N_0S-Oaz=s360-rw",
        content: `
        消費者向APP，Phase I提供會員累點、兌換券交易、門市查詢、活動查詢等功能。
        `,
      },
    ],
  },
  {
    date: new Date(2019, 1),
    title: "黑貓宅急便 集配手持終端機 BASE版本",
    content: `
    集配手持終端機的克隆版本提供BASE廠區專屬程式。
    `,
    project: [
      {
        customer: "黑貓宅急便",
        projectName: "集配手持終端機 BASE版本",
        useSkill: ["WinCE", "C#"],
        role: ["PG"],
        content: ``,
      },
    ],
  },
  {
    date: new Date(2019, 3),
    title: "7-11 點貨機APP次代",
    content: `
    <b class='text-blue-600'>WinCE</b>移植至<b class='text-blue-600'>Android</b>，主要開發共通與大部分功能。
    `,
    project: [
      {
        customer: "7-11",
        projectName: "點貨機APP次代",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        content: `提供門市人員使用APP訂貨、點貨、貨架查詢、庫存調整等功能。`,
      },
    ],
  },
  {
    date: new Date(2019, 6),
    title: "黑貓宅急便 APP次代 維護",
    content: `
    集配手持終端機版本的<b class='text-blue-600'>Android</b>版本，人力不足時，協助<b class='text-blue-600'>Android</b>版本的仕樣變更、障礙修改。<br/>
    添加專案<b class='text-blue-600'>Kotlin</b>支援，將特殊版本<b class='text-blue-600'>教育訓練</b>版的程式合併至<b class='text-blue-600'>一般</b>版以降低後續兩個維護版本的人力時間成本。<br/>
    2020年初協助開發醫藥物流功能，年末則協助開發退貨角色。
    `,
    project: [
      {
        customer: "黑貓宅急便",
        projectName: "APP次代",
        useSkill: ["Android", "Kotlin", "Java"],
        role: ["PG"],
        content: ``,
      },
      {
        customer: "麥當勞",
        projectName: "物流簽名APP",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        isDemo: true,
        isSingle: true,
        content: `
        目標客戶是<b class='text-purple-600'>麥當勞</b>，給物流人員到店進行APP簽名，將簽名行為電子化與記錄保存。
        `,
      },
    ],
  },
  {
    date: new Date(2020, 3),
    title: "Q Burger饗樂餐飲 Phase II",
    content: `
    PhaseII提供APP線上點餐，開發APP點餐與手機支付<b class='text-blue-600'>TapPay</b>的部分，並協助<b class='text-blue-600'>iOS</b>版本開發歷史訂單的功能。
    `,
    project: [
      {
        customer: "QBurger",
        projectName: "饗樂餐飲",
        useSkill: ["Android", "Kotlin", "iOS", "Swift"],
        role: ["PG"],
        iconLink:
          "https://play.google.com/store/apps/details?id=com.qburger.memberapp&hl=zh_TW&gl=US",
        iconSrc:
          "https://play-lh.googleusercontent.com/6jmCraTqX2nS_9oYAx6eYA0lny5CBSQVtZ6mmMqpqAHC_hP2UfC1_r76yT-4N_0S-Oaz=s360-rw",
        content: `
        消費者向APP，Phase II提供會員用APP線上點餐後，可至門市取餐。
        `,
      },
    ],
  },
  {
    date: new Date(2020, 6),
    title: "家樂福物流APP",
    content: `
    <b class='text-purple-600'>家樂福</b>進軍宅配，此為物流士配送用的APP。
    `,
    project: [
      {
        customer: "家樂福",
        projectName: "物流APP",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        isSingle: true,
        content: ``,
      },
    ],
  },
  {
    date: new Date(2020, 7),
    title: "黑貓Pay App仕樣變更",
    content: `
    <b class='text-purple-600'>黑貓客樂得</b>出的Pay，原本只提供一般消費者使用，仕樣則是加入與黑貓簽約之契約客戶使用。
    `,
    project: [
      {
        customer: "黑貓客樂得",
        projectName: "黑貓Pay",
        useSkill: ["Android", "Kotlin", "Java"],
        role: ["PG"],
        isSingle: true,
        iconSrc: "https://play-lh.googleusercontent.com/AryhbLLrwF06TfCfyBDwGf_5cVtH5f9zNRzzFlI9UpOVSlu5lv_asVNYaPwF_YPNaA=s360-rw",
        iconLink: "https://play.google.com/store/apps/details?id=com.ptc.tcatcollectpayapp&hl=zh_TW&gl=US",
        content: `
        提供預約寄送功能且可以用手機進行支付貨到付款的費用。
        `,
      },
      {
        customer: "優仕淨水",
        projectName: "帳務記錄APP",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        isSingle: true,
        isDemo: true,
        content: `<b class='text-purple-600'>優仕淨水</b>是提供路邊加水站的公司，該APP則是給去加水站取帳時，提供記錄計算帳務的APP。`,
      },
    ],
  },
  {
    date: new Date(2020, 11),
    title: "康是美 門市訂貨機次代APP",
    content: `
    <b class='text-blue-600'>WinCE</b>移植至<b class='text-blue-600'>Android</b>，主要開發共通與大部分功能。
     `,
    project: [
      {
        customer: "康是美",
        projectName: "GOT次代",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        content: `
        提供門市人員操作APP訂貨、退貨等功能。
        `,
      },
    ],
  },
  {
    date: new Date(2021, 1),
    title: "7-11 ibon兌換集點商品",
    content: `
    因OPENPOINT APP的集點商品兌換為統智開發，開發兌換商品的API，提供ibon廠商<b class='text-purple-600'>安源</b>在ibon兌換進行集點商品，並提供<b class='text-purple-600'>7-11</b>行銷人員兌換報表。
     `,
    project: [
      {
        customer: "7-11",
        projectName: "ibon兌換集點商品",
        useSkill: [".net MVC", "C#", "Angular"],
        role: ["PG"],
        content: ``,
      },
    ],
  },
  {
    date: new Date(2021, 3),
    title: "家樂福 揀貨次代APP",
    content: `
    <b class='text-blue-600'>WinCE</b>移植至<b class='text-blue-600'>Android</b>，主要開發共通與大部分功能。
      `,
    project: [
      {
        customer: "家樂福",
        projectName: "揀貨程式",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        content: ``,
      },
    ],
  },
  {
    date: new Date(2021, 4),
    title: "7-11 OPENPOINT APP 集點兌換線上支付",
    content: `
    原本需兌換OPENPOINT APP的集點商品，需在APP兌換的商品後，去想要配達商品的門市進行兌換，如果現金費用也需在門市完成結帳，線上支付的功能則是可以在APP進行線上兌換後選擇配達門市並且完成結帳，主要開發與前端串接兌換的API、新的主檔組入。
     `,
    project: [
      {
        customer: "7-11",
        projectName: "集點兌換線上支付",
        useSkill: [".net MVC", "C#", "AWS", "Redis", "SQL Server"],
        role: ["PG"],
        content: ``,
      },
    ],
  },
  {
    date: new Date(2021, 11),
    title: "OneBoy 盤點APP",
    content: ``,
    project: [
      {
        customer: "OneBoy",
        projectName: "盤點APP",
        useSkill: ["Android", "Kotlin"],
        role: ["PG"],
        isSingle: true,
        content: `提供OneBoy倉庫進行盤點、列印標籤的APP。`,
      },
    ],
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
        <!-- <img
          class="object-cover h-64 w-64 md:h-52 md:w-52 rounded-full bg-gradient-to-tl from-yellow-300 via-red-500 to-indigo-500 p-1.5"
          alt="Picture"
          src="./assets/picture.jpg"
        />-->

        <div class="relative top-0 left-0 h-64 w-64 md:h-52 md:w-52">
          <div
            class="relative top-0 left-0 h-64 w-64 md:h-52 md:w-52 rounded-full bg-gradient-to-tl from-yellow-300 via-red-500 to-indigo-500 animate-spin"
          ></div>
          <img
            class="absolute top-0 left-0 h-64 w-64 md:h-52 md:w-52 object-cover rounded-full p-1.5"
            alt="Picture"
            src="./assets/picture.jpg"
          />
        </div>

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

          <div id="social-group" class="w-full flex md:justify-start justify-center mt-1 space-x-3">
            <a href="https://github.com/KNightING" target="_blank" rel="noreferrer noopener">
              <i
                class="leading-none fab fa-github text-2xl text-gray-400 hover:text-gray-900 relative after:hover:opacity-100 after:hover:animate-ping after:opacity-0 after:rounded-full after:w-full after:h-full after:bg-gray-300 after:absolute after:top-0 after:left-0"
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/KNightING/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i
                class="leading-none fab fa-linkedin text-2xl text-gray-400 hover:text-blue-600 relative after:hover:opacity-100 after:hover:animate-ping after:opacity-0 after:rounded-full after:w-full after:h-full after:bg-sky-300 after:absolute after:top-0 after:left-0"
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
