import { Flex } from "../UI/Flex"
import ExpenseForm, { ExpenseData } from "./ExpenseForm";

import './NewExpense.css'

interface Props {
  addNewExpense: (expense: ExpenseData) => void
}

const NewExpense = ({addNewExpense}: Props):JSX.Element => {
  

  return (
  <Flex className='new-expense'>
    <ExpenseForm addNewExpense={addNewExpense} />
    </Flex>
    )
}

export default NewExpense;