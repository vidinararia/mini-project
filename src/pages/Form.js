import React from "react";
import { useState, useEffect } from "react";
import swal from "sweetalert2";
import { ref, uploadBytes } from "firebase/storage";
import storage from "../firebase";

function Form() {
  const formData = {
    judul: "",
    kategori: "",
    tujuan: "",
    rincian: "",
  };

  const [imageUpload, setImageUpload] = useState(null);
  const [data, setData] = useState(formData);

  const handleChange = (e) => {
    const name = e.target.name;

    if (name === "image") {
      const file = e.target.files[0];
      setImageUpload(file);
    } else {
      const value = e.target.value;
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      swal.fire({
        position: "center",
        icon: "success",
        title: "data telah masuk",
        showConfirmButton: false,
        timer: 1500,
      });
    });
    console.log(data);
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
            value={data.judul}
            onChange={handleChange}
            required
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
            value={data.kategori}
            onChange={handleChange}
            required
          >
            <option value="Home" selected>
              Home
            </option>
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
            type="text"
            class="form-control"
            id="InputTujuan"
            placeholder="Tujuan"
            name="tujuan"
            value={data.tujuan}
            onChange={handleChange}
            required
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
            required
          />
          <small class="text-muted">format: jpg, jpeg, dan png</small>
        </div>
        <div class="col-md-6">
          <label for="InputDate" class="form-label" required>
            Batas Waktu
          </label>
          <input type="date" class="form-control" id="InputDate" />
        </div>
        <div class="col-md-12">
          <label for="InputDate" class="form-label">
            Jika Dana Sudah terkumpul
          </label>
          <textarea
            className="form-control"
            id="InputDate"
            rows="4"
            cols="50"
            placeholder="Rincian jika dana sudah terkumpul"
            name="rincian"
            value={data.rincian}
            onChange={handleChange}
            required
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

export default Form;
