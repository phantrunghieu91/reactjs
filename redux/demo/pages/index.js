import { connect } from 'react-redux';
import MainLayout from '../components/layout/MainLayout/Main';
import styles from '../styles/Home.module.css';

function Home(props) {
  const { userLogined } = props;

  return (
    <MainLayout title={'Home page'}>
      <div className={styles.container}>
        <h2>Home page</h2>
        {userLogined ? (<h3>Welcome, {userLogined}</h3>) : ""}
      </div>
    </MainLayout>
  )
}

const mapStateToProps = state => ({
  userLogined: state.loginReducer.userLogined
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
