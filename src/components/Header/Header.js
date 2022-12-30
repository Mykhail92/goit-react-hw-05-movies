import { Nav, StyledHeader, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
    </StyledHeader>
  );
};
