import { FC } from "react";
import { ProductPromotionalPrice } from "./ProductPromotionalPrice";
import { ProductImage } from "./ProductImage";
import { ProductInformationAndPaymentMethods } from "./ProductInformationAndPaymentMethods";


export const ProductComponent: FC = () => {
  return (
    <div className="productcomponent">
        <ProductPromotionalPrice />

        <ProductImage />

        <ProductInformationAndPaymentMethods />
    </div>
  )
}
