import React from 'react';
import Profile from "./componenet/profile"


function App() {
  const styleimg = {height:"440px", width:"369px"}
  return (
    <div className="App">
<Profile FullName="Med" bio="I am Medamine Zouari" profession="Developper" >
<img style={styleimg} src="/img2.png" alt="myphoto" />
</Profile>
    </div>
  );
}

export default App;
