import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.jpg";

import {provider , getSigner , NFT_CONTRACT_ADDRESS, createToken} from "../utils/web3"
import NFTMarketplace from "../utils/NFTMarketplace.json";


import "../styles/create-item.css";
import { ethers } from "ethers";

const item = {
  id: "01",
  title: "Guard",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: img,
  creator: "Trista Francis",
  creatorImg: avatar,
  currentBid: 7.89,
};

const Create = () => {

  const abi = NFTMarketplace.abi;
  const [address , setAddress ] = useState();

  requestAccount();

  const handleSubmit = async (e)=>{
  try{
    console.log("Inside Try")
   createToken();


  } catch (error){
    console.log("Error Creating NFT",error);
  }
}

  async function requestAccount() {
    if(window.ethereum){
      console.log('Detected Metamask');

      try {
        const accounts = await window.ethereum.request ({
          method:'eth_requestAccounts'
        });

        console.log('Account Connected' , accounts);
        setAddress(accounts[0])
        console.log(address)
      } catch(error){
        console.error('Error Connecting Account:',error)
      }
    }
    else {
      console.log('Meta Mask not Detected')
    }
  }

  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input type="file" className="upload__input" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder="Enter minimum bid" />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div>
                  <button type='submit' onSubmit={mintNft()}></button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
