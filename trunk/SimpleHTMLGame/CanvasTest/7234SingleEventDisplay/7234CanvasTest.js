var count = 0;
var timerID = null;
var timerRunning = false;
var LastSecond = 0;
var CurrentMillisecond = 0;
var LastMillisecond = 0;
var fpscount = 0;
var fpsstring = '--- fps';
var KeyboardStatus = new Object;
// var UseCanvasOne = 1;
var ParticleList = new Array();
var ReferenceTime;
var RenderMessageString = '';
var MoveSpeed = 0.003;   // to be tuned
var Balls = new Array();   // holds rendering information
var MouseX = 0;
var MouseY = 0;
var FocusParticle = -1;
var InitialCircleSize = 2;

var UserPosition = new Array(4);
var UserUp = new Array(4);
var TimeSlowDown = 1000000000 / 2.5;   // real 1 ns is slowed down to O(1) second
var SpeedOfLight = 299792458;   // m/s
var ViewDistance = 5;
var MaximumDistance = 1000;
var ViewWidth = 1.024 * 2.5;
var ViewHeight = 0.768 * 2.5;

Object.prototype.clone = function() {
  var newObj = (this instanceof Array) ? [] : {};
  for (i in this) {
    if (i == 'clone') continue;
    if (this[i] && typeof this[i] == "object") {
      newObj[i] = this[i].clone();
    } else newObj[i] = this[i]
  } return newObj;
};

var IE = document.all ? true : false;
if(!IE)
   document.captureEvents(Event.MOUSEMOVE);

function Initialize()
{
   document.getElementById('Interface').focus()

   var CurrentTime = new Date();
   ReferenceTime = CurrentTime.getTime();

   UserPosition[0] = 0;
   UserPosition[1] = 0;
   UserPosition[2] = -150;
   UserPosition[3] = 0;
   
   UserUp[0] = 0;
   UserUp[1] = 1;
   UserUp[2] = 0;
   UserUp[3] = 0;

   KeyboardStatus[33] = 0;
   KeyboardStatus[34] = 0;
   KeyboardStatus[35] = 0;
   KeyboardStatus[36] = 0;
 
   // InitializeParticlesTTbar();
   InitializeParticlesZTauTau();
   CreateParticleNames();

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

   CurrentMillisecond = CurrentTime.getTime();

   UpdateKeyStatus();
   CalculateLocation(ReferenceTime, CurrentMillisecond);
   UpdateFocusParticle();
   Render(CanvasHandle);
   MoveUser(LastMillisecond, CurrentMillisecond);

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
         messagestring = messagestring + '&nbsp;&nbsp;' + i.toString() + '';
   }
   messagestring = messagestring + '<br /><br />';
   
   messagestring = messagestring + RenderMessageString + '<br />';

   document.getElementById('MessagePanel').innerHTML = messagestring;
}

function KeyDown(event)
{
   var KeyCode = ('which' in event) ? event.which : event.keyCode;
   
   KeyboardStatus[KeyCode] = 1;
   
   if(KeyCode == 82)
   {
      var CurrentTime = new Date();
      ReferenceTime = CurrentTime.getTime();
   }
}

function KeyUp(event)
{
   var KeyCode = ('which' in event) ? event.which : event.keyCode;

   KeyboardStatus[KeyCode] = 0;
}

