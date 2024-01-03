import { useUserContext } from "context/UserContext";
import { Fragment, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CameraIcon from "assets/icon/svg/camera.svg";
import { FormInput, FormRadios } from "components/common/Form";
import { toast } from "react-toastify";
import AuthService from "services/api/auth";
import Psychologist from "services/api/psikolog";
import { ReactComponent as ArrowDown } from "assets/icon/svg/arrow-down.svg";

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
          <ProfilField label="Tanggal lahir" value={user?.date_of_birth || ""} />
          <ProfilField
            label="Jenis kelamin"
            value={user?.gender === "male" ? "Laki-laki" : "Perempuan"}
          />
        </div>
        <div className="col">
          <ProfilField label="Nomor telepon" value={user?.phone || "Belum ditentukan"} />
          <ProfilField label="Email" value={user?.email} />
          <ProfilField
            label="Kata sandi"
            value={user?.isPasswordSet ? "********" : "Belum ditentukan"}
          />
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

const EditableProfilView = ({ form, handleFormChange, handleFormSubmit, hideForm }) => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <FormInput
            label="Nama"
            value={form?.fullname}
            name="fullname"
            onChange={handleFormChange}
          />

          <FormInput
            type="date"
            label="Tanggal lahir"
            value={form?.date_of_birth}
            name="date_of_birth"
            onChange={handleFormChange}
          />

          <FormRadios
            label="Jenis kelamin"
            options={["Laki-laki", "Perempuan"]}
            name="gender"
            checked={user?.gender === "male" ? "Laki-laki" : "Perempuan"}
            onChange={handleFormChange}
          />
        </div>

        <div className="col">
          <FormInput
            type="number"
            label="Nomor telepon"
            value={form?.phone || ""}
            name="phone"
            onChange={handleFormChange}
            onWheel={(event) => {
              event.target.blur(); // disable scroll when scrolling on number input
            }}
          />

          {/* <div className="d-flex flex-column gap-2 mb-4">
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
          </div> */}

          <div className="d-flex flex-column gap-2 mb-4 ">
            <label className="form-label fw-bold">Kata sandi</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={user?.isPasswordSet ? "********" : "Belum ditentukan"}
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

      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-light" onClick={hideForm}>
          Batal
        </button>
        <button className="btn btn-primary" onClick={handleFormSubmit}>
          Simpan
        </button>
      </div>
    </Fragment>
  );
};

const AdditionalProfil = () => {
  const { user, token } = useUserContext();

  const [form, setForm] = useState({
    bio_desc: user?.bio_desc || "",
    skill_desc: user?.skill_desc || "",
  });

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async () => {
    const { data, message, status } = await Psychologist.updateDescription(token, form);

    if (status !== "success") {
      toast.warn("Gagal mengubah data");
      return;
    }

    toast.success("Berhasil mengubah data");
  };
  return (
    <>
      <div className="mb-3 px-4 pt-4">
        <label className="form-label h5">Deskripsi diri</label>
        <textarea
          className="form-control py-4"
          name="bio_desc"
          style={{
            height: "120px",
          }}
          placeholder="Deskripsikan diri anda sendiri beserta biodata singkat anda"
          value={form?.bio_desc}
          onChange={handleFormChange}
        ></textarea>
      </div>
      <div className="mb-3 px-4">
        <label className="form-label h5">Keahlian anda</label>
        <textarea
          className="form-control py-4"
          name="skill_desc"
          style={{
            height: "120px",
          }}
          placeholder="Deskripsikan keahlian anda"
          value={form?.skill_desc}
          onChange={handleFormChange}
        ></textarea>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleClick}>
          Simpan
        </button>
      </div>
    </>
  );
};

const ProfilItem = () => {
  const navigate = useNavigate();

  // User context and state management
  const { user, token, setUser, formatUser } = useUserContext();
  const [isEditable, setEditable] = useState(false);

  const [form, setForm] = useState({
    fullname: user?.fullname,
    date_of_birth: user?.date_of_birth,
    phone: user?.phone,
    profile_photo: user?.profile_photo,
    gender: user?.gender,
  });

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
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const req = {};

    for (const key in form) {
      if (key.indexOf("ignore") === -1 && form[key] && form[key] !== user[key]) {
        req[key] = form[key];
      }
    }

    if (req.phone && req.phone.length < 10) {
      toast.error("Nomor telepon minimal 10 digit");
      return;
    }

    if (req.date_of_birth && req.date_of_birth.length < 10) {
      toast.error("Tanggal lahir tidak valid");
      return;
    }

    if (!Object.keys(req).length) {
      toast.warn("Tidak ada perubahan profile");
      return;
    }

    if (req.gender) req.gender = req.gender === "Perempuan" ? "female" : "male";

    const { status, data, message, errors } = await AuthService.updateProfile(req, token);

    if (status === "error" || errors) {
      toast.error(message);
      return;
    }

    toast.success("Profil berhasil diubah");

    setUser(formatUser(data));

    navigate("/users");

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

    setForm({
      ...form,
      profile_photo: file,
      profile_photo_ignore: URL.createObjectURL(file),
    });
  };

  const [toggleAdditional, setToggleAdditional] = useState(false);

  const handleToggleAdditional = () => {
    setToggleAdditional(!toggleAdditional);
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
            src={
              form?.profile_photo_ignore || form?.profile_photo || "https://via.placeholder.com/130"
            }
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
        <div className="fs-6">
          {!user?.email_verified_at && (
            <>
              Email anda belum terverifikasi, untuk verifikasi{" "}
              <Link to="/users/verification" className=" fw-bold">
                klik disini
              </Link>
            </>
          )}
        </div>
        {isEditable ? (
          <EditableProfilView
            form={form}
            handleFormChange={handleFormChange}
            handleFormSubmit={handleFormSubmit}
            hideForm={() => setEditable(false)}
          />
        ) : (
          <ProfilView user={user} handleClick={() => setEditable(true)} />
        )}

        {user?.role === "psikolog" && (
          <>
            <div className="fs-2 border-bottom pb-3 mt-5">Profil Lanjutan</div>
            <div>
              <div
                className="d-flex justify-content-between align-items-center btn-default bg-transparent pe-auto"
                onClick={handleToggleAdditional}
              >
                <h5 className="m-0">Data diri</h5>
                <div className="d-flex align-items-center gap-4">
                  {user?.bio_desc && user?.skill_desc ? (
                    <div className="badge text-success bg-success-transparent btn-default-2 bg-">
                      Sudah terisi
                    </div>
                  ) : (
                    <div className="badge text-danger bg-danger-transparent btn-default-2 bg-">
                      Belum terisi
                    </div>
                  )}

                  <ArrowDown
                    width={24}
                    height={24}
                    style={{
                      transform: toggleAdditional ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
              </div>
              {toggleAdditional && <AdditionalProfil />}
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default ProfilItem;
