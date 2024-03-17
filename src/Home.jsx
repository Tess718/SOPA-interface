import './Home.css'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className="bg-black text-white text-center py-3"><p className='m-0 p-0'>free shipping on us order over $50</p></div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#"><i class="bi bi-circle-half me-2"></i>SOPA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item mx-3">
          <a className="nav-link fw-medium" href="#">ABOUT</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link fw-medium" href="#">MEN</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link fw-medium" href="#">WOMEN</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link fw-medium" href="#">CONTACT</a>
        </li>
      </ul>
      <div className='d-flex ms-2 ms-lg-0'>
        <div className='nav-item'>
        <i class="bi bi-search fs-5"></i>
        </div>
        <div className='nav-item mx-3'>
        <i class="bi bi-basket2 fs-5"></i>
        </div>
        <div className='nav-item'>
        <i class="bi bi-person fs-5"></i>
        </div>
      </div>
    </div>
  </div>
</nav>

<section id='hero'>
  <div className="container-fluid"> 
    <div className="row px-2">
      <div className="col-lg-6 hero1 rounded-4 d-flex align-items-end justify-content-center gap-4 p-3 position-relative">
        <div className="rounded-circle border border-3 circ">
          <p className='m-0 p-0 text-white text-uppercase fw-bold'>Shop Now</p>
        </div>
        <button className='btn btn-light rounded-pill fw-bold py-1 text-start px-4 d-flex justify-content-between align-items-center w-75'>Learn More<i class="bi bi-arrow-down-circle-fill fs-3"></i></button>
        <button className='btn btn-outline-light rounded-pill fw-bold py-1 text-start px-4 d-flex justify-content-between align-items-center w-75'>Contact Us<i class="bi bi-envelope-fill fs-3"></i></button>
      </div>
      <div className="col-lg-6 rounded-4">
        <div className="row ps-lg-3 mt-3 mt-lg-0">
          <div className="col-lg-12 bg-secondary-subtle rounded-4 px-4 py-4 second d-flex flex-column justify-content-between">
          <h1 className='fw-bolder'>REAL DESIGNS <br /> BY REAL ARTISTS <br /> FOR REAL PEOPLE</h1>
          <p className='fw-semibold'>We're challenging conventional retail putting an end to <br /> dead stock, unconventional waste and more funtastic</p>
          </div>
          <div className="flexit m-0 p-0 mt-3 justify-content-between">
          <div className="smcol rounded-4 gy-3 d-flex justify-content-center align-items-end">
            <p className='text-center text-white fs-3 fw-bold hashtag'>#TRENDING 2023</p>
          </div>
          <div className="smcol2 rounded-4 gy-3 d-flex justify-content-center align-items-end">
            <p className='text-center text-white fs-3 fw-bold hashtag'>#OLDBUTGOLD</p>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div className="soptxt px-3">
      <h4 className='fw-bold m-0'>SOPA makes clothes <img src="https://w7.pngwing.com/pngs/665/962/png-transparent-t-shirt-dress-shirt-necktie-suit-t-shirt.png" alt="" className='shirt' /> to elevate everyday life <br /> through lighthearted escapism. While styles vary by <br /> season, <span className='rounded-pill border border-1 border-dark px-3'><i class="bi bi-brightness-high-fill"></i>all collections</span> are guided by the ineffable <br /> sense of freedom that comes with travel.</h4>
    </div>
  </div>
</section>

