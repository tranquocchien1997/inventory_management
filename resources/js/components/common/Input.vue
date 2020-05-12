<template>
    <div>
        <b-numeric-formatted
            :disabled="item.disable"
            v-if="item.type == 'currency'"
            class-name="form-control"
            null-placeholder="-"
            :placeholder="titleInput"
            :org-placeholder="titleInput"
            :label="titleInput"
            v-model="model[item.model]"
            :decimal-number=0 />

        <b-telerik-numberic
            :disabled="item.disable"
            v-else-if="item.type == 'number'"
            class-name="form-control"
            null-placeholder="-"
            :placeholder="titleInput"
            :org-placeholder="titleInput"
            :label="titleInput"
            v-model="model[item.model]"
            :decimal-number=7 />

        <b-date-and-time
            v-else-if="item.type == 'date' && !item.disable"
            :disabled="item.disable"
            :label="titleInput"
            null-placeholder="-"
            :placeholder="titleInput"
            :org-placeholder="titleInput"
            v-model="model[item.model]"
            time-format="DD/MM/YYYY"
            :id="item.model" />

        <b-text-field
            v-else-if="item.type == 'date' && item.disable"
            :disabled="item.disable"
            v-model="model[item.model]"
            className="form-control"
            null-placeholder="-"
            :org-placeholder="titleInput"
            :placeholder="titleInput"
            :label="titleInput" />

        <b-textarea
            :disabled="item.disable"
            v-else-if="item.type == 'textArea'"
            hasPreView="true"
            :label="titleInput"
            :placeholder="titleInput"
            :org-placeholder="titleInput"
            class-name="form-control"
            v-model="model[item.model]"
            null-placeholder="-" />

        <b-select
            :disabled="item.disable"
            v-else-if="item.type == 'dropdown'"
            :label="titleInput"
            :hasAllDefault="false"
            :list="selectList"
            item-text="value"
            item-val="id"
            :org-placeholder="titleInput"
            null-placeholder="-"
            v-model="model[item.model]" />

        <b-text-field
            :disabled="item.disable"
            v-else-if="item.type == 'string'"
            v-model="model[item.model]"
            className="form-control"
            null-placeholder="-"
            :org-placeholder="titleInput"
            :placeholder="titleInput"
            :label="titleInput" />

        <b-check-box
            :disabled="item.disable"
            v-else-if="item.type == 'checkbox'"
            v-model="model[item.model]"
            :label="titleInput" />

        <ul class="validation">{{item.error}}</ul>
    </div>
</template>
<script>
    export default {
        props: ['item', 'model','data'],
        computed: {
            selectList: function () {
              let arr = []

              if(this.data){
                  arr = this.data

                  arr.unshift({
                      id: null,
                      value: null
                  })
              }

              return arr
            },
            modelFormat(){

                if (this.model[this.item.model]){
                    return moment(this.model[this.item.model], 'YYYY/MM/DD').format('DD/MM/YYYY')
                }

                return null
            },
            titleInput(){
                if (this.item){
                    return this.item.required ? this.item.title + ' (*)' : this.item.title
                }

                return null
            }
        },
    }
</script>
