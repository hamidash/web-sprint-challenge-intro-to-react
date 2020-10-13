import React from 'react';
import styled from 'styled-components';

function Header() {
    const HeaderH1 = styled.h1 `
        font-family: fantasy;
        font-weight: bolder;
    `;

    return (
        <HeaderH1>STARWARS INFO</HeaderH1>
    )
}

export default Header;