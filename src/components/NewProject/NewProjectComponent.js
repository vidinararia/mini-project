import React from "react";
import { useState } from "react";
import swal from "sweetalert2";
import { INSERT_PENGGALANGAN_DANA } from "../../graphQL/Mutation";
import { GET_PROJECT } from "../../graphQL/Query";
import { useMutation } from "@apollo/client";

function NewProjectComponent({ kategoris }) {
  const [data, setData] = useState({
    judul: "",
    kategori: "",
    tujuan: "",
    rincian: "",
    target: "",
    waktu: "",
  });

  const [insertProject, { loading: loadingInsert }] = useMutation(
    INSERT_PENGGALANGAN_DANA,
    {
      onCompleted: () => {
        swal.fire("Berhasil", "Berhasil membuat penggalangan dana", "success");
      },
      onError: (error) => {
        console.log(error);
      },
      refetchQueries: [GET_PROJECT],
    }
  );
  const [imageUpload, setImageUpload] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let error = {};
    if (!data.judul) {
      error.judul = swal.fire(
        "Data ada yang kurang",
        "Judul belum terisi",
        "error"
      );
    }
    if (!data.kategori) {
      error.kategori = swal.fire(
        "Data ada yang kurang",
        "Kategori belum terisi",
        "error"
      );
    }
    if (!data.tujuan) {
      error.tujuan = swal.fire(
        "Data ada yang kurang",
        "Tujuan belum terisi",
        "error"
      );
    }
    if (!data.rincian) {
      error.rincian = swal.fire(
        "Data ada yang kurang",
        "Rincian belum terisi",
        "error"
      );
    }
    if (!data.target) {
      error.target = swal.fire(
        "Data ada yang kurang",
        "Target Dana belum terisi",
        "error"
      );
    }
    if (!data.waktu) {
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

    insertProject({
      variables: {
        object: {
          judul: data.judul,
          id_kategori: data.kategori,
          tujuan: data.tujuan,
          rincian: data.rincian,
          target_dana: data.target,
          batas_waktu: data.waktu,
        },
      },
    });
    setData({
      judul: "",
      kategori: "",
      tujuan: "",
      rincian: "",
      target: "",
      waktu: "",
    });
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
          />
        </div>
        <div className="col-md-6">
          <label for="kategoris" class="form-label">
            Kategori
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="kategori"
            value={data.kategori}
            onChange={handleChange}
          >
            <option selected>Pilih Salah satu</option>
            {kategoris?.kategoris.map((item) => (
              <option key={item.id} value={item.id}>
                {item.kategori}
              </option>
            ))}
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
            value={data.tujuan}
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
            value={data.target}
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
            value={data.waktu}
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
            value={data.rincian}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" class="btn btn-primary" loading={loadingInsert}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProjectComponent;
