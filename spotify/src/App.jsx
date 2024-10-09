import React from "react";

import MainApp from "./MainApp";
import PlayerContextProvider from "./context/PlayerContext";
const App = () => {
  return (
    <PlayerContextProvider>
      <MainApp />
    </PlayerContextProvider>
  );
};

export default App;
