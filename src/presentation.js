// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const initialJsSource = `
import React, {Component} from 'react';
import gigs from './data/GigList';
import Gig from './components/Gig';

const GigList = () => gigs.map((props) => <Gig {...props}/>)

const Gig = ({link, date, location}) => (
  <tr>
    <a href={link} target="_blank">
      <td className="gigDate">{date}</td>
      <td className="gigLocation">{location}</td>
    </a>
  </tr>
);

export default GigList;
`;

const finalJsSource = `
import React, {useState, useEffect} from 'react';

const url = 'https://api.thescratch.ie/';
const request = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

const GigList = () => {
  const [gigListData, setGigListData] = useState([]);

  useEffect(() => {
    if (!gigListData.length) {
      (async () => {
        let response = await fetch(url, request);
        let json = await response.json();
        setGigListData(json.Items)
      })();
    }
  });

  return gigListData.length ? gigListData.map((props) => <Gig {...props}/>) : <h2>...Loading</h2>
}

const Gig = ({link, date, location}) => (
  <tr>
    <a href={link} target="_blank">
      <td className="gigDate">{date}</td>
      <td className="gigLocation">{location}</td>
    </a>
  </tr>
);

export default GigList;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Serverless React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={6} fit bold>
            A talk in 3 parts
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Introduction: A Story
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Rockstar Developer
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Rockstar
          </Heading>
          <Image src='./rockstar.jpg'></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Developer
          </Heading>
          <Image src='./proffeature1.jpg'></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={6} fit bold>
            <a href="https://thescratch.ie" target="_blank">thescratch.ie</a>
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Part 1: The React Bit
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            React
          </Heading>
          <List>
            <ListItem>Component Based Web Library</ListItem>
            <ListItem>Developed by Facebook (used by Airbnb, Instagram, many others)</ListItem>
            <ListItem>Used for developing websites and mobile apps (react native)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            thescratch.ie Components
          </Heading>
          <List>
            <ListItem>Youtube Video</ListItem>
            <ListItem>Spotify Playlist</ListItem>
            <ListItem>Gig List</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Gig List Component
          </Heading>
          <List>
            <Image src='./gigList.png'></Image>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Gig List Component
          </Heading>
          <CodePane source={initialJsSource} lang={'javascript'}></CodePane>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Interlude: Why Serverless
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            The Scratch in RTE
          </Heading>
          <Image src='./rte.jpg'></Image>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Updated Gig List Component
          </Heading>
          <CodePane source={finalJsSource} lang={'javascript'}></CodePane>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Part 2: Serverless on AWS
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            LinkedIn Learning Course
          </Heading>
          <Image src='./lynda.png'></Image>
        </Slide>

        <Slide>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Built GET and POST API Endpoints for Gigs
          </Heading>
          <List>
            <ListItem>DynamoDB</ListItem>
            <ListItem>AWS Lambda</ListItem>
            <ListItem>API Gateway</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Takeaways
          </Heading>
          <List>
            <ListItem>Tedious to set up endpoints</ListItem>
            <ListItem>Not clear on production workflow</ListItem>
            <ListItem>Navigation AWS UI difficult</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Part 3: Serverless on Ruby
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Jets: Ruby Serverless Framework
          </Heading>
          <Image src='./jetsHomepage.png'></Image>
        </Slide>

        <Slide>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Jets: Ruby Serverless Framework
          </Heading>
          <List>
            <ListItem>Very like Ruby on Rails</ListItem>
            <ListItem>Deploys Seamlessly to AWS</ListItem>
            <ListItem>Seems popular (1000+ Github stars)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Takeaways
          </Heading>
          <List>
            <ListItem>Jets not yet fully formed</ListItem>
            <ListItem>Distinction between ActiveRecord and DynamoDB is unclear</ListItem>
            <ListItem>Github stars != Production Ready</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Epilogue: What did I learn?
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Serverless Use Cases
          </Heading>
          <List>
            <ListItem>High scalability situations</ListItem>
            <ListItem>Service Oriented Architecture</ListItem>
            <ListItem>Where Economics makes sense</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Advice
          </Heading>
          <List>
            <ListItem>Pick a strong front end framework</ListItem>
            <ListItem>Pick a mature backend framework (Serverless 30,000+ stars!)</ListItem>
            <ListItem>Experiment on lower risk projects first</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
