import { useUserContext } from "context/UserContext";
import { Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CameraIcon from "assets/icon/svg/camera.svg";
import { FormInput, FormRadios } from "components/common/Form";
import { toast } from "react-toastify";

const ProfilField = ({ label, value }) => {
  return (
    <div className="d-flex flex-column gap-3 mb-4">
      <h5>{label}</h5>
      <p>{value}</p>
    </div>
  );
};

const ProfilView = ({ user, handleClick }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <ProfilField label="Nama" value={user?.fullname || "-"} />
          <ProfilField label="Tanggal lahir" value={user?.date_of_birth || "-"} />
          <ProfilField label="Jenis kelamin" value={user?.gender || "-"} />
        </div>
        <div className="col">
          <ProfilField label="Nomor telepon" value={user?.phone || "-"} />
          <ProfilField label="Email" value={user?.email || "-"} />
          <ProfilField label="Kata sandi" value={user?.isPasswordSet ? "********" : "-"} />
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
          <FormInput
            label="Nama"
            value={user?.fullname}
            name="fullname"
            onChange={handleFormChange}
          />

          <FormInput
            type="date"
            label="Tanggal lahir"
            value={user?.date_of_birth}
            name="date_of_birth"
            onChange={handleFormChange}
          />

          <FormRadios
            label="Jenis kelamin"
            options={["Laki-laki", "Perempuan"]}
            checked={user?.gender}
            onChange={handleFormChange}
          />
        </div>

        <div className="col">
          <FormInput
            type="number"
            label="Nomor telepon"
            value={user?.phone || ""}
            name="phone"
            onChange={handleFormChange}
            onWheel={(event) => {
              event.target.blur(); // disable scroll when scrolling on number input
            }}
          />

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
          <div className="d-flex flex-column gap-2 mb-4 ">
            <label className="form-label fw-bold">Kata sandi</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={user?.isPasswordSet ? "********" : "-"}
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
  const profile_photo = useRef(null);

  const handleEditPicture = () => {
    profile_photo.current.click();
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];

    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      return toast.warn("Invalid image file.");
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({
        ...form,
        profile_photo: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <Fragment>
      <input
        type="file"
        name="profile_photo"
        ref={profile_photo}
        onChange={handlePictureChange}
        className="d-none"
      />
      <div className="box px-5 py-5 d-flex flex-column gap-5">
        <div className="fs-2 border-bottom pb-3">Profil</div>
        <div className="text-center position-relative">
          <img
            src={form?.profile_photo || "https://via.placeholder.com/130"}
            alt="profile"
            className="profile-img border border-3 p-2 border-primary"
            referrerPolicy="no-referrer"
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
