import React from "react";

function Donasi() {
  return (
    <div>
      <div className="container mt-2">
        <h3>Masukkan Nominal Donasi</h3>
        <form>
          <div className="mb-3">
            <label for="InputDana" className="form-label" datatype="currency">
              Nominal Donasi
            </label>
            <input
              type="number"
              className="form-control"
              id="InputDana"
              placeholder="Rp 10.000"
            />
          </div>
          <div className="mb-3">
            <label for="InputNamaEmail" className="form-label">
              Lengkapi data dibawah ini
            </label>
            <input
              type="text"
              className="form-control"
              id="InputNamaEmail"
              placeholder="Nama Lengkap"
            ></input>
            <input
              type="text"
              className="form-control mt-1"
              id="InputNamaEmail"
              placeholder="Email"
            ></input>
          </div>
          <div class="mb-3">
            <label for="InputDate" class="form-label">
              Kirim Pesan (optional)
            </label>
            <textarea
              className="form-control"
              id="InputDate"
              rows="4"
              cols="50"
              placeholder="Tulis Pesan kepada si penggalang dana"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Donasi
          </button>
        </form>
      </div>
    </div>
  );
}

export default Donasi;
