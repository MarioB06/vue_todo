import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', {

  state: () => ({ 
    
    category: [
      
    ]
  }),

 

  actions: {
    
    addCategory(name_category) {
        let category_length = this.category.length;
        console.log(category_length);
        this.category.push({
            id: ++category_length,
            name: name_category
        })

    }


  },

 
  persist: true,

})
