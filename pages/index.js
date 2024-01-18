import List from "@/components/List/List";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 1rem;
`;

export default function Home() {
  return (
    <StyledMain>
      <List />
    </StyledMain>
  );
}
