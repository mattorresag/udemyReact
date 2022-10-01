import { Flex } from "./utils/Flex";
import "./ExpenseItem.css";
import React from "react";
import { Typography } from "@mui/material";

interface Props {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem = ({ date, title, amount }: Props): JSX.Element => {
  return (
    <Flex>
      <Flex className={"expense-item"}>
        <Typography>{date.toDateString()}</Typography>
      </Flex>
      <Flex className={"expense-item__description"}>
        <Typography>{title}</Typography>
        <Flex className={"expense-item__price"}>
          <Typography>{amount}</Typography>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ExpenseItem;
