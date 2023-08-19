import React from 'react'
import ProductCard from '../components/ProductCard';

const ProductFeed = ({ product, search }) => {
  return (
    <div className='grid grid-flow-row-dense
     md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
      {product?.filter((item) =>
      ( search.toLowerCase() == '' ? item : item.title.toLowerCase().includes(search)
      )).slice(0, 4).map(({ id, category, description, image, price, title }) => (
        <ProductCard key={id}
          id={id}
          category={category}
          description={description}
          image={image}
          price={price}
          title={title}

        />
      ))}
      <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="add" />

      <div className='md:col-span-2'>
        {product?.filter((item) =>
      ( search.toLowerCase() == '' ? item : item.title.toLowerCase().includes(search)
      )).slice(4, 5).map(({ id, category, description, image, price, title }) => (
          <ProductCard key={id}
            id={id}
            category={category}
            description={description}
            image={image}
            price={price}
            title={title}

          />
        ))}
      </div>

      {product?.filter((item) =>
      ( search.toLowerCase() == '' ? item : item.title.toLowerCase().includes(search)
      )).slice(5, product.length).map(({ id, category, description, image, price, title }) => (
        <ProductCard key={id}
          id={id}
          category={category}
          description={description}
          image={image}
          price={price}
          title={title}

        />
      ))}



    </div>
  )
}

export default ProductFeed