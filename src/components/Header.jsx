import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  font-weight: 400;
  font-size: 13px;
  color: white;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1 style={{ color: "white" }}>OZ코딩스쿨</h1>
      <MenuList>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </MenuList>
    </HeaderContainer>
  );
}
