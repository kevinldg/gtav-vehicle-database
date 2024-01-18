import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";

import vehicles from "../../../data/vehicles.json";

const StyledMain = styled.main`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.25rem black;
  background-color: var(--dark);
  border-bottom: 0.125rem solid white;
  border-radius: 0.25rem;
  width: 100%;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem;
  background-color: var(--dark);
  width: fit-content;
  border-bottom: 0.125rem solid white;
  border-radius: 0.25rem;
  box-shadow: 0.1rem 0.1rem 0.25rem black;
`;

export default function DetailsPage() {
  const router = useRouter();

  const { data, error, isLoading, isValidating } = useSWR(
    "https://raw.githubusercontent.com/DurtyFree/gta-v-data-dumps/master/vehicles.json"
  );

  if (isLoading) {
    return (
      <Image
        src="/loading-symbol.gif"
        alt="Loading Symbol"
        width={128}
        height={128}
      />
    );
  }

  let vehicle;
  if (error) {
    vehicle = vehicles.find((vehicle) => vehicle.Hash == router.query.id);
  } else {
    vehicle = data.find((vehicle) => vehicle.Hash == router.query.id);
  }

  function vehicleImage() {
    const liveUrl =
      "https://raw.githubusercontent.com/MericcaN41/gta5carimages/main/images/" +
      vehicle.DisplayName.Name.toLowerCase() +
      ".png";

    try {
      fetch(liveUrl);
      return liveUrl;
    } catch {
      return "/vehicle-images/" + vehicle.DisplayName.Name + ".png";
    }
  }

  return (
    <StyledMain>
      <ImageContainer>
        <Image
          // vehicle.DisplayName.Name
          // "/vehicle-images/" + vehicle.DisplayName.Name + ".png"
          src={vehicleImage()}
          alt="No vehicle image available"
          width={400}
          height={250}
        />
      </ImageContainer>
      <Details>
        {error ? <p>Failed to load the data. Using the local dataset.</p> : ""}
        <strong>
          Details for {vehicle.ManufacturerDisplayName.English}{" "}
          {vehicle.DisplayName.English
            ? vehicle.DisplayName.English
            : vehicle.DisplayName.Name.charAt(0).toUpperCase() +
              vehicle.DisplayName.Name.slice(1).toLowerCase()}
        </strong>
        <p>Class: {vehicle.Class}</p>
        <p>Seats: {vehicle.Seats}</p>
        <p>Hash: {vehicle.Hash}</p>
      </Details>
      <StyledLink href="/">Back to Homepage</StyledLink>
    </StyledMain>
  );
}
