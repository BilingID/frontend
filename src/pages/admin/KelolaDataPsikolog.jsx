import { Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';
import { ReactComponent as DashboardIcon } from "assets/icon/svg/DashboardIcon.svg";
import { ReactComponent as StatisticIcon } from "assets/icon/svg/StatistikIcon.svg";
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
  const navigate = useNavigate();
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
            <button className="btn-primary2">
                <StatisticIcon /> Statistik
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
            <Col md={7}>
              <div className='mt-3 ms-5'>
                <h4>
                  Data Psikolog
                </h4>
              </div>  
              <div className='mt-5 ms-5'>
                <button className='btn btn-primary'>
                  <TambahPsikologIcon className='me-2'></TambahPsikologIcon>Tambahkan Psikolog
                </button>
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
                          <button className="rounded-pill bg-ubah text-white p-2 "> 
                            <b> Ubah </b>
                          </button>
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
            </div>
            </Col>

        </Row>
    </div>
  );
};

export default Pembayaran;
