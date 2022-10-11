import React,{useContext,createContext,useState,useEffect} from 'react';
import axios from 'axios';


const ResultContext = createContext();


export default function ResultContextProvider  ({children})  {

  


    const [bdNewsData,setBdNewsData] = useState([]); 

    const [bdNewsDataDiv, setBdNewsDataDiv] = useState([]);
    const [bdNewsDataCat, setBdNewsDataCat] = useState([]);
    
    const [catData,setCatData] = useState([]);


    const [sumData, setSumData] = useState();
    const [sumInput,setSumInput] = useState('');
    const [sumText,setSumText] = useState('');
    const [sumError, setSumError] = useState(false);
    

    const [Loading, setLoading] = useState(false)
    


    const [mobile,setMobile] = useState(false);
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    const [copied, setCopied] = useState(false);
    
   
    const [directSumData,setDirectSumData] = useState()
    const [directSumInput,setDirectsumInput] = useState('')
    const [directSumError,setDirectSumError] = useState(false)
    const [clear,setClear] = useState(false)

    const getData = async () => {
        await axios.request(
           {
             method: 'POST',
             url : `https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-url/`,
             headers: {
               'content-type': 'application/json',
               'X-RapidAPI-Key': '42ca516b7amshb3430e4d7c91715p1b5024jsnb40e2e325bd9',
               'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
               },
             data: `{"url":"${sumInput}","min_length":100,"max_length":300,"is_detailed":true}`
         }).then((response)=>setSumData(response.data)).catch(err => setSumError(true))
 
       }




       const getData2 = async () => {
        setLoading(true)
        
        await axios.request(
           {
             method: 'POST',
             url : "https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-url/",
             headers: {
               'content-type': 'application/json',
               'X-RapidAPI-Key': '42ca516b7amshb3430e4d7c91715p1b5024jsnb40e2e325bd9',
               'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
               },
             data: `{"url":"${directSumInput}","min_length":100,"max_length":300,"is_detailed":true}`
         }).then((response)=>setDirectSumData(response.data)).then(()=> setClear(false)).catch(err => console.log(err)).finally(() => setLoading(false))
 
       }
 
     
    useEffect(() => {
    if(sumInput !== ''){
     

      getData();
      
    }
      },[sumInput])
    


      useEffect(() => {
        if(directSumInput !== ''){
          getData2();
         
        }
          },[directSumInput])
        
    



  return (
    <ResultContext.Provider value={{mobile,setMobile,text, setText,image, setImage,Loading,setLoading,sumError,bdNewsData,setBdNewsData,bdNewsDataDiv,setBdNewsDataDiv,catData,setCatData,sumData, setSumData,sumInput,setSumInput,sumText,setSumText,copied,setCopied,bdNewsDataCat, setBdNewsDataCat,setDirectsumInput,directSumData,setDirectSumData,clear,setClear}}>
          {children}
        </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext)
