import CV from "./components/CV";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <CV />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
