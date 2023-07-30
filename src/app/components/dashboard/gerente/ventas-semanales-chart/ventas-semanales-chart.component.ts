import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ventas-semanales-chart',
  templateUrl: './ventas-semanales-chart.component.html',
  styleUrls: ['../stylesChart/chart.component.css']
})
export class VentasSemanalesChartComponent implements OnInit{

  chart !: Chart<any>;
  labelColor !: string;

  ngOnInit(): void {
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

    const ctx = document.getElementById('ventasChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data:{
        labels: ["January", "February", "March", "April", 'May', 'June', 'August', 'September'],
        datasets: [
          {
            label: "Lost",
            data: [45, 25, 40, 20, 60, 20, 35, 25],
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
            stepSize: 15,
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
