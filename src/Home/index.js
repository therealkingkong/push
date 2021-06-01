import React from "react";
import "./style.css";
import getFeedsData from "../config/Firebase";
import Script from 'react-load-script';



export default class Home extends React.Component {
  state = {
    uid: "",
    name: "",
    email: "",
    feeds: [],
    data: this.props.location.state.detail,

    likes: [],
    render: false,
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFjUMXMCOEDg5AK5FhOpod-WCVhc0DfsJse7twfHHKp4WNG6ak&usqp=CAU",
    LikesLenght: [],
  };

  componentDidMount() {

    // getFeedsData().then(data=>{

    //     this.setState({data: data});

    // })

    // window.$.getScript('/js/jquery.min.js');
    // window.$.getScript('/js/bootstrap.min.js');
    // window.$.getScript('/js/bars.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/jquery.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/jquery.poptrox.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/util.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/browser.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/breakpoints.min.js');
    window.$.getScript(process.env.PUBLIC_URL+'/comics/assets/js/main.js');


    // window.$.getScript('/js/gmap3.js');
    // window.$.getScript('/js/plugins.js');
    // window.$.getScript('/js/scripts.js');
    // window.$.getScript('/js/secret.js');


    this.setState({ render: true });

  }

  // componentDidUpdate() {

  //     window.$.getScript('comics/assets/js/jquery.min.js');
  //     window.$.getScript('comics/assets/js/browser.min.js');
  //     window.$.getScript('comics/assets/js/breakpoints.min.js');
  //     window.$.getScript('comics/assets/js/main.js');

  // }

  render() {
    const { name, email, feeds, profileImg, likes, data } = this.state;

    let tags = [1, 2, 3];



    let tagList = data.map(function (item) {
      var i = 0;



      return item.type !== "image" ?
        <article className="thumb">
          <a href={item.file} data-poptrox="youtube,800x480" className="image"><img style={{ "background-size": "cover" }} src={item.thumbnail ? item.thumbnail : "comics/assets/css/images/3.png"} alt="" /></a>
          {/* {alert(item.file)} */}
          <h2 />
          <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        </article> :
        <article className="thumb">
          <a href={item.file} className="image"><img src={item.file} alt="" /></a>
          <h2>Nisl adipiscing</h2>
          <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        </article>



    }.bind(this));


    if (!this.state.render) {

      return (
        <>
          <Script
            url="%PUBLIC_URL%/js/jquery.min.js"
            // onCreate={this.handleScriptCreate.bind(this)}
            // onError={this.handleScriptError.bind(this)}
            onLoad={() => this.setState({ second: true })}
          />

          {
            this.state.second &&
            <Script
              url="%PUBLIC_URL%/js/bootstrap.min.js"
              onLoad={() => this.setState({ third: true })}
            />
          }

          {
            this.state.third &&
            <Script
              url="%PUBLIC_URL%/js/bars.js"
              onLoad={() => this.setState({ fourth: true })}
            />
          }


          {
            this.state.fourth &&
            <Script
              url="%PUBLIC_URL%/js/gmap3.js"
              onLoad={() => this.setState({ fifth: true })}
            />
          }


          {
            this.state.fifth &&
            <Script
              url="%PUBLIC_URL%/js/plugins.js"
              onLoad={() => this.setState({ sixth: true })}
            />
          }


          {
            this.state.sixth &&
            <Script
              url="%PUBLIC_URL%/js/scripts.js"
              onLoad={() => this.setState({ seventh: true })}
            />
          }

          {
            this.state.seventh &&
            <Script
              url='%PUBLIC_URL%/js/secret.js'
              onLoad={() => this.setState({ eighth: true })}
            />
          }

          {
            this.state.eighth &&
            <Script
              url='%PUBLIC_URL%/comics/assets/js/jquery.min.js'
              onLoad={() => this.setState({ ninth: true })}
            />
          }

          {
            this.state.ninth &&
            <Script
              url='%PUBLIC_URL%/comics/assets/js/browser.min.js'
              onLoad={() => this.setState({ tenth: true })}
            />
          }


          {
            this.state.tenth &&
            <Script
              url='%PUBLIC_URL%/comics/assets/js/breakpoints.min.js'
              onLoad={() => this.setState({ eleventh: true })}
            />
          }

          {
            this.state.eleventh &&
            <Script
              url='%PUBLIC_URL%/comics/assets/js/main.js'
              onLoad={() => this.setState({ render: true })}
            />
          }

        </>
      )
    }
    else {

      return (


        <div>
          <div class="is-preload">
            <title>PUSHFORGORILLA</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" type="text/css" href="%PUBLIC_URL%/comics/assets/css/fonts/MyFontsWebfontsKit/MyFontsWebfontsKit.css" />
            <link rel="stylesheet" href="%PUBLIC_URL%/comics/assets/css/main.css" />
            {/* Wrapper */}
            <div id="wrapper">
              <h1 className="title"> PUSHFORGORILLA</h1>
              <h4 className="author">By Cornelius Range</h4>
              <h5 className="chapter">chapters</h5>
              // <ul className="chapters">
                //   <li>1</li>
              //   <li>2</li>
              //   <li>3</li>
              //   <li>4</li>
              //   <li>5</li>
              // </ul>
              {/* Header */}
              <header id="header">
                <h1><a href="index.html"><strong>Rumble Capital</strong></a> x <a href="index.html"><strong>Range X</strong></a></h1>
                <nav>
                  <ul>
                    <li><a href="" className="icon solid fa-info-circle">home</a></li>
                  </ul>
                </nav>
              </header>
              {/* Main */}
              <div id="main">
                {/* <article className="thumb">
                <a href="http://youtu.be/loGm3vT8EAQ" className="image"><img src="comics/assets/css/images/3.png" alt="" /></a>
                <h2 />
                <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
              </article>

              <article className="thumb">
                <a href="comics/images/fulls/02.jpg" className="image"><img src="comics/images/thumbs/02.jpg" alt="" /></a>
                <h2>Nisl adipiscing</h2>
                <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
              </article> */}

                {tagList}



                {/* {feeds &&
              !!feeds.length &&
              feeds.map(function(e) {

                return <article className="thumb">
                  <a href="comics/images/fulls/02.jpg" className="image"><img src="comics/images/thumbs/02.jpg" alt="" /></a>
                  <h2>Nisl adipiscing</h2>
                  <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
                </article>


                // e.type !== "image" ? (
                //   <article className="thumb">

                //     <a href="http://youtu.be/loGm3vT8EAQ" className="image"><img src={e.file} alt="" /></a>
                //     <h2 />
                //     <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
                //   </article>
                // )
                //   : (
                //     <article className="thumb">
                //       <a href={e.file} className="image"><img src={e.file} alt="" /></a>
                //       <h2>Nisl adipiscing</h2>
                //       <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
                //     </article>
                //   )


              }.bind(this))
            } */}

              </div>
              {/* Footer */}
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
