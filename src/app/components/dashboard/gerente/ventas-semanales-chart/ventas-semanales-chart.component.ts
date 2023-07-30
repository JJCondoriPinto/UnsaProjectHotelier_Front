import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportesService } from 'src/app/services/api/dashboard/reportes.service';

@Component({
  selector: 'app-ventas-semanales-chart',
  templateUrl: './ventas-semanales-chart.component.html',
  styleUrls: ['../stylesChart/chart.component.css']
})
export class VentasSemanalesChartComponent implements OnInit{

  chart !: Chart<any>;
  data !: any
  labelColor !: string;

  constructor(private service : ReportesService) { }

  ngOnInit(): void {
    this.service.dataCount({'countSpecific': 'ventas'}).subscribe({
      next: (data : any) => {
        this.data = data
        this.initChart()
      },
      error: (err : any ) => {
        console.log(err);

      }
    })
  }

  initChart() : void {

    Chart.defaults.maintainAspectRatio = false;
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation : MutationRecord) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            this.labelColor =
            getComputedStyle(document.documentElement).getPropertyValue('--app-bg-text')
            this.chart.options.plugins.legend.labels.color = this.labelColor;
            this.chart.options.scales.x.ticks.color = this.labelColor;
            this.chart.options.scales.y.ticks.color = this.labelColor;

            this.chart.update()
          }
        })
    })

    observer.observe(document.documentElement, {attributes: true})

    this.labelColor =
    getComputedStyle(document.documentElement).getPropertyValue('--app-bg-text')

    const data = []
    for(const index in this.data.ventas) {
      data[this.data.ventas[index].dia] = this.data.ventas[index].ventas
    }

    const ctx = document.getElementById('ventasChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data:{
        labels: ["Lunes", "Martes", "Miercoles", "Jueves", 'Viernes', 'Sabado', 'Domingo'],
        datasets: [
          {
            label: "Ventas por semana actual",
            data: data,
            borderWidth: 2.5,
            backgroundColor: '#dc3545',
            borderColor: '#dc3545',
            tension: 0.4,
            barPercentage: 1,
          },
        ],
    },
    options:{
      plugins: {
        legend: {
          labels: {
            color: this.labelColor,
          },
        },

      },
      scales: {
        y: {
          grid: {},
          ticks: {
            // stepSize: 200,
            color: this.labelColor,
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: this.labelColor,
          }
        },
      },
    }
    });
  }
}
