import { ChangeEvent, useState } from "react";
import { Container, Button, Input, InputLabel, InputTitle } from "./styles";
import { Item } from "../../../../types/Item";
//import { categories } from "../../data/categories";
import { newDateAdjusted } from "../../helpers/dateFilter";
import { api } from "../../services/api";
//import axios from 'axios'

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  const [model, setModel] = useState<Item[]>();

  //let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (categoryField === "") {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
        id: 0,
        status: false,
      });

      // function updateModel(e: ChangeEvent<HTMLInputElement>) {
      //   setModel({
      //     ...model,
      //     [e.target.name]: e.target.value,
      //   });
      // }
      async function onSubmit(e: ChangeEvent<HTMLInputElement>) {
        api.post("/bills/", onAdd);
        console.log("edit");
      }

      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <Container>
      <InputLabel>
        <InputTitle>Data</InputTitle>
        <Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>Categoria</InputTitle>
        <Input
          type="text"
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>Título</InputTitle>
        <Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>Valor</InputTitle>
        <Input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>&nbsp;</InputTitle>
        <Button onSubmit={handleAddEvent}>Adicionar</Button>
      </InputLabel>
    </Container>
  );
};

//if (!categoryKeys.includes(categoryField)) {

//onChange={(e) => setDateField(e.target.value)}
//onChange={(e) => setCategoryField(e.target.value)}
//onChange={(e) => setTitleField(e.target.value)}
// onChange={(e) => setValueField(parseFloat(e.target.value))}

/*
<Select
          
        
value={categoryField}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
        >
          <>
            <Option></Option>
            {categoryKeys.map((key, index) => (
              <Option key={index} value={key}>
                {categories[key].title}
              </Option>
            ))}
          </>
          </Select>
          */
