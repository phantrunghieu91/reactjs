import { Main } from "./layouts/Main";
import { useTitle } from "../hooks/useTitle";

export default function Home() {
    useTitle('Home page');
    return (
        <Main>
            <h1>Home page</h1>
        </Main>
    );
}