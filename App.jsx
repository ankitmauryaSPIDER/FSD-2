import React, { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  return(
    <div style={{textAlign: 'center', marginTop: "50px"}}>
      <h1>Toggle Example in React</h1>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && <p>
        <h2>hello how are you</h2>
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum hic nemo dicta. Molestias labore sed saepe libero? Aperiam qui eum et veritatis quae suscipit, modi nisi expedita dolor molestiae in asperiores. Optio blanditiis incidunt unde ipsam eos sequi temporibus suscipit consequuntur eaque autem magnam tenetur, atque, facere dolore maxime possimus.</p>}
    </div>
  )
}
export default App;