function loadDoc()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../books.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
               var jsonData=JSON.parse(xhttp.responseText);
               var i=0;
                var counter = 0;          
                   while(counter<6)
                   {           
                       var obj=jsonData.allProducts[i];
                       document.getElementById("i"+counter).src=obj.image_path;
                       counter++;
                       i++;
                   }
            }

    };
}

