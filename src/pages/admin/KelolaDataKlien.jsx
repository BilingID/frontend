import { Container, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';
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


const Pembayaran = () => {


  const initialData = [
    { id: '#111111111', email: 'AAAAAAA@gmail.com', name: 'AAAAAAA', verifikasi: 'Sudah'},
    { id: '#222222222', email: 'BBBBBBB@gmail.com', name: 'BBBBBBB', verifikasi: 'Sudah'},
    { id: '#333333333', email: 'CCCCCCC@gmail.com', name: 'CCCCCCC', verifikasi: 'Sudah'},
    { id: '#444444444', email: 'DDDDDDD@gmail.com', name: 'DDDDDDD', verifikasi: 'Sudah'},
    { id: '#555555555', email: 'EEEEEEE@gmail.com', name: 'EEEEEEE', verifikasi: 'Sudah'},
    { id: '#666666666', email: 'FFFFFFF@gmail.com', name: 'FFFFFFF', verifikasi: 'Sudah'},
  ];



  const [data] = useState(initialData);

  const roundBackgroundStyleContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px', // Add some gap between buttons if needed
  };

 

  const roundBackgroundStyleSudah = {
    backgroundColor: '#FEF8E8', // Replace with the desired background color
    color: '#F5C556',
    borderRadius: '30px', // Adjust the border-radius as needed
    padding: '5px', // Add padding for better appearance
    display: 'inline-block', // Ensure the background color wraps around the text
    width: '100px',
  };

  const roundBackgroundStyleBelum = {
    backgroundColor: '#EEF5FF', // Replace with the desired background color
    color: '#2E7DF1',
    borderRadius: '30px', // Adjust the border-radius as needed
    padding: '5px', // Add padding for better appearance
    display: 'inline-block', // Ensure the background color wraps around the text
    width: '100px'
    
  };

  const roundBackgroundStyleKelola = {
    backgroundColor: '#2E7DF1', // Replace with the desired background color
    color: '#FFFFFF',
    borderRadius: '30px', // Adjust the border-radius as needed
    padding: '5px', // Add padding for better appearance
    display: 'inline-block', // Ensure the background color wraps around the text
    border: '2px solid #FFFFFF',
    width: '100px',
  };

  const roundBackgroundStyleHapus = {
    backgroundColor: '#FF4444', // Replace with the desired background color
    color: '#FFFFFF',
    borderRadius: '30px', // Adjust the border-radius as needed
    padding: '5px', // Add padding for better appearance
    display: 'inline-block', // Ensure the background color wraps around the text
    border: '2px solid #FFFFFF',
    width: '100px',
  };

  
  
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const getIconComponentDashboard = () => {
    return activeButton === 'dashboard' ? <DashboardClickIcon className='me-2' /> : <DashboardIcon className='me-2' />;
  };
  const getIconComponentStatistik = () => {
    return activeButton === 'statistik' ? <StatisticClickIcon className='me-2' /> : <StatisticIcon className='me-2' />;
  };
  const getIconComponentPembayaran = () => {
    return activeButton === 'pembayaran' ? <PembayaranClickIcon className='me-2' /> : <PembayaranIcon className='me-2' />;
  };
  const getIconComponentPsikolog = () => {
    return activeButton === 'psikolog' ? <PsikologClickIcon className='me-2' /> : <PsikologIcon className='me-2' />;
  };
  const getIconComponentCostumer = () => {
    return activeButton === 'customer' ? <CustomerClickIcon className='me-2' /> : <CustomerIcon className='me-2' />;
  };
  

  return (
    <div className='container-fluid' style={{backgroundColor: '#ffffff'}}>
        <Container fluid>
        <Row className="pt-3 ms-3 me-3">
            <Col md={2}>
            <h2 className="text-primary">
              BiLing.ID
            </h2>
            <div>
              <button className={`rounded-corner pt-3 mt-3 ${activeButton === 'dashboard' ? 'bg-primary text-white' : 'bg-transparent'}`} style={{ border: '1px solid white', width: '200px' }}>
                <p style={{ color: activeButton === 'dashboard' ? 'white' : '#979797', fontWeight: activeButton === 'dashboard' ? 'bold' : 'normal', textAlign: 'left', paddingLeft: '25px' }} onClick={() => handleButtonClick('dashboard')} >
                  {getIconComponentDashboard()} Dashboard
                </p>
              </button>
            </div>
            <div className='mt-2'> 
              <button className={`rounded-corner pt-3 ${activeButton === 'statistik' ? 'bg-primary text-white' : 'bg-transparent'}`} style={{ border: '1px solid white', width: '200px' }}>
                <p style={{ color: activeButton === 'statistik' ? 'white' : '#979797', fontWeight: activeButton === 'statistik' ? 'bold' : 'normal', textAlign: 'left', paddingLeft: '25px' }} onClick={() => handleButtonClick('statistik')}>
                  {getIconComponentStatistik()} Statistik
                </p>
              </button>
            </div>
            <div className='mt-2'>
            <button className={`rounded-corner pt-3 ${activeButton === 'pembayaran' ? 'bg-primary text-white' : 'bg-transparent'}`} style={{ border: '1px solid white', width: '200px' }}>
                <p style={{ color: activeButton === 'pembayaran' ? 'white' : '#979797', fontWeight: activeButton === 'pembayaran' ? 'bold' : 'normal', textAlign: 'left', paddingLeft: '25px' }} onClick={() => handleButtonClick('pembayaran')}>
                  {getIconComponentPembayaran()} Pembayaran
                </p>
              </button>
            </div>
            <div className='mt-2'>
            <button className={`rounded-corner pt-3 ${activeButton === 'psikolog' ? 'bg-primary text-white' : 'bg-transparent'}`} style={{ border: '1px solid white', width: '200px' }}>
                <p style={{ color: activeButton === 'psikolog' ? 'white' : '#979797', fontWeight: activeButton === 'psikolog' ? 'bold' : 'normal', textAlign: 'left', paddingLeft: '25px' }} onClick={() => handleButtonClick('psikolog')}>
                  {getIconComponentPsikolog()} Psikolog
                </p>
              </button>
            </div>
            <div className='mt-2'>
            <button className={`rounded-corner pt-3 ${activeButton === 'customer' ? 'bg-primary text-white' : 'bg-transparent'}`} style={{ border: '1px solid white', width: '200px' }}>
                <p style={{ color: activeButton === 'customer' ? 'white' : '#979797', fontWeight: activeButton === 'customer' ? 'bold' : 'normal', textAlign: 'left', paddingLeft: '25px' }} onClick={() => handleButtonClick('customer')}>
                  {getIconComponentCostumer()} Customer
                </p>
              </button>
              <button className={`rounded-corner pt-3`} style={{ marginTop: '450px', border: '1px solid white', width: '200px',backgroundColor: 'white' }}>
                <p className='text-danger fw-bold' style={{textAlign: 'left', paddingLeft: '25px'}}>
                  <LogOutIcon className='me-2'></LogOutIcon> LogOut
                </p>
              </button>
            </div>

            </Col>
            <Col md={8}>
              <div className='mt-3 ms-5'>
                <h4>
                  Data Psikolog
                </h4>
              </div>              
              <Container>
              <Row>
                <Col>
                <table class="mt-5 table table-bordered text-center" style={{backgroundColor: 'transparent' }}>
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '50px'}}>ID <ArrowIcon></ArrowIcon> </th>
                      <th scope="col" style={{ width: '100px' }}>Email <ArrowIcon></ArrowIcon></th>
                      <th scope="col" style={{ width: '100px' }}>Nama Lengkap <ArrowIcon></ArrowIcon></th>
                      <th scope="col" style={{ width: '100px' }}>Verifikasi <ArrowIcon></ArrowIcon></th>
                      <th scope="col" style={{ width: '100px' }}>Aksi <ArrowIcon></ArrowIcon></th>
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
                        <div className='mt-1' style={item.status === 'Sudah' ? roundBackgroundStyleSudah : roundBackgroundStyleBelum}>
                            <b> {item.verifikasi} </b>
                        </div>
                      </td>
                      <td>
                        <div style={roundBackgroundStyleContainer}>
                          <button style={roundBackgroundStyleKelola}> 
                            <b> Kelola </b>
                          </button>
                          <button style={roundBackgroundStyleHapus}> 
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
            </Container>
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
        </Container>
    </div>
  );
};

export default Pembayaran;
