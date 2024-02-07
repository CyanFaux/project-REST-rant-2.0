const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="/images/healthy-salad.jpg"
            alt="Healthy Salad"
            width="50%"
          />
          <div>
            Photo by <a href="https://annapelzer.com/">Anna Pelzer</a> on{" "}
            <a href="https://unsplash.com/photos/bowl-of-vegetable-salads-IGfIGP5ONV0">
              Unsplash
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
