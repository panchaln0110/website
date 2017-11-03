function myList()
{
    var i=(localStorage.getItem("id"));
    var fnm=(localStorage.getItem("fName"));
    var lnm=(localStorage.getItem("lName"));
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../books.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function()
    {
        
        if(this.readyState == 4 && this.status == 200)
        {
               var jsonData=JSON.parse(xhttp.responseText);
                              
                       var obj=jsonData.allProducts[i];           
    
                       var imgPath=document.getElementById("img_buy");
                       var t=document.getElementById("title"); 
                       var fstn=document.getElementById("fn");
                       var lstn=document.getElementById("ln");
                      
                       imgPath.src=obj.image_path;
                       fstn.innerHTML=fnm + " " + lnm;
                       t.innerHTML=obj.book_title;                        
            }

    };
    
   
};