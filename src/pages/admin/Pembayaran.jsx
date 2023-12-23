import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { ReactComponent as DashboardIcon } from "assets/icon/svg/DashboardIcon.svg";
import { ReactComponent as StatisticIcon } from "assets/icon/svg/chart-2.svg";
import { ReactComponent as PembayaranClickIcon } from "assets/icon/svg/PembayaranOnClickIcon.svg";
import { ReactComponent as PsikologIcon } from "assets/icon/svg/PsikologIcon.svg";
import { ReactComponent as CustomerIcon } from "assets/icon/svg/CustomerIcon.svg";
import { ReactComponent as ArrowIcon } from "assets/icon/svg/ArrowIcon.svg";
import { ReactComponent as LogOutIcon } from "assets/icon/svg/LogOutIcon.svg";
import { ReactComponent as RingIcon } from "assets/icon/svg/notification.svg";
import { ReactComponent as CalendarIcon } from "assets/icon/svg/calendar.svg";
import { ReactComponent as SearchIcon } from "assets/icon/svg/SearchIcon.svg";
import { ReactComponent as QRIcon } from "assets/icon/svg/QRCodeIcon.svg";
import { useNavigate } from "react-router-dom";

const Pembayaran = () => {
  const navigate = useNavigate();
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
      const updatedStatus = selectedItem.status === "Pending" ? "Berhasil" : "Pending";
      const updatedData = data.map((item) =>
        item.code === selectedItem.code ? { ...item, status: updatedStatus } : item
      );
      setData(updatedData);
    }
  };

  const handleRowClick = (item) => {
    setSelectedItem((prevSelectedItem) => {
      return prevSelectedItem && prevSelectedItem.code === item.code ? null : item;
    });
  };

  return (
    <div className="min-vh-100 bg-white" >
        <Row className="pt-3 ms-3 me-3">
          <Col md={2}>
            <h2 className="text-primary">BiLing.ID</h2>


            <div className="mt-5">
              <button className="btn-primary2" onClick={() => navigate("/admin/dashboard")}>
                <DashboardIcon /> Dashboard
              </button>
            </div>

            
            <div className="mt-2">
              <button className="btn-primary2">
                <StatisticIcon /> Statistik
              </button>
            </div>

            <div className="mt-2">
              <button className="btn-primary2onclick">
                 <PembayaranClickIcon /> <b>Pembayaran</b>
              </button>
            </div>

            <div className="mt-2">
              <button className="btn-primary2" onClick={() => navigate("/admin/psikolog")}>
                 <PsikologIcon /> Psikolog
              </button>
            </div>

            <div className="mt-2">
              <button className="btn-primary2" onClick={() => navigate("/admin/klien")}>
                 <CustomerIcon/> Customer
              </button>
            </div>

            <div className="mt-5">
              <button className="btn-primary2-danger" >
                <LogOutIcon /> Logout
              </button>
            </div>
            
          </Col>
          <Col md={7}>
            <div className="mt-3 ms-5">
              <h4>Pembayaran</h4>
            </div>
            <Container>
              <Row>
                <Col>
                  <table class="mt-5 table table-bordered text-center">
                    <thead>
                      <tr>
                        <th scope="col w-50">
                          Kode Pesanan <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col w-50">
                          Nama Pemesanan <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col w-50">
                          Tanggal <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col w-50">
                          Harga <ArrowIcon></ArrowIcon>
                        </th>
                        <th scope="col w-50">
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
                      <button className="btn-primary2onclick" onClick={handleVerifikasiClick}>
                        Verifikasi Pembayaran
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
    </div>
  );
};

export default Pembayaran;
