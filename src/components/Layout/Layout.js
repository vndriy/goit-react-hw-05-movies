import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { LayoutContainer, Header, Nav, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <Nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <GlobalStyle />
    </LayoutContainer>
  );
};
