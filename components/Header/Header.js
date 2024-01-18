import styled from "styled-components";
import Image from "next/image";

const StyledHeader = styled.header`
  background-color: var(--dark);

  background-image: url("/banner.svg");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: sticky;
  top: 0;

  padding: 0.5rem;

  box-shadow: 0rem 0.1rem 0.25rem black;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Image
        src="/img/gta-v-logo.png"
        alt="GTA V Logo"
        width={64}
        height={64}
      />
      <h1>GTA V Vehicle Database</h1>
    </StyledHeader>
  );
}
