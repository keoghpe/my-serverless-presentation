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
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Part 1: The React Bit - continued
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Part 2: Serverless on AWS
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Part 3: Serverless on Ruby
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Epilogue: What did I learn?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
