import React from 'react';
import './App.css'
function App() {
  return (
    <div className="bg-body-tertiary">
      <nav className="p-4 d-flex justify-content-around">
        <div>
          <img src='https://digiinvite.in/static/media/digiLogo.0cf524bb00db7ecbd40a.png' width="150" height="50" />
        </div>
        <div className="mt-4">
          <a href="#banner" className="text-decoration-none text-dark fw-bold">HOME</a>
          <a href="#Themes" className="text-decoration-none text-dark mx-5 fw-bold">THEMES</a>
          <a href="#work" className="text-decoration-none text-dark me-5 fw-bold">WORK PORTFOLIO</a>
          <a href="#contact" className="text-decoration-none text-dark fw-bold">CONTACT</a>
        </div>
      </nav>

      <div id="banner" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://im.idiva.com/content/2021/Dec/amp-_--Anushka-Sharma-And-Virat-Kohlis-Wedding-Is-A-Benchmark_61b3285952682.jpg" width="100%" height="850" />
            <div className='carousel-caption text-dark '>
              <h1 className='heading1'>"Dream it. Plan it. Live it."</h1>
              <h6 className='heading1'>"Your Happily Ever After, Starts Here."</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.redd.it/happy-7th-wedding-anniversary-to-virat-and-anushka-v0-yclmztn9f26e1.jpg?width=1200&format=pjpg&auto=webp&s=8c8ee0204c5eae58fe6905cbb08d7cb195fd6df9" width="100%" height="850" />

            <div className='carousel-caption text-dark'>
              <h1 className='heading1'>"Dream it. Plan it. Live it."</h1>
              <h6 className='heading1'>"Your Happily Ever After, Starts Here."</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.bollywoodshaadis.com/img-scale/670/article-20181131814421252932000.jpg" width="100%" height="850" />

            <div className='carousel-caption text-dark '>
              <h1 className='heading1'>"Dream it. Plan it. Live it."</h1>
              <h6 className='heading1'>"Your Happily Ever After, Starts Here."</h6>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#banner" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#banner" data-bs-slide-to="2"></button>
        </div>
      </div>

      <div className='row d-flex justify-content-center m-auto bg-light w-75 mt-5 flowercard' id='Themes'>

        <div className='col pt-3 mx-5 '>
          <div className='card-head'>
            <img src='https://thedigitalinvite.in/assets/images/funfact/1.svg' width="200" ></img>
          </div>
          <div className='card-body text-center'>
            <p className='num'>10+</p>
          </div>
          <div className='footer text-center'>
            <p className='para'>Themes</p>
          </div>
        </div>

        <div className=' col me-5 pt-3'>
          <div className='card-head'>
            <img src='https://thedigitalinvite.in/assets/images/funfact/2.svg' width="150" ></img>
          </div>
          <div className='card-body text-center'>
            <p className='num'>200+</p>
          </div>
          <div className='footer text-center'>
            <p className='para'>Websites</p>
          </div>
        </div>

        <div className='me-5 col pt-3'>
          <div className='card-head'>
            <img src='https://thedigitalinvite.in/assets/images/funfact/3.svg' width="180" ></img>
          </div>
          <div className='card-body text-center'>
            <p className='num'>150+</p>
          </div>
          <div className='footer text-center'>
            <p className='para'>Happy Couples</p>
          </div>
        </div>

        <div className=' col pt-3'>
          <div className='card-head'>
            <img src='https://thedigitalinvite.in/assets/images/funfact/4.svg' width="150" ></img>
          </div>
          <div className='card-body text-center'>
            <p className='num'>200+</p>
          </div>
          <div className='footer text-center'>
            <p className='para'>Invitations</p>
          </div>
        </div>
      </div>

      <div className='row d-flex flex-wrap w-auto m-5'>
        <div className='col '>
          <img src='https://cdn0.weddingwire.in/article/5498/original/1280/jpg/78945-popular-bollywood-celebrities-who-opted-for-cross-cultural-weddings-pinterest-priyanka-chopra-and-nick-jonas-jpg.jpeg' width={400} height="100%"></img>
        </div>
        <div className='col m-5 text-center fs-4'>
          <p>Wedding is a journey of shared dreams, unwavering support, and endless laughter. As two souls intertwine,they create a bond the transcends time and space. Its privilage to witness the birth of new family,filled with promise and potential for lifetime of happiness.</p>

        </div>
        <div className='col '>
          <img src='https://i.pinimg.com/736x/ae/fb/a5/aefba5e25d9fbd1ad1a2ac41f83a7c95.jpg' width={400} height="100%"></img>
        </div>
      </div>

      <div id='work'>
        <h3 className='text-center'>Our Services</h3>
        <p className='text-center fs-2'>Crafting Your Dream</p>

        <div className='row shadow-lg d-flex flex-wrap w-auto ms-5'>
          <div className='col m-5'>
            <img src='https://blog.g3fashion.com/wp-content/uploads/2020/12/96ad08c3e1112edbb3c9688a8d088d42.jpg'></img>
          </div>

          <div className='col m-5 align-items-center'>
            <div className='image'>
              <img src='https://media.canva.com/v2/mockup-template-rasterize/image0:s3%3A%2F%2Ftemplate.canva.com%2FEAF6Q0JILnc%2F1%2F0%2F1143w-M_t7CIOKxsU.jpg/mockuptemplateid:E27Sk9Bg-/size:L?csig=AAAAAAAAAAAAAAAAAAAAAB0bNV-i5eHFVZhp1wdwvyqrge2IoEMR78N7jp3kcRBO&exp=1741144244&osig=AAAAAAAAAAAAAAAAAAAAAG473jFlVr8m1fn37Sa5vtnUAGow3aGOygKTQfYhYxrw&seoslug=pink-floral-wedding-invitation&signer=marketplace-rpc' height={500}></img>
            </div>
            <div className='mt-2' >
              <span> <iframe width="500" height="340"
                src="https://www.youtube.com/embed/EiMdhwX4Kyo?si=h1KttrhekfWJcfPJ"
                frameborder="0" allowfullscreen>
              </iframe>
                <span><p className='fs-5 text-info-emphasis fw-bold'>Sample One</p></span> </span>
            </div>

          </div>
        </div>
        <div className='my-5 BrideGroom' >
          <h3 className='text-center'>Our Amazing Work</h3>
          <h1 className='text-center '>A Wedding to Remember</h1>

          <div className='row  mx-2'>
            <div className='col-4 Bride'>
              <img src='https://i.pinimg.com/736x/76/08/9b/76089b81fb804d3a0d85515ade215f53.jpg' width={480}></img>
            </div>

            <div className='col-4 Bride'>
              <img src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXcrmhKip0CRpR4KuhjRqaONrjsq2jLco2P4DWTIzK9y7REoyGJjtWqvuF3Tscxq8-0_109EzCOaEdN5hX1OxpnAajeV06YFOmsUk9bS9QXuqJXGa8HQmNMFvPzXkDYW8mE86SG9e9cVC3VWh9_QKffekdw?key=-T2StEi0cHiRoLCno7zsDA' width={480}></img>
            </div>

            <div className='col-4 Bride'>
              <img src='https://blog.g3fashion.com/wp-content/uploads/2020/12/96ad08c3e1112edbb3c9688a8d088d42.jpg' width={480}></img>
            </div>

          </div>
          <div className='row mt-3 mx-2'>
            <div className='col-4 Bride'>
              <img src='https://lh7-rt.googleusercontent.com/docsz/AD_4nXcrmhKip0CRpR4KuhjRqaONrjsq2jLco2P4DWTIzK9y7REoyGJjtWqvuF3Tscxq8-0_109EzCOaEdN5hX1OxpnAajeV06YFOmsUk9bS9QXuqJXGa8HQmNMFvPzXkDYW8mE86SG9e9cVC3VWh9_QKffekdw?key=-T2StEi0cHiRoLCno7zsDA' width={480}></img>
            </div>

            <div className='col-4 Bride'>
              <img src='https://blog.g3fashion.com/wp-content/uploads/2020/12/96ad08c3e1112edbb3c9688a8d088d42.jpg' width={480}></img>
            </div>
            <div className='col-4 Bride'>
              <img src='https://i.pinimg.com/736x/76/08/9b/76089b81fb804d3a0d85515ade215f53.jpg' width={480}></img>
            </div>
          </div>
        </div>

      </div>



      <div id="banner" className="carousel slide  bg-danger-subtle " data-bs-ride="carousel" data-bs-interval="3500">
        <div className="carousel-inner text-center"  >
          <div className="carousel-item active p-5 my-5">
            <h4>"Your professionalism and talent made our wedding even more apecial. <br />The photos and video editing are stunning,<br /> and we are so happy we choose you for our invitation ."</h4>
            <div className='m-5'>
              <h6>Mansi & Anmol </h6>
              <h6>wedding - 24-12-2024</h6>
            </div>
          </div>
          <div className="carousel-item p-5 my-5">
            <h4>"Your professionalism and talent made our wedding even more apecial.<br /> The photos and video editing are stunning,<br /> and we are so happy we choose you for our invitation ."</h4>
            <div className='m-5'>
              <h6>Mansi & Anmol </h6>
              <h6>wedding - 24-12-2024</h6>
            </div>
          </div>
          <div className="carousel-item p-5 my-5">

            <h4>"Your professionalism and talent made our wedding even more apecial.<br />
              The photos and video editing are stunning,<br /> and we are so happy we choose you for our invitation ."</h4>
            <div className='m-5'>
              <h6>Mansi & Anmol </h6>
              <h6>wedding - 24-12-2024</h6>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div className="carousel-indicators mt-5">
          <button type="button" data-bs-target="#banner" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#banner" data-bs-slide-to="2"></button>
        </div>
      </div>

      <div>
        <div className='text-center my-5'>
          <h5>BEST PRICE</h5>
          <h2>Choose your packages</h2>
        </div>

        <div className='row  '>

          <div className='card  w-25 m-auto border border-primary-subtle border-2 bg-body-secondary text-center p-4 col-3'>
            <div className='card-head text-primary-emphasis'>
              <h5>Basic Package</h5>
              <h1 >₹ 490</h1>
            </div>
            <div className='card-body'>
              <ul className='list-unstyled fs-5'>
                <li>- 1 Website</li>
                <li className='my-2'>- Subdomain</li>
                <li className='my-2' >- No Invitation Card</li>
                <li>- No Video</li>
              </ul>
            </div>
            <div className='card-footer'>
              <a className=' btn btn-transparent' type='button '>Whatsapp</a>
            </div>
          </div>

          <div className='card w-25 m-auto border border-primary-subtle border-2 bg-body-secondary text-center p-4 col-3'>
            <div className='card-head text-primary-emphasis'>
              <h5>Standard Package</h5>
              <h1 >₹ 690</h1>
            </div>
            <div className='card-body'>
              <ul className='list-unstyled fs-5'>
                <li>- 1 Website</li>
                <li className='my-2'>- Subdomain</li>
                <li className='my-2' >- 2 Invitation Card</li>
                <li>- No Video</li>
              </ul>
            </div>
            <div className='card-footer'>
              <a className=' btn btn-transparent' type='button '>Whatsapp</a>
            </div>
          </div>

          <div className='card  w-25 m-auto border border-primary-subtle border-2 bg-body-secondary text-center p-4 col-3'>
            <div className='card-head text-primary-emphasis'>
              <h5>Luxuary Package </h5>
              <h1 >₹ 990</h1>
            </div>
            <div className='card-body'>
              <ul className='list-unstyled fs-5'>
                <li>- 1 Website</li>
                <li className='my-2 '>- Subdomain</li>
                <li className='my-2' >- 2 Invitation Card</li>
                <li>- 1 Video</li>
              </ul>
            </div>
            <div className='card-footer'>
              <a className=' btn btn-transparent' type='button '>Whatsapp</a>
            </div>
          </div>

        </div>

        <div className=' bg-warning-subtle mt-4' id='contact'>
          <div className='bg-warning-subtle row p-5'>
            <div className='col'>
              <img src='https://digiinvite.in/static/media/digiLogo.0cf524bb00db7ecbd40a.png' width="250" height="100" />
            </div>
            <div className='col fw-bold mt-5 '>
              <p>We can’t wait to see your wedding website design.<br /> Order Now and Invite to beloved friends and<br /> relatives at your wedding.</p>
            </div>
            <div className='col'>
              <h1 className='my-5'>CONTACT</h1>
              <span className='bi bi-whatsapp m-4 fs-2 '><a href=''></a> </span>
              <span className='bi bi-telephone-fill m-4 fs-2'><a href=''></a></span>
              <span className='bi bi-mailbox m-4 fs-2'><a href=''></a></span>
            </div>
          </div>

          <div className='text-center'>
            <h6>Design & Developed By | The Digital Invite | All right reserved.</h6>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
