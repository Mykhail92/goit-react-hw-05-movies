import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, StyledHeader, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Suspense fallback={null}>
        {' '}
        <Outlet />
      </Suspense>
    </StyledHeader>
  );
};
