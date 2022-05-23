import { FaBars } from 'react-icons/fa';
import { 
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


const MainNavigation = ({toggle}) => {
    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    quickAuctions
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>O Nas</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='new-auctions'>Aukcje</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='sell'>Sprzedaj</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signin'>Rejestracja</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Logowanie</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
    );
}

export default MainNavigation;