import React, { Component } from 'react'
import Unanswered from './unanswered'
import Answered from './answered'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Home extends Component{
  render(){
    return (
      <Tabs>
        <TabList>
          <Tab>Unanswered Question</Tab>
          <Tab>Answered Question</Tab>
        </TabList>

        <TabPanel>
          <Unanswered/>
        </TabPanel>
        <TabPanel>
          <Answered/>
        </TabPanel>
      </Tabs>

    )
  }
}

export default Home
