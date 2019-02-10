<template>
    <div id="app">
    
        <div class="vue-app">
            <h4>Upload PDF</h4>
            <input type="file" multiple="false" id="sheetjs-input" @change="onchange" />
            <br/><br/>

            <!-- <pre><code>{{localDataSource}}</code></pre> -->
    
            <kendo-grid :data-source="localDataSource" :reorderable="true">
                <kendo-grid-column :field="'ProductName'" :width="180"></kendo-grid-column>
                <kendo-grid-column :field="'UnitPrice'" :title="'Unit Price'" :width="120" :format="'{0:c}'"></kendo-grid-column>
                <kendo-grid-column :field="'UnitsInStock'" :title="'Units In Stock'" :width="120"></kendo-grid-column>
                <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
            </kendo-grid>
        </div>
    </div>
</template>

<script>
    import XLSX from 'xlsx';
    
    export default {
        name: 'app',
        data() {
            return {
                localDataSource: [{
                        'ProductID': 1,
                        'ProductName': 'Chai',
                        'UnitPrice': 18,
                        'UnitsInStock': 39,
                        'Discontinued': false
                    },
                    {
                        'ProductID': 2,
                        'ProductName': 'Chang',
                        'UnitPrice': 19,
                        'UnitsInStock': 17,
                        'Discontinued': false
                    },
                    {
                        'ProductID': 2,
                        'ProductName': 'Chang',
                        'UnitPrice': 19,
                        'UnitsInStock': 17,
                        'Discontinued': false
                    },
                    {
                        'ProductID': 2,
                        'ProductName': 'Chang',
                        'UnitPrice': 19,
                        'UnitsInStock': 17,
                        'Discontinued': false
                    },
                    {
                        'ProductID': 2,
                        'ProductName': 'Chang',
                        'UnitPrice': 19,
                        'UnitsInStock': 17,
                        'Discontinued': false
                    },
                    {
                        'ProductID': 2,
                        'ProductName': 'Chang',
                        'UnitPrice': 19,
                        'UnitsInStock': 17,
                        'Discontinued': false
                    },
                    {
                        'ProductID': 2,
                        'ProductName': 'Chang',
                        'UnitPrice': 19,
                        'UnitsInStock': 17,
                        'Discontinued': false
                    }
                ]
            }
        },
    
        methods: {
            onchange: function(evt) {
                
                var file;
                var jsonFormat;
                var files = evt.target.files;
    
                if (!files || files.length == 0) return;
    
                file = files[0];
    
                var reader = new FileReader();
                reader.onload = function(e) {
                    
                    // pre-process data
                    var binary = "";
                    var bytes = new Uint8Array(e.target.result);
                    var length = bytes.byteLength;
                    for (var i = 0; i < length; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
    
                    /* read workbook */
                    var wb = XLSX.read(binary, {
                        type: 'binary'
                    });
    
                    /* grab first sheet */
                    var wsname = wb.SheetNames[0];
                    var ws = wb.Sheets[wsname];
    
                    /* generate HTML */
                    jsonFormat = XLSX.utils.sheet_to_json(ws);
                    var jsonString = JSON.stringify(jsonFormat);
                    localStorage.setItem('contractData', jsonString);
                };
    
                reader.readAsArrayBuffer(file);
                this.localDataSource = localStorage.getItem('contractData');
            },
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
    
    h1,
    h2 {
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
