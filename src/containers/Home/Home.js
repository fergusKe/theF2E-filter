import React, {
  Component
} from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import ListItems from '../../components/ListItems';
// import Item from '../../components/Item';


class Home extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <div className="container d-flex flex-column flex-md-row">
          <SideBar />
          <ListItems />
        </div>
      </div>
    );
  }
}

export default Home;
