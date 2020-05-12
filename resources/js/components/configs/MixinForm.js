import bBtn from '../common/bBtn'
import InputField from "../common/Input"

import * as Helper from './Helper'
import MixinHelper from "./MixinHelper";

export default {
    mixins: [ MixinHelper],
    components: {
        bBtn,
        InputField
    },
    data() {
        return {
            loading: false,
            helper: Helper,
            formEdit: true,
            showForm: true,
            token: $('meta[name="csrf-token"]').attr('content'),
            trashMode: this.$router.currentRoute.name.toLocaleLowerCase().includes('trash')
        }
    },
    computed: {
        moduleName: function () {
            return this.config.id
        }
    },
	methods : {
        hasPermission(permission, moduleId = null){
            if (moduleId){
                return PERMISSION_USER.find(item => item.module == moduleId && item.method == permission)
            }
            return PERMISSION_USER.find(item => item.module == this.moduleId && item.method == permission)
        },
        /**
         * GET RECORD BY ID
         */
        getRecordById(id){
            this.loadingArc();
            let requestApi = this.$http.get( this.getApiRecordById(id) )
            return requestApi.then(
                (success) => {
                    this.afterGetRecord(success)
                },
                (response) => {

                }
            )
        },

        /**
         * PREPARE DATA COMMON
         */
		prepareDataCommon()
        {
			this.beforeGetDataCommon()
            this.loadingArc()
            let _token = this.token
            this.$nextTick( () => {
                return this.$http.post(this.commonDataApi,{_token, ...this.getParamsCommon()})
                .then(
                    (success) => {
                        this.loadingDone()
                        this.afterGetDataCommon(success)
                    },
                    (response) => {
                        this.getDataCommonFail(response)
                    }
                )
            })
        },

        /**
         * UPDATE
         */
		update() {
			if (!this.validateUpdate()) return
			this.beforeUpdate()
            this.loadingArc();
            this.model._token = this.token
            this.$nextTick(()=>{
                let requestApi      = this.$http.post(this.updateApi, this.getPayloadUpdate() )
                return requestApi.then(
                    (success) => {
                        this.loadingDone()
                        this.updatedDone(success)
                        this.updatedCompletely(success)
                        this.afterUpdated(success)
                    },
                    (response) => {
                        if(response.status === 401)
                            toastr.error('Permission Denied.')
                        this.updateError(response)
                        this.afterUpdated(response)
                    }
                ).then(function(){

                })
            })
		},

        /**
         * CREATE
         */
        create() {
			if (!this.validateCreation()) return

			this.beforeCreate()
            this.loadingArc();
            this.model._token = this.token
            this.$nextTick(()=>{
                let requestApi = this.$http.post(this.createApi, this.model, {});
                return requestApi.then(
                    (success) => {
                        this.loadingDone()
                        this.createdDone(success)
                        this.createdCompletely(success)
                        this.afterCreated(success)
                    },
                    (response) => {

                        this.createError(response)
                        this.afterCreated(response)
                    }
                ).then(function(){

                })
            })
		},

        /**
         *SOFT DELETE
         * @param id
         */
        softDeleteRecord(id){
            this.beforeDelete()
            if(confirm("Bạn có thực sự muốn xoá không?")) {
                this.loadingArc();
                this.$nextTick(() => {
                    let requestApi = this.$http.post(this.softDeleteApi, { id: id, _token: this.token});
                    return requestApi.then(
                        (success) => {
                            this.loadingDone()
                            this.deletedDone(success)
                            this.deletedCompletely(success)
                            this.afterDeleted(success)
                        },
                        (response) => {
                            this.loadingDone()
                            this.deleteError(response)
                            this.afterDeleted(response)
                        }
                    ).then(function () {

                    })
                })
            }

        },

        /**
         * DELETE
         * @param id
         */
        deleteRecord(id) {
            this.beforeDelete()
            if (confirm("Bạn có thực sự muốn xoá vĩnh viễn không?")) {
                this.loadingArc();
                this.$nextTick(() => {
                    let requestApi = this.$http.post(this.deleteApi, { id: id, _token: this.token });
                    return requestApi.then(
                        (success) => {
                            this.loadingDone()
                            this.deletedDone(success)
                            this.deletedCompletely(success)
                            this.afterDeleted(success)
                        },
                        (response) => {
                            this.loadingDone()
                            this.deleteError(response)
                            this.afterDeleted(response)
                        }
                    ).then(function () {

                    })
                })
            }

        },

        /**
         * RESTORE
         * @param id
         */
        restoreRecord(id){
            this.beforeRestore()
            if (confirm("Bạn có thực sự muốn phục hồi không?")) {
                this.loadingArc();
                this.$nextTick(() => {
                    let requestApi = this.$http.post(this.restoreApi, { id: id, _token: this.token });
                    return requestApi.then(
                        (success) => {
                            this.loadingDone()
                            this.restoreDone(success)
                            this.restoreCompletely(success)
                            this.afterRestore(success)
                        },
                        (response) => {
                            this.loadingDone()
                            this.restoreError(response)
                            this.afterRestore(response)
                        }
                    ).then(function () {

                    })
                })
            }
        },

        /**
         * GET REFERENCE
         */
        getReference() {
            this.beforeGetReference()
            this.loadingArc()
            let _token = this.token
            this.$nextTick( () => {
                return this.$http.post(this.referenceApi , {_token: this.token})
                    .then(
                        (success) => {
                            this.loadingDone()
                            this.afterGetReference(success)
                        },
                        (response) => {
                            this.getDataCommonFail(response)
                        }
                    )
            })
        },


        loadingArc(){
            this.loading = true
        },
        loadingDone(){
            setTimeout(() => {
                this.loading = false
            }, 1000);
        },



        /// REFERENCE
        beforeGetReference(){},
        afterGetReference(){},


        /// CREATE
        validateCreation(){ return true },
        createError(data) {},
        createdCompletely(data) {},
        createHasDuplicate(success){},
        afterCreated() {},
        beforeCreate() {},
        createdDone(success) {},


        /// GET DATA COMMON
        getParamsCommon(){ return {}},
        beforeGetDataCommon(){},
        afterGetDataCommon(data){},
        getDataCommonFail(data){},


        /// GET RECORD BY ID
        getApiRecordById(id) {
            return this.getRecordApi + '?id=' + id;
        },
        afterGetRecord(success){},


        ///// UPDATE
        validateUpdate(){ return true },
        getPayloadUpdate() { return this.model },
        beforeUpdate() {},
        updateError(data) {},
        updatedCompletely(data) {},
        afterUpdated() {},
        updatedDone(success) {},



        //// DELETE
        beforeDelete(){},
        deletedDone(success) {
        },
        deletedCompletely(success) {
            toastr.success('Xoá thành công!')
            this.prepareDataCommon()
        },
        afterDeleted(success){},
        deleteError(response){},

        //// RESTORE
        beforeRestore(){},
        restoreDone(){},
        restoreCompletely(){
            toastr.success('Phục hồi thành công!')
            this.prepareDataCommon()
        },
        afterRestore(){},
        restoreError(){},
    },

}
