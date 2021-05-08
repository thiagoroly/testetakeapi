function formatResponse(res) {
    let jsonObj = {};
    for (let i = 0; i < res.length; i++) {
        let key = `repository${i}`;
        let item = {[key]:{
            "full_name": res[i].full_name,
            "description": res[i].description,
            "language": res[i].language,
            "avatar_url": res[i].owner.avatar_url,
            "created_at": res[i].created_at
        }};
        jsonObj = Object.assign({}, jsonObj, item);
    };
    return jsonObj;
}
module.exports = { formatResponse };
