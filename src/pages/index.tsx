import type { NextPage } from "next";
import { Container } from "@mantine/core";
import FileDonwloader from "src/common/containers/FileDonwloader";

const Home: NextPage = () => {
  return (
    <Container>
      <FileDonwloader />
    </Container>
  );
};

export default Home;