<section id='shop'>
  <div className="container-fluid">
    <div className="px-3">
    <h3 className='fw-bold text-uppercase fs-2'>Shop BY Essentials</h3>
    <div className="d-flex gap-3 mt-3 overflow-x-scroll">
      <div className="rounded-pill border fw-bold border-dark py-2 px-4 text-uppercase wid">
        <nobr>ALL</nobr> 
      </div>
      <div className="rounded-pill border fw-bold border-dark py-2 px-4 text-uppercase wid">
        <nobr>Winter Collection</nobr> 
      </div>
      <div className="rounded-pill border fw-bold border-dark py-2 px-4 text-uppercase wid">
        <nobr>New Arrivals</nobr> 
      </div>
      <div className="rounded-pill border fw-bold border-dark py-2 px-4 text-uppercase wid">
        <nobr>Best Sellers</nobr> 
      </div>
      <div className="rounded-pill border fw-bold border-dark py-2 px-4 text-uppercase wid">
        <nobr>Flash Sales</nobr> 
      </div>
    </div>
    <div className="row overflow-y-hidden">
      <div className="col-lg-4 position-relative gy-4">
        <img src="https://img.freepik.com/premium-photo/african-american-man-portrait-closeup-isolated-white-background-diversity-concept_230311-43850.jpg?w=360" alt="" className='w-100 rounded-4 dmal' />
        <div className="rounded-pill bg-white fw-bold newab py-1 px-3">
          <small>NEW ARRIVAL</small>
        </div>
        <div className="details d-flex justify-content-between mt-3">
          <div>
          <h4 className='p-0 m-0 fw-medium'>Shirt</h4>
          <p className='text-danger fw-bold'>$13.00</p>
          </div>
          <div className="d-flex gap-1">
            <div className="curve bg-danger-subtle rounded-circle"></div>
            <div className="curve bg-success-subtle rounded-circle"></div>
            <div className="curve bg-warning rounded-circle"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 gy-4">
        <img src="https://img.freepik.com/free-photo/gloomy-young-black-model-clean-white-unlabeled-cotton-t-shirt_346278-1001.jpg?w=360&t=st=1707248738~exp=1707249338~hmac=e97c5f9cd65d6225c910e6fc95b665dc9903cd384638714cef076ddffb878094" alt="" className='w-100 rounded-4 dmal' />
        <div className="details d-flex justify-content-between mt-3">
          <div>
          <h4 className='p-0 m-0 fw-medium'>Shirt</h4>
          <p className='text-danger fw-bold'>$13.00</p>
          </div>
          <div className="d-flex gap-1">
            <div className="curve bg-danger-subtle rounded-circle"></div>
            <div className="curve bg-success-subtle rounded-circle"></div>
            <div className="curve bg-warning rounded-circle"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 gy-4">
        <img src="https://img.freepik.com/free-photo/medium-shot-man-posing-with-pink-outfit_23-2150716532.jpg?w=360&t=st=1707249080~exp=1707249680~hmac=47803fe206ae3e2d652a3dd8cf5e40192e47dbf03551734f3a53b0ab9aee61e0" alt="" className='w-100 rounded-4 dmal' />
        <div className="details d-flex justify-content-between mt-3">
          <div>
          <h4 className='p-0 m-0 fw-medium'>Shirt</h4>
          <p className='text-danger fw-bold'>$13.00</p>
          </div>
          <div className="d-flex gap-1">
            <div className="curve bg-danger-subtle rounded-circle"></div>
            <div className="curve bg-success-subtle rounded-circle"></div>
            <div className="curve bg-warning rounded-circle"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 gy-4">
        <img src="https://img.freepik.com/premium-photo/handsome-bearded-persian-man-white_251136-57504.jpg?w=360" alt="" className='w-100 rounded-4 dmal' />
        <div className="details d-flex justify-content-between mt-3">
          <div>
          <h4 className='p-0 m-0 fw-medium'>Shirt</h4>
          <p className='text-danger fw-bold'>$13.00</p>
          </div>
          <div className="d-flex gap-1">
            <div className="curve bg-danger-subtle rounded-circle"></div>
            <div className="curve bg-success-subtle rounded-circle"></div>
            <div className="curve bg-warning rounded-circle"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 gy-4">
        <img src="https://img.freepik.com/free-photo/portrait-man-standing-isolated-white-background_23-2148043781.jpg?w=360&t=st=1707250133~exp=1707250733~hmac=092e4c0e0fb872c019ce8649cbdf58d24d199083039290198c831ae208216d7d" alt="" className='w-100 rounded-4 dmal' />
        <div className="details d-flex justify-content-between mt-3">
          <div>
          <h4 className='p-0 m-0 fw-medium'>Shirt</h4>
          <p className='text-danger fw-bold'>$13.00</p>
          </div>
          <div className="d-flex gap-1">
            <div className="curve bg-danger-subtle rounded-circle"></div>
            <div className="curve bg-success-subtle rounded-circle"></div>
            <div className="curve bg-warning rounded-circle"></div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 gy-4">
        <img src="https://img.freepik.com/free-photo/portrait-man-with-sunglasses_23-2148467278.jpg?w=360&t=st=1707250208~exp=1707250808~hmac=ba2071ff68f9d1e84ef59784d4a23186c118df136b6b58a2c6be5ce976222d51" alt="" className='w-100 rounded-4 dmal' />
        <div className="details d-flex justify-content-between mt-3">
          <div>
          <h4 className='p-0 m-0 fw-medium'>Shirt</h4>
          <p className='text-danger fw-bold'>$13.00</p>
          </div>
          <div className="d-flex gap-1">
            <div className="curve bg-danger-subtle rounded-circle"></div>
            <div className="curve bg-success-subtle rounded-circle"></div>
            <div className="curve bg-warning rounded-circle"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>

