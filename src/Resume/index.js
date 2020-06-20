import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: 'flex' }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer links={DATA.footerLinks} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: 'British Columbia Institute of Technology',
      duration: '2004 - 2006',
      degree: 'Associate of Computer Science',
    },
    languages: [
      {
        name: 'JavaScript/Node.js (ES2015)',
        proficiency: 0.8,
      },
      {
        name: 'Python',
        proficiency: 0.5,
      },
      {
        name: 'HTML/CSS',
        proficiency: 0.9,
      },
      {
        name: 'PHP',
        proficiency: 0.6,
      },
      {
        name: 'C++',
        proficiency: 0.6,
      },
      {
        name: 'BASH',
        proficiency: 0.5,
      },
    ],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
    libraries: [
      'React',
      'Redux',
      'Vue',
      'Marionette',
      'Express',
      'Jasmine',
      'Mocha',
      'jQuery',
      'Sass/Less',
    ],
    tools: [
      'Unix',
      'Git',
      'Webpack',
      'Gulp/Grunt',
      'Docker',
      'Google Cloud',
      'AWS',
    ],
    interests: [
      'I <b>learn</b> about web technologies',
      'I <b>love</b> snow, mtb and team players.',
    ],
    links: [
      {
        name: 'Email',
        faClass: 'fa fa-envelope',
        display: 'craigpestell@gmail.com',
        link: 'mailto:craigpestell@gmail.com',
      },
      {
        name: 'GitHub',
        faClass: 'fa fa-github',
        display: 'github.com/craigpestell',
        link: 'https://github.com/craigpestell',
      },
      /*{
        name: 'Twitter',
        faClass: 'fa fa-twitter',
        display: 'twitter.com/c8hoang',
        link: 'https://twitter.com/c8hoang',
      },*/
    ],
  },
  footerLinks: [
    {
      name: 'Website',
      faClass: 'fa fa-fire',
      display: 'http://craigpestell.com',
      link: 'http://craigpestell.com',
    },
    /*{
      name: 'Blog',
      faClass: 'fa fa-book',
      display: 'blog.clementhoang.net',
      link: 'http://blog.clementhoang.net',
    },*/
    {
      name: 'Linkedin',
      faClass: 'fa fa-linkedin',
      display: 'linkedin.com/in/craigpestell',
      link: 'https://www.linkedin.com/in/craigpestell',
    },
  ],
  main: {
    firstName: 'Craig',
    lastName: 'Pestell',
    program: {
      term: '',
      nickname: 'Software Engineer',
      name: 'Software Engineer',
    },
    website: {
      name: 'http://craigpestell.com',
      link: 'http://craigpestell.com',
    },
    companies: [
      {
        name: 'Macys.com',
        title: 'Senior UI Developer',
        color: 'rgb(77, 100, 141)',
        date: 'Feb 2015 - Mar 2020',
        location: 'San Francisco, US',
        achievements: [
          'Designed an efficient, scalable architecture (micro front-end) for the next iteration of Macys.com, utilizing a Java-based REST micro-services back-end, Node.js with Express.js proxy and security layer, and componentized UI architecture using SASS/CSS, Webpack, npm, and a mix of front-end frameworks including React.js, Vue.js, Redux, Foundation, and npm.',

          'Built tools with Node.js to assist developers to setup environments, modify features and build components.',
          
          'Replace Coremetrics with Adobe Analytics data layer implemented via Tealium tagging throughout all web projects at Macys.',
          
          'Optimize tablet and mobile websites built on Backbone/Marionette, Handlebars, jQuery and Foundation.',
        ],
      },
      {
        name: 'Kali Protectives',
        title: 'Full Stack Developer',
        color: 'rgb(77, 100, 141)',
        date: 'Jun 2016 - Oct 2019',
        location: 'Morgan Hill, US / Remote',
        achievements: [
          'Designed, developed and deployed a complete website rewrite, including product catalog and custom blog platform.',
          
          'Improved website performance, decreasing website load times to ~ 1 second per page.',
        ],
      },
      {
        name: 'Race Face Performance Products',
        title: 'Full Stack Developer',
        color: 'rgb(77, 100, 141)',
        date: 'Sept 2008 - Mar 2016',
        location: 'Vancouver Canada / Remote',
        achievements: [
          'Designed, developed and deployed a complete website rewrite, including product catalog and custom blog platform.',
          
          'Improved website performance, decreasing website load times to ~ 1 second per page.',
        ],
      },
      {
        name: 'Google',
        title: 'Software Engineer',
        color: 'rgb(77, 100, 141)',
        date: 'Jan 2012 - May 2014',
        location: 'Mountain View, US',
        achievements: [
          'Assisted in creating a new iteration of Google\'s internal ticketing system, GUTS (Google Unified Ticketing System)',
          
          'Worked with multiple teams to define requirements, design and develop ticket interfaces to improve workflows across a myriad of departments within Google.',
        ],
      },
      {
        name: 'TIC Travel Insurance / The Cooperators',
        title: 'Full Stack Developer',
        color: 'rgb(77, 100, 141)',
        date: '2006 - 2013',
        location: 'Vancouver, Canada',
        achievements: [
          'As the sole web developer for TIC\'s westcoast operations, I maintained several intranet applications and public-facing websites.',

          'Designed and developed multiple online insurance claim forms, allowing TIC\'s customers to file claims online for the first time.',

          'Developed an integration solution allowing TIC\'s affiliates to offer TIC\'s products via third-party websites',
        ],
      },
    ],
    projects: [
    /*  {
        name: 'Zoo House',
        tools: [],
        achievements: [
          'Helped clients build fully fledged products such as <b><a href="https://www.coastlinemarket.com/">Coastline Market</a></b>, e-commerce and inventory management for fishing',
          'Worked with a small team to build and maintain <b><a href="https://luql.io/">Luql</a></b>, a platform for local tour guides',
        ],
      },
      {
        name: 'Various Hacks',
        tools: [],
        achievements: [
          '<b><a href="http://www.hackathon.io/pokidex">Pokidex</a></b> - mobile app where users can easily view important insurance data (Winner at AngelHack Silicon Valley 2016)',
          '<b><a href="http://devpost.com/software/query-sctlva">Query</a></b> - pebble and web app that provide a real-time collaborative classroom layer on top of a lecture (Winner at HackingEDU 2015)',
          '<b><a href="https://devpost.com/software/amusement-um9im">Amusement</a></b> - app that keeps your analyzes your mental state while driving and keeps it healthy via controlling your music playlist (Winner at HackWestern 2015)',
          '<b><a href="https://twitter.com/SpaceAppsTO/status/587444439276191744">LookUp</a></b> - iOS and pebble app that displays live feed of transient space events (Winner at NASA Space Apps Toronto 2015)',
        ],
      },*/
    ],
  },
};

export default Resume;
