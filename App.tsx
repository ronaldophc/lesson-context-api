import ThemeContextProvider from './src/contexts/ThemeContext';
import Home from './src/pages/Home';

export default function App() {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}

