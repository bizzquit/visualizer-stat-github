export type SearchCardProps = {
  onSubmit: (value: string) => void;
};

export interface IRowData<TValue> {
  [key: string]: TValue;
}
