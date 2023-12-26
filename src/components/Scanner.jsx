import React from 'react'
import QrReader from 'react-qr-scanner'
import { useState } from 'react'
  const previewStyle = {
    height: 240,
    width: 320,
  }
export default function Scanner() {
  const [data, setData] = useState('')
  return (
    <div>
      {/* <QrReader
          delay={500}
          style={previewStyle}
          onError={(err)=>console.error(err)}
          onScan={(data)=>console.log(data)}
          /> */}
          hii scanner
        <p>{data}</p>
      
    </div>
  )
}
