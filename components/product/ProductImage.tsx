import Image from 'next/image';
import { FC } from 'react';


export const ProductImage: FC = () => {
  return (
    <div className='productimage'>
      <div className='productimage__container'>
        <div className='productimage__container-img'>
          <Image src="/image/product.svg" alt="Product image" layout="fill" />
        </div>

        <div className='productimage__container-recommendation'>
          <div className='productimage__recommendation-img-name-star'>
            <div className='productimage__recommendation-img'>
              <Image src="/image/profile.svg" alt="Profile image" layout='fill' />
            </div>
            <div className='productimage__recommendation-name-star'>
              <div className='productimage__recommendation-star'>
                <div className='productimage__recommendation-star-ico'>
                  <Image src="/image/star.svg" alt="Star image" layout="fill" />
                </div>
                <div className='productimage__recommendation-star-ico'>
                  <Image src="/image/star.svg" alt="Star image" layout="fill" />
                </div>
                <div className='productimage__recommendation-star-ico'>
                  <Image src="/image/star.svg" alt="Star image" layout="fill" />
                </div>
                <div className='productimage__recommendation-star-ico'>
                  <Image src="/image/star.svg" alt="Star image" layout="fill" />
                </div>
                <div className='productimage__recommendation-star-ico'>
                  <Image src="/image/star.svg" alt="Star image" layout="fill" />
                </div>
              </div>

              <div className='productimage__recommendation-name-container'>
                <div className='productimage__recommendation-name'>Ken T.</div>
                <div className='productimage__recommendation-name-img'>
                  <Image src="/image/verify.svg" alt="Verify image" layout="fill" />
                </div>
                <div className='productimage__recommendation-name-text'>Verified Customer</div>
              </div>
            </div>
          </div>
          <div className='productimage__recommendation-comment'>
            “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
          </div>
        </div>
      </div>
    </div>
  )
}
