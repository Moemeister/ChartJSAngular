import { Component, Input, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Accion } from 'src/app/_model/accion';
import { AccionsService } from 'src/app/_service/accion.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  accTotal: number;
  accPresente: number;

  codemi: string;
  fecha: string;

  title = 'charts';
  pieChart: any;
  data = [{
    data:[50,30],
    backgroundColor: [  
      "#3cb371",  
      "#0000FF"
    ],  
  }];
  
  options = {
    tooltips: {
      enabled: true
    },
    legend: {
      display: true,
      //position: 'top',
      //align: 'middle',
      labels: {
        fontSize: 40,
        padding: 30,
      },
     
    },
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        formatter: (value, ctx) => {
          let datasets = ctx.chart.data.datasets[0].data;
          let sum = 0;

          datasets.map((data)=> {
            sum += data;
          });

          let percentage = ((value/sum)*100).toFixed(2) + '%'
          return percentage;

        //  if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
        //   ///////////////////////////reduce(acumulador = la suma de a y b, valor actual = 0)
        //    let sum = datasets[0].data.reduce((a, b) => a + b, 0);
        //    let percentage = Math.round((value / sum) * 100) + '%';
        //    console.log(percentage);
        //    return percentage;
        //  }
        },
        color: '#fff',
        font: {
          size: 30,
        }
      },
      
    }
  }

  constructor(private accionsService: AccionsService){ }
  ngOnInit() {

     this.accionsService.getAccionesTotales('104', '25/02/2021').subscribe(data => {
       this.accTotal = data;
       console.log(this.accTotal);

       this.accionsService.getAccPresentes('104','25/02/2021').subscribe(data => {
         this.accPresente = data;
         console.log(this.accPresente);

         this.pieChart = new Chart('pieChartCanvas', {  
          type: 'doughnut',  
          data: {
            datasets: [
              {
                data: [this.accPresente,this.accTotal-this.accPresente],
                backgroundColor: [  
                  "#3cb371",  
                  "#0000FF"
                ],
              }
            ],
            labels: ['Presente', 'Ausente'],
          },
          plugins: [ChartDataLabels],
          options: this.options
        }); 
       })


       
       
      });
    
    
     

     

  }

}
