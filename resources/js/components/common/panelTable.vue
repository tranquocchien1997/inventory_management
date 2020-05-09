<template>
    <div v-if="hasPermission('list')" class="row">
        <div class="col-12">
            <div class="card">
                <Loading :show="loading"/>

                <div class="card-header">
<!--                    <h3 class="card-title">{{configs.titlePanel}}</h3>-->

                    <div class="row card-tools">
                        <div v-if="checkHasBtnCreate" class="input-group input-group-sm btn-panel-table">
                            <bBtn
                                :title="configs.create.title"
                                :color="configs.create.color"
                                className="btn-sm btn-block"
                                :link="helper.parseFullPathToShortPath(configs.create.path)"/>
                        </div>
                        <div v-if="checkHasBtnTrash && !trashMode" class="input-group input-group-sm btn-panel-table">
                            <bBtn
                                :title="configs.trash.title"
                                :color="configs.trash.color"
                                className="btn-sm btn-block"
                                :onClick="goTrash"/>
                        </div>

                        <div v-else class="input-group input-group-sm btn-panel-table">
                            <bBtn
                                title="Quay về"
                                color="primary"
                                className="btn-sm btn-block"
                                :onClick="goList"/>
                        </div>

                        <div class="input-group input-group-sm" style="width: 70px;">
                            <select style="height: 100%" v-model="configs.row">
                                <option v-for="item in configs.rowOption" :key="item">{{item}}</option>
                            </select>
                        </div>

                        <div class="input-group input-group-sm" style="width: 200px;">
                            <input type="text" v-model="search" class="form-control float-right" placeholder="Tìm kiếm">

                            <div class="input-group-append">
                                <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="card-body table-responsive p-0" style="overflow-y: hidden;">
                    <table class="table table-hover text-nowrap table-sm">
                        <thead>
                        <tr>
                            <th v-for="title in titleColumn">{{title}}</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="list in listsData">
                                <td v-for="item in fieldModelColumn" v-if="item != 'id'">{{list[item]}}</td>
                                <td v-if="checkColumnAction ">
                                    <button
                                        v-if="checkHasBtnEdit"
                                        @click="goEdit(list.id)"
                                        type="button"
                                        class="btn btn-xs btn-primary"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Chỉnh sửa">
                                        <i class="fas fa-pen"></i>
                                    </button>

                                    <button
                                        v-if="checkHasBtnSoftDelete"
                                        @click="softDeleteRecord(list.id)"
                                        type="button"
                                        class="btn btn-xs btn-danger"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Xoá">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>

                                    <button
                                        v-if="checkHasBtnRestore"
                                        @click="restoreRecord(list.id)"
                                        type="button"
                                        class="btn btn-xs btn-success"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Khôi phục">
                                        <i class="fas fa-redo"></i>
                                    </button>

                                    <button
                                        v-if="checkHasBtnDelete"
                                        @click="deleteRecord(list.id)"
                                        type="button"
                                        class="btn btn-xs btn-danger"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Xoá vĩnh viễn">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr v-if="listsData.length == 0" style="text-align: center;height: 25px">
                                <div style="width: 100%;position: absolute;">Dữ liệu trống</div>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                    <ul class="pagination pagination-sm m-0 float-right">
                        <li class="page-item" style="cursor: pointer;" @click="previousPage"><a class="page-link" >&laquo;</a></li>
                        <li
                            v-for="item in paginateShow"
                            @click="changePage(item)"
                            :class=" item == configs.page ? 'active page-item' : 'page-item'"
                            style="cursor: pointer;">
                            <a class="page-link">{{item}}</a>
                        </li>
                        <li class="page-item" style="cursor: pointer;" @click="nextPage"><a class="page-link" >&raquo;</a></li>
                    </ul>
                </div>
            <!-- /.card -->
            </div>
            <!-- /.card -->
        </div>
    </div>
</template>

