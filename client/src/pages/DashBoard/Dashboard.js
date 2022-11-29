
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Dashboard.css";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";



const Dashboard = () => {


  return (
    <div className="dashboard">
      <div className="left__sidebar__dashboard">
        <Sidebar Icon={DashboardIcon} title="Dashboard" link="/" />
        <Sidebar Icon={PersonIcon} title="Profile" link="/profile" />
        {/* <Sidebar Icon={TouchAppIcon} title="Grades" link="/grades" /> */}
        {/* <Sidebar Icon={MessageIcon} title="Messages" link="/messages" /> */}
        
        <Sidebar Icon={ExitToAppIcon} title="Logout" />
      </div>

      <div className="main__body__dashboard">
        <Container>
          <div className={styles.dashboard__header__name}>
            
            <Link to="/">User Dashboard</Link>
          </div>
        </Container>
        </div>
        </div>
        );
};


        
export default Dashboard;


