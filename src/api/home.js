import * as apiRequest from './apiRequest/DetailsRequest';

const GetUserList = (pageNo,pageSize) => {
    return (
        apiRequest.getUsersList(pageNo,pageSize).then((res) => {
            return {
                data: res, //    res.data,
                sucess: res.status == 200 ? true : false,
                message: res.message
            }
        }).catch((err) => {
            return {
                data: "",
                sucess: false,
                message: err.message
            }
        })
    )
}

export {
    GetUserList
}