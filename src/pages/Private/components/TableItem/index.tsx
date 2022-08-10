import * as C from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
//import { Category } from "./types/Category";
//import { categories } from "../../data/categories";
//import moment from "moment";



type Props = {
	item: Item
}


export const TableItem = ({ item }: Props) => {
  
// function formatDate(date: Date) {
//return moment(date).format("DD/MM/YYYY");
//} 
  
// <C.Category color={categories[item.category].color}>
 //       {categories[item.category].title}
  //      </C.Category> 


//<C.Value color={categories[item.category].expense ? "red" : "green"}> 
 //     		R$ {item.value}
//      	</C.Value>
 
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
               {item.category}
         
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
      	 
      		R$ {item.value}
      	
      </C.TableColumn>
    </C.TableLine>
  );
};
