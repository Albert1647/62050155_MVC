// model -> handle data-related logic
const fs = require("fs");
const path = require("path");

// global path
const p = path.join(
	path.dirname(process.mainModule.filename),
	"data",
	"products.json"
);

// utility function
// readFile -> callback
const getProductsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class Product {
	constructor(
		product_id,
		product_name,
		total_core,
		statistic,
	) {
		this.product_id = product_id;
		this.product_name = product_name;
		this.total_core = total_core;
		this.statistic = statistic;
	}

	save() {
		getProductsFromFile(products => {
            // if id is already exist -> update product
			// *define but not used (no update data api)
            if(this.product_id){
                const existingProduct = products.findIndex(
                    prod => prod.product_id === this.product_id
                )
                console.log(existingProduct)
                const updateproducts = [...products];
                updateproducts[existingProduct] = this;
                fs.writeFile(p, JSON.stringify(updateproducts), (err) => {
				    console.log(err);
			    });
            } else {
                // if id is null / not exist -> generate one
                this.product_id = Math.random().toString()
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
				    console.log(err);
			    });
            }
		});
	}

    static fetchAll(cb) {
		getProductsFromFile(cb);
	}

};
