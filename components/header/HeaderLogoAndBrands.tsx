import {FC} from 'react';
import Image from 'next/image';

export const HeaderLogoAndBrands: FC = () => {
  return (
    <div className='headerlogoandbrands'>
      <div className='headerlogoandbrands__container'>
        
        <div className='headerlogoandbrands__container-image-clarifion'>
          <Image src="/image/clarifion_logo.svg" alt="Clarifion image" layout="fill"/>
        </div>

        <div className='headerlogoandbrands__container-images'>
          <div className='headerlogoandbrands__container-image-mcafee'>
            <Image src="/image/mcafee_logo.svg" alt="McAfee image" layout="fill"/>
          </div>
          <div className='headerlogoandbrands__container-image-norton'>
            <Image src="/image/norton_logo.svg" alt="Norton image" layout="fill"/>
          </div>
        </div>

      </div>
    </div>
  )
}
