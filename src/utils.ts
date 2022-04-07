import {Info} from './components/DetailsScreen';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      ArticleFunc: undefined;
      DetailsScreen: {
        item: Info;
      };
    }
  }
}

export {};
