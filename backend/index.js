const express = require('express');
const ethers = require('ethers');
const morgan = require('morgan');

const port = 3001;

const app = express();
app.use(express.json());
app.use(morgan('dev'));
const nfts = [];

app.listen(port , () => {
    console.log("NFT Marketplace backend running on port :"+port);
});

const getAllNFTs = (req , res) => {
    res.status(200).json({
        status:'success',
        requestTime: '',
        results: nfts.length,
        data:{
            nfts,
        },
    });
}

//Custom Middleware
app.use((req , res , next) => {
    console.log("Hey I am from middleware function");
    next();
});

app.use((req,res,next)=>{

})

app.get('/api/v1/nfts', getAllNFTs);


app.get("/api/v1/nfts/:id" , (req , res)=>{
    console.log(req.params)

    const id = req.params.id * 1 ;
    const nft = nfts.find((el) => {
        el.id = id ;
    });

    if(id > nfts.length){
        return res.status(404).json({
            status:"fail",
            message : "Invalid ID",
        });
    }

    res.status(200).send({
        status:'success',
        results:nfts.length,
        data : {
            nft,
        },
    });
});

app.patch("/api/v1/nfts/:id" , (req , res) => {

    if(req.params.id * 1 > nfts.length) {
        return res.status(404).json({
            status:'fail',
            message:'Invalid ID'
        });
    }
    res.status(200).send({
        status:'200',
        data:{
            nft: "Updating Nfts"
        }
    })
})

app.post("/api/v1/nfts",(req,res) =>{

    console.log(req)
    const newId = nfts[nfts.length - 1] +1;
    const newNFTs = Object.assign({id:newId} ,
    req.body);

    nfts.push(newNFTs);

    res.send("Post NFT");
});

app.get


