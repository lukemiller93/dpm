import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Layout from './src/components/Layout';
import '@fontsource/inter/variable-full.css';
import '@fontsource/nunito/400.css';
import { MenuStateProvider } from './src/contexts/menuStateContext';

export const wrapRootElement = ({ element }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MenuStateProvider>{element}</MenuStateProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
