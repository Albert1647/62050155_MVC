let products = [
    
        {
            number: 1,
            countryCode: "JP",
        },
        {
            number: 2,
            countryCode: "JP",
        },
        {
            number: 3,
            countryCode: "JP",
        },
        {
            number: 4,
            countryCode: "JP",
        },
        {
            number: 5,
            countryCode: "JP",
        },
        {
            number: 6,
            countryCode: "JP",
        },
        {
            number: 7,
            countryCode: "JP",
        },
        {
            number: 8,
            countryCode: "JP",
        },
        {
            number: 9,
            countryCode: "JP",
        },
        {
            number: 10,
            countryCode: "JP",
        },
        {
            number: 11,
            countryCode: "JP",
        },
        {
            number: 12,
            countryCode: "JP",
        },
        {
            number: 13,
            countryCode: "JP",
        },
        {
            number: 14,
            countryCode: "JP",
        },
        {
            number: 15,
            countryCode: "JP",
        },
        {
            number: 16,
            countryCode: "JP",
        },
    ];



exports.getAllProduct = (req, res, next) => {
    res.send(products)
};