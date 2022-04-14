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

const options = [
  {label: 'English', value: 'en'},
  {label: 'Arabic', value: 'ar'},
];

const optionsAr = [
  {label: 'إنجليزي', value: 'en'},
  {label: 'عربي', value: 'ar'},
];

export {options, optionsAr};
