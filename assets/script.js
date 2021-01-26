let root = new Vue({
  el: "#root",
  data: {
    logo_google: "./assets/img/logo/google-logo.svg",
    logo_slack: "./assets/img/logo/slack-logo.svg",
    main_first_section: [
      {
        title:
          "Traditional people processes lead to disengagement and turnover",
        jumbo_pic: "./assets/img/main/section_1/before.png",
        cards: [
          {
            img: "./assets/img/main/section_1/hardcore.png",
            text: "lorem",
          },
          {
            img: "./assets/img/main/section_1/nofeedback.png",
            text: "lorem",
          },
          {
            img: "./assets/img/main/section_1/notsafe.png",
            text: "lorem",
          },
        ],
      },
    ],
    main_second_section: [
      {
        title:
          "It doesn't have to be like that. Teambit is a modern solution that teammates love.",
        jumbo_pic: "./assets/img/main/section_2/after.png",
        cards: [
          {
            img: "./assets/img/main/section_2/lightweight.png",
            text: "lorem",
          },
          {
            img: "./assets/img/main/section_2/feedbacksuggestions.png",
            text: "lorem",
          },
          {
            img: "./assets/img/main/section_2/safe.png",
            text: "lorem",
          },
        ],
      },
      {},
    ],
  },
  methods: {},
});