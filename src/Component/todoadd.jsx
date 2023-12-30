"use client";
import classes from "./todoAdd.module.css";
import { useEffect, useState } from "react";
import SeeEdit from "@/Component/seeEdit";
import { useRouter } from "next/navigation";
const Todoadd = () => {
  const [value, setValue] = useState({
    text: "",
    number: "",
  });
  const [obj, setObj] = useState([]);

  const [local, setLocal] = useState({});


  useEffect(() => {
    const json = localStorage.getItem("user");
    if (json === null) {
      setLocal({});
    } else {
      setLocal(JSON.parse(json));
    }
  }, []);
  useEffect(() => {
    if (local.array) {
      setObj(local.array);
    } else {
      setObj([]);
    }
  }, [local]);

  function handleChange(fill, value) {
    setValue((pre) => {
      return {
        ...pre,
        [fill]: value,
      };
    });
  }
  function save() {
    setObj((pre) => {
      if (pre.length === 0) {
        return [value];
      } else {
        return [...pre, value];
      }
    });
    setValue(() => {
      return {
        text: "",
        number: "",
      };
    });
  }
  const router = useRouter();
  function submit() {
    local.array = obj;
    localStorage.setItem("user", JSON.stringify(local));
    router.push("/last");
  }
  return (
    <div className={classes.main}>
      <div className={classes.flex}>
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
      {obj.length > 0
        ? obj.map((item, index) => {
            return (
              <SeeEdit info={item}  setObj={setObj} key={index} ind={index} />
            );
          })
        : "no data here"}

      <button className={classes.button} onClick={submit}>
        ALL SUBMIT
      </button>
    </div>
  );
};

export default Todoadd;
