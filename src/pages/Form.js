import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { Swal } from "sweetalert2";

function Form() {
  const [fileUpload, setFileUpload] = useState(null);
  // const [fileList, setFileList] = useEffect([]);

  // const fileListRef = ref(storage, "files/");

  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then(() => {
      Swal.fire("File Uploaded");
    });
  };

  // useEffect(() => {
  //   listAll(fileListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setFileList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div className="container mt-2">
      <h3>Masukkan Detail Penggalang Dana Kamu</h3>
      <form>
        <div class="mb-3">
          <label for="InputFile" class="form-label">
            Upload Foto Penggalangan Dana Kamu
          </label>
          <input
            type="file"
            class="form-control"
            id="InputFile"
            onChange={(event) => {
              setFileUpload(event.target.files);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={uploadFile}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
