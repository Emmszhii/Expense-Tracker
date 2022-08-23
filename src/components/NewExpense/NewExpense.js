import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [toggle, setToggle] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onSaveExpense(expenseData);
    toggleOffHandler();
  };

  const toggleExpenseHandler = () => {
    setToggle(true);
  };

  const toggleOffHandler = () => {
    setToggle(false);
  };

  return (
    <div className="new-expense">
      {!toggle && (
        <button onClick={toggleExpenseHandler}>Add new Expense</button>
      )}
      {toggle && (
        <ExpenseForm
          hideHandler={toggleOffHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
