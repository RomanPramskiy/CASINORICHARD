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


const update = () => {
  const AllArticles = document.querySelectorAll('.articles-card').length;
  document.querySelectorAll('.AllArticles').forEach(span => {
    span.textContent = AllArticles;
  });
    const GameGuides = document.querySelectorAll('.game-guides-article').length;
  document.querySelectorAll('.GameGuides').forEach(span => {
    span.textContent = GameGuides;
  });
    const CasinoReviews = document.querySelectorAll('.casino-reviews').length;
  document.querySelectorAll('.CasinoReviews').forEach(span => {
    span.textContent = CasinoReviews;
  });
      const Bonuses = document.querySelectorAll('.bonuses-article').length;
  document.querySelectorAll('.Bonuses').forEach(span => {
    span.textContent = Bonuses;
  });
      const Technology = document.querySelectorAll('.technology-article').length;
  document.querySelectorAll('.Technology').forEach(span => {
    span.textContent = Technology;
  });
      const Safety = document.querySelectorAll('.safety-article').length;
  document.querySelectorAll('.Safety').forEach(span => {
    span.textContent = Safety;
  });
};

update(); // первый подсчет

// следим только за контейнером с карточками
const container = document.querySelector('.articles-container');
const mo = new MutationObserver(update);
mo.observe(container, { childList: true, subtree: true });