import styled from 'styled-components';
import searchLogo from '../../../img/header/searchLogo.svg'
import searchslideLogo from '../../../img/header/searchslideLogo.svg'

export const HeaderContainer = styled.header`
  position: relative;
  width: 120rem;
  height: 4.125rem;
  background-color: #76C56F;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.div`
  margin-left: 9.5625rem;
  margin-top: 0.3125rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 47.8125rem;
  margin-left: 6.9375rem;
`;

export const NavItem = styled.a`
  color: #FFF;
  width: 11.1875rem;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  text-decoration: none;
`;

export const SearchBar = styled.input.attrs({
  type: 'text'
})`
  width: 20.8125rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  border: none;
  margin-left: 5rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  background-image: url(${searchLogo}), url(${searchslideLogo});
  background-position: 0.625rem center, calc(100% - 0.625rem) center;
  background-repeat: no-repeat, no-repeat;
  box-sizing: border-box;
`;

export const LoginButton = styled.div`
  width: 4.375rem;
  height: 2.0625rem;
  flex-shrink: 0;
  border-radius: 3.4375rem;
  border: 0.0625rem solid #FFF;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.875rem;
  margin-left: 3.4375rem;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 4.125rem;
  width: 120rem;
  left: 0;
  height: 13.125rem;
  background-color: #76C56F;
  z-index: 10;
`;

export const DropNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 47.875rem;
  background-color: #76C56F;
  margin-left: 15.875rem;
`;

export const DropNavGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.3125rem;
  width: 11.1875rem;
  background-color: #76C56F;
`;

export const DropItem = styled.a`
  color: white;
  text-decoration: none;
  height: 1.9375rem;
  margin: 0.625rem 0;
`;
