import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
         site:[
          {id: 1,
          quantity: 1,
            name:'Sneakers x', 
          pris: '1999', 
          src: 'https://img01.ztat.net/article/spp-media-p1/e2559e7fa9e63247b44daea8d02e4c97/87b94f466637424495a733809c7efc43.jpg?imwidth=1800&filter=packshot'
          },
          {id: 2,
          quantity: 1,
            name:'Sneakers c', 
          pris: '2999', 
          src: 'https://img01.ztat.net/article/spp-media-p1/f266c51b8eba3d79a7b58926ad56e129/07167a61b76c4524857eae682bc7ccc9.jpg?imwidth=606&filter=packshot'
          },
          { id: 3,
          quantity: 1,
            name:'Sneakers b', 
          pris: '3999', 
          src: 'https://img01.ztat.net/article/spp-media-p1/6b7fce4bafdc3c22b503fb66f5ade3bb/0b602e1773024195b5a6b77d43476c99.jpg?imwidth=1800&filter=packshot'
          },
          { id: 4,
          quantity: 1,
            name:'Sneakers a', 
          pris: '4999', 
          src: 'https://img01.ztat.net/article/spp-media-p1/1cbc63c8a07b30b3a0436b99486fa4af/2be1992bbea94b3b8e66f262aa78c188.jpg?imwidth=1800&filter=packshot'
          },
        {id: 5,
        quantity: 1,
          name:'Sneakers g', 
        pris: '5999', 
          src: 'https://img01.ztat.net/article/spp-media-p1/77f8d0abf30e35d69694e80cf803b40b/6f7f23d54409438599e9dafaa64ea854.jpg?imwidth=1800&filter=packshot'
          },
           {id: 6,
           quantity: 1,
             name:'Sneakers h', 
        pris: '6999', 
          src: 'https://img01.ztat.net/article/spp-media-p1/cd9f668590a93500a14042b487265593/7cbd4dcf5d054ac9bebe08d6e3d2f140.jpg?imwidth=1800&filter=packshot'
          },
           {id: 7,
           quantity: 1,
             name:'Sneakers j', 
        pris: '7999', 
          src: 'https://img01.ztat.net/article/spp-media-p1/3cf7e79923b83c1da9f8e190a78df533/b8d578124c5e4ae1a4ce5aff11c17280.jpg?imwidth=1800&filter=packshot'
          },
           {id: 8,
           quantity: 1,
             name:'Sneakers f', 
        pris: '8999', 
          src: 'https://img01.ztat.net/article/spp-media-p1/145ea73e01193a5fb308efe4c7a2af18/2a0c586b024b47babf3b14368d1e917d.jpg?imwidth=1800&filter=packshot'
          },
         
         ],
         count: 0,
         cart: [],
         produktNameSearch: '',
         hasSearched: false,
         produktFilter: [],
        
        
        
    },
     mutations: {     
      addToCart(state, data){
    /*  state.cart.push(data);*/
      state.count++

       let produkt = data;
        produkt = {...produkt, quantity: 1, }
        if(state.cart.length > 0){
          let bool = state.cart.some(i => i.id == produkt.id)
          if(bool){
            let itemIndex = state.cart.findIndex(el => el.id === produkt.id)
            state.cart[itemIndex]['quantity'] += 1;
          } else{
            state.cart.push(produkt)
          }
        } else{
          state.cart.push(produkt)
        }

        
        
      },


      removeFromCart(state, data){
        
         let produkt = data;
        produkt = {...produkt, quantity: 1, }
  if(state.cart.length > 0){
          let bool = state.cart.some(i => i.id == produkt.id)
          if(bool){
            let itemIndex = state.cart.findIndex(el => el.id === produkt.id)
            state.cart[itemIndex]['quantity'] = 0;
            state.count = 0
            state.cart = []
          } 
        }
      },

      incItem(state, data){
let produkt = data;
        produkt = {...produkt, quantity: 1, }
  if(state.cart.length > 0){
          let bool = state.cart.some(i => i.id == produkt.id)
          if(bool){
            let itemIndex = state.cart.findIndex(el => el.id === produkt.id)
            state.cart[itemIndex]['quantity'] += 1;
            state.count++
          } 
        }
      },

reduceItem(state, data){
   let produkt = data;
        produkt = {...produkt, quantity: 1, }
  if(state.cart.length > 0){
          let bool = state.cart.some(i => i.id == produkt.id)
          if(bool){
            let itemIndex = state.cart.findIndex(el => el.id === produkt.id)
            if(state.cart[itemIndex]['quantity'] !== 0){
              state.cart[itemIndex]['quantity'] -= 1;
            state.count--
            } if(state.cart[itemIndex]['quantity'] === 0){
              state.cart = []
            }
           
          } 
        }
},

addToSearch(state, data){
  
  if(data != ''){
    state.site = state.site.filter(produkt => {
      return produkt.name.toLowerCase().includes(data.toLowerCase());
    });
  }
},

produktTitleSearched(state, data){
  state.produktNameSearch = data
},

setHasUserSearched(state, hasSearched){
  state.hasSearched = hasSearched
},
    
      },
     
      
      modules: {},
      getters: {
         /* getProductById(state, id){
            return state.site.find(produkt => produkt.id == id)
          }*/
      },
});
