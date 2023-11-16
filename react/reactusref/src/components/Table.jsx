import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

function Tablex({ products, setProducts, isLogged, setisLogged }) {
  //   console.log(products);
    console.log(isLogged);

  if (isLogged) {
    return (
      <>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Products</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Category</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => {
                return (
                  <Tr key={product.id}>
                    <Td>{product.id}</Td>
                    <Td>{product.name}</Td>
                    <Td>{product.price}</Td>
                    <Td>{product.categoryFirst}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </>
    );
  }
}
export default Tablex;

{
  /* <TableContainer>
<Table variant="striped" colorScheme="teal">
  <TableCaption>Products</TableCaption>
  <Thead>
    <Tr>
      <Th>ID</Th>
      <Th>Name</Th>
      <Th>Price</Th>
      <Th>Category</Th>
    </Tr>
  </Thead>
  <Tbody>
    {products.map((product) => {
      return (
        <Tr>
          <Td>{product.id}</Td>
          <Td>{product.name}</Td>
          <Td>{product.price}</Td>
          <Td>{product.categoryFirst}</Td>
        </Tr>
      );
    })}
  </Tbody>
</Table>
</TableContainer> */
}
