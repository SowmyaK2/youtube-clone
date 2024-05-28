export const API_KEY = 'AIzaSyBcFh7yD00gW7ExCkb0lj3SZ-cVJi9Mq3g';

export const value_converter =(value)=>{
    if(value >= 1000000){
        return Math.floor(value/1000000) +"M";
    }else if(value >= 1000){
        return Math.floor(value/1000) +"k"; 
    }
    else{
        return value;
    }
}