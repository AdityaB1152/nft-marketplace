import React from 'react'
import './nft-frame.css'

function NftFrames(props) {

  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;
  return (
      <div class="containerFrame">
        <section class="image">
          <div class="active">
            <img src="images/icon-view.svg" alt="view-icon"/></div>
          <img src={imgUrl} alt="Equilibrium"/>
        </section>

        <section class="content">
          <h1>{title + " #"+id}</h1>
          <p class="desc">
            Our Equilibrium collection promotes <br/>
            balance and calm.
          </p>

          <section class="value-days">
            <p class="value-eth">
              <img src="../../../assets/images/icon-ethereum.svg" alt="icon-ethereum"/> {currentBid}
            </p>

            <p class="days">
              <img src="images/icon-clock.svg" alt="clock"/> 3 days left
            </p>
          </section>
          <hr/>
          <p class="creation">
            <img src={creatorImg} alt="man"/> Creation of
            <span> {creator}</span>
          </p>
        </section>
      </div>
   
  )
}

export default NftFrames