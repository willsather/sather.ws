import { createTheme } from "@mui/material/styles";
import colorTheme from "@/src/theme/colors";
import typography from "@/src/theme/typography";
import breakpoints from "@/src/theme/breakpoints";

const theme = createTheme({
  typography,
  breakpoints,
  palette: colorTheme,
  spacing: [4, 8, 12, 16, 24, 32, 40, 48, 64, 72, 96, 128],
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          marginBottom: "8px!important",
        },
      },
    },
  },
});

export default theme;
