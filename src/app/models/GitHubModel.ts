import { observable } from 'mobx';

export class GitHubModel {

  readonly id: number;
  @observable public repoTitle: string;
  @observable public owner: string;
  @observable public stars: number;
  @observable public createdAt: Date;


  constructor(id: number, repoTitle: string, owner: string, stars: number, createdAt: Date) {
    this.id = id;
    this.repoTitle = repoTitle;
    this.owner = owner;
    this.stars = stars;
    this.createdAt = createdAt;
  };
}

export default GitHubModel