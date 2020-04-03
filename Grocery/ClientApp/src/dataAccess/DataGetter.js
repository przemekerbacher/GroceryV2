import $ from "jquery";
class DataGetter {
  data = [];
  baseUrl = `${window.location.origin}/api`;
  baseUrl = `https://localhost:44306/api`;

  promise(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url,
        dataType: "json",
        success: data => resolve(data),
        error: error => reject(error)
      });
    });
  }

  getData(parameters) {
    return this.promise(`${this.baseUrl}/products${parameters}`);
  }

  getMarks() {
    return this.promise(`${this.baseUrl}/marks`);
  }

  getCount(parameters) {
    return this.promise(`${this.baseUrl}/products/count${parameters}`);
  }

  getCatgories() {
    return this.promise(`${this.baseUrl}/categories`);
  }
}

export default DataGetter;
