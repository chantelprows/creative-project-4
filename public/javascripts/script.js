var app = new Vue({
  el: '#app',
  data: {
    factList: [],
    loading: false,
    selectedFact: null,
    num: null
  },
  methods: {
    async fetchFACT() {
      var url = "http://cs260c.chantelprows.com:3001/getfact"
      try {
        let response = await axios.get(url);
        console.log("RESPONSE: ", response);
        this.factList = response.data.all
        return true;
      }
      catch (error) {
        console.log(error);
      }
    },
    selectFact() {
      this.selectedFact = this.factList[this.num - 1]
      console.log("FACT: ", this.selectedFact)
    }
  },
  async mounted() {
    this.loading = true
    await this.fetchFACT()
    this.loading = false
  }
});
