import React, { useState, useEffect } from "react";
import { VStack, Input, Button, Box, Heading } from "@chakra-ui/react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <VStack>
      <Heading>Todo</Heading>
      <Input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></Input>
      <Button
        onClick={() => {
          if (inputVal === "") return;
          setTodo([...todo, inputVal]);
          setInputVal("");
        }}
        colorScheme="teal"
      >
        Add Todo
      </Button>
      <VStack>
        {todo.map((item, index) => (
          <Box key={index}>{`${index + 1}: ${item}`}</Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default Todo;
