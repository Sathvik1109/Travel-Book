import Map from "../components/Map";
import Sidebar from "../components/SIdebar";
import User from "../components/User";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