function CalculateLocation(ReferenceTime, CurrentMilliSecond)
{
   var Time = (CurrentMilliSecond - ReferenceTime) / 1000;   // in units of seconds (real), in units of seconds/SlowDown (program); if SlowDown = 1e9, then this number is in ns

   var FrontDirection = Normalize(Negative(UserPosition));
   UserUp = Normalize(UserUp);   // update "up" direction so that it's perpendicular to front (TODO)
   var UserRight = Normalize(Cross(FrontDirection, UserUp));
   var UpperLeftCorner = Add(UserPosition, Add(MultiplyConst(FrontDirection, ViewDistance), Subtract(MultiplyConst(UserUp, ViewHeight / 2), MultiplyConst(UserRight, ViewWidth / 2))));

   Balls.length = 0;
   
   var PythiaUnitConversion = 0.01;   // pythia unit to unit of this program
   for(ParticleIndex in ParticleList)
   {
      if(isNaN(ParticleIndex) == true)
         continue;
   
      Particle = ParticleList[ParticleIndex];

      if(Time > Particle.Time * PythiaUnitConversion / SpeedOfLight * TimeSlowDown)   // died already
         continue;
      if(Time < Particle.V0[0] * PythiaUnitConversion / SpeedOfLight * TimeSlowDown)   // not born yet
         continue;

      var ElapsedTime = Time / TimeSlowDown - Particle.V0[0] * PythiaUnitConversion / SpeedOfLight;
      
      var Beta = MultiplyConst(Particle.P, 1.0 / (Particle.P[0] + 0.000001));
      
      var CurrentLocation = Add(MultiplyConst(Particle.V0, PythiaUnitConversion), MultiplyConst(Beta, SpeedOfLight * ElapsedTime));
      var RelativeDistance = Subtract(CurrentLocation, UserPosition);
      var DistanceToViewer = Math.sqrt(Dot(RelativeDistance, RelativeDistance));
      var SignedDirection = Dot(RelativeDistance, FrontDirection);

      if(SignedDirection < 0)
         continue;
      if(DistanceToViewer > MaximumDistance)
         continue;
      if(DistanceToViewer < ViewDistance)
         continue;
      
      var Lambda = Dot(FrontDirection, FrontDirection) * ViewDistance / Dot(RelativeDistance, FrontDirection);   // distance to intersection point divided by distance to particle
      var IntersectionPoint = Add(MultiplyConst(RelativeDistance, Lambda), UserPosition);
      var RelativePoint = Subtract(IntersectionPoint, UpperLeftCorner);

      var XDistance = Dot(RelativePoint, UserRight);
      var YDistance = -Dot(RelativePoint, UserUp);

      var NewObject = new Object();
      NewObject.Distance = DistanceToViewer;
      NewObject.X = XDistance / ViewWidth * 1024;
      NewObject.Y = YDistance / ViewHeight * 768;
      NewObject.Index = ParticleIndex;
      Balls.push(NewObject.clone());
   }
   Balls.sort(SortRenderObjects);
}

