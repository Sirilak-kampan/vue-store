<template>
    <nav>
        <v-app-bar flat>
            <v-toolbar-title class="text-uppercase grey--text">
 <span class="font-weight-light">Oh</span>
            <span>Pair!</span>
            </v-toolbar-title>
          
           <v-spacer></v-spacer>
           

               <v-btn  to="/" text>
               <span class="">Home</span>
           </v-btn>

           <v-btn to="/about" text>
               <span class="">About</span>
           </v-btn>
           
           <v-btn to="/basket" text>
               <v-badge right overlap color="green">
                   <span slot="badge">{{count}}</span>
                   <v-icon>mdi-basket</v-icon>
               </v-badge>
           </v-btn>
           
           
           
         </v-app-bar>
    </nav>
</template>

<script>
export default {
   computed:{
         site(){
             return this.$store.state.site
         },
         count(){
             return this.$store.state.count
         }
     },
     

    
    
}
</script>