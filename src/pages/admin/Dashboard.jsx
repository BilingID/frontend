import { ReactComponent as NoteIcon } from "assets/icon/svg/note.svg";
import { ReactComponent as BatteryIcon } from "assets/icon/svg/battery-empty.svg";
import { ReactComponent as TrendIcon } from "assets/icon/svg/trend-up.svg";

import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as ArrowIcon } from "assets/icon/svg/arrow-right.svg";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import SidebarLayout from "./SidebarAdmin";
Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const data = [
    {
      code: "#123456789",
      name: "Arla Sifhana Putri",
      date: "10/6/2023",
      price: "Rp. 50.000",
      status: "Berhasil",
    },
    {
      code: "#123456789",
      name: "Arla Sifhana Putri",
      date: "10/6/2023",
      price: "Rp. 50.000",
      status: "Pending",
    },
    {
      code: "#123456789",
      name: "Arla Sifhana Putri",
      date: "10/6/2023",
      price: "Rp. 50.000",
      status: "Berhasil",
    },
    {
      code: "#123456789",
      name: "Arla Sifhana Putri",
      date: "10/6/2023",
      price: "Rp. 50.000",
      status: "Pending",
    },
    {
      code: "#123456789",
      name: "Arla Sifhana Putri",
      date: "10/6/2023",
      price: "Rp. 50.000",
      status: "Berhasil",
    },
    {
      code: "#123456789",
      name: "Arla Sifhana Putri",
      date: "10/6/2023",
      price: "Rp. 50.000",
      status: "Pending",
    },
  ];
  const roundBackgroundStylePending = {
    backgroundColor: "#FEF8E8", // Replace with the desired background color
    color: "#F5C556",
    borderRadius: "30px", // Adjust the border-radius as needed
    padding: "5px", // Add padding for better appearance
    display: "inline-block", // Ensure the background color wraps around the text
    width: "100px",
  };

  const roundBackgroundStyleBerhasil = {
    backgroundColor: "#EEF5FF", // Replace with the desired background color
    color: "#2E7DF1",
    borderRadius: "30px", // Adjust the border-radius as needed
    padding: "5px", // Add padding for better appearance
    display: "inline-block", // Ensure the background color wraps around the text
    width: "100px",
  };

  return (
    <div className="rounded d-flex" style={{ background: "white", width: "100vw" }}>
      <SidebarLayout />
      <div className="">
        <div
          style={{
            padding: "50px 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h4>Dashboard</h4>
          <div style={{ display: "flex", alignItems: "center", gap: "64px" }}>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
                  fill="currentColor"
                />
                <path
                  d="M20 9.84H4C3.45 9.84 3 10.29 3 10.84V17C3 20 4.5 22 8 22H16C19.5 22 21 20 21 17V10.84C21 10.29 20.55 9.84 20 9.84ZM9.21 18.21C9.16 18.25 9.11 18.3 9.06 18.33C9 18.37 8.94 18.4 8.88 18.42C8.82 18.45 8.76 18.47 8.7 18.48C8.63 18.49 8.57 18.5 8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C7.99 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.3 16.5 8.5 16.48 8.7 16.52C8.76 16.53 8.82 16.55 8.88 16.58C8.94 16.6 9 16.63 9.06 16.67C9.11 16.71 9.16 16.75 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21ZM9.21 14.71C9.02 14.89 8.76 15 8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.07 13.01 8.51 12.92 8.88 13.08C9.01 13.13 9.12 13.2 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71ZM12.71 18.21C12.52 18.39 12.26 18.5 12 18.5C11.74 18.5 11.48 18.39 11.29 18.21C11.11 18.02 11 17.76 11 17.5C11 17.24 11.11 16.98 11.29 16.79C11.66 16.42 12.34 16.42 12.71 16.79C12.89 16.98 13 17.24 13 17.5C13 17.76 12.89 18.02 12.71 18.21ZM12.71 14.71C12.66 14.75 12.61 14.79 12.56 14.83C12.5 14.87 12.44 14.9 12.38 14.92C12.32 14.95 12.26 14.97 12.2 14.98C12.13 14.99 12.07 15 12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.38 13.2 11.49 13.13 11.62 13.08C11.99 12.92 12.43 13.01 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71ZM16.21 18.21C16.02 18.39 15.76 18.5 15.5 18.5C15.24 18.5 14.98 18.39 14.79 18.21C14.61 18.02 14.5 17.76 14.5 17.5C14.5 17.24 14.61 16.98 14.79 16.79C15.16 16.42 15.84 16.42 16.21 16.79C16.39 16.98 16.5 17.24 16.5 17.5C16.5 17.76 16.39 18.02 16.21 18.21ZM16.21 14.71C16.16 14.75 16.11 14.79 16.06 14.83C16 14.87 15.94 14.9 15.88 14.92C15.82 14.95 15.76 14.97 15.7 14.98C15.63 14.99 15.56 15 15.5 15C15.24 15 14.98 14.89 14.79 14.71C14.61 14.52 14.5 14.26 14.5 14C14.5 13.74 14.61 13.48 14.79 13.29C14.89 13.2 14.99 13.13 15.12 13.08C15.3 13 15.5 12.98 15.7 13.02C15.76 13.03 15.82 13.05 15.88 13.08C15.94 13.1 16 13.13 16.06 13.17C16.11 13.21 16.16 13.25 16.21 13.29C16.39 13.48 16.5 13.74 16.5 14C16.5 14.26 16.39 14.52 16.21 14.71Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.01 20.02C15.9861 20.02 20.02 15.9861 20.02 11.01C20.02 6.03391 15.9861 2 11.01 2C6.03391 2 2 6.03391 2 11.01C2 15.9861 6.03391 20.02 11.01 20.02Z"
                  fill="#030303"
                />
                <path
                  d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z"
                  fill="#030303"
                />
              </svg>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon/bold/notification">
                  <g id="notification">
                    <path
                      id="Vector"
                      d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
                      fill="currentColor"
                    />
                    <path
                      id="Vector_2"
                      d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="d-flex gap-5">
          <div className="">
            <div className="d-flex gap-4">
              <div
                className="rounded-corner"
                style={{
                  width: 215,
                  height: 150,
                  padding: "20px 23px",
                  backgroundColor: "#EEF5FF",
                  display: "flex",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    background: "#2E7DF1",
                    padding: 13,
                    borderRadius: 100,
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  <NoteIcon className="text-white" width={24} height={24} />
                </div>
                <div>
                  <p>Transaksi</p>
                  <div style={{ color: "#2E7DF1", display: "flex", alignItems: "center" }}>
                    +19%
                    <div style={{ width: "fit-content", height: "fit-content", marginLeft: 5 }}>
                      <TrendIcon className="text-white" width={24} height={24} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-corner"
                style={{
                  width: 215,
                  height: 150,
                  padding: "20px 30px",
                  backgroundColor: "#EEF5FF",
                  display: "flex",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    background: "#2E7DF1",
                    padding: 13,
                    borderRadius: 100,
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  <NoteIcon className="text-white" width={24} height={24} />
                </div>
                <div>
                  <p>Psikotes</p>
                  <div style={{ color: "#2E7DF1", display: "flex", alignItems: "center" }}>
                    +11%
                    <div style={{ width: "fit-content", height: "fit-content", marginLeft: 5 }}>
                      <TrendIcon className="text-white" width={24} height={24} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-corner"
                style={{
                  width: 215,
                  height: 150,
                  padding: "20px 30px",
                  backgroundColor: "#EEF5FF",
                  display: "flex",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    background: "#2E7DF1",
                    padding: 13,
                    borderRadius: 100,
                    width: "fit-content",
                    height: "fit-content",
                  }}
                >
                  <NoteIcon className="text-white" width={24} height={24} />
                </div>
                <div>
                  <p>Konseling</p>
                  <div style={{ color: "#2E7DF1", display: "flex", alignItems: "center" }}>
                    +25%
                    <div style={{ width: "fit-content", height: "fit-content", marginLeft: 5 }}>
                      <TrendIcon className="text-white" width={24} height={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="col">
                <div style={{ marginTop: 20 }}>
                  <div style={{ display: "flex", gap: 85, justifyContent: "center", marginTop: 5 }}>
                    <h5>Statistik Psikotes</h5>
                    <select className="rounded-corner fs-7" id="waktu" name="time">
                      <option value="Harian">Harian</option>
                      <option value="Bulanan">Bulanan</option>
                      <option value="Tahunan">Tahunan</option>
                    </select>
                  </div>
                  <div
                    className="rounded-corner"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      height: 300,
                      marginTop: 20,
                      paddingBottom: "24px",
                      marginBottom: 10,
                    }}
                  >
                    <Bar
                      style={{ height: "100%", marginTop: 25 }}
                      data={{
                        labels: ["6", "7", "8", "9", "10"],
                        datasets: [
                          {
                            label: null,
                            data: [750, 600, 700, 550, 400],
                            backgroundColor: "#2E7DF1",
                            barThickness: 10,
                            borderRadius: 10,
                          },
                        ],
                      }}
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                        scales: {},
                        elements: {
                          line: {
                            borderWidth: 0,
                          },
                        },
                      }}
                    ></Bar>
                  </div>
                </div>
              </div>
            </div>
            <Container>
              <Row>
                <Col>
                  <table
                    className="mt-5 table table-bordered text-center"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "50px" }}>
                          Kode Pesanan <ArrowIcon></ArrowIcon>{" "}
                        </th>
                        <th scope="col" style={{ width: "100px" }}>
                          Nama Pemesanan <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col" style={{ width: "100px" }}>
                          Tanggal <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col" style={{ width: "100px" }}>
                          Harga <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col" style={{ width: "100px" }}>
                          Status <ArrowIcon></ArrowIcon>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="mt-2">{item.code}</div>
                          </td>
                          <td>
                            <div className="mt-2">{item.name}</div>
                          </td>
                          <td>
                            <div className="mt-2">{item.date}</div>
                          </td>
                          <td>
                            <div className="mt-2">{item.price}</div>
                          </td>
                          <td>
                            <div
                              style={
                                item.status === "Berhasil"
                                  ? roundBackgroundStyleBerhasil
                                  : roundBackgroundStylePending
                              }
                            >
                              {item.status}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <div style={{ display: "flex", gap: 66, justifyItems: "center" }}>
              <h5>Analisis Transaksi</h5>
              <select className="rounded-corner fs-7" id="waktu" name="time">
                <option value="Harian">Harian</option>
                <option value="Bulanan">Bulanan</option>
                <option value="Tahunan">Tahunan</option>
              </select>
            </div>
            <div
              className="rounded-corner"
              style={{ width: 407, height: 204, marginTop: 40, marginRight: 40 }}
            >
              <Bar
                style={{ height: 180, marginTop: 25 }}
                data={{
                  labels: ["6", "7", "8", "9", "10"],
                  datasets: [
                    {
                      label: null,
                      data: [750, 600, 700, 550, 400],
                      backgroundColor: "#2E7DF1",
                      barThickness: 10,
                      borderRadius: 10,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {},
                  elements: {
                    line: {
                      borderWidth: 0,
                    },
                  },
                }}
              ></Bar>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="rounded-corner border p-4"
                style={{ width: 190, height: 190, marginTop: 30, marginRight: 27 }}
              >
                <div
                  className="text-primary bg-primary d-flex justify-content-center align-items-center rounded-circle fw-bold"
                  style={{ width: 50, height: 50 }}
                >
                  <NoteIcon className="text-white" width={24} height={24} />
                </div>
                <div className="fs-7 my-3">Total Sesi Psikotes</div>
                <div className="fs-6 fw-bold">
                  12345
                  <span className="badge ms-2 bg-primary-transparant text-primary fs-7">52+</span>
                </div>
              </div>
              <div
                className="rounded-corner border p-4"
                style={{ width: 190, height: 190, marginTop: 30 }}
              >
                <div
                  className="text-primary bg-primary d-flex justify-content-center align-items-center rounded-circle fw-bold"
                  style={{ width: 50, height: 50 }}
                >
                  <BatteryIcon className="text-white" width={24} height={24} />
                </div>
                <div className="fs-7 my-3">Total Sesi Konseling</div>
                <div className="fs-6 fw-bold">
                  12345
                  <span className="badge ms-2 bg-primary-transparant text-primary fs-7">52+</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
