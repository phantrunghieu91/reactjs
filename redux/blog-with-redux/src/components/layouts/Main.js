import Header from './Header';

const Main = ({ title, children }) => {
  document.title = title;
  return (
    <div
      className='container-fluid vh-100 w-100 p-0 m-0 overflow-hidden d-flex flex-column bg-gradient'
      style={{ backgroundColor: 'hsl(216, 98%, 72%)' }}
    >
      <Header />
      <main
        className='container p-3 d-flex'
        style={{ height: '85%' }}
      >
        {children}
      </main>
    </div>
  );
};

export default Main;
