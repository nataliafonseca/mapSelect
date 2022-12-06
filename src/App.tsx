import { useState } from "react";

import { IState, MapSelect } from "./MapSelect";

function App() {
  const [selected, setSelected] = useState([] as IState[]);

  return (
    <>
      <pre>{JSON.stringify(selected.map((state) => state.key))}</pre>
      <MapSelect onChange={(selected) => setSelected(() => selected)} />
    </>
  );
}

export default App;
