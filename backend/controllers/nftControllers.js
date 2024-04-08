exports.aliasTopNFTs = (req , res , next) => {
    req.query.limit = '5';
    req.query.sort = "";
    req.query.fields = "name,price,ratingsAverage,difficulty";
    next();
}

class APIFeatures {

    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;

    }

    filter(){

        const queryObj = {...this.queryString };
        const excludedFields = ["page" , "sort" , "limit", " fields"];
        excludedFields.forEach((el)=>{
            delete queryObj[el]
        });

            let queryStr = JSON.stringify(queryObj);
            this.query.find()
        

    }
    

}

//Aggregation Pipeline

exports.getNFTsStats = (req ,res) => {

    try {

        const stats = NFT.aggre

    } catch(error){
        res.status(404).json({
            status:'fail',
            message:error,
        });
    }
}