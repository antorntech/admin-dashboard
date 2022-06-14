import React from "react";
import progress1 from "../../images/progress1.png";
import progress2 from "../../images/progress2.png";
import progress3 from "../../images/progress3.png";
import userImg from "../../images/tm.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const MainContent = () => {
  return (
    <div>
      <div className="row row-cols-2">
        <div className="col-9 my-5">
          <header className="text-start">
            <h2>Welcome Back, AM Antor!</h2>
            <p>Have a look at the Quick Progress Bar</p>
          </header>
          <div className="row row-cols-3">
            <div className="col-5">
              <div
                style={{
                  backgroundImage: `url(${progress1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="rounded"
              >
                <div className="d-flex justify-content-between">
                  <button className="customBtn">
                    <i class="bi bi-broadcast pe-2"></i>
                    Live Project
                  </button>
                  <button className="customBtn">View All</button>
                </div>
                <div className="text-start ps-2 text-white">
                  <h1
                    style={{
                      fontSize: "82px",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    56
                  </h1>
                  <p
                    style={{
                      color: "#fff",
                      paddingBottom: "15px",
                    }}
                  >
                    Currently, the projects is in progress
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div
                style={{
                  backgroundImage: `url(${progress2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="rounded"
              >
                <div className="d-flex">
                  <button className="customBtn">
                    <i class="bi bi-hourglass-top pe-2"></i>
                    In Progress
                  </button>
                </div>
                <div className="text-start ps-2 text-white">
                  <h1
                    style={{
                      fontSize: "82px",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    124
                  </h1>
                  <p
                    style={{
                      color: "#fff",
                      paddingBottom: "15px",
                    }}
                  >
                    Projects in progress
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                style={{
                  backgroundImage: `url(${progress3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="rounded"
              >
                <div className="d-flex">
                  <button className="customBtn">
                    <i class="bi bi-file-earmark-check-fill pe-2"></i>
                    Completed
                  </button>
                </div>
                <div className="text-start ps-2 text-white">
                  <h1
                    style={{
                      fontSize: "82px",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    24
                  </h1>
                  <p
                    style={{
                      color: "#fff",
                      paddingBottom: "15px",
                    }}
                  >
                    Completed projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <header className="text-start">
              <h2>Current Progress</h2>
              <p>Projects that are currently in progress</p>
            </header>
          </div>
          <div className="row row-cols-3">
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="text-start">
                  <h5>Construction Project</h5>
                  <p>Property name</p>
                </header>
                <div className="d-flex justify-content-between">
                  <p>
                    <i class="bi bi-currency-dollar"></i>
                    <span>100-800</span>
                  </p>
                  <p>
                    <i class="bi bi-calendar2-event"></i>
                    <span> Deadline - 25 may</span>
                  </p>
                </div>
                <div>
                  <ProgressBar variant="info" now={75} />
                </div>
                <div className="d-flex justify-content-between">
                  <p>Progress bar</p>
                  <p>75%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50px",
                      }}
                      src={userImg}
                      alt=""
                    />
                    <p className="ps-3 m-0">AM Antor</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-info text-white">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="text-start">
                  <h5>Construction Project</h5>
                  <p>Property name</p>
                </header>
                <div className="d-flex justify-content-between">
                  <p>
                    <i class="bi bi-currency-dollar"></i>
                    <span>100-800</span>
                  </p>
                  <p>
                    <i class="bi bi-calendar2-event"></i>
                    <span> Deadline - 25 may</span>
                  </p>
                </div>
                <div>
                  <ProgressBar variant="info" now={75} />
                </div>
                <div className="d-flex justify-content-between">
                  <p>Progress bar</p>
                  <p>75%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50px",
                      }}
                      src={userImg}
                      alt=""
                    />
                    <p className="ps-3 m-0">AM Antor</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-info text-white">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="text-start">
                  <h5>Construction Project</h5>
                  <p>Property name</p>
                </header>
                <div className="d-flex justify-content-between">
                  <p>
                    <i class="bi bi-currency-dollar"></i>
                    <span>100-800</span>
                  </p>
                  <p>
                    <i class="bi bi-calendar2-event"></i>
                    <span> Deadline - 25 may</span>
                  </p>
                </div>
                <div>
                  <ProgressBar variant="info" now={75} />
                </div>
                <div className="d-flex justify-content-between">
                  <p>Progress bar</p>
                  <p>75%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50px",
                      }}
                      src={userImg}
                      alt=""
                    />
                    <p className="ps-3 m-0">AM Antor</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-info text-white">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <header className="text-start">
              <h2>Pending Invoice</h2>
              <p>Invoices that are currently in pending</p>
            </header>
          </div>
          <div className="row row-cols-3">
            <div className="col">
              <div
                className="p-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                }}
              >
                <header className="text-start">
                  <h5>$137.00</h5>
                </header>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Amount</span>
                  <button
                    style={{
                      color: "#fff",
                      background: "#15C15D",
                      padding: "4px 12px",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Approved
                  </button>
                </div>
              </div>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
        <div className="col-3">Hi</div>
      </div>
    </div>
  );
};

export default MainContent;
