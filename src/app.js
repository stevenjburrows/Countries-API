import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue ({
        el: '#app',
        data: {
            countries: [{}]
        },
    
        mounted(){
            this.fetchCountries();
        },
        computed: {
            totalPopulation: function() {
                return this.countries.reduce((runningTotal, country) => runningTotal + country.population, 0);
              },
              filteredCountry: function(){
                    return this.countries.filter ((counrty) => {
                      return country.name === this.selectedCounrty
                    })
                  }
              

        },

        methods: {
            fetchCountries: function() {
                
                fetch('https://restcountries.eu/rest/v2/all')
                .then( responce => responce.json())
                .then( country => this.countries = country)
                // ((console.log('hi')))
                // .then(response => console.log(response)) 
            }
    }

})
})
