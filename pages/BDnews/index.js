import Link from "next/link"

const index = () => {
  return (
    <div>
      <nav className="btn btn-primary m-3 p-2">
      <Link href='/BDnews/Categorical/news'><div>Categorical</div></Link>

      </nav>
     
<nav className="btn btn-primary m-3 p-2">
<Link href='/BDnews/Divisional/Dhaka'><div>Divisional</div></Link>

</nav> 
<nav className="btn btn-primary m-3 p-2">
<Link href='/BDnews/International'><div>International</div></Link>

</nav>
<nav className="btn btn-primary m-3 p-2">
<Link href='/BDnews/BanglaNews/ঢাকা'><div>বাংলা সংবাদ</div></Link>

</nav>



    </div>
  )
}

export default index