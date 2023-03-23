import { useState, useEffect } from 'react';

import * as C from './app.styles'
import { Item } from './types/Item'
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/infoArea';
import { InputArea } from './components/inputArea';

const App =() =>{
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  
  const handleMonthChange = (newMonth:string) =>{
    setCurrentMonth(newMonth)
  }

  const addList = (item:Item) =>{
    let newList = [...list,item]
    setList(newList)
  }

  useEffect(() =>{
    setFilteredList( filterListByMonth(list, currentMonth))

  }, [list,currentMonth])//Na mudança de list e currentMonth ele executa a função
  useEffect(() =>{
    let newIncome = 0;
    let newExpense = 0;

    for(let item of filteredList){
      if(categories[item.category].expense){
        newExpense += item.value;
      } else newIncome += item.value
    }

    setIncome(newIncome)
    setExpense(newExpense)

  }, [filteredList])
  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Finance System</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea currentMonth = {currentMonth}
        onMonthChange ={handleMonthChange}
        income={income}
        expense = {expense}
        />
        <InputArea addList = {addList}/>

        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  );
}

export default App