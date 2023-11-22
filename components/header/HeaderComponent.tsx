import { FC } from 'react';
import { HeaderNotice } from './HeaderNotice';
import { HeaderLogoAndBrands } from './HeaderLogoAndBrands';


export const HeaderComponent: FC = () => {
  return (
    <div className='headercomponent'>
        <HeaderNotice />

        <HeaderLogoAndBrands />
    </div>
  )
}
