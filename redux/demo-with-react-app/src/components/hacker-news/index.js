import { useTitle } from '../../hooks/useTitle';
import { Main } from '../layouts/Main';
import Header from './Header';
import StoryList from './StoryList';

export default function HackerNews() {
  useTitle('Hacker News');
  return (
    <Main>
      <Header />
      <StoryList />
    </Main>
  );
}
