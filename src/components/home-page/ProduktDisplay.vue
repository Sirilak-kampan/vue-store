<template>
  <div class="ProduktDisplay">
  <v-container class="text-center">
      <h1>Korgen</h1>
      <p>Total: {{total}} kr</p>
  </v-container>
   
     <v-container class="my-5">
     
     <v-layout row wrap>
       <v-flex xs12 sm6 md4 lg3 v-for="produkt in cart" :key="produkt.id">
       
         <v-card class="text-xs-center ma-3">
           <v-responsive class="pt-4">
             <v-img :src="(produkt.src)"></v-img>
           </v-responsive>
           <v-card-text>
             <div class="subheading">{{produkt.name}}</div>
             <div class="grey-text">{{produkt.pris}} kr</div>
             
             <div class="grey-text text-center"> <v-btn text color="pink" @click="reduceItem(produkt)"><v-icon>mdi-minus</v-icon></v-btn>
             {{produkt.quantity}}st <v-btn text color="pink" @click="incItem(produkt)"><v-icon>mdi-plus</v-icon></v-btn>
             </div>
           </v-card-text>
           <v-card-actions>
            <v-btn text @click="removeFromCart(produkt)">
            <v-icon>mdi-delete</v-icon>
            </v-btn>
           </v-card-actions>

         </v-card>
       </v-flex>
     </v-layout>
   </v-container> 
  </div>
</template>

<script>

export default{
    computed: {
        
    cart(){
           return this.$store.state.cart
           
         },
         total(){
           return this.cart.reduce(
             (total, produkt) => total + produkt.pris * produkt.quantity, 0
           );
         }
    },
    methods:{
      removeFromCart(produkt){
        this.$store.commit('removeFromCart', produkt)
      },

      reduceItem(produkt){
        this.$store.commit('reduceItem', produkt)
      },

      incItem(produkt){
        this.$store.commit('incItem', produkt)
      }
       
    }
    
}
</script>

