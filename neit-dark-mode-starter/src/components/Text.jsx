import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/themeContext';

const Text = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <span style={{ color: theme.foreground }}>{children}</span>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired
};

export default Text;