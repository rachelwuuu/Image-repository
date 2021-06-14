import { useState, useEffect } from "react"
import { projectFirestore } from "../../firebase"

const useFireStore = (collection) => {
    const [docs, setDocs] = useState([]);
    useEffect(()=>{
        const unsub = projectFirestore.collection(collection)
    })
}