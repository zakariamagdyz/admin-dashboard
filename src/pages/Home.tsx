import Button from "@mui/material/Button";
import React, { ChangeEvent, useState } from "react";
import { read, utils } from "xlsx";
import useReadImgUrl from "../hooks/useReadImgUrl";
import { validateExcelTemplate } from "../utils/utilities";

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [users, setUsers] = useState<Array<object>>([]);
  const [perviewURL, , setBinaryImg] = useReadImgUrl();

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const data = await file.arrayBuffer();

    const userData = validateExcelTemplate(file.name, data);

    if (!userData) return;
    setFile(file);
    setUsers(userData);
  };

  const handleReadImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (!file.type.startsWith("image/")) return;
    setBinaryImg(file);
  };

  return (
    <div>
      <label htmlFor="input">hola</label>
      <p>
        {file && file.name} {file && file.size / 1000}kb
      </p>
      <input
        type="file"
        accept=".xlsx,.xls"
        id="input"
        onChange={onChange}
        style={{ display: "none" }}
      />

      <input type="file" accept=".jpeg" id="input" onChange={handleReadImg} />

      {perviewURL && <img src={perviewURL} alt="f" />}
    </div>
  );
};

export default Home;
