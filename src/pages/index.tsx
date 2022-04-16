import type { NextPage } from "next";
import { Container } from "@mantine/core";
import GlossAdder from "src/containers/GlossAdder";
import { DropZoneProvider } from "src/context/DropZoneContext";

const Home: NextPage = () => {
  return (
    <Container style={{ marginTop: 100 }}>
      <DropZoneProvider>
        <GlossAdder />
      </DropZoneProvider>
    </Container>
  );
};

export default Home;
