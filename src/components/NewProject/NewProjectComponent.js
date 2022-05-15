import React, { useRef, useState } from "react";
import swal from "sweetalert2";
import { INSERT_PROJECT } from "../../graphQL/Mutation";
import { GET_PROJECT } from "../../graphQL/Query";
import { useMutation } from "@apollo/client";
import { CONST } from "../../utils/Constants";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import Loadingsvg from "../../assests/Loadingsvg";

function NewProjectComponent() {
  const formData = {
    judul: "",
    kategori: "",
    tujuan: "",
    rincian: "",
    goal: "",
    bataswaktu: "",
  };

  const [data, setData] = useState(formData);
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const [insertProject, { loading }] = useMutation(INSERT_PROJECT, {
    onCompleted: () => {
      swal.fire("Berhasil", "Berhasil membuat project", "success");
    },
    onError: (error) => {
      console.log(error);
    },
    refetchQueries: [GET_PROJECT],
  });

  if (loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <Loadingsvg />
      </div>
    );
  }

  const handleChange = (e) => {
    const name = e.target.name;

    if (name === "image") {
      const file = e.target.files[0];
      setImage(file);
    } else {
      const value = e.target.value;
      setData({ ...data, [name]: value });
    }
  };

  const uploadData = (file) => {
    const fileName = `${file.name}`;
    const storageRef = ref(storage, `projects/${fileName}`);
    const uploadTask = uploadBytes(storageRef, file);

    uploadTask.then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadUrl) => {
        insertProject({
          variables: {
            object: {
              judul: data.judul,
              kategori: data.kategori,
              tujuan: data.tujuan,
              rincian: data.rincian,
              goal: data.goal,
              bataswaktu: data.bataswaktu,
              imageurl: downloadUrl,
            },
          },
        });
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !data.judul ||
      !data.bataswaktu ||
      !data.kategori ||
      !data.goal ||
      !data.rincian ||
      !data.tujuan
    ) {
      swal.fire("Data ada yang kurang", "silakan isi semua form", "error");
    } else if (!image) {
      swal.fire("Gambar belum diisi", "silakan isi semua form", "error");
    } else {
      uploadData(image);
      setData(formData);
      setImage(null);
      imageRef.current.value = "";
    }
  };

  return (
    <div className="container mt-2">
      <h3>Masukkan Detail Project Kamu</h3>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="InputJudul" className="form-label">
            Judul
          </label>
          <input
            type="text"
            className="form-control"
            id="InputJudul"
            placeholder="Judul"
            name="judul"
            value={data.judul}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="kategoris" className="form-label">
            Kategori
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="kategori"
            value={data.kategori}
            onChange={handleChange}
          >
            <option>Pilih Salah satu</option>
            {CONST.KATEGORI.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="InputTujuan" className="form-label">
            Tujuan Menggalang Dana
          </label>
          <input
            type="text"
            className="form-control"
            id="InputTujuan"
            placeholder="Tujuan"
            name="tujuan"
            value={data.tujuan}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="InputDana" className="form-label" datatype="currency">
            Target Dana
          </label>
          <input
            type="text"
            className="form-control"
            id="InputDana"
            placeholder="Rp 10.000.000"
            name="goal"
            value={data.goal}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="InputFile" className="form-label">
            Upload Foto Penggalangan Dana Kamu
          </label>
          <input
            type="file"
            className="form-control"
            id="InputFile"
            name="image"
            ref={imageRef}
            onChange={handleChange}
          />
          <small className="text-muted">format: jpg, jpeg, dan png</small>
        </div>
        <div className="col-md-6">
          <label htmlFor="InputDate" className="form-label">
            Batas Waktu
          </label>
          <input
            type="date"
            className="form-control"
            id="InputDate"
            name="bataswaktu"
            value={data.bataswaktu}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="InputRincian" className="form-label">
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
          <button className="btn btn-primary" type="">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProjectComponent;
