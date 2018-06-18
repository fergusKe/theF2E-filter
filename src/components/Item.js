import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="container-fluid pl-md-5 py-md-4 flex-1 px-0">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Explore</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Lorem ipsum dolor sit.</li>
          </ol>
        </nav>
        <div className="card my-4">
          <img className="card-img-top" src="https://bit.ly/2kB3h9J" alt="" />
          <div className="card-body flex-1">
            <h2 className="text-primary card-title">
                Lorem ipsum dolor sit.
            </h2>
            <p className="font-weight-bold">Lorem ipsum</p>
            <div className="mb-4">
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

            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum hic quasi non consequatur rerum dignissimos dolor molestiae tempora impedit et commodi aperiam adipisci voluptates inventore mollitia saepe eveniet eaque quidem harum consequuntur, distinctio nostrum? Perferendis, optio! Illum corrupti eos modiea debitis quibusdam? Exercitationem veniam, quas quo modi eius nisi rerum laudantium perspiciatis consequatur esse quia? Ipsa minus nihil at est, officiis voluptates, magni voluptatem alias nam ratione ipsam adipisci tempore. Asperiores quam minima nulla ducimus, id eos laudantium cum sequi rem. Tenetur, vitae. Amet repudiandae quasi doloremque magni dolore, numquam, voluptates veniam vel tempora ducimus distinctio deserunt non. Quas.</p>
            <img className="card-img mb-3" src="https://bit.ly/2H3uydD" alt="" />
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio quidem ratione aliquam doloribus eaque possimus, nihil libero eum a asperiores deserunt veniam esse vel voluptatibus quo laudantium similique excepturi commodi autem earum? Ut vel repellendus fugiat fugit pariatur itaque et ab officia tempora illum, sed reprehenderit quos. Beatae magni doloremque repellendus recusandae. Doloremque odio alias, vitae laborum corporis repellendus.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
