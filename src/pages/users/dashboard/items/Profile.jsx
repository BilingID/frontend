import { useUserContext } from "context/UserContext";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfilField = ({ label, value }) => {
  return (
    <div className="d-flex flex-column gap-2 mb-4">
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

const EditableProfilView = ({ user, handleClick }) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Nama</label>
            <input type="text" className="form-control" value={user?.fullName} />
          </div>

          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Tanggal lahir</label>
            <input type="text" className="form-control" value={user?.dateOfBirth} />
          </div>

          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Jenis kelamin</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" />
              <label class="form-check-label">Laki-Laki</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gender" />
              <label class="form-check-label">Perempuan</label>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Nomor telepon</label>
            <input type="text" className="form-control" value={user?.phone} />
          </div>
          <div className="d-flex flex-column gap-2 mb-4">
            <label className="form-label fw-bold">Email</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={user?.email}
                style={{
                  width: "68%",
                }}
                disabled
              />
              <button class="btn btn-outline-secondary fw-bold" type="button">
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
              <button class="btn btn-outline-secondary fw-bold" type="button">
                Ubah
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleClick}>
          Simpan
        </button>
      </div>
    </Fragment>
  );
};

const ProfilItem = () => {
  // static data
  const emailIsVerified = false;
  const { user, setUser } = useUserContext();

  const [isEditable, setEditable] = useState(false);

  return (
    <Fragment>
      <div className="box px-5 py-5 d-flex flex-column gap-5">
        <div className="fs-2 border-bottom pb-3">Profil</div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/130"
            alt="profile"
            className="rounded-circle border border-3 border-primary p-1"
          />
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
          <EditableProfilView user={user} handleClick={() => setEditable(false)} />
        ) : (
          <ProfilView user={user} handleClick={() => setEditable(true)} />
        )}
      </div>
    </Fragment>
  );
};

export default ProfilItem;
