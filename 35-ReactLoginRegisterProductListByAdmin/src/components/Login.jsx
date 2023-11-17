import React from "react";
import { useRef } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
function Login({
  users,
  setUsers,
  isLogged,
  setisLogged,
  isRegistered,
  setisRegistered,
}) {
  const name = useRef("");
  const pass = useRef("");
  return (
    <>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input id="nameInp" ref={name} type="text" />
        <FormLabel>Password</FormLabel>
        <Input id="passInp" ref={pass} type="password" />
        <Button
          colorScheme="red"
          onClick={(e) => {
            console.log(users);
            console.log("before log", isLogged);

            // console.log(name.current.value)
            // console.log(pass.current.value)
            // console.log(user.name)

            users.forEach((user) => {
              console.log(user);
              console.log(name.current.value);
              console.log(user.password, pass.current.value);

              if (
                user.name === name.current.value &&
                user.password === pass.current.value
              ) {
                console.log("indi 2ci defe acilmalidir");
                name.current.value = "";
                pass.current.value = "";
                console.log("True");
              } else {
                name.current.value = "";
                pass.current.value = "";
                console.log("sifirlandi");
                // return <Button>Go to Register</Button>
              }
            });
          }}
        >
          Login
        </Button>
      </FormControl>
      <Button>
        Register
      </Button>
    </>
  );
}

export default Login;
