// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text, Link,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#011f35",
  tertiary: "#02acff",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
          <Slide transition={["slide"]} bgColor="secondary">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                  Intro to APIs
              </Heading>
              <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                  Learn to make your own APIs
              </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
              <Heading size={1} textColor="primary" fit>Follow Along</Heading>
              <Text textSize="1.0em" textColor="primary">
                  There's a post on <Link textColor="tertiary" href="http://devinmatte.me">devinmatte.me</Link> going over in greater detail, everything gone over in this presentation.
              </Text>
          </Slide>
      </Deck>
    );
  }
}
