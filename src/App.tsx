import HomePage from './components/homePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailedPage from './components/detailedPage/DetailedPage';

import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailedPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
