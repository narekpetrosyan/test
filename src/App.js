import MainLayout from "./components/MainLayout/MainLayout";
import ProsList from "./components/ProsList/ProsList";
import ConsList from "./components/ConsList/ConsList";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.AppWrapper}>
      <MainLayout>
        <ProsList />

        <ConsList />
      </MainLayout>
    </div>
  );
};

export default App;
