import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { ReactComponent as DashboardIcon } from "assets/icon/svg/DashboardIcon.svg";
import { ReactComponent as DashboardClickIcon } from "assets/icon/svg/DashboardOnClickIcon.svg";
import { ReactComponent as StatisticIcon } from "assets/icon/svg/StatistikIcon.svg";
import { ReactComponent as StatisticClickIcon } from "assets/icon/svg/StatisticOnClickIcon.svg";
import { ReactComponent as PembayaranIcon } from "assets/icon/svg/PembayaranIcon.svg";
import { ReactComponent as PembayaranClickIcon } from "assets/icon/svg/PembayaranOnClickIcon.svg";
import { ReactComponent as PsikologIcon } from "assets/icon/svg/PsikologIcon.svg";
import { ReactComponent as PsikologClickIcon } from "assets/icon/svg/PsikologOnClickIcon.svg";
import { ReactComponent as CustomerIcon } from "assets/icon/svg/CustomerIcon.svg";
import { ReactComponent as CustomerClickIcon } from "assets/icon/svg/CustomerOnClickIcon.svg";
import { ReactComponent as ArrowIcon } from "assets/icon/svg/ArrowIcon.svg";
import { ReactComponent as LogOutIcon } from "assets/icon/svg/LogOutIcon.svg";
import { ReactComponent as RingIcon } from "assets/icon/svg/notification.svg";
import { ReactComponent as CalendarIcon } from "assets/icon/svg/calendar.svg";
import { ReactComponent as SearchIcon } from "assets/icon/svg/SearchIcon.svg";
import { ReactComponent as QRIcon } from "assets/icon/svg/QRCodeIcon.svg";

