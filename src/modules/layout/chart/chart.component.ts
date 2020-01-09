import { Component, OnInit, Input } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import { WeatherService } from "src/services/weather.service";
import { SiblingsService } from "src/services/Siblings.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  @Input()
  public lineChartData: ChartDataSets[] = [
    { data: [], label: "Daily Weather" }
  ];
  @Input()
  public lineChartLabels: Label[] = [];
  @Input()
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: "y-axis-0",
          position: "left"
        },
        {
          id: "y-axis-1",
          position: "right",
          gridLines: {
            color: "rgba(255,0,0,0.3)"
          },
          ticks: {
            fontColor: "red"
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: "line",
          mode: "vertical",
          scaleID: "x-axis-0",
          value: "March",
          borderColor: "orange",
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: "orange",
            content: "LineAnno"
          }
        }
      ]
    }
  };
  @Input()
  public lineChartColors: Color[] = [
    {
      backgroundColor: "rgba(255,0,0,0.3)",
      borderColor: "red",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  @Input()
  public lineChartLegend = true;
  @Input()
  public lineChartType = "line";
  @Input()
  lat: any;
  @Input()
  lon: any;
  constructor(
    private weatherService: WeatherService,
    private coordService: SiblingsService
  ) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.coordService.currentCoords.subscribe(coords => {
      this.weatherService
        .GetFiveDayForecast(coords["lat"], coords["lon"])
        .subscribe(data => {
          console.log(data["list"][0]);
          let forecast = [];
          let time = [];
          data["list"].forEach(element => {
            forecast.push(element["main"]["temp"] - 273.15);
            time.push(element["dt_txt"]);
          });
          this.lineChartLabels = time;
          this.lineChartData = [
            {
              data: forecast,
              label: "5 day / 3 day forecast"
            }
          ];
        });
    });
  }
}
