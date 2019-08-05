import React from 'react';
import { logoURI } from '../common/constante';

const Header = () => {
    return <div className="header-body">
        <img
            className="header-image"
            src={logoURI}
            alt="Marvel" />
    </div>
}

export default Header;