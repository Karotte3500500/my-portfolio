import lightTheme from "highlight.js/styles/github.css?inline";
import darkTheme from "highlight.js/styles/github-dark.css?inline";

type HighlightThemeProps = {
  isLightMode: boolean;
};

export function HighlightTheme({
  isLightMode,
}: HighlightThemeProps) {
  return (
    <style data-highlight-theme>
      {isLightMode ? lightTheme : darkTheme}
    </style>
  );
}