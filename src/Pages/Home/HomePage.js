import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  SearchArea,
  PageArea,
  ProductArea,
  ProductList 
} from './styled';

import useApi from '../../Services/api';
import { PageContainer } from '../../Components/partials/MainComponents';
import ProductItem from '../../Components/ProductItem/item.js';


const Page = () => {
  const api = useApi();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);

  
  useEffect(()=>{
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    }
    getStates();
  }, []);

  useEffect(()=>{
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    }
    getCategories();
  }, []);

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form action="/ads" method="GET">
              <input type="text" name="r" placeholder="Restaurante" />
            </form>
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          {categories.map((i, k)=>
            <Link key={k} to="" className="categoryItem">
            <span>{i.name}</span>
            </Link>
          )}
        </PageArea>

      
        <ProductArea>
          <ProductList>
            
          </ProductList>
        </ProductArea>
        
      </PageContainer>
    </>
    
  );
}

export default Page;