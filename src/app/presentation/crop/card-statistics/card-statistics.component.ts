
import { Component, OnInit } from '@angular/core';
import { MeasurementModel } from '../../../domain/models/Measurement/Measurement';

import { Input } from '@angular/core';
//charl

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrl: './card-statistics.component.css'
})
export class CardStatisticsComponent implements OnInit {
    @Input() measurements: MeasurementModel[] = [];
  
    // Propiedades de las gráficas
    chartDataTemp: any;
    chartOptionsTemp: any;
  
    chartDataHum: any;
    chartOptionsHum: any;
  
    chartDataAir: any;
    chartOptionsAir: any;
  
    chartDataSun: any;
    chartOptionsSun: any;
  
    constructor() { }
  
    ngOnInit(): void {
      console.log("Mediciones recibidas en el hijo:", this.measurements);
      this.generateMeasurements();
      this.setTempChart();
      this.setHumChart();
      this.setAirChart();
      this.setSunChart();
    }
  
    generateMeasurements() {
      // Generar datos de ejemplo si no se proporcionan
      for (let i = 0; i < 20; i++) {
        const date = new Date();
        date.setMinutes(date.getMinutes() + i * 2);
        this.measurements.push({
          id: i + 1,
          id_device: "DEV123",
          temp: 30 + Math.random() * 5,
          humedity: 60 + Math.random() * 10,
          air: 240 + Math.random() * 10,
          sun: 1100 + Math.random() * 200,
          date_and_hour: date.toLocaleString()
        });
      }
    }
  
    // Método para obtener la última medición
    obtenerUltimaMedicion() {
      return this.measurements.length > 0 ? this.measurements[this.measurements.length - 1] : null;
    }
  
    // Configuración para las gráficas (como ya tienes configurado)
    setTempChart() {
      const labels = this.measurements.map(m => m.date_and_hour);
      const values = this.measurements.map(m => m.temp);
      this.chartDataTemp = {
        labels,
        datasets: [
          {
            label: 'Temperatura (°C)',
            data: values,
            fill: true,
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255,99,132,0.2)',
            tension: 0.4
          }
        ]
      };
      this.chartOptionsTemp = this.getDefaultOptions();
    }
  
    setHumChart() {
      const labels = this.measurements.map(m => m.date_and_hour);
      const values = this.measurements.map(m => m.humedity);
      this.chartDataHum = {
        labels,
        datasets: [
          {
            label: 'Humedad (%)',
            data: values,
            fill: true,
            borderColor: '#36A2EB',
            backgroundColor: 'rgba(54,162,235,0.2)',
            tension: 0.4
          }
        ]
      };
      this.chartOptionsHum = this.getDefaultOptions();
    }
  
    setAirChart() {
      const labels = this.measurements.map(m => m.date_and_hour);
      const values = this.measurements.map(m => m.air);
      this.chartDataAir = {
        labels,
        datasets: [
          {
            label: 'Calidad del Aire (ppm)',
            data: values,
            fill: true,
            borderColor: '#FFCE56',
            backgroundColor: 'rgba(255,206,86,0.2)',
            tension: 0.4
          }
        ]
      };
      this.chartOptionsAir = this.getDefaultOptions();
    }
  
    setSunChart() {
      const labels = this.measurements.map(m => m.date_and_hour);
      const values = this.measurements.map(m => m.sun);
      this.chartDataSun = {
        labels,
        datasets: [
          {
            label: 'Luz Solar (Lux)',
            data: values,
            fill: true,
            borderColor: '#4BC0C0',
            backgroundColor: 'rgba(75,192,192,0.2)',
            tension: 0.4
          }
        ]
      };
      this.chartOptionsSun = this.getDefaultOptions();
    }
  
    getDefaultOptions() {
      return {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#fff',
              font: {
                size: 14
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#fff',
              maxRotation: 45,
              minRotation: 45,
              autoSkip: true,
              maxTicksLimit: 8
            }
          },
          y: {
            ticks: {
              color: '#fff'
            }
          }
        }
      };
    }
  }
  