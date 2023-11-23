import MainLayout from "components/layout/MainLayout";
import hasilKonselingImage from "assets/icon/svg/Vector.svg";
import { useNavigate } from "react-router-dom";

const HasilDiagnosa = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
      };
    return(
        <MainLayout>
            <div className = "text-center" style={{marginTop:100}}>
                Hasil Konseling :
            </div>
            <div className = "text-center" style={{marginTop:100}}>
                <button className="btn btn-primary" style={{ backgroundColor: '#EEF5FF', borderColor: '#EEF5FF', color: '#2E7DF1'}}>
                    <img src={hasilKonselingImage} alt="Hasil Konseling" style={{ marginRight: 10 }} />
                    HASIL KONSELING 
                </button> 
            </div>
            <div className = "text-center" style={{marginTop:50}}>
                Hasil Konseling berupa Docs atau PDF yang dapat didownload
            </div>
            <div className = "text-center" style={{marginTop:50}} onClick={handleNavigate}>
                <button className="btn btn-primary">
                    Selesai
                </button>
            </div>
        </MainLayout>
        
    );
};

export default HasilDiagnosa;