import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

import vehicles from "../../data/vehicles.json";

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledListItem = styled.li`
  background-color: var(--dark-light);
  border-bottom: 0.125rem solid white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.25rem black;
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default function List() {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://raw.githubusercontent.com/DurtyFree/gta-v-data-dumps/master/vehicles.json"
  );

  if (isLoading)
    return (
      <StyledUnorderedList>
        <Image
          src="/loading-symbol.gif"
          alt="Loading Symbol"
          width={128}
          height={128}
        />
      </StyledUnorderedList>
    );

  return (
    <StyledUnorderedList>
      {error ? <p>Failed to load the data. Using the local dataset.</p> : ""}
      {(error ? vehicles : data).map((vehicle) => (
        <StyledListItem key={uuidv4()}>
          <Link href={"/vehicles/" + vehicle.Hash}>
            {vehicle.ManufacturerDisplayName.English}{" "}
            {vehicle.DisplayName.English
              ? vehicle.DisplayName.English
              : vehicle.DisplayName.Name.charAt(0).toUpperCase() +
                vehicle.DisplayName.Name.slice(1).toLowerCase()}
          </Link>
          <FontAwesomeIcon icon={faInfo} />
        </StyledListItem>
      ))}
    </StyledUnorderedList>
  );
}
