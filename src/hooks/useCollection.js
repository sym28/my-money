import { useEffect, useState } from "react"
import {db, onSnapshot, collection, where, query} from '../firebase/config'

import {useAuthContext} from './useAuthContext'


export const useCollection = (collectionName) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const {user} = useAuthContext() 

    useEffect(() => {
        console.log('user id: ', user.uid)
        const q = query(collection(db, collectionName), where('uid', '==', user.uid))
        const unsub = onSnapshot(q, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => results.push({...doc.data(), id: doc.id}))

            // update state
            setDocuments(results)
            setError(null)
        }, (error) => {
            console.log(error)
            setError('could not fetch data')
        })
        
        // unsubscribe on component unmount
        return unsub

    }, [collectionName])

    return {documents, error}
}
