export interface SearchValue {
  name: string;
}

export interface SearchBarProps {
  onSearch: (value: string) => void;
}
