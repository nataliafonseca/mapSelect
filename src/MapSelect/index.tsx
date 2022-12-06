import { useState } from "react";

import * as Styled from "./styles";
import { IMapSelect, IState } from "./types";

export function MapSelect(props: IMapSelect) {
  const initialMap = props.mapInfo.map((state) => ({
    ...state,
    selected: false,
  })) as Array<IState>;

  const [map, setMap] = useState(initialMap);

  async function handleClick(key: string) {
    const updatedList = map.map((state) => {
      if (state.key === key) {
        return { ...state, selected: !state.selected };
      } else {
        return state;
      }
    });

    props.onChange(updatedList.filter((state) => state.selected));
    setMap(updatedList);
  }

  return (
    <Styled.Map
      viewBox="0 0 449 461"
      maxHeight={props.height}
      maxWidth={props.width}
    >
      {map.map((state) => (
        <Styled.State
          style={props.style}
          selected={state.selected}
          key={state.key}
          onClick={() => handleClick(state.key)}
          hint={state.title}
        >
          <path d={state.path} />
          {state.path_aux && <path d={state.path_aux} />}
          <text transform={state.transform}>{state.key}</text>
        </Styled.State>
      ))}
    </Styled.Map>
  );
}
