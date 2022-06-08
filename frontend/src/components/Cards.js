export function Main_1(){
    //Card Flip function
    setTimeout(function() {
      var top = document.getElementsByClassName("top");
      var bottom = document.getElementsByClassName("bottom");
      var cards = document.querySelector('.cards');
      cards.style.left = "50%";
      [...top].map((i) => {
          i.style.transform = 'rotateY(0deg)'
      });
      [...bottom].map((i) => {
          i.style.transform = 'rotateY(-180deg)'
      });
    }, 1500);
    return (
        <div className="main">
          <div className="cards cards_container-1">
            <div className="stack" href="#">
              <div className="card top">
                  <img className="item" src="/images/img_1.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_3.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_5.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_7.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_2.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_4.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_6.jpg" alt="img" />
              </div>
              <div className="card bottom" >
                <img src="./img/5-soham.png" alt="" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_1.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_3.jpg" alt="img" />
                </div>
                <div className="card bottom">
                <img src="/images/logo_header.svg" alt="logo" />
                </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_5.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_7.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_2.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_4.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_6.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_1.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_3.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_5.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_7.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_2.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_6.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_1.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_3.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_5.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_7.jpg" alt="img" />
              </div>
              <div className="card bottom">
              <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
            <div className="stack" href="#">
              <div className="card top">
              <img className="item" src="/images/img_2.jpg" alt="img" />
              </div>
              <div className="card bottom">
                <img src="/images/logo_header.svg" alt="logo" />
              </div>
            </div>
          </div>
          <div className="main_blur">&nbsp;</div>
        </div>
      );
  };
  
  