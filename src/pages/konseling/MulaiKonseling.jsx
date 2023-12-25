import MainLayout from "components/layout/MainLayout";
import { useUserContext } from "context/UserContext";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Counseling from "services/api/konseling";

const Konseling = () => {
  const { id } = useParams();
  const { user, token } = useUserContext();
  const [konseling, setKonseling] = useState(null);

  const fetchKonseling = async () => {
    const { data } = await Counseling.getMeetInfo(token, id);
    if (data) {
      setKonseling(data);
    }
  };

  useEffect(() => {
    fetchKonseling();
  }, []);

  return (
    <MainLayout shadow>
      <div className="container container-fluid text-center py-5">
        <h1 className="my-5">
          Konseling dengan <br />{" "}
          {user.role === "psychologist" ? konseling?.user_name : konseling?.psychologist_name}
        </h1>
        <p className="my-5">Berikut adalah link Google Meet yang digunakan</p>
        {/* <Link to={konseling?.meet_url} className="fs-4"> */}
        <Link to={`http://localhost:8000/api/v1/konseling/${id}/done`} className="fs-4">
          {konseling?.meet_url}
        </Link>
      </div>
    </MainLayout>
  );
};

export default Konseling;
