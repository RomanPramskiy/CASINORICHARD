document.querySelectorAll("[id^='demogame-']").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const id = this.id.split("-")[1];
    const modal = document.getElementById(`demogamemodal-${id}`);
    if (modal) {
      modal.classList.add("display-flex");
    }
  });
});

document.querySelectorAll(".demogameclose").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const modal = this.closest("[id^='demogamemodal-']");
    if (modal) {
      modal.classList.remove("display-flex");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const article = document.getElementById("article-1");
  if (article) {
    article.addEventListener("click", function () {
      window.location.href = this.dataset.url;
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-menu');
  const headermenu = document.querySelector('.header-modal');

  if (burger && headermenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      headermenu.classList.toggle('open');
    });
  } else {
    console.warn('burger or header-modal not found');
  }
});