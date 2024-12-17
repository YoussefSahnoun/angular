import { Injectable } from '@angular/core';
import { Cv } from "../cv-embauche/cv";
import { Observable, Subject, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private apiUrl = 'https://apilb.tridevs.net/api/personnes';

  private cvSubject: Subject<Cv> = new Subject<Cv>();
  public cvObservable$ = this.cvSubject.asObservable();

  public cvs: Cv[] = [
    new Cv(1, 'guermazi', 'yosr', 22, 12534856, 'Etudiante', 'assets/images/im1.jpg'),
    new Cv(2, 'zguem', 'asma', 22, 45864478, 'Etudiante', 'assets/images/im2.jpg'),
    new Cv(3, 'othmani', 'sumaya', 21, 45589632, 'Etudiante', '/assets/images/im3.jpg'),
    new Cv(4, 'sahnoun', 'youssef', 22, 45579632, 'Etudiant', '/assets/images/im4.jpg'),
  ];

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  
  getCvsfromapi(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.apiUrl).pipe(
      tap(() => this.toastr.success('CVs fetched successfully from API.')),
      catchError((error: HttpErrorResponse) => {
        this.toastr.error('Failed to fetch CVs from API, loading local data instead.');
        console.error('Error fetching CVs:', error);
        return of(this.cvs); // Fallback to local data
      })
    );
  }

  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id === +id) ?? null;
  }

  deleteCvapi(id: number): Observable<Cv> {
    return this.http.delete<Cv>(`${this.apiUrl}/${id}`);
  }

  deleteCv(cv: Cv): boolean {
    const originalLength = this.cvs.length;
    this.cvs = this.cvs.filter(item => item.id !== cv.id);
    const isDeleted = this.cvs.length < originalLength;
    if (isDeleted) {
      console.log(`CV with ID ${cv.id} deleted successfully.`);
    } else {
      console.warn(`No CV found with ID ${cv.id}.`);
    }
    return isDeleted;
  }

  showCv(cv: Cv) {
    this.cvSubject.next(cv);
  }
}
