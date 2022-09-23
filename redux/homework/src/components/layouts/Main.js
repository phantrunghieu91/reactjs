import { Header } from './Header';

export const Main = ({ children }) => (
  <div className='container-fluid p-0 vh-100 bg-secondary bg-gradient overflow-hidden'>
    <Header
      className='container-fluid p-0 mb-0'
      style={{ height: '7%' }}
    />
    <main
      className='container-fluid mt-0'
      style={{ height: '93%' }}
    >
      {children}
    </main>
  </div>
);
