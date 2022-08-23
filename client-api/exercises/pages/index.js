import Head from 'next/head';
import Layout from '../components/Layout';
import css from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={css.container}>
        <h1>Exercises of Client API.</h1>
        <ol>
          <li>Todo List</li>
          <li>Books Management</li>
          <li>Contacts Management</li>
          <li>Users and Articles Management</li>
        </ol>
      </div>
    </Layout>
  );
}