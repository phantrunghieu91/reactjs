import { Header } from "./Header";

export const Main = ({children}) => (
    
    <div className="container-fluid p-0 vh-100 overflow-hidden bg-secondary bg-gradient">
        <Header />
        <main className="container">
            {children}
        </main>
    </div>
);