import React from 'react';
import renderer from 'react-test-renderer';
import {Details} from '../Details';

describe('<Details />', () => {
  test('should display the details of an article', async () => {
    it('renders details comp', () => {
      renderer.create(
        <Details
          route={{
            params: {
              item: {
                itemAuthor: 'karom',
                itemImage: undefined,
                itemTitle: 'test',
                itemDate: '12',
                itemUrl: undefined,
                itemDesc: 'undefined',
              },
            },
          }}
        />,
      ); // OtherTesting' refers to a value, but is being used as a type here. Did you mean 'typeof OtherTesting'?ts(2749)
    });
  });
});
