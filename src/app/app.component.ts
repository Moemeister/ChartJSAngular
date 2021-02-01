import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'charts';
  pieChart: any;
  data = [{
    data:[80,30],
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
      position: 'top',
      align: 'middle',
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

          let percentage = Math.round((value/sum)*100).toFixed(2) + '%'
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
          size: 40,
        }
      },
      
    }
  };

  ngOnInit() {  
      this.pieChart = new Chart('pieChartCanvas', {  
        type: 'doughnut',  
        data: {
          datasets: this.data,
          labels: ['Presente', 'Ausente'],
        },
        
        plugins: [ChartDataLabels],
        options: this.options
      //   data: {  
      //     labels: [
      //       'Presente',
      //       'Ausente'
      //     ],  
      //     datasets: [  
      //       {  
      //         data: [30, 50],  
      //         borderColor: '#3cba9f',  
      //         backgroundColor: [  
      //           "#3cb371",  
      //           "#0000FF"
      //         ],  
      //         fill: true  
      //       }  
      //     ]  
      //   },  
      //   options: {  
      //     legend: {  
      //       display: true  
      //     },  
      //     scales: {  
      //       xAxes: [{  
      //         display: false  
      //       }],  
      //       yAxes: [{  
      //         display: false 
      //       }],  
      //     }  
      //   }  
      });  
      
  }
}
