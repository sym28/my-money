import { useEffect, useRef, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore"

export const TransactionForm = ({uid}) => {
    const {addDocument, response} = useFirestore('transactions')
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const details = {
            uid,
            name,
            amount
        }
        addDocument(details)
    }

    useEffect(() => {
        if(response.success) {
            setName('')
            setAmount('')
            inputRef.current.focus()
        }
        inputRef.current.focus()
    }, [response.success])

  return (
      <>
        <h3>Add A Transaction</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                <span>Transaction Name:</span>
                <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={inputRef}
                />
            </label>
            <label htmlFor="">
                <span>Amount:</span>
                <input 
                    type="number" 
                    required 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>
            <button>Add</button>
        </form>
      </>
  )
}
