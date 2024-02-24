(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{40:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-1.dbc2198e.jpg"},41:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-1.0aa0cb76.jpg"},42:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-2.f0108702.jpg"},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var r=a(0),i=a(40),s=a.p+"static/media/project-barta24.b032722f.png",c=a(41);const l=[{id:1,title:"Barta24 - Multimedia News Portal",category:"Web Application",img:s,ProjectHeader:{title:"Multimedia News Portal Management System",publishDate:"Jul, 2018",tags:"Backend / Frontend"}},{id:2,title:"Online Flight Booking System (GDS)",category:"Web Application",img:a.p+"static/media/gds.7fd274ee.png"},{id:3,title:"E - Commerce Web Application",category:"Web Application",img:a.p+"static/media/ecommerce-project.80e4814c.png"},{id:4,title:"Human Resource Management System (HRMS)",category:"Web Application",img:a(42).a},{id:5,title:"Campus/University Management System",category:"Web Application",img:c.a},{id:6,title:"Mobile/Responsive Web Design For Barta24 Project",category:"UI/Frontend",img:i.a}];var n=a(2);const o=Object(r.createContext)(),d=e=>{const[t,a]=Object(r.useState)(l),[i,s]=Object(r.useState)(""),[c,d]=Object(r.useState)(""),m=t.filter((e=>e.title.toLowerCase().includes(i.toLowerCase())||""===i?e:"")),x=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(c)));return Object(n.jsx)(o.Provider,{value:{projects:t,setProjects:a,searchProject:i,setSearchProject:s,searchProjectsByTitle:m,selectProject:c,setSelectProject:d,selectProjectsByCategory:x},children:e.children})}},44:function(e,t,a){"use strict";var r=a(0),i=a(7),s=a(38),c=a(2);var l=e=>{let{title:t,category:a,image:r,id:i}=e;return Object(c.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(c.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(c.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(c.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(c.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})},n=a(43);const o=["Web Application","Mobile Application","UI/UX Design","Branding"];var d=e=>{let{setSelectProject:t}=e;return Object(c.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(c.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),o.map((e=>Object(c.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})};t.a=()=>{const{projects:e,searchProject:t,setSearchProject:a,searchProjectsByTitle:s,selectProject:o,setSelectProject:m,selectProjectsByCategory:x}=Object(r.useContext)(n.a);return Object(c.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(c.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(c.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(c.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(c.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(c.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(c.jsx)(i.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(c.jsx)("input",{onChange:e=>{a(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(c.jsx)(d,{setSelectProject:m})]})]}),Object(c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:o?x.map((e=>Object(c.jsx)(l,{title:e.title,category:e.category,image:e.img,id:e.id}))):t?s.map((e=>Object(c.jsx)(l,{title:e.title,category:e.category,image:e.img,id:e.id}))):e.map((e=>Object(c.jsx)(l,{title:e.title,category:e.category,image:e.img,id:e.id})))})]})}},52:function(e,t,a){"use strict";a.r(t);var r=a(12),i=a(22),s=a(7),c=a.p+"static/media/developer.ef097afb.svg",l=a.p+"static/media/developer-dark.3f07bd13.svg",n=a(38),o=a(2);var d=()=>{const[e]=Object(i.a)();return Object(o.jsxs)(n.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(o.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(o.jsx)(n.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Ashraful Islam"}),Object(o.jsx)(n.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Full-Stack Web Application Developer Based in Dhaka"}),Object(o.jsx)(n.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(o.jsxs)("a",{download:"ashraful_resume.pdf",href:"/files/ashraful_resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(o.jsx)(s.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(o.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(o.jsx)(n.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(o.jsx)("img",{src:"dark"===e?c:l,alt:"Developer"})})]})},m=a(44),x=a(43),g=a(17);t.default=()=>Object(o.jsxs)("div",{className:"container mx-auto",children:[Object(o.jsx)(d,{}),Object(o.jsx)(x.b,{children:Object(o.jsx)(m.a,{})}),Object(o.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(o.jsx)(r.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(o.jsx)(g.a,{title:"More Projects"})})})]})}}]);
//# sourceMappingURL=3.9b3b8096.chunk.js.map