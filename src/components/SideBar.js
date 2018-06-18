import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <div className="container-md-left ">
        <div className="h4 d-flex d-md-none justify-content-center mt-2">
          <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{textDecoration: "none"}}>
            <span className="mr-2">Add filter</span>
            <i className="fas fa-plus" />
          </a>
        </div>
        <div className="collapse d-md-block" id="collapseExample">
          <div className="px-5 py-4 border-bottom filter">
            <div className="h5">
              Location
            </div>
            <div>
              <select className="form-control">
                <option>Taiwan</option>
                <option>Kaohsiung</option>
              </select>
            </div>
          </div>
          <div className="px-5 py-4 border-bottom filter">
            <div className="h5">Price</div>
            <select className="form-control">
              <option>Free</option>
              <option>Paid</option>
            </select>
          </div>
          <div className="px-5 py-4 filter">
            <p className="h5">Open Time</p>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="Categories1" />
              <label className="form-check-label" htmlFor="Categories1">Everyday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="Categories2" />
              <label className="form-check-label" htmlFor="Categories2">Monday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="Categories3" />
              <label className="form-check-label" htmlFor="Categories3">Tuesday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="Categories4" />
              <label className="form-check-label" htmlFor="Categories4">Wednesday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="Categories5" />
              <label className="form-check-label" htmlFor="Categories5">Thursday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="Categories6" />
              <label className="form-check-label" htmlFor="Categories6">Friday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="Categories7" />
              <label className="form-check-label" htmlFor="Categories7">Saturday</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="Categories8" />
              <label className="form-check-label" htmlFor="Categories8">Sunday</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
