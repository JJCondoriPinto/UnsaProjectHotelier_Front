import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ReportesService } from 'src/app/services/api/dashboard/reportes.service';

@Component({
  selector: 'app-huespedes-nacionalidad-chart',
  templateUrl: './huespedes-nacionalidad-chart.component.html',
  styleUrls: ['../stylesChart/chart.component.css']
})
export class HuespedesNacionalidadChartComponent implements OnInit {

  chart !: Chart<any>;
  labelColor !: string;
  data !: any;

  constructor(private service : ReportesService) { }

  ngOnInit(): void {
    this.service.dataCount({'countSpecific': 'huespedes'}).subscribe({
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
    const ctx = document.getElementById('huespedesChart') as HTMLCanvasElement;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation : MutationRecord) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const bgColor =
          getComputedStyle(document.documentElement).getPropertyValue('--app-bg-form')
          this.chart.data.datasets[0].borderColor = bgColor;
          const labelColor =
          getComputedStyle(document.documentElement).getPropertyValue('--app-bg-text')
          this.chart.options.plugins.legend.labels.color = labelColor;
          this.chart.update()
        }
      })
    })

    observer.observe(document.documentElement, {attributes: true})

    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--app-bg-form');
    const labelColor =
    getComputedStyle(document.documentElement).getPropertyValue('--app-bg-text')

    const labels = []
    const data = []
    for(const index in this.data.huespedes) {
      labels.push(this.data.huespedes[index].nacionalidad)
      data.push(this.data.huespedes[index].huespedes)
    }

    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data:{
        labels: labels,
        datasets: [{
          label: "Huepedes",
          borderColor: bgColor,
          data: data,
        }]
    },
    options:{
      plugins: {
        legend: {
          labels: {
            color: labelColor
          }
        }
      }
    }
    });
  }

}

