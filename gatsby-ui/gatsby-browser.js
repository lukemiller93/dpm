import { QueryClient, QueryClientProvider } from "react-query";

export const wrapRootElement = ({ element }) => {
  <QueryClientProvider client={new QueryClient()}>
    {element}
  </QueryClientProvider>;
};
