import "./Slider.css"
const Slider = () => {
  return (
    <>
<div className="main-cont">
<div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
        <div className="col-lg-6 col-md-12">
        <img src="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated_158538-8587.jpg?w=740&t=st=1683648597~exp=1683649197~hma" className="d-block w-500 h-500 " alt="..." />
        </div>
        <div className="col-lg-6 col-md-12 information">
        <div>
            <h2>Summer Collection</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum felis a justo accumsan, nec tincidunt turpis eleifend.</p>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row" >
        <div className="col-lg-6 col-md-12">
        {/* <img src="https://img.freepik.com/free-photo/beautiful-brunette-woman-casual-blue-sweater-with-bright-makeup-red-lips-white_158538-10861.jpg?w=740&t=st=1683649052~exp=1683649652~hmac=280f59f7c95ddb785ea486f46ddd05a0696a908c0a14e4e25bcdc1f9702f727d" classNameName="d-block w-500 h-500" alt="..." /> */}
        <img src="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-isolated_158538-8587.jpg?w=740&t=st=1683648597~exp=1683649197~hma" className="d-block w-500 h-500 " alt="..." />
        </div>
        <div className="col-lg-6 col-md-12 information " >
        <div>
            <h2>Summer Collection</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum felis a justo accumsan, nec tincidunt turpis eleifend.</p>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row">
        <div className="col-lg-6 col-md-12 ">
        <img src="https://img.freepik.com/free-photo/man-presenting-something_1368-3697.jpg?w=740&t=st=1683649453~exp=1683650053~hmac=88a50e08c4422fe7593fd3b8f3d291c6bb802d8d06e3bc052badb73776e585d4" className="d-block w-500 h-500" alt="..." />
        </div>
        <div className="col-lg-6 col-md-12 information">
            <div>
            <h2>Summer Collection</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum felis a justo accumsan, nec tincidunt turpis eleifend.</p>
            </div>
          </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </div>
    </>
    )
}
export default Slider;