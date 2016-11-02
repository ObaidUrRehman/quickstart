/**
 * Created by orehman on 11/1/2016.
 */

import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "./Todo";

@Pipe({
    name: 'filterTodo',
  pure: false
})

export class FilterTodoPipe implements PipeTransform {
    transform(value: Array<Todo>, args: any[]): any {
      console.log(value);
      let val = value.filter(
        (t:Todo)=>{return !t.done;});
      console.log(val);
      return val;
    }
}
