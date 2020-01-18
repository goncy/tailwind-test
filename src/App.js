import React from "react";
import styled from "styled-components";

import Card from "./components/Card";
import Button from "./components/Button";

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 32px;
  grid-gap: 32px;
`;

function App() {
  return (
    <Container>
      {new Array(20).fill(true).map((_, index) => (
        <Card
          key={index}
          action={
            <Button size="small" variant="primary">
              Buy
            </Button>
          }
          image="//placehold.it/128"
          tags={["sunset", "beach"]}
          title="Live in Bali"
        >
          If you really like beaches you can come here
        </Card>
      ))}
    </Container>
  );
}

export default App;
