import React from "react";
import { useState } from "react";
import swal from "sweetalert2";

function NewProjectComponent() {
  const [data, setData] = useState({
    judul: "",
    kategori: "",
    tujuan: "",
    rincian: "",
    target: "",
    waktu: "",
  });
  const { judul, kategori, tujuan, rincian, target, waktu } = data;
  const [imageUpload, setImageUpload] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let error = {};
    if (!judul) {
      error.judul = swal.fire(
        "Data ada yang kurang",
        "Judul belum terisi",
        "error"
      );
    }
    if (!kategori) {
      error.kategori = swal.fire(
        "Data ada yang kurang",
        "Kategori belum terisi",
        "error"
      );
    }
    if (!tujuan) {
      error.tujuan = swal.fire(
        "Data ada yang kurang",
        "Tujuan belum terisi",
        "error"
      );
    }
    if (!rincian) {
      error.rincian = swal.fire(
        "Data ada yang kurang",
        "Rincian belum terisi",
        "error"
      );
    }
    if (!target) {
      error.target = swal.fire(
        "Data ada yang kurang",
        "Target Dana belum terisi",
        "error"
      );
    }
    if (!waktu) {
      error.waktu = swal.fire(
        "Data ada yang kurang",
        "Batas waktu belum terisi",
        "error"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = validate();
  };

  return (
    <div className="container mt-2">
      <h3>Masukkan Detail Penggalang Dana Kamu</h3>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label for="InputJudul" class="form-label">
            Judul
          </label>
          <input
            type="text"
            class="form-control"
            id="InputJudul"
            placeholder="Judul"
            name="judul"
            value={judul}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label for="SelectKategori" class="form-label">
            Kategori
          </label>
          <select
            id="SelectKategori"
            className="form-select"
            aria-label="Default select example"
            name="kategori"
            value={kategori}
            onChange={handleChange}
          >
            <option selected>Pilih Salah satu</option>
            <option value="Home">Home</option>
            <option value="Film">Film</option>
            <option value="Travel">Travel</option>
            <option value="Phone">Phone</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="InputTujuan" class="form-label">
            Tujuan Menggalang Dana
          </label>
          <input
            type="currency"
            class="form-control"
            id="InputTujuan"
            placeholder="Tujuan"
            name="tujuan"
            value={tujuan}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="InputDana" class="form-label" datatype="currency">
            Target Dana
          </label>
          <input
            type="number"
            class="form-control"
            id="InputDana"
            placeholder="Rp 10.000.000"
            name="target"
            value={target}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-6">
          <label for="InputFile" class="form-label">
            Upload Foto Penggalangan Dana Kamu
          </label>
          <input
            type="file"
            class="form-control"
            id="InputFile"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          />
          <small class="text-muted">format: jpg, jpeg, dan png</small>
        </div>
        <div class="col-md-6">
          <label for="InputDate" class="form-label">
            Batas Waktu
          </label>
          <input
            type="date"
            class="form-control"
            id="InputDate"
            name="waktu"
            value={waktu}
            onChange={handleChange}
            minDate={new Date()}
          />
        </div>
        <div class="col-md-12">
          <label for="InputRincian" class="form-label">
            Rincian jika Dana Sudah terkumpul
          </label>
          <textarea
            className="form-control"
            id="InputRincian"
            rows="4"
            cols="50"
            placeholder="Rincian jika dana sudah terkumpul"
            name="rincian"
            value={rincian}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProjectComponent;
