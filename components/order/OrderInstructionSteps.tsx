import {FC} from 'react';
import Image from 'next/image';


export const OrderInstructionSteps: FC = () => {
  return (
    <div className='orderinstructionsteps'>
      <div className='orderinstructionsteps__container'>
        <div className='orderinstructionsteps__title'>Wait ! your order in progress.</div>
        <div className='orderinstructionsteps__text1'>Lorem ipsum dolor sit amet, consectetur</div>
        <div className='orderinstructionsteps__text2'>Lorem ipsum dolor sit amet, consectetur adipiscing</div>

        <div className='orderinstructionsteps__container-steps'>
          <div className='orderinstructionsteps__container-steps-img-text'>
            <div className='orderinstructionsteps__container-steps-img'>
              <Image src="/image/checked.svg" alt="icono checked" layout='fill' />
            </div>
            <div className='orderinstructionsteps__container-steps-text'>Cart Review</div>
          </div>
          
          <div className='orderinstructionsteps__container-steps-img-text'>
            <div className='orderinstructionsteps__container-steps-img'>
              <Image src="/image/checked.svg" alt="icono checked" layout='fill' />
            </div>
            <div className='orderinstructionsteps__container-steps-text'>Checkout</div>
          </div>
          
          <div className='orderinstructionsteps__container-steps-img-text'>
            <div className='orderinstructionsteps__container-steps-img'>
              <Image src="/image/3.svg" alt="icono 3" layout='fill' />
            </div>
            <div className='orderinstructionsteps__container-steps-text text-bold'>Special Offer</div>
          </div>
          
          <div className='orderinstructionsteps__container-steps-img-text'>
            <div className='orderinstructionsteps__container-steps-img'>
              <Image src="/image/4.svg" alt="icono 4" layout='fill' />
            </div>
            <div className='orderinstructionsteps__container-steps-text'>Confirmation</div>
          </div>
        </div>
      </div>
    </div>
  )
}
