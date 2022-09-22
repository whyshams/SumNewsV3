import {useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';


const NavBar = () => {
  const [bdOpen , setBdOpen] =useState(false);
  const [bdNatOpen,setBdNatOpen] = useState(false);
  const [homeOpen,setHomeOpen] = useState(false);

  const router = useRouter();
  return (
    <>
   

  <nav className='menu'>
  <Link href="/">
    <div className='btn btn-success p-3 m-3'>
        SUMNEWS
    </div>
    </Link>
    
    <Link href="/TopNews/World"><div className='btn btn-success p-3 m-3'>Worldwide Top News</div></Link>

 <Link href="/BDnews">
 <div className='btn btn-success p-3 m-3'>
  Bangladesh News</div></Link>


    <Link href="/Summarize">
<div className='btn btn-success p-3 m-3'>

      Summarizer</div></Link>
      <Link href="/EditImage">
<div className='btn btn-success p-3 m-3'>
        Image Editor</div></Link>

  </nav>
 
<hr/>
    </>
  )
}

export default NavBar