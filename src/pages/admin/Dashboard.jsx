import { ReactComponent as NoteIcon } from "assets/icon/svg/note.svg";
import { ReactComponent as BatteryIcon } from "assets/icon/svg/battery-empty.svg";
import { ReactComponent as TrendIcon } from "assets/icon/svg/trend-up.svg";
import { ReactComponent as PembayaranIcon } from "assets/icon/svg/PembayaranIcon.svg";
import { ReactComponent as PsikologIcon } from "assets/icon/svg/PsikologIcon.svg";
import { ReactComponent as CustomerIcon } from "assets/icon/svg/CustomerIcon.svg";
import { ReactComponent as DashboardClick } from "assets/icon/svg/DashboardOnClickIcon.svg";
import { ReactComponent as RingIcon } from "assets/icon/svg/notification.svg";
import { ReactComponent as CalendarIcon } from "assets/icon/svg/calendar.svg";
import { ReactComponent as SearchIcon } from "assets/icon/svg/SearchIcon.svg";
import { ReactComponent as LogOutIcon } from "assets/icon/svg/LogOutIcon.svg";
import { Row, Col } from 'react-bootstrap'
import { ReactComponent as ArrowIcon } from "assets/icon/svg/ArrowIcon.svg"
import { Bar } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler, BarElement } from "chart.js"
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate();
  const initialData = [
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

  return (
    <div className="min-vh-100 bg-white">

  <Row className="pt-3 ms-3 me-3">
    <Col md={2}>
      <h2 className="text-primary">
        BiLing.ID
      </h2>

      <div className='mt-5'> 
              <button className="btn-primary2onclick" onClick={() => navigate("/admin/dashboard")}>
                <DashboardClick /> <b> Dashboard </b>
              </button>
            </div>

            <div className='mt-2'>
            <button className="btn-primary2" onClick={() => navigate("/statuspembayaran")}>
                <PembayaranIcon /> Pembayaran
              </button>
            </div>

            <div className='mt-2'>
            <button className="btn-primary2" onClick={() => navigate("/admin/psikolog")}>
                <PsikologIcon /> Psikolog
              </button>
            </div>

            <div className='mt-2'>
            <button className="btn-primary2" onClick={() => navigate("/admin/klien")}>
                <CustomerIcon /> Customer
              </button>
            </div>

            <div className='mt-5'>
              <button className="btn-primary2-danger">
                <LogOutIcon /> <b>Logout</b>
              </button>
            </div>
    </Col>

    <Col md={7}>

    <div className='mt-3 mb-5'>
      <h4>
        Dashboard
      </h4>
    </div>  
    <Row>
      <Col>
        <div className="">
        <div className="d-flex gap-4">
          <div className="rounded-corner bg-Dashboard">
            <div className="bg-sertif-icon">
              <NoteIcon className="text-white"/>
            </div>
            <div>
              <p>Transaksi</p>
              <div className="text-primary d-flex align-items-center">
                +19%
                <div className="ml-2">
                  <TrendIcon className="text-white"/>
                </div>
              </div>

            </div>
          </div>
          
          <div className="rounded-corner bg-Dashboard">
            <div className="bg-sertif-icon">
              <NoteIcon className="text-white"/>
            </div>
            <div>
              <p>Psikotes</p>
              <div className="text-primary d-flex align-items-center">
                +11%
                <div className="ml-2">
                  <TrendIcon className="text-white"/>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-corner bg-Dashboard">
            <div className="bg-sertif-icon">
              <NoteIcon className="text-white" />
            </div>
            <div>
              <p>Konseling</p>
              <div className="text-primary d-flex align-items-center">
                +25%
                <div className="ml-2">
                  <TrendIcon className="text-white"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

              <div className="d-flex justify-content-between">
                <div className="col">
                  <div className="mt-4">
                    <div className="d-flex gap-3 mt-1">
                      <h5>Statistik Psikotes</h5>
                      <select className="rounded-corner fs-7" id="waktu" name="time">
                        <option value="Harian">Harian</option>
                        <option value="Bulanan">Bulanan</option>
                        <option value="Tahunan">Tahunan</option>
                      </select>
                    </div>

                <div className="rounded-corner d-flex flex-column w-75 h-100 pb-3 mb-2">
                  <Bar className="h-100 mt-3" data={{
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
                  }} options={{
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
                  }}></Bar>
                </div>
                </div>
              </div>
            </div>

      <table class="mt-5 table table-bordered text-center">
                    <thead>
                      <tr>
                        <th scope="col" class="col-2">
                          Kode Pesanan <ArrowIcon />
                        </th>
                        <th scope="col" class="col-2 ">
                          Nama Pemesanan <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col" class="col-2">
                          Tanggal <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col" class="col-2">
                          Harga <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col" class="col-2"> 
                          Status <ArrowIcon></ArrowIcon>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {initialData.map((item, index) => (
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
                          <div className={item.status === "Berhasil" ? "rounded-pill bg-berhasil text-berhasil p-2" : "rounded-pill bg-pending text-pending p-2"}>
                            <b>{item.status}</b>
                          </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
      </Col>
    </Row>
    </Col>
    <Col md={3}>


              
      
    <div>
    <div className="d-flex align-items-center mb-5">
        <p className="mb-0">
          <CalendarIcon className="me-2"></CalendarIcon> 10/06/23
        </p>
      <button className="btn ms-5">
        <SearchIcon></SearchIcon>
      </button>
      <button className="btn ms-5">
        <RingIcon></RingIcon>
      </button>
    </div>

      <div className="d-flex gx-3 mt-5">
        <h5 className="me-3">Analisis Transaksi</h5>
        <select className="rounded-corner fs-7" id="waktu" name="time">
          <option value="Harian">Harian</option>
          <option value="Bulanan">Bulanan</option>
          <option value="Tahunan">Tahunan</option>
        </select>
      </div>
      <div className="rounded-corner" style={{ width: 407, height: 204, marginTop: 40, marginRight: 40 }}>
        <Bar className="h-100 mt-3" data={{
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
                }} options={{
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
                }}></Bar>
      </div>

      <div className="d-flex">
        <div className="rounded-corner border p-4 mt-4 me-4">
          <div
            className="bg-sertif-icon">
            <NoteIcon className="text-white" />
          </div>
          <div className="fs-7 my-3">Total Sesi Psikotes</div>
          <div className="fs-6 fw-bold">
            12345
            <span className="badge ms-2 bg-primary-transparant text-primary fs-7">52+</span>
          </div>
        </div>
        <div className="rounded-corner border p-4 mt-4 me-4">
          <div
            className="bg-sertif-icon">
            <BatteryIcon className="text-white" />
          </div>
          <div className="fs-7 my-3">Total Sesi Konseling</div>
          <div className="fs-6 fw-bold">
            12345
            <span className="badge ms-2 bg-primary-transparant text-primary fs-7">52+</span>
          </div>
        </div>
      </div>
    </div>
    </Col>
  </Row>
  </div>


  );
};

export default Dashboard;
