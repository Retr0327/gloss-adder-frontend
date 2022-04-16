import type { NextPage } from "next";
import { Container } from "@mantine/core";
import GlossAdder from "src/containers/GlossAdder";

const Home: NextPage = () => {
  return (
    <Container style={{ marginTop: 100 }}>
      <GlossAdder />
    </Container>
  );
};

export default Home;
