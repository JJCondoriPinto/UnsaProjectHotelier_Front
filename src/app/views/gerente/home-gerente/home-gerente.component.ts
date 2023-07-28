import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home-gerente',
  templateUrl: './home-gerente.component.html',
  styleUrls: ['./home-gerente.component.css']
})
export class HomeGerenteComponent implements OnInit{

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81], label: 'Series A'},
    {data: [28, 48, 40, 19], label: 'Series B'}
  ];

  ngOnInit(): void {

    const ctx = document.getElementById('myChart');



  }

}
