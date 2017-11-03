function bookBuy()
{
    var i=(localStorage.getItem("id"));
////    var i=document.location.href.split('?')[1].split('=')[1];
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
                       var pr=document.getElementById("price");
                       var sc=document.getElementById("shipCharge");
                       
                       imgPath.src=obj.image_path;
                       pr.innerHTML=obj.price;
                       sc.innerHTML=obj.shipping_details;
                       t.innerHTML=obj.book_title;                        
            }

    };
    
   
};


    



function validateform()
{
var fName=document.getElementById("fname");
var lName=document.getElementById("lname");
var c=document.getElementById("copy");
var ec=document.getElementById("ecopy");
var eadd=document.getElementById("emailadd");
var ad=document.getElementById("addr");
var st=document.getElementById("state");
var p=document.getElementById("ph");
var ferr=document.getElementById("ferr");
var lerr=document.getElementById("lerr");
var berr=document.getElementById("berr");
var serr=document.getElementById("serr");
var perr=document.getElementById("perr");
var sterr=document.getElementById("sterr");
var eerr=document.getElementById("eerr");
    
    if(fName.value==null || fName.value==" " || !isNaN(fName.value))             //Checks FirstName
        {
            fname.style.border="2px solid red";
           ferr.innerHTML="Please provide a valid FirstName";
           // error.innerHTML="Invalid input";
        }
    else
       {
           localStorage.setItem("fName",fName.value);
       }
    if(lName.value==null || lName.value==" " || !isNaN(lName.value))                 //Checks LastName
        {
            lname.style.border="2px solid red";
            lerr.innerHTML="please provide a valid LastName";
        }
    else
       {
           localStorage.setItem("lName",lName.value);
       }
    if(c.checked==false && ec.checked==false)                                  //Checks copy type
        {
            berr.innerHTML="Select at least single book edition";
        }
    if(eadd==" " || eadd==null || !isNaN(eadd.value))                           //checks email id
        {
            eadd.style.border="2px solid red";
            eerr.innerHTML="Please enter a valid email Id";
        }
    if(ad.value==null || ad.value==" " || !isNaN(ad.value))             //Checks FirstName
        {
            ad.style.border="2px solid red";
            serr.innerHTML="Please provide a valid Address";
        }
    if((st.value=="None") || (st.value==null) )                                   //Checks State
        {  
            st.style.border="2px solid red";
            sterr.innerHTML="Please select a state";
        }  
    if(isNaN(p.value)||(p.value==""))
       {
            p.style.border="2px solid red";
            perr.innerHTML="Enter a valid phone-number";
       }
    else{
        window.location.href="../Html/myPage5.html";
    }
    
}
