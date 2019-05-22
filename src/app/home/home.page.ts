import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PostsService } from '../../services/api/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datas: any = [];
  posts: any = [
  ];
  errorMessage: string;
  page = 1;
  perPage = 10;
  totalData = 0;
  totalPage = 0;
  constructor(public router: Router, public postsService: PostsService) {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    setTimeout(() => {
      this.initData();
    }, 2000);
  }
  async initData() {
    this.datas  = await this.postsService.getAllPosts().toPromise().catch((e) => console.log(e));
    this.page = 1;
    this.perPage = 10;
    this.totalData = this.datas.length;
    this.totalPage = this.totalData / this.perPage;
    this.posts = [];
    this.posts = this.datas.slice(0, this.perPage);
  }

  doInfinite(event) {
    setTimeout(() => {
      this.page = this.page + 1;
      this.posts = this.datas.slice(0, this.perPage * this.page);
      event.target.complete();
      if (this.posts.length >= this.datas.length) {
        event.target.disabled = true;
      }
    }, 1000);
  }


}
