var count=0;

function hanoi(n,  p1, p2, p3)
{  
     count++;
     if (n==1) //遞迴出口 
            console.log("套環從 "+p1+" 移到 "+ p3);
     else
     {  
            hanoi(n-1, p1, p3, p2);
            console.log("套環從 "+p1+" 移到 "+ p3);
            hanoi(n-1, p2, p1, p3);
      }
 }

 hanoi(3,"杆子1","杆子2","杆子3");
 console.log(count)