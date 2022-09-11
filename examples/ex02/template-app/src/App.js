import React from 'react';

function App(){
  let heading = "Heading of Page";
  let heading_title = "This is the heading";
  return React.createElement("h1",{"title": heading_title}, heading);
}

export default App;