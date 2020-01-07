import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  lat: number;
  lon: number;
  constructor(private httpClient: HttpClient) {}

  GetCurrentWeather(lat: number, lon: number): Observable<any> {
    return this.httpClient.get(
      `${environment.API_URL}weather/?lat=${lat}&lon=${lon}&appid=${environment.API_KEY}`
    );
  }

  GetDailyWeather(lat: number, lon: number) {}

  GetWeekly(lat: number, lon: number) {}
}
