import { ThemeProvider } from "styled-components";
import AuthState from "./contexts/contextAuth/AuthState";
import UsersState from "./contexts/contextUsers/UsersState";
import AppRouter from "./routes/AppRouter";
import { theme } from "./styles/utilStyles";

function App() {
  return (
    <>
      <AuthState>
        <UsersState>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </UsersState>
      </AuthState>
    </>
  );
}

export default App;
