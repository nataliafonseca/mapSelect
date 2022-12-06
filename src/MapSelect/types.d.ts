interface IStyle {
  bg?: string;
  activeBg?: string;
  label?: string;
  stroke?: string;
}

export interface IStateInfo {
  key: string;
  title: string;
  path: string;
  path_aux?: string;
  transform: string;
}

export interface IState extends IStateInfo {
  selected: boolean;
}

export interface IMapSelect {
  mapInfo: IStateInfo[];
  multiselect?: boolean;
  width?: string;
  height?: string;
  style?: IStyle;
  onChange: (value: IState[]) => void;
}

export interface IStyledMap {
  maxWidth?: string;
  maxHeight?: string;
}

export interface IStyledState {
  hint: string;
  selected: boolean;
  style?: IStyle;
}
