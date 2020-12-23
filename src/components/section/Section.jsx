import React from 'react';
import './Section.css';
import image1 from "../data/img/product-1.png";

function Section() {
  return (
      <>
	  <div class="container mt-5">
   
   <div class="row">
	 <h3>HIGH HEEL SHOES</h3>
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
				  <h5>Black Shoes</h5>
				  <h6>$34.00</h6>
					<button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
			  </div>
			</div>
		</div>
		
		<div class="col-md-3">
			<div class="card">
			  <img src={image1} alt="card-1" class="card-img-top" />
				<div class="card-body">
				  <h5>Red Shoes</h5>
				  <h6>$34.00</h6>
					<button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
			  </div>
			</div>
		</div>
		
		<div class="col-md-3">
			<div class="card">
			  <img src={image1} alt="card-1" class="card-img-top" />
				<div class="card-body">
				  <h5>Modern Shoes</h5>
				  <h6>$34.00</h6>
					<button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
			  </div>
			</div>
		</div>
		
		
		
		<div class="col-md-3">
			<div class="card">
			  <img src={image1} alt="card-1" class="card-img-top" />
				<div class="card-body">
				  <h5>High Hill Shoes</h5>
				  <h6>$34.00</h6>
					<button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add To Cart</button>
			  </div>
			</div>
		</div>
	</div>
</div>
</>
  );
}

export default Section;