import { Component, OnInit } from '@angular/core';
import { Cv } from "../cv";
import { CvService } from 'src/app/services/cv-service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedCv: Cv | null = null;
  cvs: Cv[] = [];

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.fetchCvs();
  }

  fetchCvs() {
    this.cvService.getCvsfromapi().subscribe(
      (cvs: Cv[]) => {
        this.cvs = cvs;
      },
      (error) => {
        console.error('Error fetching CVs, falling back to local data.', error);
        this.cvs = this.cvService.getCvs();
      }
    );
  }

  showDetails(selectedCv: Cv) {
    this.selectedCv = this.cvs.find((cv) => cv === selectedCv) || null;
  }
}
