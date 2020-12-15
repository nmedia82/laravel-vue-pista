// CreateCategory.vue

<template>
  <div>
    <h1>Create Category</h1>
    <div class="row">
    <form @submit.prevent="saveCategory">
        <div class="col-md-8">
          <div class="form-group">
            <input placeholder="Category Name:" type="text" class="form-control" v-model="category.name">
          </div>
        </div>
        
        <div class="col-md-4">
        <div class="form-group">
          <button class="btn btn-primary">{{btn_title}}</button>
          <button class="btn btn-danger" @click.prevent="cancelChange()">Cancel</button>
        </div>
        </div>
    </form>
    </div>
    
    <div class="row">
      
        <table class="table table-striped table-bordered zero-configuration dataTable" id="category-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <th>{{ category.id }}</th>
              <th>{{ category.name }}</th>
              <th>
              <button class="btn btn-info" @click.prevent="onEdit(category)">Edit</button>
              <button class="btn btn-danger" @click.prevent="deleteData(category.id)" v-show="mode === 'new'">Delete</button>
              </th>
            </tr>
          </tbody>
          
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        btn_title: 'Create',
        mode: 'new',
        category: {},
        categories: []
      }
    },
    async mounted() {
      let uri = `${pista_base_url}/categories`;
      this.axios.get(uri).then(response => {
        console.log(response);
        this.categories = response.data;
      });
    },
    methods: {
      saveCategory() {

        if (this.mode === 'new') {
          let uri = `${pista_base_url}/categories`;
          this.axios.post(uri, this.category).then((response) => {
            const categories = [...this.categories, response.data.category];
            this.categories = categories;
            console.log(this.categories);
          });
        }
        else {
          this.updateData();
        }
      },
      onEdit(category) {

        toastr.success('Have fun storming the castle!', 'Miracle Max Says');
        this.$set(this.category, 'id', category.id);
        this.$set(this.category, 'name', category.name);
        this.btn_title = 'Update';
        this.mode = 'editing';
      },
      cancelChange() {
        this.category = {};
        this.btn_title = 'Create';
        this.mode = 'new';
      },
      deleteData(id) {
        const a = confirm('Are you sure?');
        if (!a) return;
        let uri = `${pista_base_url}/categories/${id}`;
        this.axios.delete(uri).then((response) => {
          const categories = this.categories.filter(c => c.id !== id);
          // this.categories.splice(this.categories.indexOf(id), 1)
          this.categories = categories;
        });
      },
      updateData() {

        let uri = `${pista_base_url}/categories/${this.category.id}`;
        this.axios.put(uri, this.category).then((response) => {

          const categories = [...this.categories];
          const categoryInDB = this.categories.find(c => c.id === this.category.id);
          const index = categories.indexOf(categoryInDB);
          categoryInDB.name = this.category.name;
          categories[index] = categoryInDB;
          this.categories = categories;
        });
      }
    }
  }
</script>
