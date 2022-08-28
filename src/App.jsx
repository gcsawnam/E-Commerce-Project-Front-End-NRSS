import React from 'react';
import { Drawer } from './Components/Drawer';
import First from './Components/First';
import { Infocard } from './Components/Infocard';
import Navbar from './Components/Navbar';
import { useState } from "react";
import { Testimonial } from './Components/Testimonial';

// import { Testimoni } from './Components/Testimoni';

function App() {
  const [isDrawerOpen, SetIsDrawerOpen] = useState(false);

  return ( <div>
      <Navbar SetIsDrawerOpen={SetIsDrawerOpen} isDrawerOpen={isDrawerOpen}/>
      <First/>
      <Infocard/>
      {/* <Testimoni /> */}
      <Drawer isDrawerOpen={isDrawerOpen} />
      <Testimonial/>
    </div>
  )
}

export default App;