<section id='made'>
  <div className="container-fluid">
    <div className="row px-4"> 
      <div className="col-lg-8 bg-orange px-lg-5 px-3 pt-4 pb-4 pb-lg-0 rounded-4">
        <h1 className='fw-bold text-uppercase incfs'>WE're changing <br /> the way things <br /> get made.</h1>

        <hr className='opacity-100 mt-5' />
        <div className="d-flex mt-5 gap-1">
          <div className="col-6">
            <h5 className='text-uppercase d-flex align-items-center gap-2 fw-bold'><div className="bg-black rounded-circle text-white d-flex justify-content-center align-items-center glo"><i class="bi bi-globe"></i></div>Mission</h5>
            <p className='p-0 m-0 fw-bold msi'>We're in a mission to empower creative independence in a commercial world and incredible</p>
          </div>
          <div className="col-6">
            <h5 className='text-uppercase d-flex align-items-center gap-2 fw-bold'><div className="bg-black rounded-circle text-white d-flex justify-content-center align-items-center glo"><i class="bi bi-eye"></i></div>Vission</h5>
            <p className='p-0 m-0 fw-bold msi'>We're in a mission to empower creative independence in a commercial world and incredible</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-3 mt-lg-0 px-0 ps-lg-3">
        <img src="https://img.freepik.com/free-photo/portrait-young-man-posing_23-2148884298.jpg?w=360&t=st=1707252219~exp=1707252819~hmac=f43a2d4d61ec16d218f458d8cfed17671c2919c765aca23ae4d9d9ebf716c61a" alt="" className='april w-100 h-100 rounded-4' />
      </div>
    </div>

    <div className="wantxt">
      <h1 className='fw-bold text-uppercase text-center scroll-item'>Want to design your own? Calm we can do it!</h1>
      <div className="col-12 mt-5 px-3">
        <video src="https://videocdn.cdnpk.net/cdn/content/video/free/video0531/large_preview/_import_62da3a5e33e929.94127045.mp4?filename=1471412_people_fashion_3840x2160.mov" className='w-100 rounded-4 vid shadow' autoPlay loop muted></video>
      </div>
    </div>
  </div>
</section>

<section id='footer' className='bg-black py-5'>
  <div className="container-fluid">
    <div className="row px-3">
      <div className="col-lg-3">
        <h1 className='text-white fw-bold'><i class="bi bi-circle-half me-2"></i>SOPA</h1>
        <p className='fw-bold text-white text-uppercase mt-5'>Real Designs by Real Artists for Real People</p>
      </div>
      <div className="col-lg-2">
        <h3 className='fw-bold text-white'>Products</h3>
        <ul className='m-0 p-0'>
          <li className='fw-light text-light'>Jackets</li>
          <li className='fw-light text-light'>Shirts</li>
          <li className='fw-light text-light'>Dresses</li>
          <li className='fw-light text-light'>Bottoms</li>
          <li className='fw-light text-light'>Outwear</li>
        </ul>
      </div>
      <div className="col-lg-2">
        <h3 className='fw-bold text-white'>Buying</h3>
        <ul className='m-0 p-0'>
          <li className='fw-light text-light'>Shop</li>
          <li className='fw-light text-light'>Terms of use</li>
          <li className='fw-light text-light'>Privacy</li>
          <li className='fw-light text-light'>How it works</li>
          <li className='fw-light text-light'>Customer service</li>
        </ul>
      </div>
      <div className="col-lg-2">
        <h3 className='fw-bold text-white'>Social</h3>
        <ul className='m-0 p-0'>
          <li className='fw-light text-light'>Instagram</li>
          <li className='fw-light text-light'>Facebook</li>
          <li className='fw-light text-light'>Twitter</li>
        </ul>
      </div>
      <div className="col-lg-3">
      <h4 className='fw-bold text-white text-uppercase'>Join Our Community</h4>
      <form action="">
        <div className="d-flex rounded-pill border-white border justify-content-between p-1">
        <input type="text" className='bg-transparent border-0 text-white px-2' placeholder='Email ID' />
        <button className='rounded-circle bg-orange cusbtn border-0 px-2 py-1'><i class="bi bi-send"></i></button>
        </div>
      </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home
