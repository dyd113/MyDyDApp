import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../../services/api/posts.service';
@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.scss'],
})
export class CommentboxComponent implements OnInit {
  @Input() postid: any;
  commentData: any = [];
  constructor(public router: Router, public postsService: PostsService) { }

  async ngOnInit() {
    console.log('CommentboxComponent', this.postid);
    this.commentData  = await this.postsService.getAllComments(this.postid).toPromise().catch((e) => console.log(e));
    console.log('commentData', this.commentData);
  }

  goToCommentDetail() {
    console.log('goToCommentDetail');
    this.router.navigate(['/comment-detail', {comment_datas: JSON.stringify(this.commentData)}]);
  }
}
