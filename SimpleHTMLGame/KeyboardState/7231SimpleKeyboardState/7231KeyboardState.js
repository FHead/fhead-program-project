var count = 0;
var timerID = null;
var timerRunning = false;
var lastsecond = 0;
var currentmillisecond = 0;
var lastmillisecond = 0;
var fpscount = 0;
var fpsstring = '--- fps';
var KeyboardStatus = new Object;
var Speed = 400;   // pixels per second

function Initialize()
{
   document.getElementById('Interface').focus()

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

   UpdateKeyStatus();
   
   currentmillisecond = currenttime.getHours() * 3600 * 1000 + currenttime.getMinutes() * 60 * 1000 + currenttime.getSeconds() * 1000 + currenttime.getMilliseconds();
   MoveBox();
   lastmillisecond = currentmillisecond;

   count = count + 1;
   timerRunning = true;
   document.getElementById('TimingPanel').innerHTML = 'Timing panel<br />&nbsp;&nbsp;&nbsp;Current tick: ' + count.toString() + ' ticks<br />&nbsp;&nbsp;&nbsp;Current time: ' + datestring + '<br />&nbsp;&nbsp;&nbsp;Frame rate: ' + fpsstring + '<br />';
   timerID = self.setTimeout("StartTimer()", 1);
}

function UpdateKeyStatus()
{
   messagestring = 'Message panel<br /><br />';

   messagestring = messagestring + 'Currently pressed key ---<br />';
   for(i in KeyboardStatus)
   {
      if(KeyboardStatus[i] > 0)
         messagestring = messagestring + '&nbsp;&nbsp;&nbsp;' + i.toString() + '<br />';
   }
   messagestring = messagestring + '<br />';

   if(KeyboardStatus[90] > 0)
      messagestring = messagestring + 'Shooting~~~<br />';
   if(KeyboardStatus[88] > 0)
      messagestring = messagestring + 'Bombs not implemented yet!!!<br />';
   
   document.getElementById('MessagePanel').innerHTML = messagestring;
}

function KeyDown(event)
{
   var KeyCode = ('which' in event) ? event.which : event.keyCode;
   
   KeyboardStatus[KeyCode] = 1;
}

function KeyUp(event)
{
   var KeyCode = ('which' in event) ? event.which : event.keyCode;

   KeyboardStatus[KeyCode] = 0;
}

function MoveBox()
{
   var tempX = parseFloat(document.getElementById('BBox').style.left.replace(/px/ig, ''))
   var tempY = parseFloat(document.getElementById('BBox').style.top.replace(/px/ig, ''))
   
   var directionX = 0;
   var directionY = 0;
   
   if(KeyboardStatus[103] > 0)   // up-left
   {
      directionX = directionX - Math.sqrt(2);
      directionY = directionY - Math.sqrt(2);
   }
   if(KeyboardStatus[104] > 0 || KeyboardStatus[38])   // up
      directionY = directionY - 1;
   if(KeyboardStatus[105] > 0)   // up-right
   {
      directionX = directionX + Math.sqrt(2);
      directionY = directionY - Math.sqrt(2);
   }
   if(KeyboardStatus[100] > 0 || KeyboardStatus[37] > 0)   // left
      directionX = directionX - 1;
   if(KeyboardStatus[102] > 0 || KeyboardStatus[39] > 0)   // right
      directionX = directionX + 1;
   if(KeyboardStatus[97] > 0)   // down-left
   {
      directionX = directionX - Math.sqrt(2);
      directionY = directionY + Math.sqrt(2);
   }
   if(KeyboardStatus[98] > 0 || KeyboardStatus[40] > 0)   // down
      directionY = directionY + 1;
   if(KeyboardStatus[99] > 0)   // down-right
   {
      directionX = directionX + Math.sqrt(2);
      directionY = directionY + Math.sqrt(2);
   }
   
   length = Math.sqrt(directionX * directionX + directionY * directionY);
   if(length < 0.1)
      return;
   
   directionX = directionX / length;
   directionY = directionY / length;
   
   var CorrectionFactor = 1;
   if(KeyboardStatus[16] > 0)
      CorrectionFactor = CorrectionFactor * 0.4;
   if(KeyboardStatus[17] > 0)
      CorrectionFactor = CorrectionFactor / 0.4;
   
   tempX = tempX + directionX * Speed * CorrectionFactor * (currentmillisecond - lastmillisecond) / 1000;
   tempY = tempY + directionY * Speed * CorrectionFactor * (currentmillisecond - lastmillisecond) / 1000;

   var Padding = 5;
   var BoxWidth = 24;
   var BoxHeight = 24;
   if(tempX < Padding)
      tempX = Padding;
   if(tempX > 1024 - Padding - BoxWidth)
      tempX = 1024 - Padding - BoxWidth;
   if(tempY < Padding)
      tempY = Padding;
   if(tempY > 768 - Padding - BoxHeight)
      tempY = 768 - Padding - BoxHeight;
   
   handle = document.getElementById('BBox');
   handle.style.left = tempX;
   handle.style.top = tempY;
}


