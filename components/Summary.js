import {useState} from 'react';
import { useResultContext } from '../Contexts/ResultContextProvider';
import Loading from './Loading';

const Summary = ({directSumData}) => {
  const {clear,setClear} = useResultContext();
  return (
    <div>
    
      
                {
                  directSumData && <div className='modu'>
                    
                  <div className=' col-md-12'>
                    <button className='btn btn-danger p-2' onClick={() => {setClear(true)}}>Close</button>
                        
                      
                      <div className='d-block card'>
                        <div className='nationalContent'>
                        <h2 className='sumTitle d-flex justify-content-center align-items-center'>{directSumData.article_title}</h2>
                        <div className='m-2 d-flex justify-content-center align-items-center'>
                          <img className='sumImage rounded' src={directSumData.article_image} alt={directSumData.article_title}/>
                        </div>
                        <div className=' summary d-flex justify-content-center align-items-center'>
                        {
                      directSumData?.summary.map(dat => (
                        <div key={dat}>
                          <h4 className='summary1 d-flex justify-content-center align-items-center'>Summary : </h4>
                        <p className='summary2 d-flex justify-content-center align-items-center'>{dat}</p>
                        </div>
                      ))
                    }

                        </div>

                        </div>
                       
                      </div>
                      

                    </div>
                    
                    
                  </div>
                }

    </div>
  )
}

export default Summary