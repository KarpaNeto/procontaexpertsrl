var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
var import_index_1e54ea6c = require("../../chunks/index-1e54ea6c.js");
var Logo = "data:image/jpeg;base64,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";
const Navbar = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"navbar bg-base-100 z-50"}"><div class="${"navbar-start"}"><div class="${"dropdown"}"><button class="${"btn btn-ghost lg:hidden"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h8m-8 6h16"}"></path></svg></button>
        ${``}</div>
      <a href="${"/"}"><img${(0, import_index_1e54ea6c.a)("src", Logo, 0)} alt="${""}"></a></div>
    <div class="${"navbar-center hidden lg:flex"}"><ul class="${"menu menu-horizontal p-0"}"><li><a href="${"#about"}">Despre noi</a></li>
        <li><a href="${"#service"}">Servicii</a></li>
        <li><a href="${"#gallery"}">Galerie</a></li>
        <li><a href="${"#contact"}">Contact</a></li></ul></div>
    <div class="${"navbar-end"}"></div></div>`;
});
var HeroBg = "/_app/assets/herobg-ba110a91.jpg";
var Hero_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero-image.svelte-gg0nc9.svelte-gg0nc9{height:30vh;width:100vw}.hero-image.svelte-gg0nc9 img.svelte-gg0nc9{width:100%;height:100%}",
  map: null
};
const Hero = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"hero max-h-96"}"><div class="${"hero-image svelte-gg0nc9"}"><img${(0, import_index_1e54ea6c.a)("src", HeroBg, 0)} alt="${""}" class="${"svelte-gg0nc9"}"></div>
    <div class="${"hero-overlay bg-opacity-60 "}"></div>
    <div class="${"text-center hero-content text-neutral-content"}"><div class="${"max-w-md"}"><h1 class="${"mb-5"}">BUN VENIT LA</h1>
        <p class="${"mb-5 text-5xl font-bold"}">PROCONTA EXPERT SRL</p></div></div>
  </div>`;
});
const About = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"hero mt-20 mb-20"}" id="${"about"}"><div class="${"text-center hero-content"}"><div class="${"max-w-md"}"><h1 class="${"text-5xl font-normal"}">Despre noi</h1>
        <p class="${"py-6"}">PROCONTA EXPERT SRL v\u0103 ofer\u0103, cu promptitudine \u015Fi professionalism, urm\u0103toarele servicii:
