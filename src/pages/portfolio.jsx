import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import Sidebar from "../components/sideNavbar/Index";
import styles from "./style/style.module.scss";
import TopNav from "../components/topNavbar/Index";
import Main from "../components/dashboardMain/main";
import SidebarRight from "../components/RightSidebar/Sidebar";

function Portfolio() {
  const [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__sidenav}>
        <div
          className={`${styles.navbar} ${toggle ? styles.hide : styles.show}`}
        >
            <Sidebar />
        </div>
        <div
          className={`${styles.toggle} ${
            toggle ? styles.toggle_position : null
          }`}
          onClick={toggler}
        >
          <MdMenuOpen size={20} />
        </div>
      </div>
      <div className={styles.dashboard__main}>
        <div className={styles.main__top_nav}>
          {/* <DashboardTopNav /> */}
          <TopNav />
        </div>
        <div className={styles.main__content_area}>
          <Main />
          <SidebarRight />
          {/* <div>school</div> */}
          {/* <DashboardMain /> */}
          {/* <RightSideBar /> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
