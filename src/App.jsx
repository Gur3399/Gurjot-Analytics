import React, { useState } from 'react'; // Corrected import statement


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button count={count} setCount={setCount} />
      <Form />
    </>
  );
}


export default App;