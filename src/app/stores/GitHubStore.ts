import { observable, computed, action } from 'mobx';
import { GitHubModel } from '../models';

export class GitHubStore {

  constructor(fixtures: GitHubModel[]) {
    this.repositories = fixtures;

    this.addRepo = this.addRepo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.completeAll = this.completeAll.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }  

  @observable
  public repositories: Array<GitHubModel>;

  @computed
  get activeTodos() {
    return this.repositories.filter((todo) => !todo.owner);
  }

  @computed
  get completedTodos() {
    return this.repositories.filter((todo) => todo.owner);
  }

  @action
  addRepo(item: GitHubModel): void {
    this.repositories.push(item);
  }

  @action
  editTodo(id: number, data: Partial<GitHubModel>): void {
    this.repositories = this.repositories.map((todo) => {
      if (todo.id === id) {
        if (typeof data.owner == 'boolean') {
          todo.owner = data.owner;
        }
        if (typeof data.repoTitle == 'string') {
          todo.repoTitle = data.repoTitle;
        }
      }
      return todo;
    })
  }

  @action
  deleteTodo(id: number): void {
    this.repositories = this.repositories.filter((todo) => todo.id !== id);
  }

  @action
  completeAll(): void {
    this.repositories = this.repositories.map((todo) => ({ ...todo, completed: true }));
  }

  @action
  clearCompleted(): void {
    this.repositories = this.repositories.filter((todo) => !todo.owner);
  }
}

export default GitHubStore;
