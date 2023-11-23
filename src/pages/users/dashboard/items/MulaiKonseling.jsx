import MainLayout from "components/layout/MainLayout";


const Konseling = () => {
    return(
        <MainLayout>
            <div className = "container" style={{marginTop:300}}>
                <div className = "text-center">
                    <h1>Konseling Dengan Hani Kumala, M. Psi., Psikolog</h1>
                </div>
                <div className = "text-center" style={{marginTop:100, fontSize: "30px"}}>
                        Berikut adalah link Google Meet yang digunakan
                    
                </div>
                <div className = "text-center" style={{marginTop:100 }}>
                <a
                        href="https://meet.google.com/zon-yhdk-anw"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "35px" }} // Adjust the size as needed
                    >
                        Join Meet
                    </a>
                </div>
                
            </div>
        </MainLayout>
    );
};

export default Konseling;