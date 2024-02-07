const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img
            src="/images/fox-in-snow.jpg"
            alt="Fox Buried In Snow"
            width="50%"
          />
          <div>
            Photo by{" "}
            <a href="https://www.stevehinchphotography.com/">Steve Hinch</a> on{" "}
            <a href="https://www.telegraph.co.uk/news/picturegalleries/picturesoftheday/6864549/Pictures-of-the-day-22-December-2009.html?image=6">
              The Telegraph
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
