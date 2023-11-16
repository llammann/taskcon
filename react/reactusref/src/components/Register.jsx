import React from "react";
import { useRef } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function Login({ users, setUsers, isLogged, setisLogged }) {
  const name = useRef("");
  const pass = useRef("");
  const email = useRef("");
  const surname = useRef("");

  //   const [name, setName] = useState("")
  //   const [surname, setSurname] = useState("")
  //   const [pass, seyPass] = useState("")
  //   const [email, setEmail] = useState("")

  if (isLogged) {
    return (
      <>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input ref={name} type="text" />

          <FormLabel>Surname</FormLabel>
          <Input ref={surname} type="text" />

          <FormLabel>Password</FormLabel>
          <Input ref={pass} type="password" />

          <FormLabel>Email</FormLabel>
          <Input ref={email} type="email" />

          <Button
            colorScheme="yellow"
            onClick={(e) => {
              // console.log(users);
              console.log(name.current.value);

              let newUser = {
                name: name.current.value,
                surname: surname.current.value,
                password: pass.current.value,
                email: email.current.value,
              };

              axios
                .post(
                  "https://6549a154e182221f8d51b8a0.mockapi.io/users",
                  newUser
                )
                .then((res) => {
                  console.log(res.data);
                  setUsers([...users, res.new]);
                });
            }}
          >
            Register
          </Button>
        </FormControl>
      </>
    );
  }
}

export default Login;
