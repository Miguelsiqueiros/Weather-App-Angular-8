import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SiblingsService {
  private messageSource = new BehaviorSubject({});
  currentCoords = this.messageSource.asObservable();

  constructor() {}

  updateCoords(coords: {}) {
    this.messageSource.next(coords);
  }
}
