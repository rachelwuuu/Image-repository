import React, {useState} from 'react'

const FormSubmit=()=> {
    const [file, setFile]= useState(null);
    const [error, setError]= useState(null);
    const changeHandler = (e) => {
        let selected=e.target.files[0];
        if(selected){
            setFile(selected);
            setError("");
        }else{
            setFile(null);
            setError("You can't submit files other than jpg, gif, png and peg.")
        }
    }
    return (
        <form>
            <input type="file" onChange={changeHandler} accept=".png, .jpeg, .jpg, .gif"/>
            {/*This works better than having it in the js code(const type=[image/png,...]; if(selected&&types.include(selected.type)){...}), as it automatically limits the file types, and the js code doesn't work for .jpg*/}
            <div className="output">
                {error&&<div className="error">{error}</div>}
                {file&&<div>{file.name}</div>}
            </div>
        </form>
    )
}
export default FormSubmit;
