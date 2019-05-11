import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  temp:any='';
  weatherData:any;
  hasData:boolean=false; 
  hasError:boolean=false; 
  API_KEY='51692a5857fac0f32a289d1532ef1bfd';
  BASE_URL='https://api.openweathermap.org/data/2.5/';
weather={};
error:any;
  url:any= this.BASE_URL+'/weather?q=bengaluru&units=metric&appid='+this.API_KEY;
  
  constructor(private httpClient: HttpClient){}

  getWeatherData(city){
    console.log('city=',city);
    this.httpClient.get(this.BASE_URL+'/weather?q='+city+'&units=metric&appid='+this.API_KEY).subscribe((response)=>{
      console.log("response:",JSON.stringify(response));
      this.weather=response;
      if(this.weather["cod"]=='200'){
        this.hasData=true; 
      }
      else{
        this.hasData=false;
        //this.hasError=true;
      }
      
    },
    (error) => {
      console.log(JSON.stringify(error))
     this.error = error;
     this.hasError=true;
     this.hasData=false;

    }
  );
  }
}
