var CurrentPage = "";
var Pages = new Array();

Object.prototype.Clone = function() {
   var newObj = (this instanceof Array) ? [] : {};
   for (i in this) {
      if (i == 'clone') continue;
      if (this[i] && typeof this[i] == "object") {
         newObj[i] = this[i].clone();
      } else newObj[i] = this[i]
   } return newObj;
};

function InitializePages()
{
   var NewObject = new Object();

   NewObject.LeftDestination = "";
   NewObject.RightDestination = "";
   NewObject.DownDestination = "murmur1";
   NewObject.UpDestination = "";
   NewObject.Name = "title-slide";
   Pages[Pages.length] = NewObject.Clone();

   NewObject.LeftDestination = "";
   NewObject.RightDestination = "";
   NewObject.DownDestination = "murmur2";
   NewObject.UpDestination = "title-slide";
   NewObject.Name = "murmur1";
   Pages[Pages.length] = NewObject.Clone();

   NewObject.LeftDestination = "";
   NewObject.RightDestination = "";
   NewObject.DownDestination = "picture-slide";
   NewObject.UpDestination = "murmur1";
   NewObject.Name = "murmur2";
   Pages[Pages.length] = NewObject.Clone();

   NewObject.LeftDestination = "";
   NewObject.RightDestination = "";
   NewObject.DownDestination = "picture-slide2";
   NewObject.UpDestination = "murmur2";
   NewObject.Name = "picture-slide";
   Pages[Pages.length] = NewObject.Clone();

   NewObject.LeftDestination = "";
   NewObject.RightDestination = "";
   NewObject.DownDestination = "murmur3";
   NewObject.UpDestination = "picture-slide";
   NewObject.Name = "picture-slide2";
   Pages[Pages.length] = NewObject.Clone();

   NewObject.LeftDestination = "";
   NewObject.RightDestination = "";
   NewObject.DownDestination = "";
   NewObject.UpDestination = "picture-slide2";
   NewObject.Name = "murmur3";
   Pages[Pages.length] = NewObject.Clone();

   for(var i = 0; i < Pages.length; i++)
   {
      Pages[i].PageNumber = i + 1;
      var handle = document.getElementById(Pages[i].Name);
      handle.innerHTML = handle.innerHTML + '<p class="page-number">' + (i + 1).toString() + '</p>';
      handle.style.visibility = 'hidden';
      handle.style.position = 'absolute';
   }

   CurrentPage = Pages[0].Name;
   document.getElementById(CurrentPage).style.visibility = 'visible';
}




