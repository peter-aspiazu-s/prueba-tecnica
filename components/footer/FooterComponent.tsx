import {FC} from 'react';
import Image from 'next/image';

export const FooterComponent: FC = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__text1'>Copyright (C) 2023 <span>|</span> clarifionsupport@clarifion.com</div>
        <div className='footer__container-img-text'>
          <div className='footer__container-img'>
            <Image src="/image/padlock2.svg" alt="Padlock image" layout="fill" />
          </div>
          <div className='footer__text2'>Secure 256-Bit SSL Encryption.</div>
        </div>
      </div>
    </div>
  )
}
