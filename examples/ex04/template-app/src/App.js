import React from 'react';

function App(){
  var style1 = {
    color: "blue",
    fontSize: 30,
    backgroundColor: "gray"
  }

  let var1 = "Hi There!";
  let var2 = 5 * 7;
  let var3 = 29;
  return (
    <div>
      <h1 style={style1} title='A Heading Element'>Heading - Using the JSX Method</h1>
      <p id="p1">This is paragraph 1</p>
      <p className='p2'>This is paragraph 2</p>
      <p>{var1 + ' ' + var2}</p>
      <p>{11 * 10}</p>
      <p>{var3 !== 19 ? "True" : "False"}</p>
      <div>
        <label htmlFor='input1'>Input Data: </label>
        <input id='input1' name='input1'></input>
      </div>
      <div width="500">New Div</div>
      <div>New Div after width</div>
    </div>
  )
}

export default App;