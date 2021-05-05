import { atom } from "recoil";

export const todoListState = atom<Task[]>({
  key: 'todos',
  default: [],
});
