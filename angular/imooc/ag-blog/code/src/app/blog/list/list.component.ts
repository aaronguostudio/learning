import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/domain/blog.model';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl'],
  // providers: [BlogService]  // register services
})
export class ListComponent implements OnInit {
  blogs: Blog[] = [];
  filteredBlogs: Blog[];
  _filter: string;
  category: string;
  errorMessage: string;

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredBlogs = this._filter ? this.performFilter(this._filter) : this.blogs;
  }

  performFilter(filter: string): Blog[] {
    filter = filter.toLowerCase();
    return this.blogs.filter((b: Blog) => b.title.toLowerCase().indexOf(filter) !== -1);
  }

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category')
    console.log('>', this.category)
    this.blogService.getBlogs().subscribe(
      blogs => {
        this.blogs = blogs;
        this.filteredBlogs = this.blogs;
      },
      // convert the error to any types
      error => this.errorMessage = error as any
    );
  }

}
