import { Injectable } from "@angular/core";
import { scaleLinear } from "d3-scale";

const popScale = scaleLinear()
  .domain([100, 3000])
  .range(["#AAAAAA", "#444444"]);

export class Country {
  color: string;
}

export class Countries {
  Russia: Country;
  Canada: Country;
  China: Country;
  "United States": Country;
  Brazil: Country;
  Australia: Country;
  India: Country;
  Argentina: Country;
  Romania: Country;
  Algeria: Country;
}

let countries: Countries = {
  Russia: { color: popScale(300) },
  Canada: { color: popScale(120) },
  China: { color: popScale(1300) },
  "United States": { color: popScale(2920) },
  Brazil: { color: popScale(550) },
  Australia: { color: popScale(760) },
  India: { color: popScale(200) },
  Argentina: { color: popScale(240) },
  Romania: { color: popScale(600) },
  Algeria: { color: popScale(540) }
};

@Injectable()
export class Service {
  getCountries(): Countries {
    return countries;
  }
}
