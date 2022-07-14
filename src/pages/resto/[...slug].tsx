import { GetServerSideProps } from 'next';

interface IProduct {
  data: IName;
}

interface IName {
  name: string;
}

const Product: React.FC<IProduct> = ({ data }) => {
  console.log(data);
  return <h1>{data.name}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const response = { name: 'R1' };
  return {
    props: {
      data: response,
    },
  };
};

export default Product;
