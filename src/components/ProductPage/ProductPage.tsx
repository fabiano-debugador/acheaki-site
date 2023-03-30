import Link from 'next/link';
import { useRouter } from 'next/router';
import { IProduct, IProductData } from '../../model/product';
import { CardContainer } from '../../styles/Global';
import Card from '../Card/ProductCard';

const ProductPage: React.FC<IProductData> = ({ product }) => {
  const route = useRouter();
  const { page } = route.query;
  const categoryPage = page ? page[0] : '';

  return (
    <CardContainer>
      {page && page.length === 1 ? (
        (product as unknown as IProduct[]).map((p: IProduct) => {
          return (
            <>
              <Link
                href={`/${route.query.profile}/produtos/${categoryPage}/${p.slug}`}
              >
                <a>
                  <Card product={p} key={p.id} />
                </a>
              </Link>
            </>
          );
        })
      ) : (
        <a>
          <Card product={product} key={product.id} />
        </a>
      )}
    </CardContainer>
  );
};

export default ProductPage;
