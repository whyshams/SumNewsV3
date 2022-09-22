import React from 'react'
import { useResultContext } from '../../Contexts/ResultContextProvider';
import { useRouter } from 'next/router';
const Url = () => {
    const {text, setText,image, setImage} = useResultContext()

    const handleSubmit =e => {
        e.preventDefault()
        setImage(text)
      }
    
      const router = useRouter();
  return (
    <div>
        
      <div className='d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={(e) => setText(e.target.value)} className='form-control' placeholder="Input Image Link.." />
    <button onClick={() => router.push("/EditImage/Editor")} type='submit' className='btn btn-warning mx-3 my-3'>Submit</button>
        </form>
    <button onClick={(e) => setText('')} className='btn btn-danger'>Clear</button>

        
      </div>
      
    </div>
  )
}

export default Url