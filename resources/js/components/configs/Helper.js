

export const unitKilogram = 'kg';
export const unitTonne = 'tấn';

export function formatWeight(data, unit = unitTonne) {
    if (data){
        return data.toLocaleString() + ' ' + unitTonne
    }

    return null
}

export function sortArrayByField($data, $field = 'created_at', $type = 'DESC') {
    if ($type == 'DESC') {
        return $data.sort((a, b) => (a[$field] > b[$field]) ? 1 : -1)
    } else {
        return $data.sort((a, b) => (a[$field] > b[$field]) ? -1 : 1)
    }
}

export function parseFullPathToShortPath(link) {
    return link.replace(window.location.origin, '')
}

export function parseListPathToTrashPath(link) {
    return link + '?trash=true'
}

export function formatDateTime(datetime, format = 'DD/MM/YYYY HH:mm') {
    if (datetime){
        return moment(datetime).format(format)
    }
    return null

}

export function formatCurrency(money) {
    if(money){
        // return money.toLocaleString() + 'đ'
        return money.toLocaleString()
    }

    return null
}

export function hasPermission(module, method = null) {
    // return  true
    if (method){
        return PERMISSION_USER.find(item => item.module == module && item == method) ? true : false
    }else{
        return PERMISSION_USER.find(item => item.module == module) ? true : false
    }
}
