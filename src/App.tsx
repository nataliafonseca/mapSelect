import { useState } from "react";

import mapInfo from "./assets/brMap.json";
import { MapSelect } from "./MapSelect";
import { IState } from "./MapSelect/types";

const args = {
  width: "100%",
  height: "100%",
  style: {
    bg: "#8d8d8d",
    activeBg: "#e77d8f",
    label: "#ffffff",
    stroke: "#6c6c6c",
  },
};

function App() {
  const [selected, setSelected] = useState([] as IState[]);

  return (
    <>
      <pre>{JSON.stringify(selected.map((state) => state.key))}</pre>
      <MapSelect
        mapInfo={mapInfo}
        style={args.style}
        height={args.height}
        width={args.width}
        onChange={(selected) => setSelected(() => selected)}
      />
    </>
  );
}

export default App;
