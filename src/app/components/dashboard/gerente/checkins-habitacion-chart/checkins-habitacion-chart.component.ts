import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportesService } from 'src/app/services/api/dashboard/reportes.service';

@Component({
  selector: 'app-checkins-habitacion-chart',
  templateUrl: './checkins-habitacion-chart.component.html',
  styleUrls: ['../stylesChart/chart.component.css']
})
export class CheckinsHabitacionChartComponent implements OnInit {

  chart !: Chart<any>
  data !: any;
  labelColor !: string;

  constructor(private service : ReportesService) { }

  ngOnInit(): void {
    this.service.dataCount({'countSpecific': 'checkins'}).subscribe({
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
    const ctx = document.getElementById('checkinChart') as HTMLCanvasElement;

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

    const labels = []
    const data = []
    for(const index in this.data.checkins) {
      labels.push(this.data.checkins[index].nro_habitacion)
      data.push(this.data.checkins[index].checkins)
    }


    this.chart = new Chart(ctx, {
      type: 'bar',
      data:{
        labels: labels,
        datasets: [
          {
            label: "Checkins por habitacion",
            data: data,
            backgroundColor: "#0d6eff",
            borderColor: 'transparent',
            borderWidth: 2.5,
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
            stepSize: 1,
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
