import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader1.jsx";
import Footer from "components/Footer/Footer.jsx";

// sections for this page/view
import Basics1 from "views/IndexSections1/Basics1.jsx";
import Navbars from "views/IndexSections1/Navbars.jsx";
import Tabs from "views/IndexSections1/Tabs.jsx";
import Pagination from "views/IndexSections1/Pagination.jsx";
import Notifications from "views/IndexSections1/Notifications.jsx";
import Typography from "views/IndexSections1/Typography.jsx";
import JavaScript from "views/IndexSections1/JavaScript.jsx";
import JavaScript1 from "views/IndexSections1/JavaScript1.jsx";
import JavaScript2 from "views/IndexSections1/JavaScript2.jsx";
import JavaScript3 from "views/IndexSections1/JavaScript3.jsx";
import JavaScript4 from "views/IndexSections1/JavaScript4.jsx";
import JavaScript5 from "views/IndexSections1/JavaScript5.jsx";


import NucleoIcons from "views/IndexSections1/NucleoIcons.jsx";
import Signup from "views/IndexSections1/Signup.jsx";
import Examples from "views/IndexSections1/Examples.jsx";
import Download from "views/IndexSections1/Download.jsx";

class Index1 extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <JavaScript />
            <JavaScript1 />
            <JavaScript2 />
            <JavaScript3 />
            <JavaScript4 />
            <NucleoIcons />
            <JavaScript5 />
            
            
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index1;
