import React, { useState } from "react";
import menuLogo from '../../../img/header/menuLogo.svg'
import { HeaderContainer, Logo, Nav, NavItem, DropdownMenu, DropNav, DropNavGroup, DropItem, SearchBar, LoginButton } from './component';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  return (
    <HeaderContainer
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <Logo>
          <img src={menuLogo} alt="menuLogo" />
      </Logo>
      <Nav>
        <NavItem href="#section1">게시판</NavItem>
        <NavItem href="#section2">농산물</NavItem>
        <NavItem href="#section2">커뮤니티</NavItem>
        <NavItem href="#section2">마이페이지</NavItem>
      </Nav>
      {isDropdownVisible && (
        <DropdownMenu>
          <DropNav>
            <DropNavGroup>
              <DropItem href="#dropdown1">판매자 정보 게시판</DropItem>
              <DropItem href="#dropdown2">농산물 등록 게시판</DropItem>
              <DropItem href="#dropdown3">고객 문의</DropItem>
            </DropNavGroup>
            <DropNavGroup>
              <DropItem href="#dropdown1">가격 정보 보기</DropItem>
            </DropNavGroup>
            <DropNavGroup>
              <DropItem href="#dropdown1">소통 하기</DropItem>
            </DropNavGroup>
            <DropNavGroup>
              <DropItem href="#dropdown1">정보 수정</DropItem>
            </DropNavGroup>
          </DropNav>
        </DropdownMenu>
      )}
      <SearchBar placeholder="검색어를 입력하세요" />
      <LoginButton>로그인</LoginButton>
    </HeaderContainer>
  );
};

export default Header;
