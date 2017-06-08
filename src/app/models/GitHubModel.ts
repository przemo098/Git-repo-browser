import { observable } from 'mobx';
import {Owner} from '../api/gitHubResponse'

export class GitHubModel {

  readonly id: number;
  @observable public repoTitle: string;
  @observable public owner: Owner;
  @observable public stars: number;
  @observable public createdAt: Date;


  constructor(id: number, repoTitle: string, owner: Owner, stars: number, createdAt: Date) {
    this.id = id;
    this.repoTitle = repoTitle;
    this.owner = owner;
    this.stars = stars;
    this.createdAt = createdAt;
  };
}

export default GitHubModel