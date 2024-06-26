import img from ".././assets/imgs/perfume.jpg"
//products components
function Products(){
    return(
      <div class='products'>
        <div class='product__container'>
          <img src={img} width={'200px'} height={"200px"} alt="" />
          <p>Fogg wood ExtremeEamde perfect perfume smell and GO!</p>
        </div>
        <div class='product__container'>
          <img src={img} width={'200px'} height={"200px"} alt=""></img>
          <p>Fogg wood ExtremeEamde perfect perfume smell and GO!</p>
        </div>
        <div class='product__container'>
          <img src={img} width={'200px'} height={"200px"} alt="" />
          <p>Fogg wood ExtremeEamde perfect perfume smell and GO!</p>
        </div>
      </div>
    )
  }
export default Products  