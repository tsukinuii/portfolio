export interface Project {
  id: string;
  title: string;
  category: "frontend" | "fullstack" | "backend";
  shortDescription: string;
  image: string[];
  tags: string[];
  featured: boolean;
  contribution: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: "internal-link-header-footer",
    title: "Internal Link Header Footer",
    category: "frontend",
    shortDescription: "Dynamic menu system with SEO optimization",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887910/quick-search-and-footer.png",
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887908/quick-search_pldyq1.png",
    ],
    tags: ["Next.js", "TypeScript", "JSON Config", "SEO"],
    featured: true,
    contribution: [
      "ออกแบบ JSON schema ส่วนกลางสำหรับเมนูหลายระดับ",
      "เพื่อให้คอมโพเนนต์อ่านไฟล์เดียว แล้วใช้ ลูปมาตรฐาน อ่านทุกระดับแทนการเขียน if/else แต่ละเมนู",
      "ลดโค้ดซ้ำกว่า 80% และทำให้ทีมสามารถอัปเดตเมนูได้ง่ายขึ้น",
    ],
    links: {
      demo: "https://www.homehug.in.th",
    },
  },
  {
    id: "upsell-lead",
    title: "Upsell Lead",
    category: "frontend",
    shortDescription: "Upsell Lead",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887910/upsell-lead-multi.png",
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887910/upsell-lead.png",
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887909/send-upsell-lead.png",
    ],
    tags: ["Next.js", "JavaScript", "Styled Components"],
    featured: true,
    contribution: [
      "พัฒนา upsell lead component ให้รองรับข้อมูลหลายรูปแบบ ทั้งรูปภาพและรายละเอียดโครงการ",
      "ออกแบบ flow การส่ง lead สำหรับหลายโครงการ ให้กรอกข้อมูลเพียงครั้งเดียวและส่งได้ครบทุกโครงการที่เลือก",
      "พัฒนา pagination ให้ใช้งานง่ายและมี UI ที่สวยงาม",
      "ออกแบบการ์ดโครงการให้รองรับหลายรูปภาพและการแสดงผลแบบยืดหยุ่น",
    ],
    links: {
      demo: "https://www.home.co.th/condo/ocean-horizon-beachfront-condo-pattaya-10946",
    },
  },
  {
    id: "matching-lead",
    title: "Matching Lead",
    category: "frontend",
    shortDescription: "Matching Lead",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887907/matching-lead_gu4cm2.png",
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887907/matching-lead-send-1_t912mp.png",
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887908/matching-lead-send-2_yfgxpa.png",
    ],
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Styled Components"],
    featured: false,
    contribution: [
      "พัฒนา matching lead component ให้รองรับข้อมูลหลายรูปแบบ",
      "ออกแบบ flow การส่ง lead",
    ],
    links: {
      demo: "https://www.home.co.th",
    },
  },
  {
    id: "promotion-page",
    title: "Advanced Promotion & Event Page",
    category: "frontend",
    shortDescription: "ui design promotion page",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887909/promotion-page.png",
    ],
    tags: ["Next.js", "JavaScript", "SEO"],
    featured: false,
    contribution: [
      "พัฒนา หน้าโปรโมชั่นทั้งหน้า (tab menu, filter, card project, pagination, SEO)",
      "ออกแบบ Reusable Card System รองรับหลายรูปแบบ: vertical/horizontal/slider, ribbon, timer, หลายข้อมูล",
      "จัดการ URL state สำหรับการ filter เพื่อแชร์ลิงก์ได้",
    ],
    links: {
      demo: "https://www.home.co.th/promotion",
    },
  },
  {
    id: "vdo-detail",
    title: "VDO Detail – YouTube API + Interactive Transcript",
    category: "fullstack",
    shortDescription: "ui and backend vdo detail",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887910/vdo-detail.png",
    ],
    tags: ["Next.js", "JavaScript", "SEO", ".net core"],
    featured: false,
    contribution: [
      "เปิดใช้ YouTube IFrame Player API ด้วย enablejsapi=1 และส่งคำสั่งผ่าน postMessage (seekTo, playVideo, และ mute)",
      "ก่อนสั่งเล่น เรียก scrollIntoView({ behavior: 'smooth', block: 'center' }) ที่ iframe เพื่อพาผู้ใช้กลับไปโฟกัสที่วิดีโอ",
      "มีการปรับ api เพื่อ get ข้อมูล transcript มาแสดง",
    ],
    links: {
      demo: "https://www.home.co.th/vdo/topic-61061",
    },
  },
  {
    id: "coin-free",
    title: "Coin Free",
    category: "fullstack",
    shortDescription: "ui and backend coin free",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887910/coins-free.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js"],
    featured: false,
    contribution: [
      "ออกแบบโครงสร้างฐานข้อมูลโดยยึดโครงสร้างเก่าที่มีอยู่เพื่อเก็บข้อมูล coin free ว่าควรเพิ่มยังไงดี",
      "ออกแบบหน้า coin free ให้ดูสวยงามและใช้งานได้",
      "ออกแบบโครงสร้าง component ให้รองรับทั้ง package coins promotion และ package ธรรมดา",
      "ถ้ามีการกดรับ coins free ไปแล้ว ไม่ให้ ui แสดงการ์ด coins free อีก",
      "กดรับ coins free แล้วให้ api reccord ข้อมูลลง transaction",
      "ให้ api ติดตาม transaction ว่า user id นี้มีการกดรับ coins free แล้วหรือไม่",
    ],
    links: {
      demo: "https://www.homehug.in.th/account?tab=3",
    },
  },
  {
    id: "blog-page",
    title: "Blog Page",
    category: "frontend",
    shortDescription: "ui design blog page",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887910/blog-page.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    contribution: [
      "ออกแบบหน้า blog page ให้ดูสวยงามและใช้งานได้",
      "ออกแบบการ์ดให้รองรับข้อมูล blog ทั้งรูป, ข้อมูล, ตัวอย่าง",
      "",
    ],
    links: {
      demo: "https://www.homehug.in.th/blog",
    },
  },
  {
    id: "auth-testing",
    title: "Authentication Module Testing",
    category: "frontend",
    shortDescription: "Unit & Integration Tests for Login Flow",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887909/tests.png",
    ],
    tags: ["Jest", "React Testing Library", "Integration Test", "Unit Test"],
    featured: false,
    contribution: [
      "พัฒนา Unit Test และ Integration Test ด้วย Jest และ React Testing Library",
      "ทดสอบ Input, Button, Validators และ Flow ของหน้า Login",
      "จัดโครงสร้าง tests แยกตามประเภท unit / integration / utils / setup",
    ],
  },
  {
    id: "storybook",
    title: "Storybook Component Documentation",
    category: "frontend",
    shortDescription: "Documenting and testing UI components using Storybook",
    image: ["https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887908/storybook_lvbtbs.png"],
    tags: ["Storybook"],
    featured: false,
    contribution: [
      "เริ่มต้นใช้ Storybook สำหรับจัดทำเอกสารและทดสอบ UI Components โดยสร้างตัวอย่างของปุ่ม (variants, sizes, states)",
      "ใช้งาน Controls เพื่อปรับค่า props แบบ real-time และตรวจสอบพฤติกรรมของคอมโพเนนต์",
      "วางพื้นฐานโครงสร้างเพื่อขยาย Storybook ไปยังคอมโพเนนต์อื่นในอนาคต",
    ],
  },
  {
    id: "history-coins-api",
    title: "Api History Order แสดงสถานะการใช้ Coins",
    category: "backend",
    shortDescription: "create api for history coins",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887908/history-coins_dfnakd.png",
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887908/history-coins-response_h6nwk6.png",
    ],
    tags: ["Nest.js"],
    featured: false,
    contribution: [
      "สร้าง api เพื่อดึงข้อมูล transaction ของ user",
      "ออกแบบ api ให้ยืดหยุ่นและสามารถใช้ได้ทุกกรณี เช่น filter วันที่, ประเภท transaction (ใช้ coins, ได้รับ coins)",
      "ออกแบบ object response เพื่อให้ ui อ่าน object ง่ายลดการใช้ if else แต่ละ case เช่น ใช้ coin ไปกับ product อะไร เช่น ดันประกาศ, ต่ออายุประกาศ หรือได้รับ coins จาก package อะไร",
    ],
  },
  {
    id: "campaign-api",
    title: "Campaign API",
    category: "backend",
    shortDescription: "create api for campaign",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887911/create-campaigns.png",
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887909/update-campaign_axl8nx.png",
    ],
    tags: ["Nest.js"],
    featured: false,
    contribution: [
      "ร่วมวางโครงสร้างและออกแบบฐานข้อมูลกับเพื่อนร่วมทีมอีก 2 คน",
      "สร้าง Campaign โดยตรวจสอบการซ้ำของ conditionItem และช่วงเวลาทับซ้อนกับแคมเปญอื่น",
      "พร้อมรองรับสถานะใช้งาน (isDelete, expire) และตรวจสอบ duplicate conditionItem ภายใน 1 แคมเปญเอง ช่วยป้องกันข้อมูลซ้ำและความผิดพลาดของแคมเปญ",
      "ในแคมเปญหนึ่ง (campaign A) ไม่สามารถมี conditionItem ซ้ำกัน",
    ],
  },
  {
    id: "update-api-post-es",
    title: "update Api post ES  for Prioritize",
    category: "backend",
    shortDescription: "update Api post ES  for Prioritize",
    image: ["https://res.cloudinary.com/dcv3h3yxr/image/upload/v1762887907/es-listing_mjvfxt.png"],
    tags: [".net core", "elastic search"],
    featured: false,
    contribution: [
      "ปรับปรุง api post ES เพิ่ม object images, product, contact บน elastic search",
    ],
    links: {
      demo: "",
    },
  },
  // {
  //   id: "",
  //   title: "",
  //   category: "fullstack",
  //   shortDescription: "",
  //   image: ["/"],
  //   tags: ["Next.js", "JavaScript", "SEO"],
  //   featured: false,
  //   contribution: [],
  //   links: {
  //     demo: "",
  //   },
  // },
];
