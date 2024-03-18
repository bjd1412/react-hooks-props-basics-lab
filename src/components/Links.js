import React from "react";

function Links (props) {
return( 
<>
<h3>Links</h3>
<a href="{props.github}">{props.github}</a>
<a href="{prop.linkedin}">{props.linkedin}</a>
</>
)
}
  
export default Links