import React from "react";
import { useRef } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
function Login({ users, setUsers, isLogged, setisLogged }) {
  const name = useRef("");
  const pass = useRef("");
  return (
    <>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input ref={name} type="text" />

        <FormLabel>Password</FormLabel>
        <Input ref={pass} type="password" />
        <Button
          colorScheme="red"
          onClick={(e) => {
            name.current.value = "";
            pass.current.value = "";

            console.log(users);
            // console.log("before log", isLogged);

            // console.log(name.current.value)
            // console.log(pass.current.value)
            // console.log(user.name)
            users.forEach((user) => {
              //   console.log(user.name, name.current.value);
              //   console.log(user.password, pass.current.value);

              if (
                user.name === name.current.value &&
                user.password === pass.current.value
              ) {
                setisLogged(true);
                console.log("True");
              }
            });
          }}
        >
          Login
        </Button>
      </FormControl>
    </>
  );
}

export default Login;
