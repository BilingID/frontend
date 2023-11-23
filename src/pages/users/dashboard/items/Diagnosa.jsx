import MainLayout from "components/layout/MainLayout";
import React, { useState } from 'react';

const Diagnosa = () => {
    const [showMessage, setShowMessage] = useState(false);
    const handleClick = () => {
        // Your click event logic goes here
        // For example, you can update the state to show the message
        setShowMessage(true);
      };
    return (
        <MainLayout>
            <div className="container" style={{ marginTop: 100 }}>
                <div className="text-center" style={{fontSize: "30px"}}>
                    Input Hasil Konseling
                </div>
                <div className="mb-3">
                    <label htmlFor="formFileLg" className="form-label"></label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file" />
                </div>
                <div className="text-center" style={{marginTop:150, fontSize: "30px"}}>
                    Hasil Konseling berupa Docs atau PDF yang dapat didownload
                </div>
                <div className="text-center">
                    <button className="btn btn-primary" style={{marginTop:100, marginBottom:50}} onClick={handleClick} >
                        Selesai 
                    </button> 
                    {showMessage && <p>Diagnosis telah ditambahkan</p>}
                </div>
            </div>
        </MainLayout>
    );
};

export default Diagnosa;
