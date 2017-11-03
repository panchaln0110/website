
function checkIndex()
{
    var i=document.location.href.split('?')[1].split('=')[1];
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../books.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
               var jsonData=JSON.parse(xhttp.responseText);
                              
                       var obj=jsonData.allProducts[i];                      
                       var imgPath=document.getElementById("imgDis");    
                       var dc=document.getElementById("desc");
                       var pr=document.getElementById("price");
                       var sa=document.getElementById("stockAvailability");
                       var ni=document.getElementById("numItems");
                       var sc=document.getElementById("shipCharge");
                       var t=document.getElementById("title");    
                       
                       imgPath.src=obj.image_path;
                       dc.innerHTML=obj.product_description;
                       pr.innerHTML=obj.price;
                       sa.innerHTML=obj.stock_availability;
                       ni.innerHTML=obj.no_of_items;
                       sc.innerHTML=obj.shipping_details;
                       t.innerHTML=obj.book_title;  
    
            }
        localStorage.setItem("id",i);

    };
};

