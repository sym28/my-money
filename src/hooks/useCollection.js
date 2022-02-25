import { useEffect, useState } from "react"
import {db, onSnapshot, collection, where, query, orderBy} from '../firebase/config'


export const useCollection = (collectionName, uid) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const q = query(collection(db, collectionName), where('uid', '==', uid), orderBy('createdAt', 'desc'))
        const unsub = onSnapshot(q, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => results.push({...doc.data(), id: doc.id}))

            // update state
            setDocuments(results)
            setError(null)
        }, (error) => {
            console.log(error)
            setError(error.message)
        })
        
        // unsubscribe on component unmount
        return unsub

    }, [collectionName, uid])

    return {documents, error}
}
