import React, { useState } from "react";
import { VStack, Button, Box, Heading } from "@chakra-ui/react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <VStack>
      <Heading>Counter</Heading>
      <Box>{count}</Box>
      <Button onClick={() => setCount(count + 1)} colorScheme="blue">
        Add Count
      </Button>
    </VStack>
  );
};

export default Counter;
