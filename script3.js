var request=new XMLHttpRequest;
request.open("get",'https://restcountries.eu/rest/v2/all',true);

request.send();
request.onload =function()
{
    var countrydata=JSON.parse(this.response);
    // 1. All countries from Asian continent using filter method.

    var asiancountries=countrydata.filter((element)=>{
        if(element.region==="Asia")
        {
            //console.log(element.name);
           
        }
    });
    //2.All countries with population less than 2 lacs using filter function.
    var countrydata=JSON.parse(this.response);
    var countriespoplessthan2=countrydata.filter((element)=>{
           if(element.population < 200000)
           {
               console.log(element.name,element.population);
           }
           
      
   });

   //3.Details like name,capital,flag using forEach function.

   var detailsofcountries = countrydata.forEach((element)=>{
console.log(element.name,element.capital,element.flag);
   })

   //4.Total population of countries using reduce function.

  
   var totalpopulation=countrydata.reduce((acc,element)=>
   { return acc+element.population;
       },0);
   console.log(totalpopulation);
   

//5.  countries which uses US Dollars as currency.
for(var i in countrydata)
{

if(countrydata[i].currencies[0].name==="United States dollar")
{
    console.log(countrydata[i].name);
}
}




};
  
