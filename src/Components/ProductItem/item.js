import React from 'react';
import {
  Container,
  ProductPhotoArea,
  ProductInfoArea,
  ProductPhoto,
  ProductName
} from './styled';

export default ({data}) => {
  return (
    <Container>
      <ProductPhotoArea>
        <ProductPhoto src={data.image} />
      </ProductPhotoArea>
      <ProductInfoArea>
        <ProductName>{data.name}</ProductName>
      </ProductInfoArea>
    </Container>
  );
}