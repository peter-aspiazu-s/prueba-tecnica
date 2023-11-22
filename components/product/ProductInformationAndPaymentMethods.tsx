import { FC } from 'react';
import Image from 'next/image';


export const ProductInformationAndPaymentMethods: FC = () => {
  return (
    <div className='productinformationandpaymentmethods'>
      <div className='productinformationandpaymentmethods__container'>
        <div className='productinformationandpaymentmethods__title'><span>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span>$14 Each</span> ($84.00 Total!)</div>
        <div className='productinformationandpaymentmethods__container-img-star-price'>

          <div className='productinformationandpaymentmethods__container-img'>
            <Image src="/image/product2.svg" alt="Product image" layout="fill" />
          </div>

          <div className='productinformationandpaymentmethods__container-star'>
            <div className='productinformationandpaymentmethods__star-text'>Clarifion Air Ionizer</div>
            <div className='productinformationandpaymentmethods__stars-container'>
              <div className='productinformationandpaymentmethods__star-ico'>
                <Image src="/image/star.svg" alt="Star image" layout="fill" />
              </div>
              <div className='productinformationandpaymentmethods__star-ico'>
                <Image src="/image/star.svg" alt="Star image" layout="fill" />
              </div>
              <div className='productinformationandpaymentmethods__star-ico'>
                <Image src="/image/star.svg" alt="Star image" layout="fill" />
              </div>
              <div className='productinformationandpaymentmethods__star-ico'>
                <Image src="/image/star.svg" alt="Star image" layout="fill" />
              </div>
              <div className='productinformationandpaymentmethods__star-ico'>
                <Image src="/image/star.svg" alt="Star image" layout="fill" />
              </div>
            </div>
            <div className='productinformationandpaymentmethods__radio-text'>
              <div className='productinformationandpaymentmethods__radio'>
                <Image src="/image/radio.svg" alt="Radio image" layout="fill" />
              </div>
              <div className='productinformationandpaymentmethods__text'>12 left in Stock</div>
            </div>
            <div className='productinformationandpaymentmethods__characteristics-desc2'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
          </div>

          <div className='productinformationandpaymentmethods__container-price'>
            <div className='productinformationandpaymentmethods__price-before'>$180</div>
            <div className='productinformationandpaymentmethods__price-after'>$84</div>
          </div>
        </div>

        <div className='productinformationandpaymentmethods__container-characteristics'>
          <div className='productinformationandpaymentmethods__characteristics-desc'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
          
          <div className='productinformationandpaymentmethods__characteristics-container-text'>
            <div className='productinformationandpaymentmethods__characteristics-image'>
              <Image src="/image/seen.svg" alt="Seen image" layout='fill' />
            </div>
            <div className='productinformationandpaymentmethods__characteristics-text'>Negative Ion Technology may <span>help with allergens</span></div>
          </div>

          <div className='productinformationandpaymentmethods__characteristics-container-text'>
            <div className='productinformationandpaymentmethods__characteristics-image'>
              <Image src="/image/seen.svg" alt="Seen image" layout='fill' />
            </div>
            <div className='productinformationandpaymentmethods__characteristics-text'>Designed for <span>air rejuvenation</span></div>
          </div>

          <div className='productinformationandpaymentmethods__characteristics-container-text'>
            <div className='productinformationandpaymentmethods__characteristics-image'>
              <Image src="/image/seen.svg" alt="Seen image" layout='fill' />
            </div>
            <div className='productinformationandpaymentmethods__characteristics-text'><span>Perfect for every room</span> in all types of places.</div>
          </div>
        </div>

        <div className='productinformationandpaymentmethods__container-promotion'>
          <div className='productinformationandpaymentmethods__promotion-img'>
            <Image src="/image/percentage.svg" alt="Percentage image" layout='fill' />
          </div>

          <div className='productinformationandpaymentmethods__promotion-text'>Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>.</div>
        </div>

        <div className='productinformationandpaymentmethods__container-button'>
          <div className='productinformationandpaymentmethods__button-text'>YES - CLAIM MY DISCOUNT</div>
          <div className='productinformationandpaymentmethods__button-ico'>
            <Image src="/image/right.svg" alt="Right image" layout="fill" />
          </div>
        </div>

        <div className='productinformationandpaymentmethods__container-paymentmethods'>
          <div className='productinformationandpaymentmethods__paymentmethods-text-container'>
            <div className='productinformationandpaymentmethods__paymentmethods-text'>Free Shipping</div>
            <div className='productinformationandpaymentmethods__paymentmethods-container-text-image'>
              <div className='productinformationandpaymentmethods__paymentmethods-image'>
                <Image src="/image/padlock.svg" alt="Padlock image" layout='fill' />
              </div>
              <div className='productinformationandpaymentmethods__paymentmethods-text'>Secure 256-bit SSL encryption</div>
            </div>
          </div>

          <div className='productinformationandpaymentmethods__container-paymentmethods-ico'>
            <div className='productinformationandpaymentmethods__paymentmethods-ico'>
              <Image src="/image/visa.svg" alt="Visa image" layout="fill" />
            </div>
            <div className='productinformationandpaymentmethods__paymentmethods-ico'>
              <Image src="/image/shoppay.svg" alt="ShopPay image" layout="fill" />
            </div>
            <div className='productinformationandpaymentmethods__paymentmethods-ico'>
              <Image src="/image/paypal.svg" alt="Paypal image" layout="fill" />
            </div>
            <div className='productinformationandpaymentmethods__paymentmethods-ico'>
              <Image src="/image/mastercard.svg" alt="Mastercard image" layout="fill" />
            </div>
            <div className='productinformationandpaymentmethods__paymentmethods-ico'>
              <Image src="/image/gpay.svg" alt="Gpay image" layout="fill" />
            </div>
            <div className='productinformationandpaymentmethods__paymentmethods-ico'>
              <Image src="/image/applepay.svg" alt="Apple play image" layout="fill" />
            </div>
            <div className='productinformationandpaymentmethods__paymentmethods-ico'>
              <Image src="/image/amex.svg" alt="Amex image" layout="fill" />
            </div>
          </div>
        </div>

        <div className='productinformationandpaymentmethods__container-certificate'>
          <div className='productinformationandpaymentmethods__certificate-title'>NO THANKS, I DON’T WANT THIS.</div>
          <div className='productinformationandpaymentmethods__certificate-img-text'>
            <div className='productinformationandpaymentmethods__certificate-img'>
              <Image src="/image/certificate.svg" alt="Certificate image" layout='fill' />
            </div>
            <div className='productinformationandpaymentmethods__certificate-text'>If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</div>
          </div>
        </div>

      </div>
    </div>
  )
}
