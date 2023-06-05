const { error } = require("console");
const data = require("../model/item_list.json")

const productList = async (req) => {
    let page = req.query.page || 1;
    let size = req.query.size || 2;
    start = page * size - size;
    end = page * size;
    let result = [];
    data.forEach((item) => {
        result.push({
            "id": item.id,
            "item_name": item.item_name,
            "item_image": item.item_image,
            "item_price": item.item_price
        });
    });
    result = result.slice(start, end)
    return result;
}

const productDetail = async (req) => {
    let id = req.params.id;
    console.log(id);
    if (isNaN(id)) {
        return "id must be a number";
    }
    const result = data.find(detail => detail.id == id);
    return result;
}

module.exports = {
    productList,
    productDetail
}