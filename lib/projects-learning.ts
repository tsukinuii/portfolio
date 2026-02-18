export interface ProjectLearning {
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

export const projectsLearning: ProjectLearning[] = [
  {
    id: "auth-system",
    title: "Authentication System (Local + Social Login)",
    category: "backend",
    shortDescription:
      "ออกแบบและพัฒนาระบบ Authentication รองรับ Local Login, Social Login และ Session แบบ Cookie + JWT โดยเริ่มจาก database-centric design",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1771408774/auth-system_papl6c.png",
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1771408774/auth-system.png",
    ],
    tags: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "HttpOnly Cookie",
      "Authentication",
      "Clean Architecture",
    ],
    featured: true,
    contribution: [
      "ออกแบบ database schema สำหรับระบบ auth โดยแยก responsibility ของ users, credentials, identities และ refresh tokens อย่างชัดเจน",
      "พัฒนาระบบ Local Login โดยแยก user profile ออกจาก password ด้วย user_credentials และใช้ bcrypt hash",
      "ออกแบบ Social Login (Google/GitHub) ผ่าน user_identities เพื่อแก้ปัญหา email เปลี่ยน, email ซ้ำ และรองรับ account linking",
      "พัฒนาระบบ refresh token แบบ rotation รองรับ multi-device session และสามารถ revoke เฉพาะ session ได้",
      "ออกแบบ email OTP สำหรับ verify ก่อนสร้าง user เพื่อลด unverified data ใน database",
      "ออกแบบ REST API auth flow (register, login, refresh, logout, social exchange) พร้อม error response มาตรฐานเพื่อ debug ได้ง่าย",
    ],
    // links: {
    //   demo: "",
    //   github: ""
    // }
  },
  {
    id: "lunamachi-clean-architecture-structure",
    title:
      "NestJS Clean Architecture Structure (Domain/Application/Infrastructure/Interface)",
    category: "backend",
    shortDescription:
      "จัดโครงสร้าง NestJS ตาม Clean Architecture/Hexagonal แยก boundary ชัดเจน รองรับการขยาย feature",
    image: [
      "https://res.cloudinary.com/dcv3h3yxr/image/upload/v1771410620/nest3_gilbn1.png",
    ],
    tags: ["NestJS", "Clean Architecture", "DDD", "Repository Pattern"],
    featured: false,
    contribution: [
      "วางโครงสร้างโปรเจกต์แยก Domain (business rules) / Application (use cases) / Infrastructure (DB/3rd party) / Interface (HTTP controllers)",
      "ออกแบบ repository interface ที่ Domain และมี repository implementation ที่ Infrastructure",
      "แยก ORM entity ออกจาก Domain entity เพื่อลด coupling กับ TypeORM",
      "ทำให้ feature ใหม่ (เช่น payment) เพิ่มได้โดยไม่กระทบ auth มาก และเทสง่ายขึ้น",
    ],
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
