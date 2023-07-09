tailwind.config = {
  theme: {
    extend: {
      colors: {
        custom_black: "#343434",
        custom_orange: "#ef9982",
        custom_gray: "#535353",
        team_hover: "rgba(240, 246, 250, 0.9)",
        facebook: "#3c5997",
        twitter: "#05aced",
        in: "#027bb6",
        youtube: "#e52d28",
        experiments: "#fdf2ed",
        black_opacity: "rgba(0, 0, 0, 0.3)",
        bg_toTop: "rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "music-1": "music 2s 1s ease-out alternate infinite",
        "music-2": "music 2s 0.5s ease-out alternate infinite",
        "music-3": "music 2s 1.5s ease-out alternate infinite",
        "music-4": "music 2s 0.25s ease-out alternate infinite",
      },
      keyframes: {
        music: {
          " 0%": {
            height: "6px",
          },
          "10%": {
            height: "10px",
          },
          "20%": {
            height: "6px",
          },
          "30%": {
            height: "14px",
          },
          "40%": {
            height: "18px",
          },
          "50%": {
            height: "6px",
          },
          "60%": {
            height: "16px",
          },
          "70%": {
            height: "10px",
          },
          "80%": {
            height: "12px",
          },
          "90%": {
            height: "4px",
          },
          "100%": {
            height: "18px",
          },
        },
      },
      backgroundImage: {
        banner: "url('./src/images/circle.png')",
        linear1: "linear-gradient(to top right, #24c1c8, #0737e6)",
        linear2: "linear-gradient(to top right, #70595b, #a84444)",
        linear3: "linear-gradient(to top right, #ad9d93, #f7bfa9)",
        linear4: "linear-gradient(to top right, #37779e, #893891)",
        linear5: "linear-gradient(to top right, #203653, #79bede)",
        linear6: "linear-gradient(to top right, #5d4e9d, #1f24aa)",
        linear7: "linear-gradient(to top right, #eabdc3, #dd6484)",
        linear8: "linear-gradient(to top right, #6015bb, #286ee9)",
        linear9: "linear-gradient(to top right, #829c9c, #a18191)",
        linear10: "linear-gradient(to top right, #63a9e2, #b3d493)",
        linear11: "linear-gradient(to top right, #d96793, #d88063)",
        linear12: "linear-gradient(to top right, #e3b8c1, #7966df)",
        linear13: "linear-gradient(to top right, #e7cabb, #e64646)",
        footer: "url('./src/images/footer.png')",
      },
      backgroundPosition: {
        custom_bg_position: "85% 20%",
      },
      backgroundSize: {
        custom_bg_size: "490px 427px",
      },
    },
  },
};
