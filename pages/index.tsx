import { NextPage } from "next";
import { Layout } from '../layout/Layout';
import { OrderInstructionSteps } from '../components/order/OrderInstructionSteps';
import { ProductComponent } from '../components/product/ProductComponent';


const HomePage: NextPage = () => {
  return (
    <Layout 
      title="CLARIFION | ORDER"
      description="Order page | Clarifion"
      keywords="Clarifion"
    >
      <OrderInstructionSteps />

      <ProductComponent />
    </Layout>
  )
}


export default HomePage;