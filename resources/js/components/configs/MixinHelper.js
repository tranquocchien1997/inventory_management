export default {
    methods: {
        getCurrentScreenWidth(){
            return $(document).width()
        },
        isMobile(){
            return this.getCurrentScreenWidth() < 450
        },
        parseResponse(res) {
            return res
        },
        getReferenceById(id, item) {
            return reference[item].find((item) => item.id === id )
        },
        getModelByConfigModel(config){
            let model = {}

            config.forEach((item) => {
                if(item.model){
                    if(item.defaultValue){
                        model[item.model] = item.defaultValue
                    }else{
                        model[item.model] = null

                    }
                }
            })

            return model
        },
        validateModel(){
            let allConfig = [], model = this.model, config = this.configModel

            config.forEach((item) => {
                item.value = model[item.model]
                item.error = null
                allConfig.push(item)
            })

            const validateRequired = this.validateRequired(allConfig)

            this.configModel = this.validateCustom(validateRequired)

            this.forceReRenderComponent()

            return !this.checkHasValidateError(validateRequired)
        },
        validateRequired(config){
            let arr = []
            config.forEach((item) => {
                if(item.required && (!item.value || item.value.length == 0) ){
                    item.error = 'Vui lòng nhập ' + item.title.toLocaleLowerCase()
                }
                arr.push(item)

            })

            return arr
        },
        validateLength(){},
        validateCustom(model){ return model},
        checkHasValidateError(validate){
            let status = false;

            for (let i = 0; i < validate.length; i++) {
                if(validate[i].error && validate[i].error.length > 0){
                    status = true
                    toastr.error("Tạo kho hàng mới không thành công!");

                    break;
                }

            }

            return status
        },
        changeModeForm(){
            let config = this.configModel, newStatus = []
            let status = !this.formEdit

            config.forEach((item) => {
                if(!item.alwayDisable){
                    item.disable = !status
                }
                newStatus.push(item)
            })

            this.formEdit = status;

            this.configModel = newStatus

            this.forceReRenderComponent()
        },
        forceReRenderComponent(){

            this.showForm = false

            this.$nextTick(() => {
                this.showForm = true
            })
        },
        formatDateSubmit(formatFrom = 'DD/MM/YYYY', formatTo = 'YYYY-MM-DD'){
            this.configModel.forEach((item) => {
                if (item.type == 'date' && this.model[item.model] && this.model[item.model].length > 0) {
                    // console.log(this.model[item.model])
                    this.model[item.model] = moment(this.model[item.model], formatFrom).format(formatTo)
                }
            })
        }
    }
}
