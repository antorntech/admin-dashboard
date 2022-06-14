import React from "react";
import Accordion from "react-bootstrap/Accordion";
import userImg from "../../images/tm.png";
import "./Accordian.css";

const Accordian = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Today's Meeting</Accordion.Header>
          <Accordion.Body>
            <div className="mt-1 text-start">
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-info">30 minute call with clients</span>
                <i class="bi bi-three-dots-vertical"></i>
              </div>
              <h6 className="pt-2">Project Discovery call</h6>
              <div className="text-secondary">
                <span>Due Soon</span>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                  className="ps-3"
                >
                  09.20 am
                </span>
              </div>
              <div className="mt-3 d-flex justify-content-between align-items-center">
                <div className="mx-2">
                  <div class="avatar-group">
                    <div class="avatar">
                      <img src={userImg} alt="" />
                    </div>
                    <div class="avatar">
                      <img src={userImg} alt="" />
                    </div>

                    <div class="avatar">
                      <img src={userImg} alt="" />
                    </div>
                    <div class="hidden-avatars d-flex justify-content-between align-items-center">
                      <span>05+</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="text-white px-2"
                    style={{
                      background: "#14A9F9",
                      padding: "4px 12px",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    <i class="bi bi-plus-lg pe-2"></i>
                    <span>Invite</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <span className="text-info">30 minute call with clients</span>
              <i class="bi bi-three-dots-vertical"></i>
            </div>
            <h6 className="pt-2">Project Discovery call</h6>
            <div className="text-secondary">
              <span>Due Soon</span>
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
                className="ps-3"
              >
                09.20 am
              </span>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <div className="mx-2">
                <div class="avatar-group">
                  <div class="avatar">
                    <img src={userImg} alt="" />
                  </div>
                  <div class="avatar">
                    <img src={userImg} alt="" />
                  </div>

                  <div class="avatar">
                    <img src={userImg} alt="" />
                  </div>
                  <div class="hidden-avatars d-flex justify-content-between align-items-center">
                    <span>05+</span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="text-white px-2"
                  style={{
                    background: "#14A9F9",
                    padding: "4px 12px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  <i class="bi bi-plus-lg pe-2"></i>
                  <span>Invite</span>
                </button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Schedule Meeting</Accordion.Header>
          <Accordion.Body>
            <div className="px-2 d-flex justify-content-between align-items-center">
              <h6 className="fw-bold">Recent Activity</h6>
              <i class="bi bi-three-dots-vertical"></i>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-start">
              <div
                style={{
                  marginTop: "5px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "10px",
                  background: "#15A9F9",
                }}
              ></div>
              <div>
                <p className="mb-1">Thank you for booking</p>
                <h6>Kevin Dukkon</h6>
                <span className="text-secondary">Jun 14, 2021 at 5:31 PM</span>
              </div>
              <div>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50px",
                  }}
                  src={userImg}
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div className="mt-3 d-flex justify-content-between align-items-start">
              <div
                style={{
                  marginTop: "5px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "10px",
                  background: "#15A9F9",
                }}
              ></div>
              <div>
                <p className="mb-1">Thank you for booking</p>
                <h6>Kevin Dukkon</h6>
                <span className="text-secondary">Jun 14, 2021 at 5:31 PM</span>
              </div>
              <div>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50px",
                  }}
                  src={userImg}
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div className="mt-3 d-flex justify-content-between align-items-start">
              <div
                style={{
                  marginTop: "5px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "10px",
                  background: "#15A9F9",
                }}
              ></div>
              <div>
                <p className="mb-1">Thank you for booking</p>
                <h6>Kevin Dukkon</h6>
                <span className="text-secondary">Jun 14, 2021 at 5:31 PM</span>
              </div>
              <div>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50px",
                  }}
                  src={userImg}
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div className="mt-3 d-flex justify-content-between align-items-start">
              <div
                style={{
                  marginTop: "5px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "10px",
                  background: "#15A9F9",
                }}
              ></div>
              <div>
                <p className="mb-1">Thank you for booking</p>
                <h6>Kevin Dukkon</h6>
                <span className="text-secondary">Jun 14, 2021 at 5:31 PM</span>
              </div>
              <div>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50px",
                  }}
                  src={userImg}
                  alt=""
                />
              </div>
            </div>
            <hr />
            <div className="mt-3 d-flex justify-content-between align-items-start">
              <div
                style={{
                  marginTop: "5px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "10px",
                  background: "#15A9F9",
                }}
              ></div>
              <div>
                <p className="mb-1">Thank you for booking</p>
                <h6>Kevin Dukkon</h6>
                <span className="text-secondary">Jun 14, 2021 at 5:31 PM</span>
              </div>
              <div>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50px",
                  }}
                  src={userImg}
                  alt=""
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Accordian;
