/**
 * V3のtheme
 * @author FXS)zhang.puming
 */

import { createTheme } from "@mui/material/styles";
// Material-UIテーマを上書きする
export const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Hiragino Sans",
      "Hiragino Kaku Gothic ProN",
      "segoe ui",
      "Meiryo UI",
      "メイリオ",
      "游ゴシック  Medium",
      "ＭＳ Ｐゴシック",
      "MS PGothic",
      "sans-serif",
      // "Roboto",
      // "Helvetica",
      // "Arial"
    ].join(","),
  },
  // カラーパレット
  palette: {
    mode: "light",
  },
});
