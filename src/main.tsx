import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './context/AuthContext.tsx';
import Entry from './pages/auth/Entry.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './containers/ErrorBoundary.tsx';
import { NotificationProvider } from './context/NotificationProvider.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
      useErrorBoundary: true,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NotificationProvider>
            <AuthProvider>
              <Entry />
            </AuthProvider>
          </NotificationProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
