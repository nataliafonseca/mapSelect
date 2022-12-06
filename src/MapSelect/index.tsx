import "./styles.css";

import { useState } from "react";

import mapInfo from "./brMap.json";

export interface IState {
  key: string;
  title: string;
  path: string;
  path_aux?: string;
  transform: string;
  selected: boolean;
}

export interface IMapSelect {
  onChange: (value: IState[]) => void;
}

export function MapSelect({ onChange }: IMapSelect) {
  const [map, setMap] = useState(mapInfo);

  async function handleClick(key: string) {
    const updatedList = map.map((state) => {
      if (state.key === key) {
        return { ...state, selected: !state.selected };
      } else {
        return state;
      }
    });

    onChange(updatedList.filter((state) => state.selected));
    setMap(updatedList);
  }

  return (
    <svg height="100%" width="100%" viewBox="0 0 449 461">
      {map.map((state) => (
        <g
          fill={state.selected ? "#e77d8f" : "#8d8d8d"}
          stroke="#6c6c6c"
          key={state.key}
          onClick={() => handleClick(state.key)}
        >
          <path d={state.path} />
          {state.path_aux && <path d={state.path_aux} />}
          <text stroke="initial" fill="#ffffff" transform={state.transform}>
            {state.key}
          </text>
        </g>
      ))}
    </svg>
  );
}
