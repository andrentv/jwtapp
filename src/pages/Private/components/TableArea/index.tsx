import * as C from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
//import moment from "moment";

type Props = {
	list: Item[]
}

export const TableArea = ({ list }: Props) => {
 
//  function formatDate(created_at: Date) {
//    return moment(created_at).format("DD/MM/YYYY");
//  }


  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item}/>
        ))}
      </tbody>
    </C.Table>
  );
};
