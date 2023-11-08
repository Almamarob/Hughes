"use strict";
window.onload = function() {
    console.log("ciao");
    
   fillthepage();

    
  };

  async function fillthepage(){
    const response = await fetch(`../config/flow.json`,{
        method: 'GET',
     } );

     if(!response.ok){
        const errorDetails =await response.json();
        throw new Error (`Errore nella richiesta: ${errorDetails.message}`);
     }
     const responseData=await response.json();
     const inspectionData =responseData.data;
     document.getEelementById(`inspectionTitle`).textContent= inspectionData.title;

}