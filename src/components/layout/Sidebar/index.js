import React from 'react';

import {
    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        O Nas
                    </SidebarLink>
                    <SidebarLink to='all-auctions' onClick={toggle}>
                        Aukcje
                    </SidebarLink>
                    <SidebarLink to='new-auction' onClick={toggle}>
                        Sprzedaj
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        Logowanie
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Logowanie
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;