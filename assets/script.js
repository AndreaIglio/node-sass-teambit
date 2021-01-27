let root = new Vue({
  el: "#root",
  data: {
    logo_google: "./assets/img/logo/google-logo.svg",
    logo_slack: "./assets/img/logo/slack-logo.svg",
    navbar: [
      'Solutions', 'Pricing', 'Blog', 'Sign in',
    ],
    main_first_section: [
      {
        title:
          "Traditional people processes lead to disengagement and turnover",
        jumbo_pic: "./assets/img/main/section_1/before.png",
        cards: [
          {
            img: "./assets/img/main/section_1/hardcore.png",
            text: "They are hardcore, formal and disconnected",
          },
          {
            img: "./assets/img/main/section_1/nofeedback.png",
            text: "They don't encourage regular feedback",
          },
          {
            img: "./assets/img/main/section_1/notsafe.png",
            text: "They don't make it safe to speak up",
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
            text: "It's lightweight fun and interconnected",
          },
          {
            img: "./assets/img/main/section_2/feedbacksuggestions.png",
            text: "It encourages regular feedback with contextual requests",
          },
          {
            img: "./assets/img/main/section_2/safe.png",
            text: "It creates a safe environment for dialog",
          },
        ],
      },
    ],
    main_third_section: [
      {
        left_img: "./assets/img/main/section_3/1.jpg",
        right_img: "./assets/img/main/section_3/2.jpg",
        title: "Feedback to help teammates improve",
        description:
          "Empower your teammates to know in real time what they are doing well and what they need to improve",
      },
      {
        left_img: "./assets/img/main/section_3/4.jpg",
        right_img: "./assets/img/main/section_3/3.jpg",
        title: "Surveys to help the team be better",
        description:
          "Get real-time insights into your team with research-backed, lightweight and regular surveys.",
      },
      {
        left_img: "./assets/img/main/section_3/5.jpg",
        right_img: "./assets/img/main/section_3/6.jpg",
        title: "Reviews to help teammates get a fair evaluation",
        description:
          "Make better compensation and promotion decisions with objective and quick perfomance reviews.",
      },
      {
        left_img: "./assets/img/main/section_3/8.jpg",
        right_img: "./assets/img/main/section_3/7.jpg",
        title: "Praise to help teammates feel valued",
        description:
          "Make it habit to recognize and praise people who do great work.",
      },
    ],
    footer: [
      {
        title: "Product",
        element: [
          "Feedback",
          "Surveys",
          "Reviews",
          "Praise",
          "Slack",
          "Integration",
          "Schedule a demo",
          "Pricing",
        ],
      },
      {
        title: "About",
        element: ["Feedback", "Surveys", "Reviews", "Praise"],
      },
      {
        title: "Connect",
        element: ["Feedback", "Surveys", "Reviews", "Praise"],
      },
      {
        title: "Lobs",
        element: ["Feedback", "Surveys", "Reviews", "Praise"],
      },
      {
        title: "From the blog",
        element: ['How to change your company culture: a four-step framework','How teams can be more productive by killing 8-hour workday','How to build high performing teams inspired by nature', "View all"],
      },
    ],
  },
  methods: {

    openNav: function () { 

      var x = document.getElementById('collapse');
      if( x.style.display == 'block'){
        x.style.display = 'none';

      }
      else {
        x.style.display = 'block';
      }

     }

  },
});