const typography = {
  fontFamily: ["MatterRegular", "MatterMedium", "MatterSemibold"].join(","),
  h1: {
    fontSize: "55px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "45px",
    "@media (max-width:900px)": {
      fontSize: "35px",
      lineHeight: "45px",
    },
  },
  h2: {
    fontSize: "18px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "24px",
    "@media (max-width:900px)": {
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
  h3: {
    fontSize: "18px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "24px",
    "@media (max-width:900px)": {
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
  h4: {
    fontSize: "18px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "24px",
    "@media (max-width:900px)": {
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
  h5: {
    fontSize: "16px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "22px",
    "@media (max-width:900px)": {
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
  h6: {
    fontSize: "14px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "20px",
    "@media (max-width:900px)": {
      fontSize: "10px",
      lineHeight: "14px",
    },
  },
  blogTitle: {
    fontSize: "40px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "45px",
    "@media (max-width:900px)": {
      fontSize: "28px",
    },
  },
  body1: {
    fontSize: "16px",
    fontFamily: "MatterRegular, Arial, sans-serif",
    lineHeight: "26px",
    "@media (max-width:900px)": {
      fontSize: "15px",
      lineHeight: "22px",
    },
  },
  body2: {
    fontSize: "14px",
    fontFamily: "MatterRegular, Arial, sans-serif",
    lineHeight: "18px",
  },
  subtitle1: {
    fontSize: "40px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "600",
    lineHeight: "50px",
    "@media (max-width:900px)": {
      fontSize: "20px",
    },
  },
  subtitle2: {
    fontSize: "20px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "300",
    lineHeight: "30px",
    "@media (max-width:900px)": {
      fontSize: "16px",
    },
  },
  caption: {
    fontSize: "20px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "300",
    color: "#808080",
    lineHeight: "30px",
    "@media (max-width:900px)": {
      fontSize: "16px",
    },
  },
  tag: {
    fontSize: "16px",
    fontFamily: "MatterSemibold, Arial, sans-serif",
    fontWeight: "300",
    lineHeight: "12px",
    color: "#AAAAAA",
  },
  useNextVariants: true,
};

export default typography;
