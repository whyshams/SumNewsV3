import React from 'react';
import Link from 'next/link';

const EditorMenu = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
           <div className='editormenu'>
    <Link href="/EditImage/Upload">
    <nav className='btn btn-warning p-3 '>
        Upload or Drag and Drop Image to edit
    </nav>
    </Link>
    <h1>OR</h1>
    <Link href="/EditImage/Editor">
    <nav className='btn btn-warning p-3 text-center'>
        Paste Image Link to edit
    </nav>
    </Link>

    </div>
    </div>
  )
}

export default EditorMenu