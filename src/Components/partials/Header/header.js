import React from 'react';
import { HeaderArea } from './styled';

const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <div className="title">
          <h1>FutureEats</h1>
        </div>
      </div>
    </HeaderArea>
  );
}

export default Header;