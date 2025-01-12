import createComponentWithIntl from '@/test/testHelpers';

import AppHeader from './AppHeader';

describe(`rendering of AppHeader Component`, () => {
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(<AppHeader />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
