"use client";
import classes from "./Hisabadd.module.css";
import { useEffect, useState } from "react";

export default function HisabInput({ name, url, where }) {
  const [data, setData] = useState({});
  const [value, setValue] = useState({
    text: "",
    number: "",
  });
  useEffect(() => {
    const local = localStorage.getItem("user");
    if (local === null) {
      setData({});
    } else {
      setData(JSON.parse(local));
    }
    console.log(JSON.parse(local));
  }, []);
  function handleChange(fill, value) {
    setValue((pre) => {
      return {
        ...pre,
        [fill]: value,
      };
    });
  }
  function save() {
    if (where === "work") {
      data.work = value;
    } else {
      data.office = value;
    }
    localStorage.setItem("user", JSON.stringify(data));
    console.log(new Date().toLocaleDateString());
    setValue(() => {
      return {
        text: "",
        number: "",
      };
    });
   location.reload()
  }
  return (
    <>
      <h1 className={classes.h1}>TODO</h1>
      <div className={classes.flex}>
        <p className={classes.title}>{name}</p>
        <div className={classes.input}>
          <input
            type="text"
            value={value.text}
            required
            onChange={(e) => {
              handleChange("text", e.target.value);
            }}
          />
          <span>name</span>
        </div>
        <div className={classes.input}>
          <input
            required
            type="number"
            value={value.number}
            onChange={(e) => {
              handleChange("number", e.target.value);
            }}
          />
          <span>name</span>
        </div>
        <button onClick={save}>SAVE</button>
      </div>
    </>
  );
}
