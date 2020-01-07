import { Component, OnInit } from "@angular/core";
import { WeatherService } from "src/services/weather.service";
import { Observable, Observer } from "rxjs";
import { environment } from "src/environments/environment";

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
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.GetCurrentWeather();
    this.currentTime = new Date();
  }

  GetCurrentWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.userCoordinates = position;
        this.hasLocation = true;
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
