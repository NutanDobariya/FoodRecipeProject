import API from '../../utility/API';
import Transformer from "../../utility/Transformer"


export async function getUsersList(pageNo,pageSize) {
    //return await API.get('/users')
    return await API.get('/api/users?page='+pageNo+'&per_page='+pageSize)
    .then((res) => {
            const data = Transformer.fetch(res.data);
            return data;
        })
        .catch((err) => {
            console.log("err...." + err)
            const statusCode = err.response.status;
            const data = {
                errorMsg: "",
                statusCode,
            };
            data.errorMsg = err.response.data.message;
            return data;
        });
}

