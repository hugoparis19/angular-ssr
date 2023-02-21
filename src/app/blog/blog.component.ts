import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-ssr-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {}
