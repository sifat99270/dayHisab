"use client"

import React, {useEffect, useState} from 'react';
import classes from "./seeEdit.module.css";



const SeeEdit = ({info,setObj,ind}) => {
    const[value,setValue]=useState({
        text:info.text,
        number:info.number
    });
    const[decition,setDecition]=useState(false)
    useEffect(()=>{
        setObj((pre)=>{

            return [...pre]
        })
    },[])
    function handleChange(fill,value){
        setValue((pre)=>{
            return {
                ...pre,
                [fill]:value
            }
        })
    }
    function dictionChange(){
 setDecition(true)
    }
    function save(){
        setDecition(false);
        setObj((pre)=>{
            pre[ind]=value
               return [
                   ...pre

               ]

        })
    }
    function deleteItem(){
        const a=[]

        setObj((pre)=>{
        pre.splice(ind,1)
            return [...pre];

        })
    }
    return (
        <>
            {decition ?   <div className={classes.flex}>

                <div className={classes.input}>
                    <input type="text" value={value.text}  required onChange={(e)=>{handleChange("text",e.target.value)}}/>
                    <span>name</span>
                </div>
                <div className={classes.input}>
                    <input required type="number" value={value.number} onChange={(e)=>{handleChange("number",e.target.value)}} />
                    <span>name</span>
                </div>
                <button onClick={save} >SAVE</button>
            </div> :<div  className={classes.flex}>
                <div className={classes.input} >
                    <div>{info.text}</div>
                </div>
                <div className={classes.input}>
                    <div>{info.number}</div>
                </div>
                <button onClick={dictionChange} >EDIT</button>
                <button onClick={deleteItem }>DELETE</button>
            </div>}
        </>
    );
};

export default SeeEdit;