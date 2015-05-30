
function Initialize()
{
   InitializePages();

   SilentAllPages();

   if(CurrentPage != "")
      CurrentPage = Pages[0].Name;

   document.getElementById(CurrentPage).style.visibility = 'visible';
}

function KeyDown(event)
{
   var KeyCode = ('which' in event) ? event.which : event.keyCode;

   var PageIndex = -1;
   for(var i = 0; i < Pages.length; i++)
      if(Pages[i].Name == CurrentPage)
         PageIndex = i;
   
   if(PageIndex == -1)
   {
      SilentAllPages();
      CurrentPage = Pages[0].Name;
      PageIndex = 0;
      document.getElementById(CurrentPage).style.visibility = 'visible';
   }
   
   var handle = document.getElementById(CurrentPage);
   var NextPage = "";

   if(KeyCode == 83 || KeyCode == 40 || KeyCode == 34)   // 's', down, page down
   {
      if(Pages[PageIndex].DownDestination != "")
         NextPage = Pages[PageIndex].DownDestination;
   }
   else if(KeyCode == 87 || KeyCode == 38 || KeyCode == 33)   // 'w', up, page up
   {
      if(Pages[PageIndex].UpDestination != "")
         NextPage = Pages[PageIndex].UpDestination;
   }
   else if(KeyCode == 65 || KeyCode == 37)   // 'a', left
   {
      if(Pages[PageIndex].LeftDestination != "")
         NextPage = Pages[PageIndex].LeftDestination;
   }
   else if(KeyCode == 39 || KeyCode == 68)   // 'd', right
   {
      if(Pages[PageIndex].RightDestination != "")
         NextPage = Pages[PageIndex].RightDestination;
   }
         
   if(NextPage != "")
   {
      document.getElementById(CurrentPage).style.visibility = 'hidden';
      document.getElementById(NextPage).style.visibility = 'visible';
      CurrentPage = NextPage;
   }
}

function SilentAllPages()
{
   for(var i = 0; i < Pages.length; i++)
      document.getElementById(Pages[i].Name).style.visibilirt = 'hidden';
}