function Render(CanvasHandle)
{
   CanvasHandle.fillStyle = 'rgb(0, 0, 0)';
   CanvasHandle.fillRect(0, 0, 1024, 768);
   
   for(i in Balls)
   {
      if(isNaN(i) == true)
         continue;
         
      var CircleSize = InitialCircleSize * 100.0 / Balls[i].Distance;

      if(Balls[i].Index == FocusParticle)
         CanvasHandle.fillStyle = '#FFC0C0';
      else
         CanvasHandle.fillStyle = '#C0C0FF';
      CanvasHandle.beginPath();
      CanvasHandle.arc(Balls[i].X, Balls[i].Y, CircleSize * 1.1, 0, Math.PI * 2, true);
      CanvasHandle.closePath();
      CanvasHandle.fill();
      if(Balls[i].Index == FocusParticle)
         CanvasHandle.fillStyle = '#FF7070';
      else
      {
         var Energy2 = ParticleList[Balls[i].Index].P[1] * ParticleList[Balls[i].Index].P[1] + ParticleList[Balls[i].Index].P[2] * ParticleList[Balls[i].Index].P[2];
         if(Energy2 < 0.01)
            CanvasHandle.fillStyle = '#0000FF';
         else if(Energy2 > 10000)
            CanvasHandle.fillStyle = '#FFFFFF';
         else
         {
            var LogEnergy = Math.log(Energy2) - Math.log(2);
            var ColorValue = Math.floor(255 * (LogEnergy + Math.LN10) / (3 * Math.LN10));
            CanvasHandle.fillStyle = 'rgb(' + ColorValue + ', ' + ColorValue + ', 255)';
         }
      }
      CanvasHandle.beginPath();
      CanvasHandle.arc(Balls[i].X, Balls[i].Y, CircleSize, 0, Math.PI * 2, true);
      CanvasHandle.closePath();
      CanvasHandle.fill();
   }
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

function MoveUser(time1, time2)
{
   var FrontDirection = Normalize(Negative(UserPosition));
   var UserRight = Normalize(Cross(FrontDirection, UserUp));

   var CorrectionFactor = 1;
   if(KeyboardStatus[16] > 0)
      CorrectionFactor = CorrectionFactor * 0.4;
   if(KeyboardStatus[17] > 0)
      CorrectionFactor = CorrectionFactor / 0.4;
   
   RenderMessageString = '';
   RenderMessageString = RenderMessageString + 'UserPosition = (' + UserPosition[1].toFixed(2) + ', ' + UserPosition[2].toFixed(2) + ', ' + UserPosition[3].toFixed(2) + ')<br />';
   RenderMessageString = RenderMessageString + 'UserUp = (' + UserUp[1].toFixed(3) + ', ' + UserUp[2].toFixed(3) + ', ' + UserUp[3].toFixed(3) + ')<br />';
   RenderMessageString = RenderMessageString + 'UserRight = (' + UserRight[1].toFixed(3) + ', ' + UserRight[2].toFixed(3) + ', ' + UserRight[3].toFixed(3) + ')<br />';

   // move forward/backward
   if(KeyboardStatus[33] > 0 && KeyboardStatus[34] == 0 && GetSize(UserPosition) > ViewDistance * 10)
      UserPosition = Add(UserPosition, MultiplyConst(FrontDirection, (time2 - time1) * MoveSpeed * CorrectionFactor * 50));
   if(KeyboardStatus[34] > 0 && KeyboardStatus[33] == 0 && GetSize(UserPosition) < ViewDistance * 100)
      UserPosition = Subtract(UserPosition, MultiplyConst(FrontDirection, (time2 - time1) * MoveSpeed * CorrectionFactor * 50));
      
   // rotate viewport if needed
   if(KeyboardStatus[35] > 0 && KeyboardStatus[36] == 0)
      UserUp = Rotate(UserUp, FrontDirection, (time2 - time1) * MoveSpeed * CorrectionFactor);
   if(KeyboardStatus[36] > 0 && KeyboardStatus[35] == 0)
      UserUp = Rotate(UserUp, FrontDirection, -(time2 - time1) * MoveSpeed * CorrectionFactor);

   // move around if needed
   var directionX = 0;
   var directionY = 0;
   
   if(KeyboardStatus[38] > 0)   // up
      directionY = directionY - 1;
   if(KeyboardStatus[37] > 0)   // left
      directionX = directionX - 1;
   if(KeyboardStatus[39] > 0)   // right
      directionX = directionX + 1;
   if(KeyboardStatus[40] > 0)   // down
      directionY = directionY + 1;
   
   if(directionX < 0.1 && directionX > -0.1)
      directionX = 0;
   if(directionY < 0.1 && directionY > -0.1)
      directionY = 0;

   length = Math.sqrt(directionX * directionX + directionY * directionY);
   if(length < 0.1)   // no movement
      return;
   
   directionX = directionX / length;
   directionY = -directionY / length;

   var Direction = Add(MultiplyConst(UserRight, directionX), MultiplyConst(UserUp, directionY));
   var Axis = Normalize(Cross(Direction, FrontDirection));
      
   var Angle = (time2 - time1) * MoveSpeed * CorrectionFactor * 100 / GetSize(UserPosition);

   RenderMessageString = RenderMessageString + 'Axis = (' + Axis[1].toFixed(3) + ', ' + Axis[2].toFixed(3) + ', ' + Axis[3].toFixed(3) + ')<br />';
   RenderMessageString = RenderMessageString + 'Dot products between the two: ' + Dot(UserPosition, UserUp).toFixed(2) + ', ' + Dot(UserPosition, UserRight).toFixed(2) + ', ' + Dot(UserRight, UserUp).toFixed(2) + '<br />';
   
   var UserPositionNew = Rotate(UserPosition, Axis, Angle);
   var UserUpNew = Rotate(UserUp, Axis, Angle);
   
   if(isNaN(UserUpNew[1]) == true)
   {
      var Psi = Math.PI / 2 - GetPhi(Axis);
      var Theta = Math.acos(Axis[3] / GetSize(Axis));
      alert(RenderMessageString + '\n' + 'Psi = ' + Psi.toFixed(3) + '\n' + 'Theta = ' + Theta.toFixed(3));
   }
   
   // potentially cover issues up
   UserPosition = UserPositionNew;
   UserUp = Normalize(Subtract(UserUpNew, MultiplyConst(UserPositionNew, Dot(UserUpNew, UserPositionNew) / Dot(UserPositionNew, UserPositionNew))));
}

function SortRenderObjects(a, b)
{
   return b.Distance - a.Distance;
}
   
function UpdateMouseXY(event)
{
   if(IE)
   {
      MouseX = event.clientX + document.body.scrollLeft;
      MouseY = event.clientY + document.body.scrollTop;
   }
   else
   {
      MouseX = event.pageX;
      MouseY = event.pageY;
   }
}

function UpdateFocusParticle()
{
   // FocusParticle = -1;
   
   for(var i = Balls.length - 1; i >= 0; i = i - 1)
   {
      var DeltaX = MouseX - Balls[i].X;
      var DeltaY = MouseY - Balls[i].Y;
      var DeltaR2 = DeltaX * DeltaX + DeltaY * DeltaY;
      var CircleSize = InitialCircleSize * 100.0 / Balls[i].Distance * 1.25;
      if(CircleSize < 5)
         CircleSize = 5;
   
      if(DeltaR2 < CircleSize * CircleSize)
      {
         FocusParticle = Balls[i].Index;
         break;
      }
   }
   
   if(FocusParticle >= 0)
   {
      var ParticlePanelMessage = '';
      var Index = FocusParticle;

      ParticlePanelMessage = ParticlePanelMessage + 'Selected particle (index = ' + Index + ')<br />';
      ParticlePanelMessage = ParticlePanelMessage + '&nbsp;&nbsp;&nbsp;PDG ID = ' + ParticleList[Index].PDGID;
      if(ParticleList[Index].PDGID.toString() in ParticleName)
         ParticlePanelMessage = ParticlePanelMessage + ' (' + ParticleName[ParticleList[Index].PDGID.toString()] + ')';
      ParticlePanelMessage = ParticlePanelMessage + '<br />';
      ParticlePanelMessage = ParticlePanelMessage + '&nbsp;&nbsp;&nbsp;Energy = ' + ParticleList[Index].P[0].toFixed(2) + ' GeV<br />';
      ParticlePanelMessage = ParticlePanelMessage + '&nbsp;&nbsp;&nbsp;PT = ' + Math.sqrt(ParticleList[Index].P[1] * ParticleList[Index].P[1] + ParticleList[Index].P[2] * ParticleList[Index].P[2]).toFixed(2) + ' GeV/c<br />';
      ParticlePanelMessage = ParticlePanelMessage + '&nbsp;&nbsp;&nbsp;Momentum = (' + ParticleList[Index].P[1].toFixed(2) + ', ' +  + ParticleList[Index].P[2].toFixed(2) + ', ' + ParticleList[Index].P[3].toFixed(2) + ') (GeV/c)<br />';
      
      document.getElementById('ParticlePanel').innerHTML = ParticlePanelMessage;
   }
}



