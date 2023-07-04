import "./App.css"
import littleLemonImageTwo from "../src/assets/Mario-and-Adrian-b.jpg";


function About() {
    return (
        <div id="about-section" class="about row" >
        <div class="col">
          <h2>Little Lemon</h2>
          <h5>Chicago</h5>
          <p>
            At Little Lemon, we honor the time-honored recipes that have been
            passed down through generations. Our talented chefs meticulously
            prepare each dish with a deep respect for tradition, using authentic
            techniques and the freshest, locally sourced ingredients. From
            fragrant herbs and aromatic spices to succulent seafood and tender
            meats, our menu is a celebration of the Mediterranean's bountiful
            harvest and its incredible culinary tapestry.
          </p>
        </div>
        <div class="col">
          <img src={littleLemonImageTwo} alt="Mario and Adrian Chefs" />
        </div>
      </div>
    )
}

export default About;