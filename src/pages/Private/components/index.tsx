import { useState, useEffect } from "react";
import * as C from "../../../App.styles";
import { Item } from "../../../types/Item";
//import { Category } from "../../types/Category";
//import { categories } from "./data/categories";
//import { items } from "../data/items";
import { getCurrentMonth, filterListByMonth } from "../helpers/dateFilter";
import { TableArea } from "./TableArea";
import { InfoArea } from "./InfoArea";
import { InputArea } from "./InputArea";
//import { AuthContext } from "../../contexts/Auth/AuthContext";
import { api } from "../services/api";
//import axios from 'axios'

export const Private = () => {
  //const auth = useContext(AuthContext);

  const [items, setItems] = useState<Item[]>([]);
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    api
      .get("/bills")
      .then((res) => {
        //console.log(res.data);
        //setItems(res.data);
        setList(res.data);
      })
      .catch((err) => {
        //console.error(err);
      });
  }, []);

  useEffect(() => {
    setList(items);
    console.log(list);

    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  // if (categories[filteredList[i].category].expense) {

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (filteredList[i].status) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <C.Body>
      <InfoArea
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />
      <InputArea onAdd={handleAddItem} />
      <TableArea list={filteredList} />
    </C.Body>
  );
};
