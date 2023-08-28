$("document").ready(function () {
  let typed = new Typed("#typed1", {
    stringsElement: "#typed",
    typeSpeed: 100,
  });
  $(".fullpage").fullpage({
    sectionsColor: [
      "#140a42",
      "#f1f0f5",
      "#f1f0f5",
      "#f1f0f5",
      "#f1f0f5",
      "#f1f0f5",
    ],
    navigation: true,
    anchors: [
      "home",
      "profile",
      "publishing",
      "design",
      "ux",
      "contact",
      "footer",
    ],
    navigationTooltips: [
      "홈",
      "프로필",
      "퍼블리싱",
      "디자인",
      "경험",
      "컨텍트",
      "카피라이트",
    ],
    responsiveWidth: 1200,
  });
});
