<template>
  <div class="Produkt">
     <v-container  my-5>
      <h1 class="text-center">Köp skor hos oss!</h1>
      <v-row class="mb-2">
       <v-col md="6" sm="6" offset-md="3" offset-sm="3">
          <v-text-field @keyup="search(value)" v-model="value"
            label="Sök efter produkter"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
      
          
      </v-col>
        </v-row>
    </v-container> 
 
   
     <v-container class="my-5" >
     <v-layout row wrap>
       <v-flex xs12 sm6 md4 lg3 v-for="produkt in site" :key="produkt.id">
         <v-card class="text-xs-center ma-3">
           <v-responsive class="pt-4">
             <v-img :src="(produkt.src)"></v-img>
           </v-responsive>
           <v-card-text>
             <div class="subheading">{{produkt.name}}</div>
             <div class="grey-text">{{produkt.pris}} kr</div>
           </v-card-text>
           <v-card-actions>
             <v-btn text @click="addToCart(produkt)">
               <v-icon >mdi-basket-plus</v-icon>
             </v-btn>
             
             <v-btn text>
               <v-icon>mdi-heart</v-icon>
             </v-btn>
          
             <v-spacer></v-spacer>
             <v-btn text to="/about">
               <span>Detalj</span>
             </v-btn>
           </v-card-actions>
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>  
   
  </div>

</template>
<script>
import {getByTitle} from '@/assets/filters'
 export default{

  
     computed:{
         site(){
           if(this.$store.state.hasSearched){
             return this.getProductByTitle();
           } else{
             return this.$store.state.site
           }
             
         },
        
         
     },

     methods:{
       getProductByTitle(){
         let listOfProduct = this.$store.state.site,
              titleSearched = this.$store.state.produktNameSearch;

              return this.produktFilter = getByTitle(listOfProduct, titleSearched);
       },
       addToCart(produkt){
         this.$store.commit('addToCart', produkt)
       },
       search(value){
         if(value.length > 0){
           this.$store.commit('setHasUserSearched', true);
           this.$store.commit('produktTitleSearched', value);
         }else{
           this.$store.commit('setHasUserSearched', false);
           this.$store.commit('produktTitleSearched', '');
         }
       }
      
     /* search(){
        this.$store.commit('addToSearch', this.keyword)
      }*/
      
     },
       

 }

</script>

