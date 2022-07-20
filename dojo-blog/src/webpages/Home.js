import image from "/Users/hhajm/Desktop/dojo-blog/src/images/flower 1.jpg";
import image2 from "/Users/hhajm/Desktop/dojo-blog/src/images/flower 2.jpg";
import image3 from "/Users/hhajm/Desktop/dojo-blog/src/images/flower 3.jpg";
import profile1 from "/Users/hhajm/Desktop/dojo-blog/src/images/MalePic.png";
import profile2 from "/Users/hhajm/Desktop/dojo-blog/src/images/MalePic2.png";
import design from "/Users/hhajm/Desktop/dojo-blog/src/images/designer.png";
import code from "/Users/hhajm/Desktop/dojo-blog/src/images/Coding.png";
import game from "/Users/hhajm/Desktop/dojo-blog/src/images/gamedev.png";
import introImage from "/Users/hhajm/Desktop/dojo-blog/src/images/introImage.jpg";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <div className="welcome col-7">
          <h1>Welcome to TechU!!!</h1>
          <p>We offer you the best courses for XR development.</p>
          <a className="toPrograms btn btn-outline-primary" href="/Programs">
            Explore Now!
          </a>
        </div>
        <div className="uniPhoto col-5">
          <img
            src={introImage}
            id="slideshowimages"
            className="d-block w-100"
            alt="Flower 1"
          />
        </div>
      </div>
      <div className="infoLinks justify-content-center">
        <ul className="navbartabs nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="programs-tab"
              data-bs-toggle="tab"
              data-bs-target="#programs-tab-pane"
              type="button"
              role="tab"
              aria-controls="programs-tab-pane"
              aria-selected="true"
            >
              Programs
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pastGraduate-tab"
              data-bs-toggle="tab"
              data-bs-target="#pastGraduate-tab-pane"
              type="button"
              role="tab"
              aria-controls="pastGraduate-tab-pane"
              aria-selected="false"
            >
              Past Graduates
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="personel-tab"
              data-bs-toggle="tab"
              data-bs-target="#personel-tab-pane"
              type="button"
              role="tab"
              aria-controls="personel-tab-pane"
              aria-selected="false"
            >
              Personel
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade"
            id="programs-tab-pane"
            role="tabpanel"
            aria-labelledby="programs-tab"
            tabindex="0"
            style={{ height: "0px" }}
          >
            <div className="container">
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <img src={design} className="programImg" />
                    <h3>Design</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Learn 3D design and 2D design for your VR or AR
                      applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <img src={code} className="programImg" />
                    <h3>Code</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Enrol in our courses for programming web applications,
                      games and other interfaces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <img src={game} className="programImg" />
                    <h3>Game Dev</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Learn to use Unreal Engine and Unity as your game Engines
                      for game development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show active"
            id="pastGraduate-tab-pane"
            role="tabpanel"
            aria-labelledby="pastGraduate-tab"
            tabindex="0"
            style={{ height: "0px" }}
          >
            <div className="a-box">
              <div className="img-container">
                <div className="img-inner">
                  <div className="inner-skew">
                    <img src={profile2} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-container">
                <h3>Person A</h3>
                <div>
                  I really liked the courses and plus, I was able to land a job
                  at Google. Hooray!
                </div>
              </div>
            </div>
            <div className="a-box">
              <div className="img-container">
                <div className="img-inner">
                  <div className="inner-skew">
                    <img src={profile2} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-container">
                <h3>Person B</h3>
                <div>
                  The personel were awesome! They all are efficient in their
                  areas. I learned a lot.
                </div>
              </div>
            </div>
            <div className="a-box">
              <div className="img-container">
                <div className="img-inner">
                  <div className="inner-skew">
                    <img src={profile2} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-container">
                <h3>Person C</h3>
                <div>
                  Best 100$ I have spent in my life. I learned more through this
                  courses than in university.
                </div>
              </div>
            </div>
            <div className="a-box">
              <div className="img-container">
                <div className="img-inner">
                  <div className="inner-skew">
                    <img src={profile2} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-container">
                <h3>Person D</h3>
                <div>
                  Personally, I didn't believe much in online courses, but this
                  one was AMAZING!
                </div>
              </div>
            </div>
          </div>
          <div
            className="personelTab tab-pane fade"
            id="personel-tab-pane"
            role="tabpanel"
            aria-labelledby="personel-tab"
            tabindex="0"
            style={{ display: "flex" }}
          >
            <div className="card-container">
              <span className="pro">PRO</span>
              <img className="round" src={profile1} alt="user" />
              <h3>Hossein H.</h3>
              <h6>Ottawa</h6>
              <p>
                User interface designer and <br /> front-end developer
              </p>

              <div className="skills">
                <h6>Skills</h6>
                <ul>
                  <li>UI / UX</li>
                  <li>Front End Development</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <div className="card-container">
              <span className="pro">PRO</span>
              <img className="round" src={profile1} alt="user" />
              <h3>John Doe</h3>
              <h6>San Francisco</h6>
              <p>
                Game developper for Ubisoft <br /> Unity expert
              </p>

              <div className="skills">
                <h6>Skills</h6>
                <ul>
                  <li>Unity</li>
                  <li>Game Development</li>
                  <li>3D Design</li>
                  <li>C++</li>
                  <li>C#</li>
                </ul>
              </div>
            </div>
            <div className="card-container">
              <span className="pro">PRO</span>
              <img className="round" src={profile1} alt="user" />
              <h3>Sam V.</h3>
              <h6>Toronto</h6>
              <p>
                Big businessman <br /> And NFT expert
              </p>

              <div className="skills">
                <h6>Skills</h6>
                <ul>
                  <li>Business</li>
                  <li>Marketing</li>
                  <li>Communication</li>
                  <li>2D Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slideshow">
        <div
          id="carouselExampleCaptions"
          className="carsli carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div id="imagesPlace" className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image}
                id="slideshowimages"
                className="d-block w-100"
                alt="Flower 1"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                id="slideshowimages"
                className="d-block w-100"
                alt="Flower 2"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                id="slideshowimages"
                className="d-block w-100"
                alt="Flower 3"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
