// ===== Edit your content here. Wrap placeholders in T("...") so they get a yellow highlight =====
const T = t => `<span class="todo">${t}</span>`;
const experience = [
 {role:"Quality Control", co:"PT Neural Technologies Indonesia, Jakarta", date:"Jul 2025 – Present", points:[
  `Perform quality control across multiple Telco projects, executing 350+ test cases to ensure product quality before release.`,
  `Prepared SIT, UT, and UAT documents, test scenarios, test cases, and bug reports.`,
  `Reported and tracked 20 defects in a spreadsheet-based tracker and followed up with the development team until all were resolved before UAT began.`,
  `Supported the UAT phase with test documentation. ${T("Add the Telco product type, e.g. billing, customer portal")}`]},
 {role:"Software Tester", co:"PT Neural Technologies Indonesia, Jakarta", date:"Oct 2023 – Jul 2025", points:[
  `Designed and executed 300+ black box test cases (manual testing) for ${T("product/module")} in an Agile environment, achieving a ~90% pass rate.`,
  `Documented and tracked 20 defects in a structured bug-tracking spreadsheet (severity, reproduction steps, status), then verified fixes until all reported failures were resolved.`,
  `Prepared test documentation, including test cases, test execution reports, and user acceptance testing.`,
  `Collaborated with developers and stakeholders to clarify requirements and confirm bug fixes.`]},
 {role:"Odoo Developer Intern", co:"PT Neural Technologies Indonesia", date:"Jun 2023 – Sep 2023", points:[
  "Developed and customized Odoo-based ERP modules, implemented new features, and debugged issues to match user needs and business processes."]},
 {role:"Mobile App Developer Virtual Intern", co:"Mandiri x Rakamin Academy", date:"Sep 2023", points:[
  "Completed a project-based virtual internship, working from design and feature implementation to app testing."]},
 {role:"ISO Document Intern", co:"PT Arkananta Nityasa Indonesia", date:"Dec 2022", points:[
  "Prepared, managed, and maintained ISO documents with proper version control and compliance to standards.",
  "Supported internal and external audit preparation and coordinated with cross-functional teams."]}
];
const skills = {
 "Testing":["Manual Testing","Test Case Design","UAT Documentation","Bug Tracking","Regression Testing","Agile"],
 "Automation":["Katalon","Selenium","Playwright","Cypress"],
 "API & Performance":["Postman","JMeter"],
 "Tools":["Spreadsheet-based bug tracking","Microsoft Excel","Microsoft Word"]
};
// Each project opens a detail pop-up when clicked.
// scope = overview, tools = list, did = what you did, results = outcomes,
// images = screenshots saved in images/projects/ (e.g. "images/projects/test-report.png"),
// type = label on the card: "Automation", "Manual", "API", "Development", etc.
// links = [{label, url}] for a GitHub repo and/or live demo. Use [] for none.
// docs = [{label, url}] for documents, e.g. {label:"Test Cases", url:"https://..."}. Use [] for none.
// Only share documents made from public apps (e.g. SauceDemo) – never company or client documents.
const projects = [
 {name:"SauceDemo Test Automation", type:"Automation", role:"QA Automation (Personal project)",
  desc:"Automated end-to-end tests for the SauceDemo demo e-commerce site.",
  scope:`SauceDemo is a public demo e-commerce website. I built automated tests covering ${T("flows, e.g. login, cart, checkout")}.`,
  tools:[T("Tool(s) you used, e.g. Selenium / Playwright / Cypress")],
  did:[`Automated ${T("number")} test scenarios for ${T("flows")}.`, T("e.g. structure of the framework, reports, or CI setup")],
  results:[T("e.g. regression suite runs in X minutes instead of Y manually")],
  images:[], links:[], docs:[]},
 {name:"SauceDemo Manual Testing", type:"Manual", role:"QA Tester (Personal project)",
  desc:"Test scenarios, test cases, and bug reports for the SauceDemo demo e-commerce site.",
  scope:`Manual testing documentation for the public SauceDemo website, covering ${T("flows, e.g. login, cart, checkout")}.`,
  tools:[T("e.g. Google Sheets, browser DevTools")],
  did:[`Wrote ${T("number")} test scenarios and test cases.`, `Executed the tests and documented ${T("number")} bugs with screenshots and reproduction steps.`],
  results:[T("e.g. X% of test cases passed, Y bugs found")],
  images:[], links:[], docs:[{label:"Test Cases", url:""},{label:"Bug Reports", url:""}]},
 {name:"Personal Finance App", type:"Development", role:"Developer",
  desc:"A simple personal finance app that emails a monthly report on the 25th of each month.",
  scope:"Sends a monthly financial report by email on the 25th of every month. WhatsApp delivery is a possible later addition.",
  tools:[T("Tech stack")],
  did:[T("What you built and tested")],
  results:[T("What it achieves, e.g. saves X minutes per month")],
  images:[], links:[], docs:[]}
];
const education = [
 {t:"Universitas Bina Nusantara", s:"Bachelor of Computer Science", d:"Nov 2024 – Present", n:"Final project (in progress): Hybrid Recommendation System and Natural Language Processing in the “Smart Recipe” Progressive Web App"},
 {t:"Politeknik Negeri Bandung", s:"Diploma in Computer Science · GPA 3.32 / 4.00", d:"Aug 2021 – Aug 2024", n:"Final project: Web-Based RT/RW Net Voucher Sales Application Using Value-Based Segmentation as a Marketing Strategy"},
 {t:"Software Quality Assurance", s:"Certification · Arutala Lab", d:"Oct 2024 – Oct 2027"}
];
// ===== Rendering =====
const $ = id => document.getElementById(id);
$("exp").innerHTML = experience.map(e=>`<div class="item"><div class="top"><div><h3>${e.role}</h3><div class="co">${e.co}</div></div><div class="date">${e.date}</div></div><ul>${e.points.map(p=>`<li>${p}</li>`).join("")}</ul></div>`).join("");
$("skillList").innerHTML = Object.entries(skills).map(([g,l])=>`<div class="group"><h3>${g}</h3><div class="chips">${l.map(s=>`<span class="chip">${s}</span>`).join("")}</div></div>`).join("");
$("proj").innerHTML = projects.map((p,i)=>`<article class="item project" tabindex="0" role="button" data-i="${i}" aria-label="Open details: ${p.name.replace(/<[^>]*>/g,"")}"><span class="tag">${p.type}</span><h3>${p.name}</h3><div class="co">${p.role}</div><p>${p.desc}</p><span class="more">View details →</span></article>`).join("");
const modal = $("modal"), mb = $("modalBody");
const list = a => `<ul>${a.map(x=>`<li>${x}</li>`).join("")}</ul>`;
function openProject(i){
 const p = projects[i];
 mb.innerHTML = `<span class="tag">${p.type}</span><h3>${p.name}</h3><div class="co">${p.role}</div>
  <h4>Overview</h4><p>${p.scope}</p>
  <h4>Tools</h4><div class="chips">${p.tools.map(t=>`<span class="chip">${t}</span>`).join("")}</div>
  <h4>What I did</h4>${list(p.did)}
  <h4>Results</h4>${list(p.results)}
  ${p.images.length?`<h4>Screenshots</h4><div class="shots">${p.images.map(s=>`<img src="${s}" alt="" loading="lazy" onerror="this.remove()">`).join("")}</div>`:""}
  ${p.docs.filter(d=>d.url).length?`<h4>Documents</h4><div class="btns">${p.docs.filter(d=>d.url).map(d=>`<a class="btn" href="${d.url}" target="_blank" rel="noopener">${d.label} ↗</a>`).join("")}</div>`:""}
  ${p.links.length?`<div class="btns">${p.links.map(l=>`<a class="btn fill" href="${l.url}" target="_blank" rel="noopener">${l.label} →</a>`).join("")}</div>`:""}`;
 modal.showModal();
}
$("proj").addEventListener("click", e=>{const c=e.target.closest(".project"); if(c) openProject(+c.dataset.i)});
$("proj").addEventListener("keydown", e=>{if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("project")){e.preventDefault();openProject(+e.target.dataset.i)}});
modal.addEventListener("click", e=>{if(e.target===modal||e.target.classList.contains("close")) modal.close()});
$("edu").innerHTML = education.map(e=>`<div class="item"><div class="top"><div><h3>${e.t}</h3><div class="co">${e.s}</div></div><div class="date">${e.d}</div></div>${e.n?`<p class="co" style="margin:8px 0 0">${e.n}</p>`:""}</div>`).join("");
$("yr").textContent = new Date().getFullYear();
$("menu").onclick = () => $("links").classList.toggle("open");
$("links").onclick = () => $("links").classList.remove("open");
const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

document.querySelectorAll(".reveal").forEach(sec=>sec.querySelectorAll(".item,.group,.links,:scope>p").forEach((el,i)=>el.style.setProperty("--i",i)));

$("copyEmail").addEventListener("click", async () => {
 const b = $("copyEmail");
 try { await navigator.clipboard.writeText("nurulanisah604@gmail.com"); b.textContent = "Copied ✓"; }
 catch(e) { const r = document.createRange(); r.selectNodeContents($("emailLink")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Press Ctrl+C"; }
 setTimeout(() => b.textContent = "Copy", 2000);
});
