import Flex from "./utils/Flex";
import "./ExpenseItem.css";
import React from "react";

const ExpenseItem = (): JSX.Element => {
  return (
    <Flex>
      <Flex className={"expense-item"}>Março</Flex>
      <Flex className={"expense-item__description"}>
        Seguro
        <Flex className={"expense-item__price"}>R$200,00</Flex>
      </Flex>
    </Flex>
  );
};

export default ExpenseItem;
