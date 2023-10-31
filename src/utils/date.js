const date = new Date();

export const getDate = () => {
   const weekDay = getDay();
   const day  = date.getDate();
   const month = getMonth();
   const years = date.getFullYear();
   
   return weekDay +', '+ day + ' ' + month + ' ' + years

};

const getDay = () => {
    const day = date.getDay();
    const daysArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    return daysArr[day];
}

const getMonth= () => {
    const month = date.getMonth();
    const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return monthArr[month];
}