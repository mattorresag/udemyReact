import { Flex } from "./utils/Flex";
import "./ExpenseItem.css";
import React from "react";
import { Typography } from "@mui/material";
import { ExpenseDate } from "./ExpenseDate";

interface Props {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem = ({ date, title, amount }: Props): JSX.Element => {

  return (
    <Flex gap='16' className={"expense-item"}>
      <ExpenseDate date={date} />
      <Flex className={"expense-item__description"}>
        <Typography variant='h2' color='#3a3a3a'>{title}</Typography>
        <Flex className={"expense-item__price"}>
          <Typography>{amount}</Typography>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ExpenseItem;
