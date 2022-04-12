import {Info} from './screens/details/Details';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Article: undefined;
      Details: {
        item: Info;
      };
    }
  }
}

export {};
