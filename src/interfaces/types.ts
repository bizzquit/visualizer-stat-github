import { User } from './api-types';

export type SearchCardProps = {
  onSubmit: (value: string) => void;
};

export interface IRowData<TValue> {
  [key: string]: TValue;
}

export type UserCardProps = {
  user: User;
};
