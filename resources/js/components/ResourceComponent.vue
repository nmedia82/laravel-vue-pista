// CreateResource.vue

<template>
  <div>
    <h1>Create Resource</h1>
    <div class="row">
    <form @submit.prevent="saveData">
      
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
        
        <div class="col-md-12">
        <div class="form-group">
          <button class="btn btn-primary">{{btn_title}}</button>
          <button class="btn btn-danger" @click.prevent="cancelChange()">Cancel</button>
        </div>
        </div>
    </form>
    </div>
    
    <div class="row">
      
        <table class="table table-striped table-bordered zero-configuration dataTable" id="resource-table">
          <thead> 
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
            <tr v-for="resource in resources" :key="resource.id">
              <th>{{ resource.id }}</th>
              <th>{{ resource.title }}</th>
              <th>{{ resource.category.name }}</th>
              <th>{{ resource.tags }}</th>
              <th>
              <button class="btn btn-info" @click.prevent="onEdit(resource)">Edit</button>
              <button class="btn btn-danger" @click.prevent="deleteData(resource)" v-show="mode === 'new'">Delete</button>
              </th>
            </tr>
          </tbody>
          
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
    </div>
  </div>
</template>

<script>
  // Schema JSON
  import { resource as schema } from './schema/resource.js';

  export default {
    data() {
      return {
        btn_title: 'Create',
        mode: 'new',
        resource: {},
        resources: [],
        categories: [],
        selected: "Select Category",
        model: {
          title: '',
          category_id: '',
          description: '',
          tags: ''
        },
        schema: schema,
        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true,
          validateAsync: true
        }
      }
    },

    async mounted() {
      const uri = `${pista_base_url}/resources`;
      const categories = `${pista_base_url}/categories`;

      // getting categories list
      this.axios.get(categories).then(response => {

        this.schema.groups[0].fields[1].values = response.data
        this.categories = response.data;
      });

      this.axios.get(uri).then(response => {
        // console.log(response);
        this.resources = response.data;
      });
    },
    methods: {

      setSelected(value) {
        this.$set(this.resource, 'category_id', value);
      },

      saveData() {
        if (this.mode === 'new') {
          let uri = `${pista_base_url}/resources`;
          console.log('model', this.model);
          // return;
          this.axios.post(uri, this.model).then((response) => {
            const resources = [...this.resources, response.data.resource];
            this.resources = resources;
            this.cancelChange();
            toastr.success(`Record created successfully`, 'Created!');
          });
        }
        else {
          this.updateData();
        }
      },
      onEdit(resource) {
        this.model = { ...resource };
        console.log(this.model);
        // this.selected = model.category_id;
        this.btn_title = 'Update';
        this.mode = 'editing';
      },
      cancelChange() {
        this.resource = {};
        // this.selected = "Select Category";
        this.btn_title = 'Create';
        this.mode = 'new';
      },
      deleteData(resource) {
        const a = confirm('Are you sure?');
        if (!a) return;
        let uri = `${pista_base_url}/resources/${resource.id}`;
        this.axios.delete(uri).then((response) => {
          const resources = this.resources.filter(c => c.id !== resource.id);
          // this.resources.splice(this.resources.indexOf(id), 1)
          this.resources = resources;
          toastr.error(`Record deleted successfully`, 'Deleted!');
        });
      },

      updateData() {

        let uri = `${pista_base_url}/resources/${this.model.id}`;
        this.axios.put(uri, this.model).then((response) => {

          this.model = { ...response.data.resource };
          const resources = [...this.resources];
          const resourceInDB = this.resources.find(c => c.id === this.model.id);
          const index = resources.indexOf(resourceInDB);
          // resourceInDB.name = this.resource.title;
          resources[index] = { ...this.model };
          console.log(resources[index]);
          this.resources = [...resources];
          toastr.info(`Record updated successfully`, 'Updated!');
        });
      }
    }
  }
</script>
