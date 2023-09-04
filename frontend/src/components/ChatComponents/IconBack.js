import React from 'react'
import { Button} from '@mui/material';

export default function IconBack({children}) {
  return (
      <div className='bg-[#F5F5F5] flex justify-center mx-1 items-center overflow-hidden rounded-[50%] h-10 w-10'>
            <Button>
          {children}
        </Button>
        </div>
  )
}
