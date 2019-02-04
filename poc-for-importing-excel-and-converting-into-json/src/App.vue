<template>
  <div id="app">
    
    <div class="vue-app">
    <h4>Upload PDF</h4>
    <kendo-upload ref="imageUpload"
                    name="pdfFiles"
                    :async-save-url="'custom-save-url'"
                    :async-remove-url="'custom-remove-url'"
                    :validation-allowed-extensions='[".xlsx"]'>
    </kendo-upload>
    <div class="demo-hint">You can only upload <strong>Excel</strong> files.</div>

    <br/><br/>

     <kendo-grid :data-source="localDataSource" :reorderable="true">
        <kendo-grid-column :field="'ProductName'" :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
    </kendo-grid>
</div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return  {
        localDataSource: [{
                'ProductID':1,
                'ProductName':'Chai',
                'UnitPrice':18,
                'UnitsInStock':39,
                'Discontinued':false
            },
            {
                'ProductID':2,
                'ProductName':'Chang',
                'UnitPrice':19,
                'UnitsInStock':17,
                'Discontinued':false
            },
            {
                'ProductID':2,
                'ProductName':'Chang',
                'UnitPrice':19,
                'UnitsInStock':17,
                'Discontinued':false
            },
            {
                'ProductID':2,
                'ProductName':'Chang',
                'UnitPrice':19,
                'UnitsInStock':17,
                'Discontinued':false
            },
            {
                'ProductID':2,
                'ProductName':'Chang',
                'UnitPrice':19,
                'UnitsInStock':17,
                'Discontinued':false
            },
            {
                'ProductID':2,
                'ProductName':'Chang',
                'UnitPrice':19,
                'UnitsInStock':17,
                'Discontinued':false
            },
            {
                'ProductID':2,
                'ProductName':'Chang',
                'UnitPrice':19,
                'UnitsInStock':17,
                'Discontinued':false
            }
        ]
    }
  },

  mounted: function () {
        /*
            The code in this function is only added to simulate a successful upload request for this demo.
            Do not use the code in other cases when working with the Upload component.
        */

        var postFormData = function (url, data, fileEntry, xhr) {
            var module = this;
            fileEntry.data("request", xhr);
            setTimeout(function () {
                var e = { target: { responseText: '', statusText: "OK", status: 200 } };
                module.onRequestSuccess.call(module, e, fileEntry);
            }, 1000);
        };
        
        var submitRemove = function (fileNames, eventArgs, onSuccess, onError) {
            onSuccess();
        };

        var imageUpload = this.$refs.imageUpload.kendoWidget();
        imageUpload._module.postFormData = postFormData;
        imageUpload._submitRemove = submitRemove;

        var imageUpload = this.$refs.imageUpload.kendoWidget();
        imageUpload._module.postFormData = postFormData;
        imageUpload._submitRemove = submitRemove;

        var documentsUpload = this.$refs.documentsUpload.kendoWidget();
        documentsUpload._module.postFormData = postFormData;
        documentsUpload._submitRemove = submitRemove;
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
