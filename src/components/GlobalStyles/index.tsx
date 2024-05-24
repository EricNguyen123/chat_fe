import './GlobalStyles.scss';
import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';


interface GlobalStylesProps {
    children: ReactNode;
  }

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return <div>
    {children}
  </div>
 ;
};

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
