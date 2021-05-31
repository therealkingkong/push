import React, { useState } from "react";
import getFeedsData from "../config/Firebase";
import History from "../config/History";

export default function Signin() {

return(<div onClick={
  getFeedsData().then(data=>{

    // window.$.getScript('comics/assets/js/jquery.min.js');
    // window.$.getScript('comics/assets/js/browser.min.js');
    // window.$.getScript('comics/assets/js/breakpoints.min.js');
    // window.$.getScript('comics/assets/js/main.js');


    History.push({
      pathname: '/Home',
      state: { detail: data }
    })
    
  })
}/>)

}