import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post-list-item/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() listPosts: Post[];

  constructor() { }

  ngOnInit(): void {
    this.listPosts;
  }

}