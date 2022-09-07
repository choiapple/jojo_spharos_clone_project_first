import React from 'react';
import '../../css/loading.css'

function Loading() {
    return ( 
        <>
       <div className="container">
           <div className="loader">
               <div className="loader--dot"></div>
               <div className="loader--dot"></div>
               <div className="loader--dot"></div>
               <div className="loader--dot"></div>
               <div className="loader--dot"></div>
               <div className="loader--dot"></div>

               <div className="loader--text"></div>
           </div>
       </div>

  
    
        </>
     );
}

export default Loading;