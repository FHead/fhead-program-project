var count = 0;
var timerID = null;
var timerRunning = false;
var lastsecond = 0;
var fpscount = 0;
var fpsstring = '--- fps';
var mouseX = 0;
var mouseY = 0;
var BoxPositionX = new Object();
var BoxPositionY = new Object();
var BoxStatus = new Object();

function Initialize()
{
   BoxPositionX['YBox01'] = Math.random() * 1024;
   BoxPositionY['YBox01'] = Math.random() * 768;
   BoxPositionX['YBox02'] = Math.random() * 1024;
   BoxPositionY['YBox02'] = Math.random() * 768;
   BoxPositionX['YBox03'] = Math.random() * 1024;
   BoxPositionY['YBox03'] = Math.random() * 768;
   BoxPositionX['YBox04'] = Math.random() * 1024;
   BoxPositionY['YBox04'] = Math.random() * 768;
   BoxPositionX['YBox05'] = Math.random() * 1024;
   BoxPositionY['YBox05'] = Math.random() * 768;
   BoxPositionX['YBox06'] = Math.random() * 1024;
   BoxPositionY['YBox06'] = Math.random() * 768;
   BoxPositionX['YBox07'] = Math.random() * 1024;
   BoxPositionY['YBox07'] = Math.random() * 768;
   BoxPositionX['YBox08'] = Math.random() * 1024;
   BoxPositionY['YBox08'] = Math.random() * 768;
   BoxPositionX['YBox09'] = Math.random() * 1024;
   BoxPositionY['YBox09'] = Math.random() * 768;
   BoxPositionX['YBox10'] = Math.random() * 1024;
   BoxPositionY['YBox10'] = Math.random() * 768;

   BoxStatus['YBox01'] = Math.random() - 0.5;
   BoxStatus['YBox02'] = Math.random() - 0.5;
   BoxStatus['YBox03'] = Math.random() - 0.5;
   BoxStatus['YBox04'] = Math.random() - 0.5;
   BoxStatus['YBox05'] = Math.random() - 0.5;
   BoxStatus['YBox06'] = Math.random() - 0.5;
   BoxStatus['YBox07'] = Math.random() - 0.5;
   BoxStatus['YBox08'] = Math.random() - 0.5;
   BoxStatus['YBox09'] = Math.random() - 0.5;
   BoxStatus['YBox10'] = Math.random() - 0.5;

   AwayFromBorder();
   
   StartTimer();
}

function StartTimer()
{
   var currenttime = new Date();
   hourstring = currenttime.getHours()
   minutestring = currenttime.getMinutes()
   if(minutestring < 10)
      minutestring = '0' + minutestring;
   secondstring = currenttime.getSeconds()
   if(secondstring < 10)
      secondstring = '0' + secondstring;
   millisecondstring = currenttime.getMilliseconds()
   if(millisecondstring < 100 && millisecondstring >= 10)
      millisecondstring = '0' + millisecondstring
   else if(millisecondstring < 10)
      millisecondstring = '00' + millisecondstring
   datestring = hourstring + ':' + minutestring + ':' + secondstring + '.' + millisecondstring;

   fpscount = fpscount + 1;
   if(currenttime.getSeconds() != lastsecond)
   {
      fpsstring = fpscount.toString() + ' fps, or ' + (1 / fpscount).toString() + ' spf';
      fpscount = 0;
      lastsecond = currenttime.getSeconds();
   }
   
   for(var i in BoxStatus)
   {
      handle = document.getElementById(i)
      
      if(BoxStatus[i] > 0)
         handle.style.backgroundColor = '#FFFF00';
      else
         handle.style.backgroundColor = '#FF00FF';
         
      handle.style.left = BoxPositionX[i] - parseFloat(handle.style.width.replace(/px/ig, '')) / 2;
      handle.style.top = BoxPositionY[i] - parseFloat(handle.style.height.replace(/px/ig, '')) / 2;
   }

   count = count + 1;
   timerRunning = true;
   document.getElementById('MessagePanel').innerHTML = 'Log message panel<br />&nbsp;&nbsp;&nbsp;Current tick: ' + count.toString() + ' ticks<br />&nbsp;&nbsp;&nbsp;Current time: ' + datestring + '<br />&nbsp;&nbsp;&nbsp;Frame rate: ' + fpsstring + '<br />';
   timerID = self.setTimeout("StartTimer()", 1);
}

var IE = document.all ? true : false;
if(!IE)
   document.captureEvents(Event.MOUSEMOVE);

function getMouseXY(event)
{
   mouseX = 0
   mouseY = 0

   if(IE)
   {
      mouseX = event.clientX + document.body.scrollLeft
      mouseY = event.clientY + document.body.scrollTop
   }
   else
   {
      mouseX = event.pageX
      mouseY = event.pageY
   }
}

function mouseclick(event)
{
   getMouseXY(event)
   
   // alert('Mouse click: ' + mouseX.toString() + ', ' + mouseY.toString())
   
   for(var i in BoxStatus)
   {
      handle = document.getElementById(i)
      
      LeftPosition = parseFloat(handle.style.left.replace(/px/ig, ''))
      TopPosition = parseFloat(handle.style.top.replace(/px/ig, ''))
      RightPosition = LeftPosition + parseFloat(handle.style.width.replace(/px/ig, ''))
      BottomPosition = TopPosition + parseFloat(handle.style.height.replace(/px/ig, ''))
      
      // alert(LeftPosition + ' - ' + mouseX + ' - ' + RightPosition + '\n' + TopPosition + ' - ' + mouseY + ' - ' + BottomPosition);
      
      if(mouseX < RightPosition && mouseX > LeftPosition && mouseY > TopPosition && mouseY < BottomPosition)
      {
         if(BoxStatus[i] > 0)
            BoxStatus[i] = 0;
         else
            BoxStatus[i] = 1;
         
         BoxPositionX[i] = Math.random() * 1024;
         BoxPositionY[i] = Math.random() * 768;
         
         AwayFromBorder();
         
         break;
      }
   }
}

function AwayFromBorder()
{
   for(var i in BoxStatus)
   {
      // alert(i)
 
      handle = document.getElementById(i)

      LeftPosition = BoxPositionX[i]
      TopPosition = BoxPositionY[i]
      RightPosition = LeftPosition + parseFloat(handle.style.width.replace(/px/ig, ''))
      BottomPosition = TopPosition + parseFloat(handle.style.height.replace(/px/ig, ''))
      
      Padding = 25;
      if(LeftPosition < Padding)
         LeftPosition = Padding;
      if(RightPosition > 1024 - Padding)
         LeftPosition = 1024 - Padding - (RightPosition - LeftPosition);
      if(TopPosition < Padding)
         TopPosition = Padding;
      if(BottomPosition > 768 - Padding)
         TopPosition = 768 - Padding - (BottomPosition - TopPosition);

      BoxPositionX[i] = LeftPosition;
      BoxPositionY[i] = TopPosition;
   }
}




