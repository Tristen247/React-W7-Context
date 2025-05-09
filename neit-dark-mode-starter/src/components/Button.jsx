import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/themeContext';

const Button = ({ children, onClick }) => {
  const { theme } = useContext(ThemeContext);
  const style = {
    backgroundColor: theme.foreground,
    color: theme.background,
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    margin: '0.5rem'
  };
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;