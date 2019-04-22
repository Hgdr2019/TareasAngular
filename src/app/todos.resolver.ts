import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs/Observable'
import {Todo} from 'app/todo';
import {TodoDataService} from './todo-data.service';
import {Resolve} from '@angular/router';


@Injectable()

export class TodoResolver implements Resolve <Observable<Todo[]>> {

  constructor(private todoService: TodoDataService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot):
    Observable<Todo[]> {

    return this.todoService.getAllTodos();
  }

}
