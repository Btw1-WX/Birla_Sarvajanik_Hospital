import "./GoodHealth.css";
import goodHealth from "../../assets/good-health.jpg";

function GoodHealth() {
  return (
    <div className="good-health">
      <div className="box">
        <img src={goodHealth} className="gh-img"></img>

        <div className="right-text">
          <div className="sl-heading">
            <div className="small-heading">Welcome to Hospital Name</div>
            <div className="large-heading">Best Care for Your Good Health</div>
          </div>

          <div className="lists">
            <div className="row">
              <div className="left ">
                <div className="blue-circle"></div>
                <div>A Passion for Healing</div>
              </div>

              <div className="right">
                <div className="blue-circle"></div>
                <div className="col-two">5 Start Care</div>
              </div>
            </div>

            <div className="row">
              <div className="left">
                <div className="blue-circle"></div>
                <div>All our best</div>
              </div>

              <div className="right">
                <div className="blue-circle"></div>
                <div className="col-two extra-margin">Believe in Us</div>
              </div>
            </div>

            <div className="row">
              <div className="left">
                <div className="blue-circle"></div>
                <div>Always Caring</div>
              </div>

              <div className="right">
                <div className="blue-circle"></div>
                <div className="col-two extra-margin">Always Caring</div>
              </div>
            </div>
          </div>

          <div className="info">
            <div className="info-one">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim etc.
            </div>
            <div className="info-two">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoodHealth;
