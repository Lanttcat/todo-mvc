import * as React from "react";
import { render as renderTest } from '@testing-library/react';
import { RecoilRoot } from "recoil";
import { todoListState } from "../states/atoms/todo";

export const render = (element: React.ReactElement,) => {
  return renderTest(
    <RecoilRoot initializeState={({set}) => set(todoListState, [])}>
      {element}
    </RecoilRoot>
  )
}
