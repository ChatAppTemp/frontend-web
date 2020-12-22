import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.div`
  position: fixed;
  height: 50px;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgb(25, 25, 25);
  background-color: rgba(25, 25, 25, 0.9);
  backdrop-filter: blur(5px);
`;

const LinkWrapper = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const StyledLink = styled.a`
  font: 400 17px "Source Sans Pro", sans-serif;
  margin-top: -5px;
  color: white;
  text-decoration: none;
  margin-right: 15px;
  cursor: pointer;
`;

interface LinkAnimatedProps {
  to: string;
  text: string;
}

const LinkAnimated = ({ to, text }: LinkAnimatedProps) => {
  return (
    <Link href={to}>
      <StyledLink>{text}</StyledLink>
    </Link>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <LinkWrapper>
        <LinkAnimated to="/signup" text="Sign Up" />
        <LinkAnimated to="/login" text="Log In" />
      </LinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
