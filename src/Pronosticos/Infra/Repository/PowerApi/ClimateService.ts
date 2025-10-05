export class ClimateService {
    private _apiEndpoint: string;

    constructor() {
        this._apiEndpoint = 'https://power.larc.nasa.gov/api/temporal/daily/point';
    }

    public async fetchClimateData(lat: number, lon: number) {
        const dateNow = new Date();
        const year = dateNow.getFullYear();
        const month = String(dateNow.getMonth() + 1).padStart(2, '0');
        const day = String(dateNow.getDate()).padStart(2, '0');
        const formattedDate = `${year}${month}${day}`;

        const url = `${this._apiEndpoint}?parameters=T2M,WS10M,RH2M&community=RE&longitude=${lon}&latitude=${lat}&format=JSON&start=20010101&end=${formattedDate}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}