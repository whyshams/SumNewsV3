import {useState} from 'react';
import { useResultContext } from '../Contexts/ResultContextProvider';
import Loading from './LoAding';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Summary = ({directSumData}) => {

  const {clear,setClear} = useResultContext();
  return (
    <div>
                
      
                {
                  directSumData ? <div className='modu'>
                    
                  <div className=' col-md-12'>
                    <button className='btn btn-danger p-2' onClick={() => {setClear(true)}}>Close</button>
                        
                      
                      <div className='d-block card'>
                        <div className='nationalContent'>
                        <h2 className='sumTitle d-flex justify-content-center align-items-center'>{directSumData.article_title}</h2>
                        <div className='m-2 d-flex justify-content-center align-items-center'>
                          <img className='sumImage rounded' src={directSumData.article_image} alt={directSumData.article_title}/>
                        </div>
                        <CopyToClipboard text={directSumData.article_image} >
                                       <div className='d-flex justify-content-center align-items-center'>
                                       <button className='btn btn-warning p-2 m-3 '>Copy image Link</button>
                                       </div>
                         </CopyToClipboard>
                        <div className=' summary justify-content-center align-items-center'>
                        <h4 className='summary1 d-flex justify-content-center align-items-center'>Summary : </h4>

                        {
                      directSumData?.summary.map(dat => (
                        <div key={dat}>
                        <p className='summary2 d-flex justify-content-center align-items-center'>{dat}</p>
                        </div>
                      ))
                    }

                        </div>

                        </div>
                       
                      </div>
                      

                    </div>
                    
                    
                  </div> :<div>
                  <button className='btn btn-danger p-2' onClick={() => {setClear(true)}}>Close</button>

                    <h1 className='modu'>
                    Loading...

                    </h1>
                      </div>
                }

    </div>
  )
}

export default Summary