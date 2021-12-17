import { ThemeProvider } from "styled-components";
import AuthState from "./contexts/contextAuth/AuthState";
import AppRouter from "./routes/AppRouter";
import { theme } from "./styles/utilStyles";

function App() {
  return (
    <>
      <AuthState>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </AuthState>
    </>
  );
}

export default App;
