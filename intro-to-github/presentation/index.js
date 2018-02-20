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
    projects: require("../assets/projects.png"),
    prs: require("../assets/prs.png"),
    approved: require("../assets/approved.png"),
    graph: require("../assets/graph.png"),
    examplePR1: require("../assets/examplePR1.png"),
    exampleFork: require("../assets/exampleFork.png"),
    exampleProject: require("../assets/exampleProject.png"),
    exampleDiff: require("../assets/exampleDiff.png"),
    studentpack: require("../assets/pack.png"),
    digitalocean: require("../assets/digitalocean.jpg"),
    github: require("../assets/github.jpg"),
    releases: require("../assets/release.png"),
    tags: require("../assets/tags.png"),
    automation : require("../assets/automation.png"),
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
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        Intro to GitHub
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Get your terrible code online!
                    </Text>
                </Slide>
                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} textColor="primary" fit>Follow Along</Heading>
                    <Text textSize="1.0em" textColor="primary">
                        There's a post on <Link textColor="tertiary" href="http://devinmatte.me">devinmatte.me</Link> going over in greater detail, everything gone over in this presentation.
                    </Text>
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
                        GitHub Student
                    </Heading>
                    <Image src={images.studentpack.replace('/', '')} margin="20px auto 20px" />
                    <Text textSize="0.8em" textColor="primary">
                        Get a bunch of free stuff!
                    </Text>
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        <Link textColor="tertiary" href="https://education.github.com/pack">education.github.com</Link>
                    </Heading>
                    <Image src={images.digitalocean.replace('/', '')} margin="15px auto 15px" />
                    <Image src={images.github.replace('/', '')} margin="15px auto 15px" />
                    <Text textSize="0.8em">
                        The pack gives you everything from Unlimited private repos on GitHub to $50 of DigitalOcean Credit!
                    </Text>
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
                    <Heading size={1} textColor="primary">
                        Issues
                    </Heading>
                    <Image src={images.issues.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        What's an Issue?
                    </Heading>
                    <Text textSize="0.8em">
                        An Issue is a post/report that contains a series of information. An issue could be a bug, missing feature, feature request, or a question even
                    </Text>
                    <Text textSize="0.8em">
                        An Issue consists of:
                    </Text>
                    <List>
                        <ListItem>Number Reference</ListItem>
                        <ListItem>Title</ListItem>
                        <ListItem>Markdown rich description</ListItem>
                        <ListItem>Labels</ListItem>
                        <ListItem>Assigned Users</ListItem>
                        <ListItem>Milestones</ListItem>
                        <ListItem>Projects</ListItem>
                        <ListItem>Comments</ListItem>
                    </List>
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} textColor="primary">
                        Projects
                    </Heading>
                    <Image src={images.projects.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Agile, In GitHub
                    </Heading>
                    <Text textSize="0.8em">
                        Projects is GitHub's solution to <Link textColor="tertiary" href="https://www.atlassian.com/software/jira">Jira</Link> and <Link textColor="tertiary" href="https://trello.com/">Trello</Link> in the marketplace. Agile boards aren't that complex, so they simply made one in GitHub, that uses issues and pull requests as the cards
                    </Text>
                    <Image src={images.exampleProject.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Automation
                    </Heading>
                    <Text textSize="0.8em">
                        Recently GitHub added automation to GitHub projects. This allows for agile board to automatically be updated based on actions on given Pull Requests or Issues. This makes them significantly more useful. There are actions for To do, In progress, and Done.
                    </Text>
                    <Image src={images.automation.replace('/', '')} margin="20px auto 20px" />
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} textColor="primary">
                        Releases
                    </Heading>
                    <Image src={images.releases.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Releases and Versions
                    </Heading>
                    <Text textSize="0.8em">
                        Releases are basically, version. Tagging a version at a point in time, and providing notes and maybe event install files to attach to it. Tags can also be checked out and pulled, so you can pull from a specific version without knowing the git hash
                    </Text>
                    <Image src={images.tags.replace('/', '')} margin="20px auto 20px" />
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} textColor="primary">
                        Forks
                    </Heading>
                    <Image src={images.graph.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        What's a Fork?
                    </Heading>
                    <Text textSize="0.8em">
                        A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.
                    </Text>
                    <Image src={images.exampleFork.replace('/', '')} margin="20px auto 20px" />
                </Slide>

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} textColor="primary">
                        Pull Requests
                    </Heading>
                    <Image src={images.prs.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Example Pull Request
                    </Heading>
                    <Text textSize="0.8em">
                        A pull request contains everything an issue does, plus attached commits
                    </Text>
                    <Image src={images.examplePR1.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Example Pull Request
                    </Heading>
                    <Text textSize="0.8em">
                        A pull request shows all the changes from the current branch, compared to all commits in the Pull Request
                    </Text>
                    <Image src={images.exampleDiff.replace('/', '')} margin="20px auto 20px" />
                </Slide>
                <Slide transition={["slide"]} bgColor="primary">
                    <Heading size={3} textColor="black">
                        Restrictions on PRs
                    </Heading>
                    <Text textSize="0.8em">
                        Sometimes repositories require reviews or checks to pass before allowing a Pull Request to be merged
                    </Text>
                    <Image src={images.approved.replace('/', '')} margin="20px auto 20px" />
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

                <Slide transition={["slide"]} bgColor="secondary">
                    <Heading size={1} textColor="primary">
                        Questions/Demo
                    </Heading>
                    <Text textSize="1.0em" textColor="primary">
                        There's a post on <Link textColor="tertiary" href="http://devinmatte.me">devinmatte.me</Link> going over in greater detail, everything gone over in this presentation.
                    </Text>
                </Slide>
            </Deck>
        );
    }
}
