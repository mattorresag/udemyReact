import { Typography } from "@mui/material";
import { Flex } from "../../UI/Flex";
import "./ExpenseDate.css";

interface Props {
  date: Date;
}

export const ExpenseDate = ({ date }: Props): JSX.Element => {
  const month = date.toLocaleString("pt-BR", { month: "2-digit" });
  const year = date.toLocaleString("pt-BR", { year: "numeric" });
  const day = date.toLocaleString("pt-BR", { day: "2-digit" });
  return (
    <Flex direction="column" className="expense-date">
      <Flex>
        <Typography variant="h5">{day}</Typography>
      </Flex>
      <Flex className="expense-date__month">
        <Typography variant="subtitle2">{month}</Typography>
      </Flex>
      <Flex className="expense-date__year">
        <Typography variant="subtitle2">{year}</Typography>
      </Flex>
    </Flex>
  );
};
