const DATA_PATH = "./cv-data.json";

const setText = (selector, value) => {
  if (!value) return;
  const nodes = document.querySelectorAll(selector);
  for (const node of nodes) node.textContent = value;
};

const createFact = ({ label, value }) => {
  const item = document.createElement("div");
  item.className = "fact-item";
  const title = document.createElement("strong");
  title.textContent = label;
  const body = document.createElement("span");
  body.textContent = value;
  item.append(title, body);
  return item;
};

const createProfileCard = ({ title, detail, link, cta }) => {
  const card = document.createElement("article");
  card.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = detail;

  const a = document.createElement("a");
  a.href = link || "#";
  a.target = "_blank";
  a.rel = "noreferrer";
  a.textContent = cta || "Open profile";

  card.append(h3, p, a);
  return card;
};

const createProjectCard = ({ name, summary, link, tags = [] }) => {
  const card = document.createElement("article");
  card.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = name;

  const p = document.createElement("p");
  p.textContent = summary;

  const a = document.createElement("a");
  a.href = link || "#";
  a.target = "_blank";
  a.rel = "noreferrer";
  a.textContent = "View project";

  const tagWrap = document.createElement("div");
  tagWrap.className = "project-tags";

  for (const tag of tags) {
    const tagItem = document.createElement("span");
    tagItem.textContent = tag;
    tagWrap.append(tagItem);
  }

  card.append(h3, p, a, tagWrap);
  return card;
};

const createEducationItem = ({ degree, institution, year, detail }) => {
  const item = document.createElement("article");
  item.className = "timeline-item";

  const strong = document.createElement("strong");
  strong.textContent = degree;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = `${institution} | ${year}`;

  item.append(strong, meta);

  if (detail) {
    const description = document.createElement("p");
    description.className = "meta";
    description.textContent = detail;
    item.append(description);
  }

  return item;
};

const createSkillItem = ({ name, level }) => {
  const item = document.createElement("article");
  item.className = "skill";

  const head = document.createElement("div");
  head.className = "skill-head";
  const nameNode = document.createElement("span");
  nameNode.textContent = name;
  const levelNode = document.createElement("span");
  levelNode.textContent = `${level}%`;
  head.append(nameNode, levelNode);

  const bar = document.createElement("div");
  bar.className = "skill-bar";
  const fill = document.createElement("div");
  fill.className = "skill-fill";
  fill.style.width = `${Math.max(0, Math.min(100, level))}%`;
  bar.append(fill);

  item.append(head, bar);
  return item;
};

const mountList = (selector, items, renderFn) => {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = "";
  for (const item of items) container.append(renderFn(item));
};

const setupContactForm = (email, subject) => {
  const form = document.querySelector("#contact-form");
  if (!form || !email) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const sender = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const mailSubject = encodeURIComponent(subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${sender}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${email}?subject=${mailSubject}&body=${body}`;
  });
};

const renderPortfolio = (data) => {
  setText("[data-field='name']", data.name);
  setText("[data-field='intro']", data.intro);
  setText("[data-field='headline']", data.headline);
  setText("[data-field='summary']", data.summary);
  setText("[data-field='aboutParagraph']", data.aboutParagraph);
  setText("[data-field='location']", data.location);
  setText("[data-field='contactMessage']", data.contactMessage);

  document.title = `${data.name} | Portfolio`;
  const year = document.querySelector("#footer-year");
  if (year) year.textContent = new Date().getFullYear();
  const footerName = document.querySelector("#footer-name");
  if (footerName) footerName.textContent = data.name;

  const resumeLink = document.querySelector("#resume-link");
  if (resumeLink && data.resumeUrl) resumeLink.href = data.resumeUrl;

  const emailNode = document.querySelector("#contact-email");
  if (emailNode && data.email) {
    emailNode.textContent = data.email;
    emailNode.href = `mailto:${data.email}`;
  }

  const phoneNode = document.querySelector("#contact-phone");
  if (phoneNode && data.phone) {
    phoneNode.textContent = data.phone;
    const dial = data.phone.replace(/[^\d+]/g, "");
    phoneNode.href = `tel:${dial}`;
  }

  mountList("#facts", data.facts || [], createFact);
  mountList("#profiles-grid", data.profiles || [], createProfileCard);
  mountList("#projects-grid", data.projects || [], createProjectCard);
  mountList("#education-list", data.education || [], createEducationItem);
  mountList("#skills-list", data.skills || [], createSkillItem);

  setupContactForm(data.email, data.contactSubject);
};

const showFallback = (error) => {
  console.error(error);
  const summary = document.querySelector(".hero-summary");
  if (summary) {
    summary.textContent =
      "Could not load cv-data.json. Open the file and make sure it is valid JSON.";
  }
};

const init = async () => {
  try {
    const response = await fetch(DATA_PATH, { cache: "no-store" });
    if (!response.ok) throw new Error("Could not fetch cv-data.json");
    const data = await response.json();
    renderPortfolio(data);
  } catch (error) {
    showFallback(error);
  }
};

init();
