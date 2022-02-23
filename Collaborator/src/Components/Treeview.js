import React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Team from './Team';
import TeamGBC from './TeamGBC';
import Games from './Games';
import Trainings from './Trainings';
export default function Treeview() {
  const data= {
    id: "company",
    name: "Shareworks by Morgan Stanley",
    children: [
      {
        id: "locations",
        name: "Locations",
        children: [
          {
            id: "location1",
            name: "Calgary",
            children: [
              {
                id: "team1_1",
                name: "Lets Get Fiscal",
                children: []
              },
              {
                id: "team1_2",
                name: "JollyCo",
                children: []
              },
              {
                id: "team1_3",
                name: "Gainz Bond Crew",
                children: []
              },
              {
                id: "team1_4",
                name: "Foodies",
                children: []
              }
            ]
          },
          {
            id: "location2",
            name: "Montreal",
            children: [
              {
                id: "team2_1",
                name: "Tiger Squad",
                children: []
              },
              {
                id: "team2_2",
                name: "TRex Squad",
                children: []
              }
            ]
          },
          {
            id: "location3",
            name: "Utah",
            children: [
              {
                id: "team3_1",
                name: "Saving Private Markets",
                children: []
              },
              {
                id: "team3_2",
                name: "Global Warming",
                children: []
              },
              {
                id: "team3_3",
                name: "Ram Chargers",
                children: []
              }
            ]
          }
        ]
      },
      {
        id: "it",
        name: "IT",
        children: [
          {
            id: "4",
            name: "My open tickets",
            children: [
              {
                id: "it1",
                name: "Password Expired"
              },
              {
                id: "it2",
                name: "New Screen needed"
              }
            ]
          }
        ]
      },
      {
        id: "games",
        name: "Games",
        children: [
          {
            id: "games1",
            name: "Bingo"
          },
          {
            id: "games2",
            name: "Pictionary"
          }
        ]
      }
    ]
  };
const renderTree = (nodes) => (
  <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => renderTree(node))
      : null}
  </TreeItem>
);
  return(
  
    <div style={{ display: 'flex', padding: 30 }}>
      
    <TreeView
     style={{
       backgroundColor: '#e5e5e5',
       width: 400,
       height: window.innerHeight,
     }}
   aria-label="rich object"
   defaultCollapseIcon={<ExpandMoreIcon />}
   defaultExpanded={["company","locations","it","games","location1","location2","location3",]}
   defaultExpandIcon={<ChevronRightIcon />}
   sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
 >
   {renderTree(data)}

   </TreeView>
   <div  style={{
      
      width: window.innerWidth * 0.005,
     
     }} > </div>
   <div  style={{ display: 'flex' }}>
  <div  style={{
      
       width: window.innerWidth * 0.35,
     }}> <Team/><br/><TeamGBC/></div>
      <div  style={{
      
      width: window.innerWidth * 0.35,
     
     
     }} > </div>
     <div > <Trainings/> </div>
     <br/><br/>
  <div > <Games/> </div>
</div>
  
 </div>
 );
}