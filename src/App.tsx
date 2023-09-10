import React from 'react';
import { MainRouter } from './Router/Mainrouter';
import { RouterProvider} from 'react-router-dom'

function App() {
  return (
    <div>
    <RouterProvider
    router={MainRouter}/>
    </div>
  );
}

export default App;
