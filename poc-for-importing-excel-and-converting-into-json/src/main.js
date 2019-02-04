import Vue from 'vue'
import App from './App.vue'

import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { PopupsInstaller } from '@progress/kendo-popups-vue-wrapper';

import { DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper';
import { AutoComplete, ComboBox, DropDownList, MultiSelect, DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'
import { Grid, GridColumn, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
import { Spreadsheet, SpreadsheetSheet, SpreadsheetInstaller } from '@progress/kendo-spreadsheet-vue-wrapper'
import { Chart, ChartSeriesItem, Sparkline, SparklineSeriesItem, StockChart, ChartInstaller } from '@progress/kendo-charts-vue-wrapper'
import { Editor, EditorTool, EditorInstaller } from '@progress/kendo-editor-vue-wrapper'
import { Upload, UploadInstaller } from '@progress/kendo-upload-vue-wrapper'
import { NumericTextBox, Switch, InputsInstaller } from '@progress/kendo-inputs-vue-wrapper'
import { Calendar, DateInput, TimePicker, DatePicker, DateTimePicker, DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper'
import { Button, ButtonGroup, ButtonGroupButton, ToolBar, ToolBarItem, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

Vue.use(GridInstaller);
Vue.use(UploadInstaller);

new Vue({
  el: '#app',
  render: h => h(App)
})

