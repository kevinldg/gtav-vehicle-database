import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 1rem;
  background-color: var(--dark);
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: right;
  box-shadow: 0rem -0.1rem 0.25rem black;
`;

const HeartIcon = styled.span`
  text-shadow: 0 0 0.5rem red;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        Created with <HeartIcon>❤️</HeartIcon> by myself
      </p>
    </StyledFooter>
  );
}
