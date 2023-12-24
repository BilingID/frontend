
import { Button, Modal, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';
import { ReactComponent as DashboardIcon } from "assets/icon/svg/DashboardIcon.svg";
import { ReactComponent as PembayaranIcon } from "assets/icon/svg/PembayaranIcon.svg";
import { ReactComponent as PsikologIcon } from "assets/icon/svg/PsikologIcon.svg";
import { ReactComponent as CustomerClickIcon } from "assets/icon/svg/CustomerOnClickIcon.svg";
import { ReactComponent as ArrowIcon } from "assets/icon/svg/ArrowIcon.svg";
import { ReactComponent as LogOutIcon } from "assets/icon/svg/LogOutIcon.svg";
import { ReactComponent as RingIcon } from "assets/icon/svg/notification.svg";
import { ReactComponent as CalendarIcon } from "assets/icon/svg/calendar.svg";
import { ReactComponent as SearchIcon } from "assets/icon/svg/SearchIcon.svg";
import { ReactComponent as AlertIcon } from "assets/icon/svg/Alert.svg";
import { useNavigate } from "react-router-dom";


const Pembayaran = () => {
  const navigate = useNavigate();
  const [tambahShow, setTambahShow] = useState(false);
  const handleTambahShow = () => setTambahShow(true);
  const handleTambahClose = () => setTambahShow(false);

  const handleSend = () => {
    console.log('Updated Data:', tambahShow);
    handleTambahClose();
  };


  const initialData = [
    { id: '#111111111', email: 'AAAAAAA@gmail.com', name: 'AAAAAAA', verifikasi: 'Sudah'},
    { id: '#222222222', email: 'BBBBBBB@gmail.com', name: 'BBBBBBB', verifikasi: 'Sudah'},
    { id: '#333333333', email: 'CCCCCCC@gmail.com', name: 'CCCCCCC', verifikasi: 'Sudah'},
    { id: '#444444444', email: 'DDDDDDD@gmail.com', name: 'DDDDDDD', verifikasi: 'Sudah'},
    { id: '#555555555', email: 'EEEEEEE@gmail.com', name: 'EEEEEEE', verifikasi: 'Sudah'},
    { id: '#666666666', email: 'FFFFFFF@gmail.com', name: 'FFFFFFF', verifikasi: 'Sudah'},
  ];



  const [data] = useState(initialData);


  return (
    <div className='min-vh-100 bg-white'>
        <Row className="pt-3 ms-3 me-3">
            <Col md={2}>
            <h2 className="text-primary">
              BiLing.ID
            </h2>

            <div className='mt-5'> 
              <button className="btn-primary2" onClick={() => navigate("/admin/dashboard")}>
                <DashboardIcon /> Dashboard
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
            <button className="btn-primary2onclick" onClick={() => navigate("/admin/klien")}>
                <CustomerClickIcon /> <b>Customer</b>
              </button>
            </div>

            <div className='mt-5'>
              <button className="btn-primary2-danger">
                <LogOutIcon /> <b>Logout</b>
              </button>
            </div>

            </Col>
            <Col md={8}>
              <div className='mt-3 ms-5'>
                <h4>
                  Data Klien
                </h4>
              </div>              
              <Row>
                <Col>
                <table class="mt-5 table table-bordered text-center">
                  <thead>
                    <tr>
                      <th scope="col w-50">ID <ArrowIcon></ArrowIcon> </th>
                      <th scope="col w-100">Email <ArrowIcon></ArrowIcon></th>
                      <th scope="col w-100">Nama Lengkap <ArrowIcon></ArrowIcon></th>
                      <th scope="col w-100">Verifikasi <ArrowIcon></ArrowIcon></th>
                      <th scope="col w-100">Aksi <ArrowIcon></ArrowIcon></th>
                    </tr>
                  </thead>

                  <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className='mt-2'>{item.id}</div>
                      </td>
                      <td>
                        <div className='mt-2'>{item.email}</div>
                      </td>
                      <td>
                        <div className='mt-2'>{item.name}</div>
                      </td>
                      <td>
                        <div className={item.status === 'Sudah' ? "rounded-pill bg-pending text-pending p-2" : "rounded-pill bg-berhasil text-berhasil p-2"}>
                            <b> {item.verifikasi} </b>
                        </div>
                      </td>
                      <td>
                        <div>
                          <button className="rounded-pill bg-ubah text-white p-2 "> 
                            <b> Kelola </b>
                          </button>
                          <button className="rounded-pill bg-hapus text-white p-2" onClick={handleTambahShow}> 
                            <b> Hapus </b>
                          </button>

                          <Modal show={tambahShow} onHide={handleTambahClose}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body className='text-center'>
                              <AlertIcon /> <br />
                              <div className='mt-5'>
                                Apakah Anda Yakin untuk meblokir Klien ini?

                              </div>
                                

                            </Modal.Body>
                            <Modal.Footer className="d-flex justify-content-center">
                              <Button className='rounded-pill bg-ubah text-white p-2' onClick={handleSend}>
                                Batal
                              </Button>
                              <Button className='rounded-pill bg-hapus text-white p-2' onClick={handleSend}>
                                Blokir
                              </Button>
                              
                            </Modal.Footer>
                          </Modal>









                        </div>
                      </td>
                    </tr>
                  ))}
                  </tbody>

                </table>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
            <div>
              <div className="d-flex align-items-center mt-2">
                <p className="mb-0">
                  <CalendarIcon className='me-2'></CalendarIcon> 10/06/23
                </p>
                <button className="btn ms-1"><SearchIcon></SearchIcon></button>
                <button className="btn ms-1"><RingIcon></RingIcon></button>
              </div>
              </div>
            </Col>
        </Row>
    </div>
  );
};

export default Pembayaran;
