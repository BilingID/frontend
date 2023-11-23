import MainLayout from "components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

const HasilPsikotes = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
      };
    return(
        <MainLayout>
        <div className="container" style={{ marginTop: 100 }}>
            <div className="text-center" style={{fontSize: "20px"}}>
                your personality type is :
            </div>
            <div className="text-center" style={{marginTop: 100, fontSize: "30px"}}>
                <h1> INTROVERT </h1>
            </div>
            <div className="text-center" style={{marginTop: 100, fontSize: "20px"}}>
                Orang introvert lebih suka menyendiri untuk mengumpulkan energinya. Namun, mereka sebenarnya tidak ada masalah bila harus berada dalam situasi sosial.
            </div>
            <div className="d-flex justify-content-between">
            <button className="btn btn-primary" style={{ marginTop: 100, marginBottom: 50 }} onClick={handleNavigate} >
                Sebelumnya
            </button>
            <button className="btn btn-primary" style={{ marginTop: 100, marginBottom: 50 }} onClick={() => navigate("Diagnosa")} >
                Selanjutnya
            </button>
            </div>
        </div>
    </MainLayout>
    );  
};

export default HasilPsikotes;