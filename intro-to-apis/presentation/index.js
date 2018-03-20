// Import React
import React from "react";
// Import Spectacle Core tags
import {CodePane, Deck, Heading, Image, Link, List, ListItem, Slide, Text} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    apilogo: require("../assets/api-icon.png"),
};

preloader(images);

const theme = createTheme({
    primary: "white",
    secondary: "#011f35",
    tertiary: "#02acff",
    quartenary: "#CECECE",
}, {
    primary: "Montserrat",
    secondary: "Helvetica",
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
                        There's a post on <Link textColor="tertiary"
                                                href="http://devinmatte.me">devinmatte.me</Link> going over in greater
                        detail, everything gone over in this presentation.
                    </Text>
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit textColor="primary">
                        What are APIs?
                    </Heading>
                    <Image src={images.apilogo.replace('/', '')} margin="20px auto 20px"/>
                </Slide>

                <Slide transition={['slide']} bgColor="primary">
                    <Heading size={3} textColor="black">
                        What can APIs do?
                    </Heading>
                    <Text textSize="0.8em">
                        APIs allow for you to return data to external applications, in whatever format you wish to make
                        available.
                    </Text>
                    <CodePane
                        lang="json"
                        source={require('raw-loader!../assets/json.example')}
                        margin="20px auto"
                        overflow="overflow"
                        height="80vh"
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit textColor="primary">
                        What is RESTful?
                    </Heading>
                </Slide>

                <Slide transition={['slide']} bgColor="primary">
                    <Heading size={3} textColor="black">
                        RESTful Services
                    </Heading>
                    <Text textSize="0.8em">
                        RESTful is often confused with HTTP methods, they're not the same, but for the purpose of this
                        introduction, they'll be treated the same.
                    </Text>
                    <List>
                        <ListItem>GET — retrieve a specific resource or a collection of resources</ListItem>
                        <ListItem>POST — update a specific resource</ListItem>
                        <ListItem>PUT — create a new resource</ListItem>
                        <ListItem>DELETE — remove a specific resource</ListItem>
                    </List>
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit textColor="primary">
                        Structure an API
                    </Heading>
                </Slide>

                <Slide transition={['slide']} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Routes and Paths
                    </Heading>
                    <Text textSize="0.8em">
                        Structuring an API is important. Paths and Routes are really important to understanding an API.
                        They could be compared to Classes with each Method being they're methods.
                    </Text>
                    <List>
                        <ListItem>/</ListItem>
                        <ListItem>/search</ListItem>
                        <ListItem>/this/is/a/long/path/which/is/valid</ListItem>
                    </List>
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit textColor="primary">
                        Parameters
                    </Heading>
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit textColor="primary">
                        Status Codes
                    </Heading>
                </Slide>

                <Slide transition={['slide']} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Status Codes
                    </Heading>
                    <Text textSize="0.8em">
                        Status codes in HTTP tell the client with a with a quick code, how the request responded.
                        Allowing the user to handle types of requests depending on the code.
                    </Text>
                    <Text textSize="0.8em">
                        There are 5 normal ranges
                    </Text>
                    <List>
                        <ListItem>1xx: Informational responses.</ListItem>
                        <ListItem>2xx: Success.</ListItem>
                        <ListItem>3xx: Redirection.</ListItem>
                        <ListItem>4xx: Client errors.</ListItem>
                        <ListItem>5xx: Server errors.</ListItem>
                    </List>
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} textColor="primary" fit>Make Your Own!</Heading>
                    <CodePane
                        lang="bash"
                        source={require('raw-loader!../assets/close.repo')}
                        margin="20px auto"
                        overflow="overflow"
                        height="80vh"
                    />
                    <Text textSize="0.8em" textColor="primary">
                        Chose one of 4 branches with the basic structure setup
                    </Text>
                    <List textColor="primary">
                        <ListItem>Python with Flask: <code>python_flask</code></ListItem>
                        <ListItem>Java with Spring: <code>java_spring</code></ListItem>
                        <ListItem>PHP with Slim: <code>php_slim</code></ListItem>
                        <ListItem>Node with Express <code>node_express</code></ListItem>
                    </List>
                </Slide>

            </Deck>
        );
    }
}
