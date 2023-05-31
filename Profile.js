function myfunction(){

    var hideid=document.getElementById("dots");
    var showdata=document.getElementById("more");
    var buttonId=document.getElementById("readmoreid");

    if(hideid.style.display=="none")
    {
        hideid.style.display="inline";
        buttonId.innerHTML="Reade More";
        showdata.style.display="none";
    }
    else
    {
        hideid.style.display="none";
        buttonId.innerHTML="Reade Less";
        showdata.style.display="inline";
    }



}