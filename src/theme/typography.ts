const typography = {
  fontFamily: ["MatterRegular", "MatterMedium", "MatterSemibold"].join(","),
  h1: {
    fontSize: "55px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "45px",
    "@media (max-width:820px)": {
      fontSize: "35px",
      lineHeight: "45px",
    },
  },
  h2: {
    fontSize: "40px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "45px",
    "@media (max-width:820px)": {
      fontSize: "28px",
    },
  },
  h3: {
    fontSize: "28px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "40px",
    "@media (max-width:820px)": {
      fontSize: "24px",
      lineHeight: "32px",
    },
  },
  h4: {
    fontSize: "18px",
    fontFamily: "MatterMedium, Arial, sans-serif",
    fontWeight: "500",
    lineHeight: "24px",
    "@media (max-width:820px)": {
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
  body1: {
    fontSize: "16px",
    fontFamily: "MatterRegular, Arial, sans-serif",
    lineHeight: "26px",
    "@media (max-width:820px)": {
      fontSize: "15px",
      lineHeight: "22px",
    },
  },
  useNextVariants: true,
};
export default typography;
