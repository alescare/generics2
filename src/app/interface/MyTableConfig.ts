import {MyHeaders} from './MyHeaders';
import {MyOrders} from './MyOrders';
import {MySearch} from './MySearch';
import {MyPagination} from './MyPagination';
import {MyTableActionEnum} from '../MyTableActionEnum';

export interface MyTableConfig {
  headers: MyHeaders[];
  order: MyOrders;
  search: MySearch;
  pagination: MyPagination;
  actions: MyTableActionEnum[];
}
