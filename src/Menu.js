import "./App.css"
import saladPhoto from "./assets/salad.jpg"
import falafelPhoto from "./assets/falafel.jpg"

const sectionStyle = {
  textAlign: "center",
  padding: "1.5rem",
};

function Menu() {
  return (
    <div className="row" style={sectionStyle}>
      <div className="col-12 col-lg-6">
        <h1 className="title">Our Menu</h1>
        <img  height="400rem" className="img-fluid" src={falafelPhoto} alt="Falafel" />
        <h2>Falafel</h2>
        <p>Chickpea, herbs and spices.</p>
        <img  height="400rem" className="img-fluid" src={saladPhoto} alt="Salad" />
        <h2>Pasta Salad</h2>
        <p>Lettuce, vegetables and mozzarella.</p>
      </div>
      <div className="col-12 col-lg-6">
        <h2>Prices</h2>
        <table className="table">
          <tr>
            <td>Falafel</td>
            <td>$12.00</td>
          </tr>
          <tr>
            <td>Pasta Salad</td>
            <td>$10.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Menu;
