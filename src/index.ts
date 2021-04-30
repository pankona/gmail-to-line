import { testFunction } from "./Code";

declare const global: {
  [x: string]: any;
};

global.testFunction = (_e: any) => {
  return testFunction();
};
