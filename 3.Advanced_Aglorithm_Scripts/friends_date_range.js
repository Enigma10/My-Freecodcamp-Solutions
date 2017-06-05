
function makeFriendlyDates(arr) {
  var date1=arr[0].split('-');
  var date2=arr[1].split('-');
  var dateArr=[];
  for(var i=0;i<3;i++)
    {
      date1[i]=parseInt(date1[i],10);
      date2[i]=parseInt(date2[i],10);
    }
  date1[1]=date1[1]-1;
  date2[1]=date2[1]-1;
  
  var monthName= ['January','February','March',
                   'April','May','June','July','August',
                     'September','Octmber','Novmber','December'];
  
  function dayName(day)
  {
    switch(day)
    {
      case 1:
      case 21:
      case 31:
        return day+'st';
      case 2:
      case 22:
        return day+'nd';
      case 3:
      case 23:
        return day+'rd';
      default:
        return day+'th';
        
    }
 } 
  
if(date1[0]===date2[0]&&date1[1]===date2[1]&&date1[2]===date2[2])
{
  dateArr.push(monthName[date1[1]]+" "+dayName(date1[2])+","+" "+date1[0]);
   return dateArr;
  
}
  else if(date1[0]===date2[0]&&date2[1]-date1[1]>=1)
  {
     dateArr.push(monthName[date1[1]]+" "+dayName(date1[2])+","+" "+date1[0]);
     dateArr.push(monthName[date2[1]]+" "+dayName(date2[2]));
     return dateArr;
  }
  else if(date1[1]===date2[1]&&date1[2]===date2[2]&&date2[0]-date1[0]>=1)
  {
    dateArr.push(monthName[date1[1]]+" "+dayName(date1[2])+","+" "+date1[0]);
    dateArr.push(monthName[date2[1]]+" "+dayName(date2[2])+","+" "+date2[0]);
    return dateArr; 
  }
  else if(date1[1]===date2[1]&&date2[0]-date1[0]>=1)
  {
    dateArr.push(monthName[date1[1]]+" "+dayName(date1[2])+","+" "+date1[0]);
    dateArr.push(monthName[date2[1]]+" "+dayName(date2[2]));
    return dateArr;
  }
  else if(date1[1]==date2[1])
  {
    dateArr.push(monthName[date1[1]]+" "+dayName(date1[2]));
    dateArr.push(dayName(date2[2]));
    return dateArr;
  } 
  else if(date2[0]-date1[0]>1)
  {
    dateArr.push(monthName[date1[1]]+" "+dayName(date1[2])+","+" "+date1[0]);
    dateArr.push(monthName[date2[1]]+" "+dayName(date2[2])+","+" "+date2[0]);
    return dateArr;
  }
 else
{
  dateArr.push(monthName[date1[1]]+" "+dayName(date1[2]));
  dateArr.push(monthName[date2[1]]+" "+dayName(date2[2]));
  return dateArr;
}  
  
  
 // return dayName(date1[2]);
}
makeFriendlyDates(["2022-09-05", "2023-09-04"]);