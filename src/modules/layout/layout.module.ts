import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { HomeComponent } from "./home/home.component";
import { CardComponent } from "./card/card.component";
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import { TableComponent } from "./table/table.component";
import { TabComponent } from "./tab/tab.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    CardComponent,
    CurrentWeatherComponent,
    TableComponent,
    TabComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    CardComponent,
    CurrentWeatherComponent,
    TableComponent,
    TabComponent
  ]
})
export class LayoutModule {}
