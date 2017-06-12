import { observable, computed, action } from 'mobx';
import { GitHubModel } from '../models';

export class GitHubStore {

  constructor(fixtures: GitHubModel[]) {
    this.repositories = fixtures;
    this.addRepo = this.addRepo.bind(this);
  }

  @observable
  public repositories: Array<GitHubModel>;

  @computed
  get allRepositories() {
    return this.repositories.filter((todo) => !todo.owner);
  }

  @action
  addRepo(item: GitHubModel): void {
    this.repositories.push(item);
  }

  @action
  clean(): void {
    this.repositories.length = 0;
  }
}

export default GitHubStore;
