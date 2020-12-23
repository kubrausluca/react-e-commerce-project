import React from 'react';
import './Section.css';

import image1 from '../data/img/product-1.png';
import image2 from '../data/img/product-2.png';
import image3 from '../data/img/product-3.png';
import image4 from '../data/img/product-4.png';

function Section() {
  return (
      <>
	  <div class="container mt-5">
   
   <div class="row">
	 <h3>DISCOUNT</h3>
   </div>
	   <div class="row">
	   <div class="underline"></div>
   </div>
</div>
    <div class="container mt-5 pb-5">
        
	<div class="row">
		<div class="col-md-3">
			<div class="card">
			  <img src={image1} alt="card-1" class="card-img-top" />
				<div class="card-body">
				  <h5>Google Pixel - Black</h5>
				  <h6>$10.00</h6>
					<button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
			  </div>
			</div>
		</div>
		
		<div class="col-md-3">
			<div class="card">
			  <img src={image2} alt="card-1" class="card-img-top" />
				<div class="card-body">
				  <h5>SAMSUNG</h5>
				  <h6>$16.00</h6>
					<button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
			  </div>
			</div>
		</div>
		
		<div class="col-md-3">
			<div class="card">
			  <img src={image3} alt="card-1" class="card-img-top" />
				<div class="card-body">
				  <h5>HTC 10 - Black</h5>
				  <h6>$8.00</h6>
					<button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
			  </div>
			</div>
		</div>
		
		
		
		<div class="col-md-3">
			<div class="card">
			  <img src={image4} alt="card-1" class="card-img-top" />
				<div class="card-body">
				  <h5>HTC 10 - White</h5>
				  <h6>$8.00</h6>
					<button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
			  </div>
			</div>
		</div>
	</div>
</div>
</>
  );
}

export default Section;