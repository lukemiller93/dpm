import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './src/components/Layout';
import '@fontsource/inter/variable-full.css';
import '@fontsource/nunito/400.css';

export const wrapRootElement = ({ element }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{element} </Layout>
    </QueryClientProvider>
  );
};