</p><ul><li>-Consultan\u0163\u0103 \xEEn organizarea contabilit\u0103\u0163ii financiare,
    </li>
    <li>-\xCEnregistrarea documentelor contabile conform normelor \xEEn vigoare
    </li>
    <li>-\xCEntocmirea bilan\u0163ului contabil
    </li>
    <li>-Intocmirea de rapoarte financiar-contabile
    </li>
    <li>-\xCEntocmirea registrului jurnal \u015Fi a bilan\u0163urilor lunare
    </li>
    <li>-\xCEntocmirea decontului de TVA
    </li>
    <li>-\xCEntocmirea \u015Fi depunerea fi\u015Felor fiscale \u015Fi a declara\u0163iilor privind taxele \u015Fi impozitele;
    </li>
    <li>-Asistenta in timpul controalelor fiscale la sediul societatii etc.
    </li>
    <li>Pentru informatii suplimentare si viitoare colaborari nu ezitati sa ne contactati!
    </li></ul></div></div></div>`;
});
const Product = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"text-gray-600 body-font bg-gray-200"}" id="${"service"}"><div class="${"container px-5 py-24 mx-auto"}"><div class="${"text-center mb-20"}"><h1 class="${"sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4"}">Produse \u015Fi servicii</h1></div>
      <div class="${"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"}"><div class="${"p-2 sm:w-1/2 w-full"}"><div class="${"bg-gray-100 rounded flex p-4 h-full items-center"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" class="${"text-green-600 w-6 h-6 flex-shrink-0 mr-4"}" viewBox="${"0 0 24 24"}"><path d="${"M22 11.08V12a10 10 0 11-5.93-9.14"}"></path><path d="${"M22 4L12 14.01l-3-3"}"></path></svg>
            <span class="${"title-font font-medium"}">Intocmirea de rapoarte financiar-contabile</span></div></div>
        <div class="${"p-2 sm:w-1/2 w-full"}"><div class="${"bg-gray-100 rounded flex p-4 h-full items-center"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" class="${"text-green-600 w-6 h-6 flex-shrink-0 mr-4"}" viewBox="${"0 0 24 24"}"><path d="${"M22 11.08V12a10 10 0 11-5.93-9.14"}"></path><path d="${"M22 4L12 14.01l-3-3"}"></path></svg>
            <span class="${"title-font font-medium"}">Intocmirea fiselor fiscale</span></div></div>
        <div class="${"p-2 sm:w-1/2 w-full"}"><div class="${"bg-gray-100 rounded flex p-4 h-full items-center"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" class="${"text-green-600 w-6 h-6 flex-shrink-0 mr-4"}" viewBox="${"0 0 24 24"}"><path d="${"M22 11.08V12a10 10 0 11-5.93-9.14"}"></path><path d="${"M22 4L12 14.01l-3-3"}"></path></svg>
            <span class="${"title-font font-medium"}">Intocmirea registrului jurnal</span></div></div>
        <div class="${"p-2 sm:w-1/2 w-full"}"><div class="${"bg-gray-100 rounded flex p-4 h-full items-center"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" class="${"text-green-600 w-6 h-6 flex-shrink-0 mr-4"}" viewBox="${"0 0 24 24"}"><path d="${"M22 11.08V12a10 10 0 11-5.93-9.14"}"></path><path d="${"M22 4L12 14.01l-3-3"}"></path></svg>
            <span class="${"title-font font-medium"}">Intocmirea bilantului contabil</span></div></div>
        <div class="${"p-2 sm:w-1/2 w-full"}"><div class="${"bg-gray-100 rounded flex p-4 h-full items-center"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" class="${"text-green-600 w-6 h-6 flex-shrink-0 mr-4"}" viewBox="${"0 0 24 24"}"><path d="${"M22 11.08V12a10 10 0 11-5.93-9.14"}"></path><path d="${"M22 4L12 14.01l-3-3"}"></path></svg>
            <span class="${"title-font font-medium"}">Intocmirea decontului de TVA</span></div></div>
        <div class="${"p-2 sm:w-1/2 w-full"}"><div class="${"bg-gray-100 rounded flex p-4 h-full items-center"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"3"}" class="${"text-green-600 w-6 h-6 flex-shrink-0 mr-4"}" viewBox="${"0 0 24 24"}"><path d="${"M22 11.08V12a10 10 0 11-5.93-9.14"}"></path><path d="${"M22 4L12 14.01l-3-3"}"></path></svg>
            <span class="${"title-font font-medium"}">Intocmirea decontului de TVA</span></div></div></div>
      <button class="${"flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"}"><a href="${"tel:+400744584047"}">Contact</a></button></div></section>`;
});
var Slide1 = "/_app/assets/slide1-900077e3.jpg";
var Slide2 = "/_app/assets/slide2-d9ca370d.jpg";
var Slide3 = "/_app/assets/slide3-557d55cd.jpg";
var Slide4 = "/_app/assets/slide4-9aad7830.jpg";
var Slide5 = "/_app/assets/slide5-bbbf91e7.jpg";
var Slide6 = "/_app/assets/slide6-232c6c8c.jpg";
const Gallery = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"text-gray-600 body-font"}" id="${"gallery"}"><div class="${"container px-5 py-24 mx-auto"}"><div class="${"flex flex-col text-center w-full mb-20"}"><h1 class="${"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"}">Master Cleanse Reliac Heirloom</h1>
      <p class="${"lg:w-2/3 mx-auto leading-relaxed text-base"}">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&#39;t heard of them man bun deep jianbing selfies heirloom.</p></div>
    <div class="${"flex flex-wrap -m-4 "}"><div class="${"lg:w-1/3 sm:w-1/2 p-4 "}"><div class="${"flex relative"}"><img alt="${"gallery"}" class="${"absolute inset-0 w-full h-full object-cover object-center"}"${(0, import_index_1e54ea6c.a)("src", Slide1, 0)}>
          <div class="${"px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out hover:ease-in"}"><h2 class="${"tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"}">THE SUBTITLE</h2>
            <h1 class="${"title-font text-lg font-medium text-gray-900 mb-3"}">Shooting Stars</h1>
            <p class="${"leading-relaxed"}">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p></div></div></div>
      <div class="${"lg:w-1/3 sm:w-1/2 p-4"}"><div class="${"flex relative"}"><img alt="${"gallery"}" class="${"absolute inset-0 w-full h-full object-cover object-center"}"${(0, import_index_1e54ea6c.a)("src", Slide2, 0)}>
          <div class="${"px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out hover:ease-in"}"><h2 class="${"tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"}">THE SUBTITLE</h2>
            <h1 class="${"title-font text-lg font-medium text-gray-900 mb-3"}">The Catalyzer</h1>
            <p class="${"leading-relaxed"}">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p></div></div></div>
      <div class="${"lg:w-1/3 sm:w-1/2 p-4"}"><div class="${"flex relative"}"><img alt="${"gallery"}" class="${"absolute inset-0 w-full h-full object-cover object-center"}"${(0, import_index_1e54ea6c.a)("src", Slide3, 0)}>
          <div class="${"px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out hover:ease-in"}"><h2 class="${"tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"}">THE SUBTITLE</h2>
            <h1 class="${"title-font text-lg font-medium text-gray-900 mb-3"}">The 400 Blows</h1>
            <p class="${"leading-relaxed"}">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p></div></div></div>
      <div class="${"lg:w-1/3 sm:w-1/2 p-4"}"><div class="${"flex relative"}"><img alt="${"gallery"}" class="${"absolute inset-0 w-full h-full object-cover object-center"}"${(0, import_index_1e54ea6c.a)("src", Slide4, 0)}>
          <div class="${"px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out hover:ease-in"}"><h2 class="${"tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"}">THE SUBTITLE</h2>
            <h1 class="${"title-font text-lg font-medium text-gray-900 mb-3"}">Neptune</h1>
            <p class="${"leading-relaxed"}">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p></div></div></div>
      <div class="${"lg:w-1/3 sm:w-1/2 p-4"}"><div class="${"flex relative"}"><img alt="${"gallery"}" class="${"absolute inset-0 w-full h-full object-cover object-center"}"${(0, import_index_1e54ea6c.a)("src", Slide5, 0)}>
          <div class="${"px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out hover:ease-in"}"><h2 class="${"tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"}">THE SUBTITLE</h2>
            <h1 class="${"title-font text-lg font-medium text-gray-900 mb-3"}">Holden Caulfield</h1>
            <p class="${"leading-relaxed"}">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p></div></div></div>
      <div class="${"lg:w-1/3 sm:w-1/2 p-4"}"><div class="${"flex relative"}"><img alt="${"gallery"}" class="${"absolute inset-0 w-full h-full object-cover object-center"}"${(0, import_index_1e54ea6c.a)("src", Slide6, 0)}>
          <div class="${"px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-out hover:ease-in"}"><h2 class="${"tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"}">THE SUBTITLE</h2>
            <h1 class="${"title-font text-lg font-medium text-gray-900 mb-3"}">Alper Kamu</h1>
            <p class="${"leading-relaxed"}">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p></div></div></div></div></div></section>

