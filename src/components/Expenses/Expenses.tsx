import { Flex } from "../UI/Flex";
import ExpenseItem from "./ExpensesItems/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import { useState } from "react";

export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

interface Props {
  expenses: Expense[];
}

export const Expenses = ({ expenses }: Props): JSX.Element => {
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  return (
    <Flex direction="column" className="expenses">
      <ExpensesFilter setSelectedYear={setSelectedYear}/>
      {expenses.filter((expense) => !!selectedYear ? expense.date.getFullYear() === selectedYear : expense).map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Flex>
  );
};
