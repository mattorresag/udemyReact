import { Typography } from "@mui/material";
import React from "react";
import { Flex } from "./utils/Flex"

interface Props {
  date: Date;
}

export const ExpenseDate = ({ date }: Props): JSX.Element => {
  const month = date.toLocaleString('pt-BR', { month: '2-digit' })
  const year = date.getFullYear()
  const day = date.toLocaleString('pt-BR', { day: '2-digit' })
  return (
    <Flex direction='column' >
      <Flex>
        <Typography>{day}</Typography>
      </Flex>
      <Flex>
        <Typography>{month}</Typography>
      </Flex>
      <Flex>
        <Typography>{year}</Typography>
      </Flex>
    </Flex>
  )
}