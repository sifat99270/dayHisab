"use client";
import { useEffect, useState } from "react";
import classes from "./last.module.css";


const Last = () => {
  const [local, setLocal] = useState({});
  const [past,setPast]=useState('');
  const[present,setPresent]=useState('');
  useEffect(() => {
    const data = localStorage.getItem("user");
    const string = JSON.parse(data);
    if (data === null) {
      setLocal({});
    } else {

      setLocal(string);
    }
  }, []);


  useEffect(() => {
   if(local.office && local.work){
     setPast(()=>{
       return parseInt(local.office.number)+parseInt(local.work.number);
     })
   }
  }, [local]);


  useEffect(() => {
    if(local.array && local.array.length>0){
      const result=local.array.reduce((total,current)=>{
        return total+parseInt(current.number);
      },0)
      const ok=past-result

      setPresent(ok.toString());

    }
  }, [local,past]);

  return (
    <div className={classes.all}>
      <p className={classes.date} style={{color:"magenta"}}>DATE: {new Date().toLocaleDateString()}</p>

      <div className={classes.agar}>
        <p>
          অফিস নেওয়া:
          <span className={classes.span}>
            {local.office && local.office.number
              ? local.office.number
              : "no data"}
          </span>{" "}
        </p>
        <p>
          আগের জমা:
          <span className={classes.span}>
            {" "}
            {local.work && local.work.number ? local.work.number : "no data"}
          </span>{" "}
        </p>
        <i className={classes.i}></i>
        <p>
           জমা:<span className={classes.span}>{past}</span>{" "}
        </p>
      </div>
      <div className={classes.today}>
        {local.array && local.array.length > 0
          ? local.array.map((item, ind) => {
              return (
                <p key={ind}>
                  {item.text}:<span className={classes.span}>{item.number}</span>{" "}
                </p>
              );
            })
          : ""}
        <i></i>
        <p>
          বর্তমান জমা:<span className={classes.span}>{present}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Last;
