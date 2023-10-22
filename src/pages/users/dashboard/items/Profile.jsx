import { useUserContext } from "context/UserContext";
import { Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CameraIcon from "assets/icon/svg/camera.svg";

const ProfilField = ({ label, value }) => {
  return (
    <div className="d-flex flex-column gap-3 mb-4">
      <div className="fs-5">{label}</div>
      <div className="fs-6">{value}</div>
    </div>
  );
};

const ProfilView = ({ user, handleClick }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <ProfilField label="Nama" value={user?.fullName} />
          <ProfilField label="Tanggal lahir" value={user?.dateOfBirth} />
          <ProfilField label="Jenis kelamin" value={user?.gender} />
        </div>
        <div className="col">
          <ProfilField label="Nomor telepon" value={user?.phone} />
          <ProfilField label="Email" value={user?.email} />
          <ProfilField label="Kata sandi" value="********" />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleClick}>
          Ubah profil
        </button>
      </div>
    </Fragment>
  );
};

const EditableProfilView = ({ user, handleFormChange, handleFormSubmit }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Nama</label>
            <input
              type="text"
              className="form-control"
              value={user?.fullName}
              name="fullName"
              onChange={handleFormChange}
            />
          </div>

          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Tanggal lahir</label>
            <input
              type="date"
              className="form-control"
              value={user?.dateOfBirth}
              name="dateOfBirth"
              onChange={handleFormChange}
            />
          </div>

          <div className="d-flex flex-column gap-2 mb-4" onChange={handleFormChange}>
            <label className="form-label fw-bold">Jenis kelamin</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" value="Laki-Laki" />
              <label className="form-check-label">Laki-Laki</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" value="Perempuan" />
              <label className="form-check-label">Perempuan</label>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Nomor telepon</label>
            <input
              type="number"
              className="form-control"
              value={user?.phone}
              name="phone"
              onChange={handleFormChange}
            />
          </div>
          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Email</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="email"
                value={user?.email}
                style={{
                  width: "68%",
                }}
                disabled
              />
              <button
                className="btn btn-outline-edit fw-bold"
                type="button"
                onClick={() => navigate("/users/changeEmail")}
              >
                Ubah
              </button>
            </div>
          </div>
          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Kata sandi</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={"********"}
                style={{
                  width: "68%",
                }}
                disabled
              />
              <button
                className="btn btn-outline-edit fw-bold"
                type="button"
                onClick={() => navigate("/users/changePassword")}
              >
                Ubah
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleFormSubmit}>
          Simpan
        </button>
      </div>
    </Fragment>
  );
};

const ProfilItem = () => {
  // Static data
  const emailIsVerified = false;

  // User context and state management
  const { user, setUser } = useUserContext();
  const [isEditable, setEditable] = useState(false);
  const [form, setForm] = useState(user);

  // Form input change handling
  const handleFormChange = (event) => {
    if (event.target.name === "phone" && event.target.value.length > 13) {
      return;
    }

    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Form submission handling
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setUser(form);
    setEditable(false);
  };

  // Profile picture handling
  const profilePicture = useRef(null);

  const handleEditPicture = () => {
    profilePicture.current.click();
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({
        ...form,
        profilePicture: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <Fragment>
      <input
        type="file"
        name="profilePicture"
        ref={profilePicture}
        onChange={handlePictureChange}
        className="d-none"
      />
      <div className="box px-5 py-5 d-flex flex-column gap-5">
        <div className="fs-2 border-bottom pb-3">Profil</div>
        <div className="container text-center position-relative">
          <img
            src={form?.profilePicture || "https://via.placeholder.com/130"}
            alt="profile"
            className="profile-img border border-3 p-2 border-primary"
          />
          {isEditable && (
            <img
              src={CameraIcon}
              className="btn bg-primary rounded-circle p-3 position-absolute"
              style={{
                left: "50%",
                bottom: "0",
                transform: "translate(-50%, 50%)",
              }}
              onClick={handleEditPicture}
            />
          )}
        </div>

        {!emailIsVerified && (
          <div className="fs-6">
            Email anda belum terverifikasi, untuk verifikasi{" "}
            <Link to="/users/verification" className=" fw-bold">
              klik disini
            </Link>
          </div>
        )}

        {isEditable ? (
          <EditableProfilView
            user={form}
            handleFormChange={handleFormChange}
            handleFormSubmit={handleFormSubmit}
          />
        ) : (
          <ProfilView user={user} handleClick={() => setEditable(true)} />
        )}
      </div>
    </Fragment>
  );
};

export default ProfilItem;
