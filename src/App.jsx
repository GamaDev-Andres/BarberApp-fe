import { ThemeProvider } from "styled-components";
import AuthState from "./contexts/contextAuth/AuthState";
import CitasState from "./contexts/contextCitas/CitasState";
import UsersState from "./contexts/contextUsers/UsersState";
import AppRouter from "./routes/AppRouter";
import { theme } from "./styles/utilStyles";

function App() {
  return (
    <>
      <AuthState>
        <UsersState>
          <CitasState>
            <ThemeProvider theme={theme}>
              <AppRouter />
            </ThemeProvider>
          </CitasState>
        </UsersState>
      </AuthState>
    </>
  );
}

export default App;
