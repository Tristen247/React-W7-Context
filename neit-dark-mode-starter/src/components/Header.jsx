import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        padding: '1rem',
        textAlign: 'center'
      }}
    >
      <h1>Dark Mode App</h1>
    </header>
  );
};

export default Header;