import { screen, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import { renderWithProviders } from '../utils/test-utils';
import { errorMockData, successfulMockData } from './mocks/AllFilms';
import userEvent from '@testing-library/user-event';
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));
it('component renders with a loading text', () => {
  renderWithProviders(<HomePage />, successfulMockData);
  let loaderElement = screen.getByText('Loading...');
  expect(loaderElement).toBeInTheDocument();
});

it('component renders with a heading text', async () => {
  renderWithProviders(<HomePage />, successfulMockData);
  expect(await screen.findByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Anime Lists')).toBeInTheDocument();
});

it('should show error UI', async () => {
  renderWithProviders(<HomePage />, errorMockData);
  expect(await screen.findByText('An error occurred')).toBeInTheDocument();
});

it('renders anime info component', async () => {
  renderWithProviders(<HomePage />, successfulMockData);
  expect(await screen.findByText('Cowboy Bebop')).toBeInTheDocument();
  const imageElement = await screen.findByAltText('cover');
  expect(imageElement).toHaveAttribute(
    'src',
    'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png'
  );
});

test('on click working', async () => {
  const user = userEvent.setup();
  renderWithProviders(<HomePage />, successfulMockData);
  let clickElement = await screen.findByTestId('click-element');
  user.click(clickElement);
  await waitFor(() => {
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/1');
  });
  user.click(clickElement);
  await waitFor(() => {
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(2);
  });
});
