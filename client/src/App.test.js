import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerList from './components/PlayerList';

afterEach(rtl.cleanup);

//testing
it('renders correctly. truthy, in document, visible', () => {
  const wrapper = rtl.render(
    <PlayerList />
  );
  const element = wrapper.queryByText(/players/i);
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();

  wrapper.debug();
});
