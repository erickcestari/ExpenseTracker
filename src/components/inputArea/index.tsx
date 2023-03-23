import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'
type Props = {
    addList: (item:Item) =>void
}

export const InputArea = ({addList}:Props) =>{
    const [dateValue, setDateValue] = useState('')
    const [titleValue, setTitleValue] = useState('')
    const [categoryValue, setCategoryValue] = useState('Food')
    const [valueValue, setValueValue] = useState('')

    const handleAddEvent = (date:string,title:string,category:string,value:string) =>{
        let [year,month,day] = date.split('-')
        console.log(category)
        let newItem:Item = {
            date: new Date(Number(year),Number(month) - 1,Number(day)),
            category: category.toLowerCase(),
            title: title,
            value: Number(value),
        }
        setValueValue('')
        setTitleValue('')
        addList(newItem)
        
    }

    return(
        <C.Container>
            <C.InputArea>
                <C.Title>Date</C.Title>
                <C.Input type='date' onChange={e => setDateValue(e.target.value)}/>
            </C.InputArea>
            <C.InputArea>
                <C.Title>Category</C.Title>
                <C.Select name='Categories' onChange={e => setCategoryValue(e.target.value)}>
                    <option id='food'>Food</option>
                    <option id='rent'>Rent</option>
                    <option id='salary'>Salary</option>
                </C.Select>
            </C.InputArea>
            <C.InputArea>
                <C.Title>Title</C.Title>
                <C.Input type='text' value={titleValue} onChange={e => setTitleValue(e.target.value)}/>
            </C.InputArea>
            <C.InputArea>
                <C.Title>Value</C.Title>
                <C.Input type='number' value={valueValue} onChange={e => setValueValue(e.target.value)}/>
            </C.InputArea>
            <C.Submit type='submit' value='Submit' onClick={e=> handleAddEvent(dateValue,titleValue,categoryValue,valueValue)}/>
        </C.Container>
    )
}