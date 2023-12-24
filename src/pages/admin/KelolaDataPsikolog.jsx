import { Button, Form, Modal, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';
import { ReactComponent as DashboardIcon } from "assets/icon/svg/DashboardIcon.svg";
import { ReactComponent as PembayaranIcon } from "assets/icon/svg/PembayaranIcon.svg";
import { ReactComponent as PsikologClickIcon } from "assets/icon/svg/PsikologOnClickIcon.svg";
import { ReactComponent as CustomerIcon } from "assets/icon/svg/CustomerIcon.svg";
import { ReactComponent as ArrowIcon } from "assets/icon/svg/ArrowIcon.svg";
import { ReactComponent as LogOutIcon } from "assets/icon/svg/LogOutIcon.svg";
import { ReactComponent as RingIcon } from "assets/icon/svg/notification.svg";
import { ReactComponent as CalendarIcon } from "assets/icon/svg/calendar.svg";
import { ReactComponent as SearchIcon } from "assets/icon/svg/SearchIcon.svg";
import { ReactComponent as TambahPsikologIcon } from "assets/icon/svg/TambahIconPsikolog.svg";
import { ReactComponent as SertifikatIcon } from "assets/icon/svg/SertifIcon.svg";
import { useNavigate } from "react-router-dom";





const Pembayaran = () => {

  const [ubahShow, setUbahShow] = useState(false);
  const [tambahShow, setTambahShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleUbahShow = (item) => {
    setSelectedItem(item);
    setUbahShow(true);
  };

  const handleUbahClose = () => setUbahShow(false);
  const handleTambahShow = () => setTambahShow(true);
  const handleTambahClose = () => setTambahShow(false);


  const navigate = useNavigate();



const handleSend = () => {
  console.log('Updated Data:', selectedItem);
  handleUbahClose();
};



  const initialData = [
    { id: '#111111111', email: 'AAAAAAA@gmail.com', name: 'AAAAAAA', },
    { id: '#222222222', email: 'BBBBBBB@gmail.com', name: 'BBBBBBB', },
    { id: '#333333333', email: 'CCCCCCC@gmail.com', name: 'CCCCCCC', },
    { id: '#444444444', email: 'DDDDDDD@gmail.com', name: 'DDDDDDD', },
    { id: '#555555555', email: 'EEEEEEE@gmail.com', name: 'EEEEEEE', },
    { id: '#666666666', email: 'FFFFFFF@gmail.com', name: 'FFFFFFF', },
  ];



  const [data] = useState(initialData);


  return (
    <div className="min-vh-100 bg-white">
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
              <button className="btn-primary2onclick">
                <PsikologClickIcon /> <b>Psikolog</b>
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
            <Col md={8}>
              <div className='mt-3 ms-5'>
                <h4>
                  Data Psikolog
                </h4>
              </div>  
              <div className='mt-5 ms-5'>
                <button className='btn btn-primary' onClick={handleTambahShow}>
                  <TambahPsikologIcon className='me-2'></TambahPsikologIcon>Tambahkan Psikolog
                </button>
                <Modal show={tambahShow} onHide={handleTambahClose} size="lg">
                            <Modal.Header closeButton>
                              <Modal.Title>Tambah Psikolog</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form>
                                <Form.Group className='mt-5'>
                                  <Form.Label><b> Alamat Email </b></Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukan Alamat Email"
                                  />
                                </Form.Group>
                                <Form.Group className='mt-4'>
                                  <Form.Label><b> Nama Lengkap </b></Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Masukkan Nama Lengkap"
                                  />
                                </Form.Group>
                                <Form.Group className='mt-4 mb-5'>
                                  <Form.Label><b> Sertifikat </b></Form.Label>
                                  <Form.Control
                                    type="file"
                                    label="Upload Sertifikat"
                                  />
                                </Form.Group>
                              </Form>
                            </Modal.Body>
                            <Modal.Footer className="d-flex justify-content-center">
                              <Button className='btn-verif'>
                                Tambahkan Psikolog
                              </Button>
                            </Modal.Footer>
                          </Modal>
              </div>            

              <Row>
                <Col>
                <table class="mt-5 table table-bordered text-center">
                  <thead>
                    <tr>
                      <th scope="col w-50">ID <ArrowIcon></ArrowIcon> </th>
                      <th scope="col w-100" >Email <ArrowIcon></ArrowIcon></th>
                      <th scope="col w-100" >Nama Lengkap <ArrowIcon></ArrowIcon></th>
                      <th scope="col w-100" >Sertifikat <ArrowIcon></ArrowIcon></th>
                      <th scope="col w-100" >Aksi <ArrowIcon></ArrowIcon></th>
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
                        <div className='mt-1' >
                          <button className='bg-sertif'>
                            <SertifikatIcon></SertifikatIcon>  
                          </button>
                        </div>
                      </td>
                      <td>
                        <div>
                          
                          <button type="button" className="rounded-pill bg-ubah text-white p-2 " onClick={() => handleUbahShow(item)}> 
                            <b> Ubah </b>
                          </button>

                          <Modal show={ubahShow} onHide={handleUbahClose}size="lg">
                            <Modal.Header closeButton>
                              <Modal.Title>Ubah Data Psikolog</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form>
                                <Form.Group className='mt-5'>
                                  <Form.Label><b> Alamat Email </b></Form.Label>
                                  <Form.Control
                                    type="text"
                                    value={selectedItem ? selectedItem.email : ''}
                                    placeholder="Enter recipient"

                                  />
                                </Form.Group>
                                <Form.Group className='mt-4'>
                                  <Form.Label><b> Nama Lengkap </b></Form.Label>
                                  <Form.Control
                                    type="text"
                                    value={selectedItem ? selectedItem.name : ''}
                                    placeholder="Enter your message"
                                  />
                                </Form.Group>
                                <Form.Group className='mt-4 mb-5'>
                                  <Form.Label><b> Sertifikat </b></Form.Label>
                                  <Form.Control
                                    type="file"
                                    label="Choose file"
                                  />
                                </Form.Group>
                              </Form>
                            </Modal.Body>
                            <Modal.Footer className="d-flex justify-content-center">
                              <Button className='btn-verif' onClick={handleSend}>
                                Ubah Data
                              </Button>
                            </Modal.Footer>
                          </Modal>

                          <button className="rounded-pill bg-hapus text-white p-2"> 
                            <b> Hapus </b>
                          </button>
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
