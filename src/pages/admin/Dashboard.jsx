import { ReactComponent as NoteIcon } from "assets/icon/svg/note.svg"
import { ReactComponent as BatteryIcon } from "assets/icon/svg/battery-empty.svg"
import { ReactComponent as ProfileIcon } from "assets/icon/svg/profile.svg"
import { ReactComponent as PeopleIcon } from "assets/icon/svg/people.svg"
import { ReactComponent as TrendIcon } from "assets/icon/svg/trend-up.svg"
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { ReactComponent as ArrowIcon } from "assets/icon/svg/arrow-right.svg"
import { Bar } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler, BarElement } from "chart.js"

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
)
const Dashboard = () => {
  const data = [
    { code: '#123456789', name: 'Arla Sifhana Putri', date: '10/6/2023', price: 'Rp. 50.000', status: 'Berhasil' },
    { code: '#123456789', name: 'Arla Sifhana Putri', date: '10/6/2023', price: 'Rp. 50.000', status: 'Pending' },
    { code: '#123456789', name: 'Arla Sifhana Putri', date: '10/6/2023', price: 'Rp. 50.000', status: 'Berhasil' },
    { code: '#123456789', name: 'Arla Sifhana Putri', date: '10/6/2023', price: 'Rp. 50.000', status: 'Pending' },
    { code: '#123456789', name: 'Arla Sifhana Putri', date: '10/6/2023', price: 'Rp. 50.000', status: 'Berhasil' },
    { code: '#123456789', name: 'Arla Sifhana Putri', date: '10/6/2023', price: 'Rp. 50.000', status: 'Pending' },
  ];
  const roundBackgroundStylePending = {

    backgroundColor: '#FEF8E8', // Replace with the desired background color
    color: '#F5C556',
    borderRadius: '30px', // Adjust the border-radius as needed
    padding: '5px', // Add padding for better appearance
    display: 'inline-block', // Ensure the background color wraps around the text
    width: '100px',
  };
  
  const roundBackgroundStyleBerhasil = {
    backgroundColor: '#EEF5FF', // Replace with the desired background color
    color: '#2E7DF1',
    borderRadius: '30px', // Adjust the border-radius as needed
    padding: '5px', // Add padding for better appearance
    display: 'inline-block', // Ensure the background color wraps around the text
    width: '100px',
  };
  
  

  return (
    <div className="rounded" style={{ marginLeft: 220 }}>
      <div className="d-flex gap-5">
        <div>

          <div className="d-flex gap-4">
            <div className="rounded-corner" style={{ width: 215, height: 150, padding: '20px 23px', border: "1px solid black", backgroundColor: "#EEF5FF", display: 'flex', gap: "15px" }}>
              <div style={{ background: "#2E7DF1", padding: 13, borderRadius: 100, width: "fit-content", height: "fit-content" }}>
                <NoteIcon className="text-white" width={24} height={24} />
              </div>
              <div>
                <p>
                  Transaksi
                </p>
                <div style={{ color: "#2E7DF1", display: 'flex', alignItems: "center" }}>
                  +19%
                  <div style={{ width: "fit-content", height: "fit-content", marginLeft: 5 }}>
                    <TrendIcon className="text-white" width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-corner" style={{ width: 215, height: 150, padding: "20px 30px", border: "1px solid black", backgroundColor: "#EEF5FF", display: "flex", gap: "15px" }}>
              <div style={{ background: "#2E7DF1", padding: 13, borderRadius: 100, width: "fit-content", height: "fit-content" }}>
                <NoteIcon className="text-white" width={24} height={24} />
              </div>
              <div>
                <p>
                  Psikotes
                </p>
                <div style={{ color: "#2E7DF1", display: 'flex', alignItems: "center" }}>
                  +11%
                  <div style={{ width: "fit-content", height: "fit-content", marginLeft: 5 }}>
                    <TrendIcon className="text-white" width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-corner" style={{ width: 215, height: 150, padding: "20px 30px", border: "1px solid black", backgroundColor: "#EEF5FF", display: "flex", gap: "15px" }}>
              <div style={{ background: "#2E7DF1", padding: 13, borderRadius: 100, width: "fit-content", height: "fit-content" }}>
                <NoteIcon className="text-white" width={24} height={24} />
              </div>
              <div>
                <p>
                  Konseling
                </p>
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
            <div className='col'>
              <div style={{ marginTop: 20 }}>
                <div style={{ display: "flex", gap: 85, alignItems: "center" }}>
                  <h5>Statistik Psikotes</h5>
                  <select className='rounded-corner fs-7' id="waktu" name="time">
                    <option value="Harian">Harian</option>
                    <option value="Bulanan">Bulanan</option>
                    <option value="Tahunan">Tahunan</option>
                  </select>
                </div>
                <div className="rounded-corner" style={{ width: 337, height: 225, border: "1px solid black", marginTop: 20 }}>
                <Bar
                    style={{ height: 220, marginTop: 25 }}
                    data={{
                      labels: ["6", "7", "8", "9", "10"],
                      datasets: [
                        {
                          label: null,
                          data: [750, 600, 700, 550, 400],
                          backgroundColor: '#2E7DF1',
                          barThickness: 10,
                          borderRadius: 10,


                        }
                      ]
                    }}
                    options={{

                      plugins: {
                        legend: {
                          display: false,
                        }
                      },
                      scales: {
                      },
                      elements: {
                        line: {
                          borderWidth: 0,
                        },
                      },
                    }}
                  >

                  </Bar>
                </div>
                  
              </div>
            </div>

            <div className='col'>
              <div style={{ marginTop: 20 }}>
                <div style={{ display: "flex", marginLeft: 25, gap: 66, alignItems: "center" }}>
                  <h5>Statistik Konseling</h5>
                  <select className='rounded-corner fs-7' id="waktu" name="time">
                    <option value="Harian">Harian</option>
                    <option value="Bulanan">Bulanan</option>
                    <option value="Tahunan">Tahunan</option>
                  </select>
                </div>
                <div className="rounded-corner" style={{ width: 337, height: 225, marginLeft: 23, border: "1px solid black", marginTop: 20 }}>
                  <Bar
                    style={{ height: 220, marginTop: 25 }}
                    data={{
                      labels: ["6", "7", "8", "9", "10"],
                      datasets: [
                        {
                          label: null,
                          data: [750, 600, 700, 550, 400],
                          backgroundColor: '#2E7DF1',
                          barThickness: 10,
                          borderRadius: 10
                        }
                      ]
                    }}
                    options={{

                      plugins: {
                        legend: {
                          display: false,
                        }
                      },
                      scales: {
                      },
                      elements: {
                        line: {
                          borderWidth: 0,
                        },
                      },
                    }}
                  >

                  </Bar>
                </div>
              </div>
            </div>
          </div>
          <Container>
            <Row>
              <Col>
                <table className="mt-5 table table-bordered text-center" style={{ backgroundColor: 'transparent' }}>
                  <thead >
                    <tr>
                      <th scope="col" style={{ width: '50px' }}>Kode Pesanan <ArrowIcon></ArrowIcon> </th>
                      <th scope="col" style={{ width: '100px' }}>Nama Pemesanan <ArrowIcon></ArrowIcon></th>
                      <th scope="col" style={{ width: '100px' }}>Tanggal <ArrowIcon></ArrowIcon></th>
                      <th scope="col" style={{ width: '100px' }}>Harga <ArrowIcon></ArrowIcon></th>
                      <th scope="col" style={{ width: '100px' }}>Status <ArrowIcon></ArrowIcon></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className='mt-2'>{item.code}</div>
                        </td>
                        <td>
                          <div className='mt-2'>{item.name}</div>
                        </td>
                        <td>
                          <div className='mt-2'>{item.date}</div>
                        </td>
                        <td>
                          <div className='mt-2'>{item.price}</div>
                        </td>
                        <td>
                          <div style={item.status === 'Berhasil' ? roundBackgroundStyleBerhasil : roundBackgroundStylePending}>
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
            <h5>
              Analisis Transaksi
            </h5>
            <select className='rounded-corner fs-7' id="waktu" name="time">
              <option value="Harian">Harian</option>
              <option value="Bulanan">Bulanan</option>
              <option value="Tahunan">Tahunan</option>
            </select>
          </div>
          <div className="rounded-corner" style={{ width: 407, height: 204, border: "1px solid black", marginTop: 40, marginRight: 40 }}>
          <Bar
                    style={{ height: 180, marginTop: 25 }}
                    data={{
                      labels: ["6", "7", "8", "9", "10"],
                      datasets: [
                        {
                          label: null,
                          data: [750, 600, 700, 550, 400],
                          backgroundColor: '#2E7DF1',
                          barThickness: 10,
                          borderRadius: 10,
                        }
                      ]
                    }}
                    options={{

                      plugins: {
                        legend: {
                          display: false,
                        }
                      },
                      scales: {
                      },
                      elements: {
                        line: {
                          borderWidth: 0,
                        },
                      },
                    }}
                  >

                  </Bar>
          </div>
          <div style={{ display: 'flex' }}>
            <div className='rounded-corner border p-4' style={{ width: 190, height: 190, marginTop: 30, marginRight: 27 }}>
              <div className="text-primary bg-primary d-flex justify-content-center align-items-center rounded-circle fw-bold" style={{ width: 50, height: 50 }}>
                <NoteIcon className="text-white" width={24} height={24} />
              </div>
              <div className="fs-7 my-3">Total Sesi Konseling</div>
              <div className="fs-6 fw-bold">
                12345
                <span className="badge ms-2 bg-primary-transparant text-primary fs-7">52+</span>
              </div>
            </div>
            <div className='rounded-corner border p-4' style={{ width: 190, height: 190, marginTop: 30 }}>
              <div className="text-primary bg-primary d-flex justify-content-center align-items-center rounded-circle fw-bold" style={{ width: 50, height: 50 }}>
                <BatteryIcon className="text-white" width={24} height={24} />
              </div>
              <div className="fs-7 my-3">Total Sesi Konseling</div>
              <div className="fs-6 fw-bold">
                12345
                <span className="badge ms-2 bg-primary-transparant text-primary fs-7">52+</span>
              </div>
            </div>
          </div>


          <div style={{ display: 'flex' }}>
            <div className='rounded-corner border p-4' style={{ width: 190, height: 190, marginTop: 30, marginRight: 40 }}>
              <div className="text-primary bg-primary d-flex justify-content-center align-items-center rounded-circle fw-bold" style={{ width: 50, height: 50 }}>
                <ProfileIcon className="text-white" width={24} height={24} />
              </div>
              <div className="fs-7 my-3">
                Total Psikolog
              </div>
              <div className="fs-6 fw-bold">
                12345
                <span className="badge ms-2 bg-primary-transparant text-primary fs-7">52+</span>
              </div>
            </div>
            <div className='rounded-corner border p-4' style={{ width: 190, height: 190, marginTop: 30, marginRight: 27 }}>
              <div className="text-primary bg-primary d-flex justify-content-center align-items-center rounded-circle fw-bold" style={{ width: 50, height: 50 }}>
                <PeopleIcon className="text-white" width={24} height={24} />
              </div>
              <div className="fs-7 my-3">
                Total Customer
              </div>
              <div className="fs-6 fw-bold">
                12345
                <span className="badge ms-2 bg-primary-transparant text-primary fs-7">52+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Dashboard;