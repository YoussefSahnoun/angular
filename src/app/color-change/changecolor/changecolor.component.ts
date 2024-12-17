// changecolor.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrls: ['./changecolor.component.css']
})
export class ChangecolorComponent implements OnInit {
  currentColor!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentColor = params['color'] || 'red';
    });
  }

  onColorChange(): void {
    this.router.navigate(['/ex1', this.currentColor]);
  }

  resetColor(): void {
    this.currentColor = 'red';
    this.router.navigate(['/ex1/red']);
  }
}
