import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "./@common/apollo";
import { Router } from "./Router";
import { ErrorBoundary } from "./ErrorBoundary";

export const App = () => (
  <ApolloProvider>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  </ApolloProvider>
);
