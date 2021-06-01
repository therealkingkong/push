import React from "react";
import getFeedsData from "./config/Firebase";
import "./style.css";




export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      uid: "",
      name: "",
      sort: false,
      tagList: null,
      tagListReverse: null,
      feeds: [],
      likes: [],
      render: false,
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFjUMXMCOEDg5AK5FhOpod-WCVhc0DfsJse7twfHHKp4WNG6ak&usqp=CAU",
      LikesLenght: [],
    };

  }

  componentDidUpdate(prevProps, prevState) {
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/jquery.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/jquery.poptrox.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/util.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/browser.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/breakpoints.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/main.js');

    if (this.state.sort == !prevState.sort) {

      setTimeout(() => {
        this.refs.blankdiv && this.refs.blankdiv.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" })
      }, 100)
    }


  }

  componentDidMount() {

    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/jquery.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/jquery.poptrox.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/util.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/browser.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/breakpoints.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/main.js');






    getFeedsData().then(data => {
      this.setState({ tagList: data, render: true });
    })

  }





  render() {


    const renderItem = (item) => {
      return <article className="thumb">
        {
          item.type !== "image" ?
            <a href={item.file} data-poptrox="youtube,800x480" className="image">
              <img style={{ "background-size": "cover" }} src={item.thumbnail ? item.thumbnail : process.env.PUBLIC_URL+"/comics/assets/css/images/3.png"} alt="" />
            </a>
            :
            <a href={item.file} className="image">
              <img src={item.file} alt="" />
            </a>
        }
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
      </article>

    }


    const { tagList } = this.state;

    if (!this.state.tagList) {
      return (
        <></>
      )
    }
    else {

      return (

        <div>

          {/* {
            this.state.sort?
            <Helmet>

            <script src="/comics/assets/js/jquery.min.js" />

            <script src="/comics/assets/js/jquery.poptrox.min.js" />

            <script src="/comics/assets/js/util.js" />

            <script src="/comics/assets/js/browser.min.js" />

            <script src="/comics/assets/js/breakpoints.min.js" />

            <script src="/comics/assets/js/main.js" />
          </Helmet>
          :
          <Helmet>

          <script src="/comics/assets/js/jquery.min.js" />

          <script src="/comics/assets/js/jquery.poptrox.min.js" />

          <script src="/comics/assets/js/util.js" />

          <script src="/comics/assets/js/browser.min.js" />

          <script src="/comics/assets/js/breakpoints.min.js" />

          <script src="/comics/assets/js/main.js" />
        </Helmet>

          } */}

          <div class="is-preload">
            <title>PUSHFORGORILLA</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL+"/comics/assets/css/fonts/MyFontsWebfontsKit/MyFontsWebfontsKit.css"} />
            <link rel="stylesheet" href={process.env.PUBLIC_URL+"/comics/assets/css/main.css"} />
            {/* Wrapper */}
            <div id="wrapper">
              <h1 className="title"> PUSHFORGORILLA</h1>
              <h4 className="author">By Cornelius Range</h4>


              <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: "wrap", marginBottom: 25
              }}>
                <div style={{ borderRadius: 100, marginRight: 10 }} onClick={() => { this.setState({ sort: true, tagList: tagList }) }} class="btn btn-lg btn-white">

                  <i class="fa fa-sort-amount-down" />

                </div>
                <div style={{ borderRadius: 100, marginLeft: 10 }} onClick={() => { this.setState({ sort: false, tagList: tagList }) }} class="btn btn-lg btn-white">

                  <i class="fa fa-sort-amount-up" />

                </div>

              </div>

              {/* <div class="socials footer-socials" style={{ marginBottom: 15, flexDirection: 'row', alignItems:'flex-end', width: '100%', background: 'red' }}>


                <a onClick={() => { this.setState({ sort: !this.state.sort, tagList: tagList }) }}>
                  <i class="fa fa-sort" />
                </a>
                </div>

              </div> */}



              <div ref="blankdiv" id="main" className="padding-bottom-550">

                {
                  this.state.sort ?
                    tagList.reverse().map((item) => renderItem(item))
                    :
                    tagList.map((item) => renderItem(item))
                }
              </div>

              {/* Footer */}


              <header id="header" className="main-footer">
                <div className="row justifyContent-center padding-top-40">
                  <img class="" src={process.env.PUBLIC_URL+"/img/logo-white.png"} alt="logo" className="width-90" />
                </div>

                <div className="row justifyContent-center padding-y-40">
                  <h1 className="font-family-montserrat"><a href="index.html"><strong>Rumble Capital</strong></a> x <a href="index.html"><strong>Range X</strong></a></h1>
                </div>
                <div className="row" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                  <div className="col-md-6 footer-menu text-center">

                    <li><a href="" className="text-color-white icon solid fa-info-circle font-family-montserrat">&nbsp;HOME</a></li>
                    <li><a href="" className="text-color-white icon solid fa-info-circle font-family-montserrat">&nbsp;MISSION</a></li>
                    <li><a href="" className="text-color-white icon solid fa-info-circle font-family-montserrat">&nbsp;STORY</a></li>
                    <li><a href="" className="text-color-white icon solid fa-info-circle font-family-montserrat">&nbsp;STORE</a></li>
                  </div>

                  <div className="col-md-6 footer-menu text-center">
                    <i class="text-color-white padding-x-10 fab fa-twitter"></i>
                    <i class="text-color-white padding-x-10 fab fa-facebook-f"></i>
                    <i class="text-color-white padding-x-10 fab fa-github"></i>
                    <i class="text-color-white padding-x-10 fas fa-basketball-ball"></i>
                    <i class="text-color-white padding-x-10 fab fa-linkedin-in"></i>
                  </div>

                </div>
                <p style={{ color: 'white' }} className="text-center">
                  Copyright &copy; 2021 PUSHFORGORILLA. All Rights Reserved
                </p>
                {/* <nav>
                  <ul>
                    <li><a href="" className="icon solid fa-info-circle">home</a></li>
                  </ul>
                </nav> */}
              </header>


              <footer id="footer" className="panel">
                <div className="inner split">
                  <div>
                    <section>
                      <h2>Magna feugiat sed adipiscing</h2>
                      <p>Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum.</p>
                    </section>
                    <section>
                      <h2>Follow me on ...</h2>
                      <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                      </ul>
                    </section>
                    <p className="copyright">
                      © Unttled. Design: <a href="http://html5up.net">HTML5 UP</a>.
                            </p>
                  </div>
                  <div>
                    <section>
                      <h2>Get in touch</h2>
                      <form method="post" action="#">
                        <div className="fields">
                          <div className="field half">
                            <input type="text" name="name" id="name" placeholder="Name" />
                          </div>
                          <div className="field half">
                            <input type="text" name="email" id="email" placeholder="Email" />
                          </div>
                          <div className="field">
                            <textarea name="message" id="message" rows={4} placeholder="Message" defaultValue={""} />
                          </div>
                        </div>
                        <ul className="actions">
                          <li><input type="submit" defaultValue="Send" className="primary" /></li>
                          <li><input type="reset" defaultValue="Reset" /></li>
                        </ul>
                      </form>
                    </section>
                  </div>
                </div>
              </footer>
            </div>
            {/* Scripts */}
          </div>
        </div>
      );
    }
  }
}
