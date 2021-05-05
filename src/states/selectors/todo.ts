import { selector } from "recoil";
import { todoListState } from "../atoms/todo";

export const todoListSelector = selector({
  key: 'todoListSelector',
  get: ({get}) => get(todoListState)
});
