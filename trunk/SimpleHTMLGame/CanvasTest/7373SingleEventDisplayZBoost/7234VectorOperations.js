function Normalize(X)
{
   Z = new Array(4);
   var Size = Math.sqrt(X[1] * X[1] + X[2] * X[2] + X[3] * X[3]);
   Z[1] = X[1] / Size;
   Z[2] = X[2] / Size;
   Z[3] = X[3] / Size;
   return Z;
}

function Dot(X, Y)
{
   return X[1] * Y[1] + X[2] * Y[2] + X[3] * Y[3];
}

function Cross(X, Y)
{
   Z = new Array(4);
   Z[1] = X[2] * Y[3] - X[3] * Y[2];
   Z[2] = X[3] * Y[1] - X[1] * Y[3];
   Z[3] = X[1] * Y[2] - X[2] * Y[1];
   return Z;
}

function Subtract(X, Y)
{
   Z = new Array(4);
   Z[0] = X[0] - Y[0];
   Z[1] = X[1] - Y[1];
   Z[2] = X[2] - Y[2];
   Z[3] = X[3] - Y[3];
   return Z;
}

function Add(X, Y)
{
   Z = new Array(4);
   Z[0] = X[0] + Y[0];
   Z[1] = X[1] + Y[1];
   Z[2] = X[2] + Y[2];
   Z[3] = X[3] + Y[3];
   return Z;
}

function MultiplyConst(X, c)
{
   Z = new Array(4);
   Z[0] = X[0] * c;
   Z[1] = X[1] * c;
   Z[2] = X[2] * c;
   Z[3] = X[3] * c;
   return Z;
}

function Negative(X)
{
   Z = new Array(4);
   Z[0] = -X[0];
   Z[1] = -X[1];
   Z[2] = -X[2];
   Z[3] = -X[3];
   return Z;
}

function RotateZ(X, angle)
{
   Z = new Array(4);
   Z[1] = Math.cos(angle) * X[1] + Math.sin(angle) * X[2];
   Z[2] = -Math.sin(angle) * X[1] + Math.cos(angle) * X[2];
   Z[3] = X[3];
   return Z;
}

function RotateX(X, angle)
{
   Z = new Array(4);
   Z[1] = X[1];
   Z[2] = Math.cos(angle) * X[2] + Math.sin(angle) * X[3];
   Z[3] = -Math.sin(angle) * X[2] + Math.cos(angle) * X[3];
   return Z;
}

function RotateY(X, angle)
{
   Z = new Array(4);
   Z[1] = -Math.sin(angle) * X[3] + Math.cos(angle) * X[1];
   Z[2] = X[2];
   Z[3] = Math.cos(angle) * X[3] + Math.sin(angle) * X[1];
   return Z;
}

function Rotate(X, Axis, angle)
{
   if(Axis[1] * Axis[1] + Axis[2] * Axis[2] < 0.000001)
   {
      if(Axis[3] > 0)
         return RotateZ(X, angle);
      else
         return RotateZ(X, -angle);
   }

   var Psi = Math.PI / 2 - GetPhi(Axis);
   var Theta = Math.acos(Axis[3] / GetSize(Axis));
   
   return RotateZ(RotateX(RotateZ(RotateX(RotateZ(X, -Psi), -Theta), angle), Theta), Psi);
}

function GetSize(X)
{
   return Math.sqrt(X[1] * X[1] + X[2] * X[2] + X[3] * X[3]);
}

function GetPhi(X)
{
   var Transverse = Math.sqrt(X[1] * X[1] + X[2] * X[2]);
   if(Transverse < 0.000001)   // phi doesn't matter in this case
      return 0;
   
   var Angle = Math.acos(X[1] / Transverse);
   if(X[2] < 0)
      Angle = -Angle;
      
   return Angle;
}

function GetEta(X)
{
   var MomentumSize = GetSize(X);
   var MomentumZ = X[3];
   
   return 0.5 * Math.log((MomentumSize - MomentumZ) / (MomentumSize + MomentumZ));
}

