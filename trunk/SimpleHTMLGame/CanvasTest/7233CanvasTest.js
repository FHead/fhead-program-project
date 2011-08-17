var count = 0;
var timerID = null;
var timerRunning = false;
var LastSecond = 0;
var CurrentMillisecond = 0;
var LastMillisecond = 0;
var fpscount = 0;
var fpsstring = '--- fps';
var KeyboardStatus = new Object;
var UseCanvasOne = 1;

function Initialize()
{
   document.getElementById('Interface').focus()

   StartTimer();
}

function StartTimer()
{
   var CurrentTime = new Date();
   var DateString = GetTimeString(CurrentTime);

   fpscount = fpscount + 1;
   if(CurrentTime.getSeconds() != LastSecond)
   {
      fpsstring = fpscount.toString() + ' fps, or ' + (1 / fpscount).toString() + ' spf';
      fpscount = 0;
      LastSecond = CurrentTime.getSeconds();
   }

   var CanvasHandle = document.getElementById('MainCanvas1').getContext('2d');
   /*
   if(UseCanvasOne > 0)
      CanvasHandle = document.getElementById('MainCanvas1').getContext('2d');
   else
      CanvasHandle = document.getElementById('MainCanvas2').getContext('2d');
   */

   Currentmillisecond = CurrentTime.getTime();

   UpdateKeyStatus();
   Render(LastMillisecond, CurrentMillisecond, CanvasHandle);

   /*
   if(UseCanvasOne > 0)
   {
      document.getElementById('MainCanvas1').style.visibility = 'visible';
      document.getElementById('MainCanvas2').style.visibility = 'hidden';
      UseCanvasOne = -1;
   }
   else
   {
      document.getElementById('MainCanvas2').style.visibility = 'visible';
      document.getElementById('MainCanvas1').style.visibility = 'hidden';
      UseCanvasOne = 1;
   }
   */
   
   LastMillisecond = CurrentMillisecond;

   count = count + 1;
   timerRunning = true;
   document.getElementById('TimingPanel').innerHTML = 'Timing panel<br />&nbsp;&nbsp;&nbsp;Current tick: ' + count.toString() + ' ticks<br />&nbsp;&nbsp;&nbsp;Current time: ' + DateString + '<br />&nbsp;&nbsp;&nbsp;Frame rate: ' + fpsstring + '<br />';
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

function Render(PreviousTime, CurrentTime, CanvasHandle)
{
}

function GetTimeString(currenttime)
{
   hourstring = currenttime.getHours();
   minutestring = currenttime.getMinutes();
   if(minutestring < 10)
      minutestring = '0' + minutestring;
   secondstring = currenttime.getSeconds();
   if(secondstring < 10)
      secondstring = '0' + secondstring;
   millisecondstring = currenttime.getMilliseconds();
   if(millisecondstring < 100 && millisecondstring >= 10)
      millisecondstring = '0' + millisecondstring;
   else if(millisecondstring < 10)
      millisecondstring = '00' + millisecondstring;
   datestring = hourstring + ':' + minutestring + ':' + secondstring + '.' + millisecondstring;

   return datestring;
}
