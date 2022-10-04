import { Flex } from "../utils/Flex";
import ExpenseItem from "./ExpensesItems/ExpenseItem";
import "./Expenses.css";

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
  return (
    <Flex direction="column" className="expenses">
      {expenses.map((expense) => {
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
