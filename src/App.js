import { Center, VStack } from "@chakra-ui/react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <Center p="50">
      <VStack spacing="20">
        <Counter />
        <Todo />
      </VStack>
    </Center>
  );
}

export default App;
