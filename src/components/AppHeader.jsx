import { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #2b2b2b;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 1;
  color: #ffffff;
  text-align: center;
`;

const Names = styled.p`
  margin: 0;
  color: #dbdddf;
  font-size: 1.5rem;
  text-align: center;
`;

const Nav = styled.nav`
  margin-top: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 1em;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
  &:last-child {
    margin-right: 0;
  }
  

  
`;

const NavLink = styled.a`
  font-size: 1.1rem;  
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color:lightgray;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color:lightgray;
  }
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #2F2F2F;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  min-width: 160px;
`;

const DropdownItem = styled.a`
  color: #ffffff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #474545;
  }
`;

const AppHeader = ({ onNavClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <Header>
      <Title>WebQuest Programação Linear</Title>
      <Names>Diogo Carpinelli</Names>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink onClick={() => onNavClick('inicio')}>Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => onNavClick('sobre-estatistica')}>Sobre Programação Linear</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => onNavClick('medidas-dispersao')}>Método Simplex</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => onNavClick('distribuicoes-probabilidade')}>Método Gráfico</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => onNavClick('video-aulas')}>Vídeo Aulas</NavLink>
          </NavItem>
          <Dropdown>
            <DropdownButton onClick={toggleDropdown}>Mais</DropdownButton>
            <DropdownContent isOpen={isDropdownOpen}>
              <DropdownItem onClick={() => onNavClick('exercicios')}>Exercícios</DropdownItem>
              <DropdownItem onClick={() => onNavClick('bibliografia')}>Bibliografia</DropdownItem>
              <DropdownItem onClick={() => onNavClick('sobre-o-blog')}>Sobre o Blog</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </NavList>
      </Nav>
    </Header>
  );
};

export default AppHeader;
