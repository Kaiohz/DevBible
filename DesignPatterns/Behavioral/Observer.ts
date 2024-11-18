// Observer Pattern Example

// Observer interface
interface Observer {
    update(temperature: number, humidity: number, pressure: number): void;
}

// Subject interface
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// Concrete Subject
export class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number = 0;
    private humidity: number = 0;
    private pressure: number = 0;

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObservers();
    }
}

// Concrete Observers
export class DisplayDevice implements Observer {
    constructor(private name: string) {}

    update(temperature: number, humidity: number, pressure: number): void {
        console.log(`${this.name} Display: Temperature ${temperature}°C, Humidity ${humidity}%, Pressure ${pressure}hPa`);
    }
}

// Usage
const weatherStation = new WeatherStation();

const phoneDisplay = new DisplayDevice("Phone");
const tabletDisplay = new DisplayDevice("Tablet");

weatherStation.registerObserver(phoneDisplay);
weatherStation.registerObserver(tabletDisplay);

weatherStation.setMeasurements(24, 65, 1013);
// Phone Display: Temperature 24°C, Humidity 65%, Pressure 1013hPa
// Tablet Display: Temperature 24°C, Humidity 65%, Pressure 1013hPa 