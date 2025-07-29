// фильтра для блога
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".articles-aside-blocks-categories-button");
  const tagButtons = document.querySelectorAll(".articles-aside-blocks-tags-block button");
  const articles = document.querySelectorAll(".articles-card");

  const titleSpan = document.querySelector(".ArticlesTitle");
  const categoryCountSpan = document.querySelector(".ArticlesCount");
  const visibleCountSpan = document.querySelector(".VisibleArticlesCount");
  const totalCountSpan = document.querySelector(".AllArticlesCount");

  const totalCount = articles.length;
  totalCountSpan.textContent = totalCount;

  const categoryTitles = {
    All: "All Articles",
    GameGuides: "Game Guides",
    Bonuses: "Bonuses",
    CasinoReviews: "Casino Reviews",
    Technology: "Technology",
    Safety: "Safety",
  };

  let currentCategory = "All";
  let currentTag = null;

  function updateArticles() {
    let visibleCount = 0;

    articles.forEach(article => {
      const articleCategories = article.getAttribute("data-category").split(',').map(cat => cat.trim());
      const articleTags = article.getAttribute("data-tags").split(',').map(tag => tag.trim());

      const matchesCategory = currentCategory === "All" || articleCategories.includes(currentCategory);
      const matchesTag = !currentTag || articleTags.includes(currentTag);

      const shouldShow = matchesCategory && matchesTag;

      if (shouldShow) {
        article.style.display = "block";
        visibleCount++;
      } else {
        article.style.display = "none";
      }
    });


    // заголовок
    const titleText = categoryTitles[currentCategory] || currentCategory;
    titleSpan.textContent = titleText;

    // числа
    categoryCountSpan.textContent = visibleCount;
    visibleCountSpan.textContent = visibleCount;
    totalCountSpan.textContent = totalCount;
  }

  // Категории
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      currentCategory = button.getAttribute("data-category");

      buttons.forEach(btn => btn.classList.remove("articles-aside-blocks-categories-button-active"));
      button.classList.add("articles-aside-blocks-categories-button-active");

      updateArticles();
    });
  });

  // Теги
  tagButtons.forEach(tagButton => {
    tagButton.addEventListener("click", () => {
      const selectedTag = tagButton.textContent.trim();

      // Сброс тега по повторному клику
      if (currentTag === selectedTag) {
        currentTag = null;
        tagButtons.forEach(btn => btn.classList.remove("active-tag"));
      } else {
        currentTag = selectedTag;
        tagButtons.forEach(btn => btn.classList.remove("active-tag"));
        tagButton.classList.add("active-tag");
      }

      updateArticles();
    });
  });

  // Начальная отрисовка
  updateArticles();
});