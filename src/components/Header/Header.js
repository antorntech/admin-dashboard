import React from "react";
import userImg from "../../images/tm.png";

const Header = () => {
  return (
    <div className="">
      <div className="row row-cols-2 headerContent d-flex align-items-center">
        <div className="col-lg-9 left">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">
              <i class="bi bi-search"></i>
            </span>
            <input
              type="search"
              class="form-control"
              placeholder="search for projects"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div className="col-lg-3 right d-flex justify-content-around">
          <div className="row row-cols-3 d-flex align-items-center">
            <div className="col-lg-3">
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50px",
                }}
                src={userImg}
                alt=""
              />
            </div>
            <div className="col-lg-6 text-start px-3">
              <p className="m-0">AM Antor</p>
              <p
                className="m-0 "
                style={{
                  fontSize: "10px",
                }}
              >
                Web Developer
              </p>
            </div>
            <div className="col-lg-3">
              <span>
                <i class="bi bi-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
