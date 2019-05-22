import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.page.html',
  styleUrls: ['./comment-detail.page.scss'],
})
export class CommentDetailPage implements OnInit {
  comments: any = [
  ];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    const data = this.activatedRoute.snapshot.paramMap.get('comment_datas');
    console.log('data', data);
    this.comments = JSON.parse(data);
  }

}