const Pembayaran = () => {
  const initialData = [
    {
      code: "#111111111",
      name: "AAAAAAA",
      date: "10/6/2020",
      price: "Rp. 50.000",
      status: "Berhasil",
    },
    {
      code: "#222222222",
      name: "BBBBBBB",
      date: "10/6/2021",
      price: "Rp. 150.000",
      status: "Pending",
    },
    {
      code: "#333333333",
      name: "CCCCCCC",
      date: "10/6/2022",
      price: "Rp. 250.000",
      status: "Berhasil",
    },
    {
      code: "#444444444",
      name: "DDDDDDD",
      date: "10/6/2023",
      price: "Rp. 300.000",
      status: "Pending",
    },
    {
      code: "#555555555",
      name: "EEEEEEE",
      date: "10/6/2024",
      price: "Rp. 450.000",
      status: "Berhasil",
    },
    {
      code: "#666666666",
      name: "FFFFFFF",
      date: "10/6/2025",
      price: "Rp. 550.000",
      status: "Pending",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState(initialData);

  const handleVerifikasiClick = () => {
    if (selectedItem) {
      // Assuming you have a unique identifier for each item, like 'code'
      const updatedStatus = selectedItem.status === "Pending" ? "Berhasil" : "Pending";
      const updatedData = data.map((item) =>
        item.code === selectedItem.code ? { ...item, status: updatedStatus } : item
      );
      setData(updatedData);
    }
  };

  const handleRowClick = (item) => {
    setSelectedItem((prevSelectedItem) => {
      // Toggle visibility when clicking on the same row
      return prevSelectedItem && prevSelectedItem.code === item.code ? null : item;
    });
  };

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

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const getIconComponentDashboard = () => {
    return activeButton === "dashboard" ? (
      <DashboardClickIcon className="me-2" />
    ) : (
      <DashboardIcon className="me-2" />
    );
  };
  const getIconComponentStatistik = () => {
    return activeButton === "statistik" ? (
      <StatisticClickIcon className="me-2" />
    ) : (
      <StatisticIcon className="me-2" />
    );
  };
  const getIconComponentPembayaran = () => {
    return activeButton === "pembayaran" ? (
      <PembayaranClickIcon className="me-2" />
    ) : (
      <PembayaranIcon className="me-2" />
    );
  };
  const getIconComponentPsikolog = () => {
    return activeButton === "psikolog" ? (
      <PsikologClickIcon className="me-2" />
    ) : (
      <PsikologIcon className="me-2" />
    );
  };
  const getIconComponentCostumer = () => {
    return activeButton === "customer" ? (
      <CustomerClickIcon className="me-2" />
    ) : (
      <CustomerIcon className="me-2" />
    );
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#ffffff" }}>
      <Container fluid>
        <Row className="pt-3 ms-3 me-3">
          <Col md={2}>
            <h2 className="text-primary">BiLing.ID</h2>
            <div>
              <button
                className={`rounded-corner pt-3 mt-3 ${
                  activeButton === "dashboard" ? "bg-primary text-white" : "bg-transparent"
                }`}
                style={{ border: "1px solid white", width: "200px" }}
              >
                <p
                  style={{
                    color: activeButton === "dashboard" ? "white" : "#979797",
                    fontWeight: activeButton === "dashboard" ? "bold" : "normal",
                    textAlign: "left",
                    paddingLeft: "25px",
                  }}
                  onClick={() => handleButtonClick("dashboard")}
                >
                  {getIconComponentDashboard()} Dashboard
                </p>
              </button>
            </div>
            <div className="mt-2">
              <button
                className={`rounded-corner pt-3 ${
                  activeButton === "statistik" ? "bg-primary text-white" : "bg-transparent"
                }`}
                style={{ border: "1px solid white", width: "200px" }}
              >
                <p
                  style={{
                    color: activeButton === "statistik" ? "white" : "#979797",
                    fontWeight: activeButton === "statistik" ? "bold" : "normal",
                    textAlign: "left",
                    paddingLeft: "25px",
                  }}
                  onClick={() => handleButtonClick("statistik")}
                >
                  {getIconComponentStatistik()} Statistik
                </p>
              </button>
            </div>
            <div className="mt-2">
              <button
                className={`rounded-corner pt-3 ${
                  activeButton === "pembayaran" ? "bg-primary text-white" : "bg-transparent"
                }`}
                style={{ border: "1px solid white", width: "200px" }}
              >
                <p
                  style={{
                    color: activeButton === "pembayaran" ? "white" : "#979797",
                    fontWeight: activeButton === "pembayaran" ? "bold" : "normal",
                    textAlign: "left",
                    paddingLeft: "25px",
                  }}
                  onClick={() => handleButtonClick("pembayaran")}
                >
                  {getIconComponentPembayaran()} Pembayaran
                </p>
              </button>
            </div>
            <div className="mt-2">
              <button
                className={`rounded-corner pt-3 ${
                  activeButton === "psikolog" ? "bg-primary text-white" : "bg-transparent"
                }`}
                style={{ border: "1px solid white", width: "200px" }}
              >
                <p
                  style={{
                    color: activeButton === "psikolog" ? "white" : "#979797",
                    fontWeight: activeButton === "psikolog" ? "bold" : "normal",
                    textAlign: "left",
                    paddingLeft: "25px",
                  }}
                  onClick={() => handleButtonClick("psikolog")}
                >
                  {getIconComponentPsikolog()} Psikolog
                </p>
              </button>
            </div>
            <div className="mt-2">
              <button
                className={`rounded-corner pt-3 ${
                  activeButton === "customer" ? "bg-primary text-white" : "bg-transparent"
                }`}
                style={{ border: "1px solid white", width: "200px" }}
              >
                <p
                  style={{
                    color: activeButton === "customer" ? "white" : "#979797",
                    fontWeight: activeButton === "customer" ? "bold" : "normal",
                    textAlign: "left",
                    paddingLeft: "25px",
                  }}
                  onClick={() => handleButtonClick("customer")}
                >
                  {getIconComponentCostumer()} Customer
                </p>
              </button>
              <button
                className={`rounded-corner pt-3`}
                style={{
                  marginTop: "350px",
                  border: "1px solid white",
                  width: "200px",
                  backgroundColor: "white",
                }}
              >
                <p
                  className="text-danger fw-bold"
                  style={{ textAlign: "left", paddingLeft: "25px" }}
                >
                  <LogOutIcon className="me-2"></LogOutIcon> LogOut
                </p>
              </button>
            </div>
          </Col>
          <Col md={7}>
            <div className="mt-2 ms-5">
              <h4>Pembayaran</h4>
            </div>
            <Container>
              <Row>
                <Col>
                  <table
                    class="mt-5 table table-bordered text-center"
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
                        <tr key={index} onClick={() => handleRowClick(item)}>
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
                              <b> {item.status} </b>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col md={3}>
            <div>
              <div className="d-flex align-items-center">
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
              <div className="mt-5">
                {selectedItem && (
                  <div>
                    <p>
                      <b>Detail Pembayaran</b>
                    </p>
                    <p className="mt-4">
                      <b>Kode Pesanan</b>
                    </p>
                    <p className="mt-2">{selectedItem.code}</p>
                    <p className="mt-4">
                      <b>Nama Pemesanan</b>
                    </p>
                    <p className="mt-2">{selectedItem.name}</p>
                    <p className="mt-4">
                      <b>Tanggal</b>
                    </p>
                    <p className="mt-2">{selectedItem.date}</p>
                    <p className="mt-4">
                      <b>Harga</b>
                    </p>
                    <p className="mt-2">{selectedItem.price}</p>
                    <p className="mt-4">
                      <b>Metode Pembayaran</b>
                    </p>
                    <p className="mt-2">Gopay</p>
                    <p className="mt-4">
                      <b>Kode Pembayaran</b>
                    </p>
                    <p className="mt-2">
                      <QRIcon></QRIcon>
                    </p>
                    <div className="mt-4">
                      <button className="btn btn-primary" onClick={handleVerifikasiClick}>
                        Verifikasi Pembayaran
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pembayaran;
