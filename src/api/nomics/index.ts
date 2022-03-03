import service from "./service";

function getPrices(params: Object) {
    return service.get("/currencies/ticker", { params });
}

const allServices = {
    getPrices,
};

export default allServices;
