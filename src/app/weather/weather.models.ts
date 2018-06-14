export interface WeatherMain {
    main: number;
    temp_min: number;
    temp_max: number;
}

export interface WeatherSummary {
    main: string;
    description: string;
    icon: string;
}

export interface Weather {
    dt: number;
    main: WeatherMain;
    weather: WeatherSummary[];

}
