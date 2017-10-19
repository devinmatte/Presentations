// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
    Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
    TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    signup: require("../assets/sign-up.png"),
    profile: require("../assets/profile.png"),
    pinned: require("../assets/pinned.png"),
    pinned2: require("../assets/pinned2.png"),
    newrepo: require("../assets/newrepo.png"),
    help: require("../assets/help.png"),
    issues: require("../assets/issues.png"),
};

preloader(images);

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    tertiary2: "#0380cd",
    quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        Intro to GitHub
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Get your terrible code online!
                    </Text>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={1} textColor="secondary" fit>Table of Contents</Heading>
                    <Heading size={4} textColor="tertiary">Signing Up</Heading>
                    <Heading size={5} textColor="tertiary">Your Profile</Heading>
                    <Heading size={4} textColor="tertiary">Adding Projects</Heading>
                    <Heading size={6} textColor="tertiary">Issues</Heading>
                    <Heading size={6} textColor="tertiary">Forks</Heading>
                    <Heading size={6} textColor="tertiary">Pull Requests</Heading>
                    <Heading size={6} textColor="tertiary">Projects</Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit textColor="primary">
                        Signing Up
                    </Heading>
                    <Image src={images.signup.replace('/', '')} margin="20px auto 20px" />
                    <Text textSize="0.8em" textColor="primary">
                        Pick a username that is easy to remember, and easy to match to you.
                    </Text>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
                    <BlockQuote textColor="secondary">
                        <Quote textColor="secondary">I don't care if you've used <i>wgahnagl</i> as your username on every account for 15 years. Stop.</Quote>
                    </BlockQuote>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit textColor="primary">
                        Your Profile
                    </Heading>
                    <Image src={images.profile.replace('/', '')} margin="20px auto 20px" />
                </Slide>

                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Pinned Repositories
                    </Heading>
                    <Image src={images.pinned.replace('/', '')} margin="20px auto 20px" />
                    <Text textSize="0.8em">
                        GitHub allows for you to pin 6 repositories to the top of your Profile. Use This! Show off your best stuff first.
                    </Text>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Pinned Repositories
                    </Heading>
                    <Image src={images.pinned2.replace('/', '')} margin="20px auto 20px" />
                    <Text textSize="0.8em">
                        You can select from any repository you own, or from any that you contribute to!
                    </Text>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit textColor="primary">
                        Adding Projects
                    </Heading>
                    <Image src={images.newrepo.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Existing Projects
                    </Heading>
                    <Text textSize="0.8em">
                        You can easily push an existing git project to GitHub.
                        Simply make an empty repository then run in your current project:
                    </Text>
                    <CodePane
                        lang="bash"
                        source={require('raw-loader!../assets/existing.example')}
                        margin="20px auto"
                        overflow="overflow"
                        height="30vh"
                    />
                    <Text textSize="0.8em">
                        If you have a project that's not yet in git, simply run:
                    </Text>
                    <CodePane
                        lang="bash"
                        source={require('raw-loader!../assets/init.example')}
                        margin="20px auto"
                        overflow="overflow"
                        height="20vh"
                    />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        GitHub Helps Out
                    </Heading>
                    <Text textSize="0.8em">
                        GitHub will help you out if you forget how to initialize a new project
                    </Text>
                    <Image src={images.help.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        What should I put on GitHub?
                    </Heading>
                    <List>
                        <ListItem>Personal Projects</ListItem>
                        <ListItem>Tutorials</ListItem>
                        <ListItem>Class Projects*</ListItem>
                    </List>
                    <Text textSize="0.5em">
                        *Make sure that you have permission to make the code public
                    </Text>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Quote textColor="secondary">"My Code isn't good enough"</Quote>

                    <Text textSize="0.8em">
                        What better way to show how you've improved than by being able to look back at where you came from?
                    </Text>
                    <Text textSize="0.8em">
                        Don't be discouraged by bad code! You're likely just starting out, no one expects anything incredible
                    </Text>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit textColor="primary">
                        Issues and Projects
                    </Heading>
                    <Image src={images.issues.replace('/', '')} margin="20px auto 20px" />
                </Slide>


                <Slide transition={['slide']} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Git Review
                    </Heading>
                    <Text textSize="0.8em">
                        A few commands that might come in handy
                    </Text>
                    <CodePane
                        lang="bash"
                        source={require('raw-loader!../assets/git.review')}
                        margin="20px auto"
                        overflow="overflow"
                        height="80vh"
                    />
                </Slide>



                <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Standard List</Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>
                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        );
    }
}
