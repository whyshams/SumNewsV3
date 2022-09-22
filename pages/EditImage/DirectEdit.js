
import { useEffect } from 'react';
import { useResultContext } from '../../Contexts/ResultContextProvider';

export default function Editor() {


  const {mobile,setMobile,text, setText,image, setImage} = useResultContext()

  useEffect(()=>{
    if(window.innerWidth < 700){
      setMobile(true)
    }
  
  },[])
  const handleSubmit =e => {
    e.preventDefault()
    setImage(text)
  }
  
 
  const urlPc =`https://studio.pixelixe.com/#api?apiKey=MVbGok3k3EWxgNq2rI48RjkJ5kQ2&imageUrl=${image}`;
  const urlMb = `https://studio.pixelixe.com/mobile/#api?apiKey=MVbGok3k3EWxgNq2rI48RjkJ5kQ2&imageUrl=${image}`;
  
  return (
    <>
     <div className='col-md-12'>
    
 

      {
        !text &&   <div className='d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={(e) => setText(e.target.value)} className='form-control' placeholder="Input Image Link.." />
    <button type='submit' className='btn btn-warning'>Submit</button>
        </form>
        <button onClick={(e) => setText('')} className='btn btn-danger'>Clear</button>
      </div>
      }
     

      </div>
    {
      image &&  <div>
  
      <div className='col-md-12 '>
      <div className='d-md-flex d-none justify-content-center align-items-center'>
  
      <iframe
    width="1200"
    height="1080"
  
    allowfullscreen
    frameBorder="0"
    src={urlPc}>
  </iframe>
      </div>
  
      </div>
      {
        mobile &&    <div className='col-md-12 '>
        <h1 className='d-flex justify-content-center align-items-center'>Click <i style={{color:"yellow"}} className="fa-solid fa-arrows-up-down"></i> and drag up </h1>
    
        <div className='d-md-none d-flex justify-content-center align-items-center'>
    
        <iframe
      width="414"
      height="896"
    
      allowfullscreen
      frameBorder="0"
      src={urlMb} >
    </iframe>
        </div>
    
        </div>
      }
   
      </div>
   
     
    }
   
     
 

      {/* */}
    </>
  );
}
