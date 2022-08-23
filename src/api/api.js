
import { request, GraphQLClient } from 'graphql-request';

import { gql } from "@apollo/client"

const LOAD_ITEMS = gql`
   query{
       categories{ 
         name 
         products{
            id 
            name 
            inStock 
            brand
            gallery 
            prices{
               currency{
                  label 
                  symbol
               } 
                  amount
            } 
         } 
      }
   }

`

const LOAD_PDP = (itemId) => gql`
   query{
      product(id:"${itemId}"){
      id
      name
      inStock
      gallery
      description
      category
      prices{
         currency{
            label
            symbol
         }
         amount
      }
      brand
      
      }
   }

`

const LOAD_CURRENCIES = gql`
query{
	currencies{
    label
    symbol
  }
}

`

export const bodyAPI = {
   async getBodyItems() {
      return await request("http://localhost:4000/graphql", LOAD_ITEMS);
   },
   async getCurrencies() {
      return await request("http://localhost:4000/graphql", LOAD_CURRENCIES);
   }
}

export const pdpAPI = {
   async getPdpItem(itemId) {
      return await request("http://localhost:4000/graphql", LOAD_PDP(itemId));

   }
}