`;
});
const Contact = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"text-gray-600 body-font relative"}" id="${"contact"}"><div class="${"container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"}"><div class="${"lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"}"><iframe class="${"absolute inset-0"}" title="${"map"}" src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1369.7913350958002!2d27.72696508363262!3d46.63500629968557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ca737dc9089fa9%3A0xd3f381f30e5ebfdc!2sStrada%20Mihai%20Viteazul%20275%2C%20Vaslui%2C%20Rom%C3%AAnia!5e0!3m2!1spt-BR!2sbr!4v1645753248326!5m2!1spt-BR!2sbr"}" width="${"100%"}" height="${"100%"}" style="${"border:0;"}" loading="${"lazy"}"></iframe>
        <div class="${"bg-white relative flex flex-wrap py-6 rounded shadow-md"}"><div class="${"lg:w-1/2 px-6"}"><h2 class="${"title-font font-semibold text-gray-900 tracking-widest text-xs uppercase"}">Informa\u021Bii</h2>
            <p class="${"mt-1"}">Str Mihai Viteazu, Bl 275 Sc C et 1 ap 1 BIS
              
              VASLUI, VASLUI 730140</p></div>
          <div class="${"lg:w-1/2 px-6 mt-4 lg:mt-0"}"><h2 class="${"title-font font-semibold text-gray-900 tracking-widest text-xs"}">E-MAIL</h2>
            <a href="${"mailto:example@email.com"}" class="${"text-indigo-500 leading-relaxed"}">procontaexpert@gmail.com

            </a>
            <h2 class="${"title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 uppercase"}">telefon</h2>
            <p class="${"leading-relaxed"}">0235-315 566</p></div></div></div>
      <form action="${"https://formsubmit.co/procontaexpert@gmail.com"}" method="${"POST"}" class="${"lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"}"><input type="${"hidden"}" name="${"_template"}" value="${"table"}">
        <h2 class="${"text-gray-900 text-lg mb-1 font-medium title-font"}">Scrie\u021Bi-ne</h2>
        <div class="${"relative mb-4"}"><label for="${"name"}" class="${"leading-7 text-sm text-gray-600"}">Nume*</label>
          <input type="${"text"}" id="${"name"}" name="${"name"}" class="${"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"></div>
        <div class="${"relative mb-4"}"><label for="${"email"}" class="${"leading-7 text-sm text-gray-600"}">E-mail:*</label>
          <input type="${"email"}" id="${"email"}" name="${"email"}" class="${"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"></div>
        <div class="${"relative mb-4"}"><label for="${"message"}" class="${"leading-7 text-sm text-gray-600"}">Comentariu*</label>
          <textarea id="${"message"}" name="${"message"}" class="${"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"}"></textarea></div>
        <button type="${"submit"}" class="${"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"}">Trimitere</button></form></div></section>`;
});
const Footer = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"text-gray-600 body-font"}"><div class="${"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"}"><a href="${"/"}" class="${"flex title-font font-medium items-center md:justify-start justify-center text-gray-900"}"><span class="${"ml-3 text-xl"}">PROCONTA EXPERT SRL</span></a>
      <p class="${"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"}">\xA9 2022 PROCONTA EXPERT SRL
        </p></div></footer>`;
});
const Routes = (0, import_index_1e54ea6c.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_1e54ea6c.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main>${(0, import_index_1e54ea6c.v)(Hero, "Hero").$$render($$result, {}, {}, {})}
    ${(0, import_index_1e54ea6c.v)(About, "About").$$render($$result, {}, {}, {})}
    ${(0, import_index_1e54ea6c.v)(Product, "Product").$$render($$result, {}, {}, {})}
    ${(0, import_index_1e54ea6c.v)(Gallery, "Gallery").$$render($$result, {}, {}, {})}
    ${(0, import_index_1e54ea6c.v)(Contact, "Contact").$$render($$result, {}, {}, {})}
    ${(0, import_index_1e54ea6c.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
module.exports = __toCommonJS(stdin_exports);
