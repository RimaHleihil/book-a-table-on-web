import "../App.css";
import restaurantImage from "../assets/restauranfood.jpg";
import greekSaladImage from "../assets/greek-salad.jpg";
import lemonDessertImage from "../assets/lemon-dessert.jpg";
import brunchettaImage from "../assets/bruchetta.svg";
import testimonialImageOne from "../assets/testimonial-one.jpg";
import testimonialImageTwo from "../assets/testimonial-two.jpg";
import testimonialImageThree from "../assets/testimonial-three.jpg";
import testimonialImageFour from "../assets/testimonial-four.jpg";

function Main() {
  return (
    <main>
      <section className="hero row">
        <div className="col" style={{paddingLeft: "2rem"}}>
          <h1 className="title">Little Lemon</h1>
          <h6>
            <strong>Chicago</strong>
          </h6>
          <p>
            Welcome to Little Lemon, a culinary haven where the vibrant flavors
            of the Mediterranean come alive. Embark on a journey through time
            and taste as we delve into the rich history of this remarkable
            restaurant. Nestled in the heart of our city, Little Lemon takes
            inspiration from the diverse Mediterranean region, renowned for its
            vibrant culture and tantalizing cuisine.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="col text-center">
          <img src={restaurantImage} className="img-fluid" alt="Little Lemon Chicago Restaurant" />
        </div>
      </section>

      <section className="row">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 1rem",
          }}
        >
          <h2 style={{ fontWeight: "800" }}>This Week's Specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="special-item col card">
          <img src={greekSaladImage} className="img-fluid" alt="Greek Salad" />
          <h6>
            Greek Salad<span class="price">$12.99</span>
          </h6>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
          <button>Order a delivery</button>
        </div>
        <div className="special-item col card">
          <img src={brunchettaImage} className="img-fluid" alt="Bruchetta" />
          <h6>
            Bruchetta<span class="price">$5.99</span>
          </h6>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.{" "}
          </p>
          <button>Order a delivery</button>
        </div>
        <div className="special-item col card">
          <img src={lemonDessertImage} className="img-fluid" alt="Lemom Dessert" />
          <h6>
            Lemon Dessert<span className="price">$5.00</span>
          </h6>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button>Order a delivery</button>
        </div>
      </section>

      <section className="row">
        <h2 style={{ fontWeight: "800", padding: "1rem 1rem"  }}>What Customers Say about Us...</h2>
        <div className="col">
          <div className="card testimonial">
            <img src={testimonialImageOne} className="img-fluid" alt="Testimonial One" />
            <h6>Sarah</h6>
            <p>
              "Little Lemon has become my go-to spot for a delightful culinary
              experience! The flavors in their dishes are simply exquisite, and
              the presentation is top-notch. The staff is warm and welcoming,
              ensuring a memorable dining experience. I highly recommend trying
              their signature lemon-infused dishes, they are a true delight!"
            </p>
          </div>
        </div>

        <div className="col">
          <div className="card testimonial">
            <img src={testimonialImageTwo} className="img-fluid" alt="Testimonial Two" />
            <h6>Joe</h6>
            <p>
              "From the moment I stepped into Little Lemon, I knew I was in for
              a treat. The ambiance is cozy and inviting, perfect for a relaxing
              meal. The menu offers a fantastic variety of options, and each
              dish I've tried has been a burst of flavors. The staff is
              attentive and knowledgeable, always ready to offer great
              recommendations. Little Lemon has quickly become my favorite
              restaurant in town!"
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card testimonial">
            <img src={testimonialImageThree} className="img-fluid" alt="Testimonial Three" />
            <h6>Ana</h6>
            <p>
              "Little Lemon is a hidden gem that deserves all the praise! The
              food is simply outstanding, with fresh ingredients and creative
              combinations that are sure to satisfy any palate. The service is
              impeccable, with friendly and attentive staff who go above and
              beyond to make you feel special. Don't miss out on their
              tantalizing lemon desserts; they are the perfect sweet ending to a
              memorable meal."
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card testimonial">
            <img src={testimonialImageFour} className="img-fluid" alt="Testimonial Four" />
            <h6>Michael</h6>
            <p>
              "Little Lemon has completely won me over with their incredible
              attention to detail. The moment you enter, you are greeted with a
              smile and an inviting atmosphere. The menu features a range of
              delectable options, including vegetarian and gluten-free choices.
              The flavors are harmonious and well-balanced, and the presentation
              is nothing short of art. Little Lemon truly excels in providing an
              exceptional dining experience."
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Main;