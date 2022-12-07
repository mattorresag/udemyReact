import { Button, Input, InputLabel } from '@mui/material';
import { format, isValid } from 'date-fns';
import { useState } from 'react';
import { Flex } from '../UI/Flex';
import './ExpenseForm.css'

import pt from 'date-fns/locale/pt-BR'

export type ExpenseDataUserInput = {
  enteredTitle: string;
  enteredAmount: number;
  enteredDate: Date;
}

export type ExpenseData = {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface Props {
  addNewExpense: (expenseData: ExpenseData) => void;
}


const ExpenseForm = ({addNewExpense}:Props):JSX.Element => {

  const [userInput, setUserInput] = useState<ExpenseDataUserInput>({
    enteredTitle: '',
    enteredAmount: 0,
    enteredDate: new Date()
  })

  const checkDate = (date: Date) => {
		if (date === null) return date;
		return isValid(date)
			? format(date, 'yyyy-MM-dd', {locale: pt})
			: String(date).replace('T', ' ').substring(0, 19);
	}
 
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name: key, type } = e.target
    const isNumber = type === 'number';
    setUserInput((oldState) => ({...oldState, [key]: isNumber? Number(value) : value}));
  }

  const inputDateHandler = (date: Date, key: string) => {
		setUserInput((oldState) => ({
			...oldState,
			[key]: checkDate(date)
		}));
	};

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: userInput.enteredDate
    }
    addNewExpense(expenseData);
    setUserInput({
      enteredAmount: 0,
      enteredDate: new Date(),
      enteredTitle: ''
    })
  }

  return (<form onSubmit={submitHandler}>
    <Flex className='new-expense__controls'>
      <Flex direction='column' className='new-expense__control'>
        <InputLabel>Title</InputLabel>
        <Input name='enteredTitle' value={userInput.enteredTitle} onChange={(e) => inputHandler(e)} type='text'/>
      </Flex>
      <Flex direction='column'  className='new-expense__control'>
        <InputLabel>Amount</InputLabel>
        <Input name='enteredAmount' value={userInput.enteredAmount} onChange={(e) => inputHandler(e)} type='number'/>
      </Flex>
      <Flex  direction='column'  className='new-expense__control'>
        <InputLabel >Date</InputLabel>
        <Input name='enteredDate' value={userInput.enteredDate} onChange={(e) => inputDateHandler(new Date(e.target.value), 'enteredDate')} type='date'/>
      </Flex>
    </Flex>
    <Flex justify='end' className='new-expense__actions'>
      <Button type='submit'>Add expense</Button>
    </Flex>
  </form>)
}

export default ExpenseForm;