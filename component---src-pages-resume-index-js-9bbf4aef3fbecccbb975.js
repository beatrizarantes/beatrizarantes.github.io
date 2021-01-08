(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Zc0g:function(e,t,a){"use strict";a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return f})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return x})),a.d(t,"f",(function(){return E}));var l=a("q1tI"),n=a("cJ4P"),r=a("IP2g"),c=a("8tEE"),m=function(e){var t=e.title;return l.createElement(l.Fragment,null,l.createElement("h2",{className:"text-2xl mb-5 uppercase"},t))},s=function(e){var t=e.title,a=e.children,n=e.hideTitle,r=e.className,c=n||!1;return l.createElement(l.Fragment,null,l.createElement("div",{className:r},!c&&l.createElement(m,{title:t}),a))},i=function(e){var t=e.experience,a=t.description&&""!==t.description.trim(),n=t.highlights&&t.highlights.length>0;return l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement("span",{className:"text-sm text-gray-500"},t.start," • ",t.end),l.createElement("h3",{className:"font-serif text-lg font-medium -mb-1"},t.company),l.createElement("h4",{className:"font-serif text-lg font-medium text-gray-500"},t.title),a&&l.createElement("p",{className:"mt-1 text-gray-500"},t.description),n&&l.createElement("ul",{className:"pl-5 list-disc text-gray-500"},t.highlights.map((function(e,t){return l.createElement("li",{key:t},e)})))))},o=function(e){var t=e.education;return l.createElement(l.Fragment,null,l.createElement("div",{className:"flex flex-col"},l.createElement("span",{className:"text-sm text-gray-500"},t.start===t.end?t.start:t.start+" - "+t.end,t.location?" ("+t.location+")":""),l.createElement("h3",{className:"font-serif text-lg font-medium -mb-1"},t.certification),l.createElement("h4",{className:"font-serif text-lg font-medium text-gray-500"},t.school)))},d=function(e){var t=e.className;return l.createElement(l.Fragment,null,l.createElement(s,{title:"Resumo",className:t},l.createElement("p",null,n.d.summary)))},u=function(e){var t=e.className;return l.createElement(l.Fragment,null,l.createElement(s,{title:"Formação Acadêmica",className:t},l.createElement("div",{className:"space-y-7"},n.b.map((function(e,t){return l.createElement(o,{education:e,key:t})})))))},f=function(e){var t=e.prefix,a=e.postfix,r=e.className,c=n.a.length,m=t&&t>0?n.a.slice(0,t):a&&a>0?n.a.slice(c-a,c):n.a,i=a>0;return l.createElement(l.Fragment,null,l.createElement(s,{title:"Cursos",hideTitle:i,className:r},l.createElement("div",{className:"space-y-7"},m.map((function(e,t){return l.createElement(o,{education:e,key:t})})))))},E=function(e){var t=e.className;return l.createElement(l.Fragment,null,l.createElement(s,{title:"Ferramentas",className:t},l.createElement("ul",{className:"flex flex-row flex-wrap"},n.e.map((function(e,t){return l.createElement("li",{className:"rounded-full bg-gray-100 px-3 mr-2 mb-2",key:t},e)})))))},x=function(e){var t=e.className,a=[{show:n.d.linkedin,icon:c.a,text:"/"+n.d.linkedin,href:"https://www.linkedin.com/in/"+n.d.linkedin+"/"},{show:n.d.website,icon:c.b,text:""+n.d.website,href:n.d.website}],m=[n.d.age&&n.d.age+" anos",n.d.location].filter((function(e){return e&&e.length>0})).join(" • ");return l.createElement(l.Fragment,null,l.createElement("div",{className:"flex flex-col "+t},l.createElement("div",{className:"flex flex-col"},l.createElement("span",{className:"font-thin text-5xl sm:text-6xl md:text-8xl"},n.d.firstName),l.createElement("span",{className:"font-bold text-5xl sm:text-6xl md:text-8xl md:-mt-4"},n.d.lastName)),l.createElement("p",{className:"flex flex-row mt-4"},m,l.createElement("br",null),n.d.email,l.createElement("br",null),n.d.mobile),l.createElement("ul",{className:"flex flex-col md:flex-row md:space-x-6 mt-4"},a.map((function(e,t){var a=e.show,n=e.icon,c=e.text,m=e.href;return a?l.createElement("li",{key:t},l.createElement("a",{href:m},l.createElement(r.a,{icon:n})," ",l.createElement("span",{className:"text-gray-500"},c))):""})))))},p=function(e){var t=e.prefix,a=e.postfix,r=e.className,c=n.c.length,m=t&&t>0?n.c.slice(0,t):a&&a>0?n.c.slice(c-a,c):n.c,o=a>0;return l.createElement(l.Fragment,null,l.createElement(s,{title:"Experiência",hideTitle:o,className:r},l.createElement("div",{className:"space-y-7"},m.map((function(e,t){return l.createElement(i,{experience:e,key:t})})))))}},pViX:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a("Zc0g");t.default=function(){return l.createElement(l.Fragment,null,l.createElement("main",{className:"px-12 py-24 container mx-auto flex flex-col md:px-24"},l.createElement("title",null,"Currículo | Beatriz Arantes"),l.createElement("div",{className:"grid z-10 grid-cols-1 gap-16 md:grid-cols-5"},l.createElement(n.d,{className:"md:col-span-3 md:row-start-1 md:row-span-2 md:col-start-3"}),l.createElement(n.e,{className:"md:col-span-2 md:row-start-1 md:col-start-1 md:mt-8"}),l.createElement(n.b,{className:"md:col-span-2 md:row-start-2 md:col-start-1"}),l.createElement(n.c,{className:"md:col-span-3 md:row-start-3 md:col-start-3 md:row-span-5 md:-mt-32"}),l.createElement(n.a,{className:"md:col-span-2 md:row-start-3 md:col-start-1"}),l.createElement(n.f,{className:"md:col-span-2 md:row-start-4 md:col-start-1"}),l.createElement("div",{className:"-z-1 invisible md:visible md:row-start-1 md:col-start-3 col-span-0"},l.createElement("div",{className:"fixed h-screen w-screen bg-gray-100 top-0 -ml-10"})))))}}}]);
//# sourceMappingURL=component---src-pages-resume-index-js-9bbf4aef3fbecccbb975.js.map