import { renderWithProviders } from '../utils/test-utils';

import DetailedPage from './DetailedPage';
import { errorMockData, successfulMockData } from './mocks/detailedInfo';
import { screen } from '@testing-library/react';

it('component renders with a loading text', () => {
  renderWithProviders(<DetailedPage />, successfulMockData);
  let loaderElement = screen.getByText('Loading...');
  expect(loaderElement).toBeInTheDocument();
});
it('component renders with a heading text', async () => {
  renderWithProviders(<DetailedPage />, successfulMockData);

  expect(await screen.findByText('Detailed View')).toBeInTheDocument();
});

it('renders detailedPage component', async () => {
  renderWithProviders(<DetailedPage />, successfulMockData);
  const imageElement = await screen.findByAltText('cover');
  const headerElement = await screen.findByRole('heading', { level: 2 });
  const titleElement = await screen.findByText('(Cowboy Bebop)');
  expect(imageElement).toHaveAttribute(
    'src',
    'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png'
  );
  expect(headerElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
});
it('renders detailedPage component error UI', async () => {
  renderWithProviders(<DetailedPage />, errorMockData);
  expect(await screen.findByText('An error occurred')).toBeInTheDocument();
});
