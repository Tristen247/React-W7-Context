import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/themeContext';

   const Card = ({ children }) => {
     const { theme } = useContext(ThemeContext);
     const style = {
       backgroundColor: theme.background,
       color: theme.foreground,
       border: `1px solid ${theme.foreground}`,
       padding: '1rem',
       borderRadius: '8px',
       margin: '1rem 0'
     };
     return <div className="card-container" style={style}>{children}</div>;
   };

   Card.propTypes = {
     children: PropTypes.node.isRequired
   };

   export default Card;