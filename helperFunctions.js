function formatResponse(res) {
    let jsonObj = {};
    let count = 0;
    for (let i = 0; i < 5; i++) {
        if(res[count] === undefined){
            return;
        }
        let key = `repository${i}`;
        while(res[count].language !== 'C#'){
            count++;
        }
        let item = {[key]:{
            "full_name": res[count].full_name,
            "description": res[count].description,
            "language": res[count].language,
            "avatar_url": res[count].owner.avatar_url,
            "created_at": res[count].created_at
        }};
        count++;
        jsonObj = Object.assign({}, jsonObj, item);
    };
    return jsonObj;
}
module.exports = { formatResponse };