<script>

    import MixinForm from "../configs/MixinForm";
    import Loading from "./loading";

    export default {
        mixins: [ MixinForm ],
        components: {
          Loading
        },
        props: ['configs','parsePayload'],
        data(){
            return {
                lists: {},
                search: '',
                softDeleteApi: this.configs.softDelete.api,
                deleteApi: this.configs.delete.api,
                restoreApi: this.configs.restore.api,
                moduleId: this.configs.id
            }
        },
        computed:{
            titleColumn: function () {
                return Object.values(this.configs.titleColumn)
            },
            fieldModelColumn: function () {
                return Object.keys(this.configs.titleColumn).filter(item => item != 'action')
            },
            checkColumnAction: function () {
                return Object.keys(this.configs.titleColumn).filter(item => item == 'action').length && (this.hasPermission('edit') || this.hasPermission('soft_delete') || this.hasPermission('restore') || this.hasPermission('delete'))
            },
            checkHasBtnEdit: function(){
                return this.configs.update.path && this.hasPermission('edit')
            },
            checkHasBtnSoftDelete: function(){
                return this.configs.softDelete.api && this.hasPermission('soft_delete')
            },
            checkHasBtnDelete: function(){
                return this.configs.delete.api && this.hasPermission('delete')
            },
            checkHasBtnCreate: function(){
                return this.configs.create.path && this.hasPermission('create')
            },
            checkHasBtnTrash: function(){
                return this.configs.trash.path && this.hasPermission('trash')
            },
            checkHasBtnRestore: function(){
                return this.configs.restore.api && this.hasPermission('restore')
            },
            listsData: function () {
                return this.parseListByPageRow(this.searchList)
            },
            countPage: function () {
                return Math.ceil(this.searchList.length / this.configs.row)
            },
            paginateShow: function () {
                let arr = [];
                for (let i = 1; i <= this.countPage ; i++) {
                    arr.push(i)
                }
                return arr
            },
            searchList: function (){
                let list = [];

                if(!this.lists || !this.lists.length > 0) return []

                if(this.search && this.search.length > 0){
                    for (let i = 0; i < this.lists.length; i++) {
                        let key = Object.keys(this.lists[i])

                        for (let j = 0; j < key.length; j++) {

                            let str = this.lists[i][key[j]]

                            if(str && str.toString().toLocaleLowerCase().includes(this.search.toString().toLocaleLowerCase())){
                                list.push(this.lists[i])
                                break;
                            }
                        }
                    }
                }else{
                    list = this.lists
                }

                return list
            }
        },
        mounted() {
            this.prepareDataCommon()
        },
        methods:{
            beforeGetDataCommon(){

                this.commonDataApi = this.configs.list.api
            },
            afterGetDataCommon(data){

                this.lists = this.parseListbyColumnConfig(this.parsePayload(data.data.data.list))
            },
            parseListbyColumnConfig(data){

                let arr = [], list = JSON.parse(JSON.stringify(data));

                for (let i = 0; i < list.length; i++) {
                    arr[i] = {}
                    let key = this.fieldModelColumn
                    key.push('id')
                    for (let j = 0; j < key.length; j++) {
                        arr[i][key[j]] = list[i][key[j]]
                    }
                }

                return arr
            },
            parseListByPageRow(list){
                if(!list || !list.length > 0) return []
                let row = this.configs.row
                let page = this.configs.page
                let start = ((page - 1) * row)
                let end = (page * row) - 1

                if(list.length < end){
                    end = list.length - 1
                }
                let listShow = [];

                for (let i = start; i <= end; i++) {
                    if(list[i]){
                        listShow.push(list[i])
                    }
                }

                return listShow
            },
            changePage(page){
                if(this.configs.page != page){
                    this.configs.page = page
                }
            },
            nextPage(){
                if(this.configs.page < this.countPage){
                    this.configs.page ++
                }
            },
            previousPage(){
                if(this.configs.page > 1){
                    this.configs.page --
                }
            },
            goEdit(id){
                this.$router.push({
                    path: this.helper.parseFullPathToShortPath(this.configs.update.path),
                    query: {id: id}
                })

            },
            goTrash(){
                this.$router.push(this.helper.parseFullPathToShortPath(this.configs.trash.path))
            },
            goList(){
                this.$router.push(this.helper.parseFullPathToShortPath(this.configs.list.path))
            }

        }
    }
</script>

<style scoped>
    .btn-panel-table{
        width: 100px;
        padding-right: 15px
    }
</style>
