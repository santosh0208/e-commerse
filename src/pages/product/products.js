function Products() {
    const products = [
        {
            id: 1,
            name: "Wheel Chair",
            image : 'https://media.seniority.in/catalog/product/cache/6529419f7f495ce233232fb2f6f6c4c0/g/a/ga1_6739.jpg',
            price: 15000,
            variants : {
                height : '150cms',
                width : '40cms'
            },
            quantity : 1,
            details : 'Introducing the Everactiv Economy Foldable Basic Wheelchair with Safety Belt - a perfect blend of affordability, functionality, and safety'
        },
        {
            id: 2,
            name: " Adult Diaper",
            price: 350,
        },
        {
            id: 3,
            name: "Stand Bars",
            price: 3000,
        },
        
    ];

    return products;
}

export default Products;
