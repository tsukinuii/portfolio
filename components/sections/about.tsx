"use client";

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8 gap-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <button
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold hover:bg-muted"
            title={`ฉันเป็น Full-stack Developer ที่มีประสบการณ์ในการสร้างเว็บแอปด้วย Next.js, Tailwind CSS, Node.js/NestJS, .NET Core 
และฐานข้อมูล SQL Server/MongoDB/MariaDB
เคยพัฒนาแพลตฟอร์มอสังหาฯ ระบบจัดการประกาศ ระบบ coin/point 
ฟีเจอร์อีคอมเมิร์ซ และการเชื่อมต่อ API ต่าง ๆ
ฉันให้ความสำคัญกับการออกแบบระบบให้เป็นระเบียบ โค้ดดูแลต่อได้ 
และแปลงความต้องการที่ซับซ้อนให้เป็นระบบที่ใช้งานได้จริง`}
          >
            ?
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="leading-relaxed flex gap-2 flex-col">
            <span className="text-lg space-y-6">
              <p className="text-muted-foreground">
                I'm a full-stack developer experienced in building modern web
                applications using Next.js, Tailwind CSS, Node.js/NestJS, .net
                core and SQL Server/MongoDB/MariaDB. I enjoy creating clean,
                user-friendly, and efficient systems across both frontend and
                backend.
              </p>
              <p className="text-muted-foreground">
                I’ve worked on real-estate platforms, listing management,
                coin/point systems, e-commerce features, and API integrations. I
                focus on clean architecture, maintainable code, and turning
                complex requirements into reliable solutions.
              </p>
            </span>

            {/* <span className="text-xs space-y-3.5">
              <p className="text-muted-foreground">
                ฉันเป็น Full-stack Developer ที่มีประสบการณ์ในการสร้างเว็บแอป
                ด้วย Next.js, Tailwind CSS, Node.js/NestJS, .NET Core
                และฐานข้อมูลอย่าง SQL Server/MongoDB/MariaDB
                ฉันสนุกกับการทำระบบให้ใช้งานง่าย ดูสะอาด ทั้ง frontend และ
                backend
              </p>
              <p className="text-muted-foreground">
                เคยพัฒนาแพลตฟอร์มอสังหาฯ ระบบจัดการการลงประกาศ ระบบ coin/point
                ฟีเจอร์อีคอมเมิร์ซ และการเชื่อมต่อ API ต่าง ๆ
                ฉันให้ความสำคัญกับการออกแบบระบบให้เป็นระเบียบ โค้ดที่ดูแลต่อได้
                รวมถึงการเปลี่ยนความต้องการที่ซับซ้อนให้กลายเป็นโซลูชันที่ใช้งานได้จริง
              </p>
            </span> */}
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-semibold text-foreground mb-2">
                Current Role
              </h3>
              <p className="text-muted-foreground">Full-stack Developer</p>
              <p className="text-sm text-muted-foreground mt-1">
                2019 - Present
              </p>
            </div>
            <div className="border-l-2 border-accent pl-6">
              <h3 className="font-semibold text-foreground mb-2">Education</h3>
              <p className="text-muted-foreground font-medium">
                King Mongkut’s University of Technology North Bangkok
              </p>
              <p className="text-muted-foreground text-sm">
                Aug 2014 – May 2018
              </p>
              <p className="text-muted-foreground mt-1">
                Bachelor of Applied Science, Mathematics (Mathematics with
                Computer Science)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
