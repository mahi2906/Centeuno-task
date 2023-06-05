const services = require("./services");

const productList = async (req, res, next) => {
    try {
        const data = await services.productList(req);
        res.json(data, req, res);
    } catch (error) {
        next(error.message)
    }
}

const productDetail = async (req, res, next) => {
    try {
        const data = await services.productDetail(req);
        res.json(data, req, res);
    } catch (error) {
        next(error.message)
    }
}

module.exports = {
    productList,
    productDetail
}