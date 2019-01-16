import Component from '@ember/component';

export default Component.extend({
  ajax: Ember.inject.service(),
  addEnab: true,
  newProd: {
    homepage: '',
    description: ''
  },
  actions: {
    actAdd() {
      fetch("https://www.onlinetool.in/api/products/", {
        method: "POST",
        body: JSON.stringify(this.newProd),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
          alert("Successful\rcreatedAt " + data.createdAt +
            "\rdescription " + data.description +
            "\rhomepage " + data.homepage +
            "\rid " + data.id);
        });
      });
    },
    actClear() {
      this.set("newProd.homepage",'');
      this.set("newProd.description",'');
      this.set("addEnab",true);
    },

    handleChIn() {
      this.set("addEnab",
        (this.newProd.homepage.length === 0) || (this.newProd.description.length === 0));
    }
  }
});
