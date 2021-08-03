function redirect(url, secs){
    if (secs <=0){
  
        // redirect to new url after counter  down.
         window.location = url;
        } else {
         secs--;
         document.getElementById("mpl-redirect-warning").innerHTML="You Will Be Automatically Redirected After <span class='mpl-redirect-secs'>"+secs+"</span> Seconds";
         setTimeout(function(){redirect(url, secs);}, 1000);
        }

}

