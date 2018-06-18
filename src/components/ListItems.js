import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

class ListItems extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid pl-md-5 py-md-4 flex-1 px-0">
          <div className="d-none d-md-block">
            <p className="h4">Showing
              <span className="text-primary">15</span> results by...
            </p>
            <button type="button" className="btn btn-outline-primary btn-rounded">
              Taiwan
              <i className="far fa-times-circle" />
            </button>
            <button type="button" className="btn btn-outline-primary btn-rounded">
              Free
              <i className="far fa-times-circle" />
            </button>
            <button type="button" className="btn btn-outline-primary btn-rounded">
              Everyday
              <i className="far fa-times-circle" />
            </button>
          </div>

          <Link className="card flex-xl-row my-4" id="card-link" to="/item" style={{textDecoration: 'none', color: '#000'}}>
            <div className="bg-cover bg-xl-cover bg-md-cover rounded-xl-left rounded-top" style={{backgroundImage: 'url(https://bit.ly/2kB3h9J)'}} />
            <div className="card-body flex-1">
              <h4 className="text-primary">
                Lorem ipsum dolor sit.
              </h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum libero consectetur modi magnam iure ab odio necessitatibus id reiciendis quis!</p>
              <p className="font-weight-bold">Lorem ipsum</p>
              <span className="card-xl-icon card-icon">
                <i className="fas fa-map-marker-alt" />
                <span className="text-black-50">Kaohsiung</span>
              </span>
              <span className="card-xl-icon card-icon">
                <i className="fas fa-dollar-sign" />
                <span className="text-black-50">Free</span>
              </span>
              <span className="card-xl-icon card-icon">
                <i className="far fa-calendar-alt" />
                <span className="text-black-50">Monday-Tuesday</span>
              </span>
            </div>
          </Link>

          <Link className="card flex-xl-row my-4" id="card-link" to="/item" style={{textDecoration: 'none', color: '#000'}}>
            <div className="bg-cover bg-xl-cover bg-md-cover rounded-xl-left rounded-top" style={{backgroundImage: 'url(https://bit.ly/2strKBv)'}} />
            <div className="card-body flex-1">
              <h4 className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, provident!
              </h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nesciunt vel sint dolorem impedit fuga aspernatur quaerat velit quasi, incidunt iusto praesentium accusamus eaque, asperiores deserunt quis alias exercitationem ab!</p>
              <p className="font-weight-bold">iusto praesentium</p>
              <span className="card-xl-icon card-icon">
                <i className="fas fa-map-marker-alt" />
                <span className="text-black-50">Kaohsiung</span>
              </span>
              <span className="card-xl-icon card-icon">
                <i className="fas fa-dollar-sign" />
                <span className="text-black-50">Free</span>
              </span>
              <span className="card-xl-icon card-icon">
                <i className="far fa-calendar-alt" />
                <span className="text-black-50">Monday-Tuesday</span>
              </span>
            </div>
          </Link>
          <Link className="card flex-xl-row my-4" id="card-link" to="/item" style={{textDecoration: 'none', color: '#000'}}>
            <div className="bg-cover bg-xl-cover bg-md-cover rounded-xl-left rounded-top" style={{backgroundImage: 'url(https://bit.ly/2L9puqy)'}} />
            <div className="card-body flex-1">
              <h4 className="text-primary">
                Lorem ipsum dolor sit amet consectetur.
              </h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eos molestiae ratione beatae odit voluptatem, sit officiis commodi, assumenda fuga harum accusantium laboriosam quae odio velit eaque illo doloremque quisquam!</p>
              <p className="font-weight-bold">amet consectetur</p>
              <span className="card-xl-icon card-icon">
                <i className="fas fa-map-marker-alt" />
                <span className="text-black-50">Kaohsiung</span>
              </span>
              <span className="card-xl-icon card-icon">
                <i className="fas fa-dollar-sign" />
                <span className="text-black-50">Free</span>
              </span>
              <span className="card-xl-icon card-icon">
                <i className="far fa-calendar-alt" />
                <span className="text-black-50">Monday-Tuesday</span>
              </span>
            </div>
          </Link>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center justify-content-md-end">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Previous</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </Layout>
    );
  }
}

export default ListItems;
