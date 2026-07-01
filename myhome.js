// myhome 사이드바
const sidebar = document.querySelector("#sidebar");
const sidebarToggle = document.querySelector("#sidebarToggle");
const accountBtn = document.querySelector("#accountBtn");
const accountMenu = document.querySelector("#accountMenu");
const menuLinks = document.querySelectorAll(".side-menu a");
const homeSections = document.querySelectorAll(".home-section");

if (sidebar && sidebarToggle) {
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
}

if(accountBtn){

    accountBtn.addEventListener("click",(e)=>{

        e.stopPropagation();

        accountMenu.classList.toggle("open");

    });

    document.addEventListener("click",()=>{

        accountMenu.classList.remove("open");

    });

}

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    menuLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    const targetId = link.dataset.section;

    homeSections.forEach((section) => {
      section.hidden = section.id !== targetId;
    });
  });
});