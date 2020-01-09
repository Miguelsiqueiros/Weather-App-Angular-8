import { Component, OnInit } from "@angular/core";
import { WeatherService } from "src/services/weather.service";
import { Observable, Observer } from "rxjs";
import { environment } from "src/environments/environment";
import { SiblingsService } from "src/services/Siblings.service";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"]
})
export class CurrentWeatherComponent implements OnInit {
  userCoordinates: any;
  hasLocation = false;
  currentWeather: any;
  currentTime: any;
  iconUrl: string;
  coords: {};
  constructor(
    private weatherService: WeatherService,
    private siblingService: SiblingsService
  ) {}

  ngOnInit() {
    this.GetCurrentWeather();
    this.currentTime = new Date();
    this.siblingService.currentCoords.subscribe(data => (this.coords = data));
  }

  GetCurrentWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.userCoordinates = position;
        this.hasLocation = true;
        this.siblingService.updateCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        this.weatherService
          .GetCurrentWeather(
            this.userCoordinates.coords.latitude,
            this.userCoordinates.coords.longitude
          )
          .subscribe(data => {
            this.currentWeather = data;
            this.iconUrl = `${environment.ICON_URL}${data.weather[0].icon}@2x.png`;
          });
      });
    }
  }
}
