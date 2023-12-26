import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  background-color: #333;
  padding: 10px;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;

    &:hover {
      color: #ffcc00;
    }
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
`;
