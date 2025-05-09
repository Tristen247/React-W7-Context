import { useState, useEffect } from 'react';
import { ThemeContext, themes } from './context/themeContext';
import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prev =>
      prev === themes.dark ? themes.light : themes.dark
    );
  };

  // Apply theme to the whole page
  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.foreground;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className="App"
        style={{
          minHeight: '100vh',
          backgroundColor: theme.background,
          color: theme.foreground,
          transition: 'background-color 0.3s, color 0.3s'
        }}
      >
        <Header />
        <p>Dark Mode <ToggleSwitch onToggle={toggleTheme} /></p> 
        <Card>
          <p>themed card</p>
          <Button onClick={() => console.log('clicked')}>Click me</Button>
        </Card>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
