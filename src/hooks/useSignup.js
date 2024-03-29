import { useState, useEffect } from "react"
import {app, getAuth, createUserWithEmailAndPassword, updateProfile } from '../firebase/config'
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const auth = getAuth()
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res.user)

            if(!res){
                throw new Error('Could not complete signup')
            }

            // add display name to user
            await updateProfile(res.user, {displayName})

            // run dispatch
            dispatch({type: 'LOGIN', payload: res.user})
            
            if(!isCancelled) {
                setIsPending(false)
                setError(null)
            }

        } catch(err) {
            if(!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {error, isPending, signup}
}