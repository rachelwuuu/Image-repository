import React, {useState} from 'react'

const FormSubmit=()=> {
    const [file, setFile]= useState(null);
    const [error, setError]= useState(null);
    const types=['image/png','image/peg']
    const changeHandler = (e) => {
        let selected=e.target.files[0];
        if(selected&&types.includes(selected.type)){
            setFile(selected);
            setError("");
        }else{
            setFile(null);
            setError("You can't submit files other than png and peg.")
        }
    }
    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error&&<div className="error">{error}</div>}
                {file&&<div>{file.name}</div>}
            </div>
        </form>
    )
}
export default FormSubmit;
