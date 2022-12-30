import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px;
  width: 150px;
  border-radius: 10px;
  text-decoration: none;
  background-color: #e2e2e2;
  color: black;
  text-align: center;
  font-size: 20px;
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
  &.active {
    background-color: #fc7d07;
    color: #fff;
  }
`;
