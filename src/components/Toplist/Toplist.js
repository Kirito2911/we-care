import './Toplist.css';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


export function Toplist(props){
    const [open, setOpen] = React.useState([false, false, false]);

    const handleClick = (x) => {
      var aux = open;
      aux[x] = !aux[x];
      aux.map((value, index) => {if(index != x) aux[index] = false})
      setOpen([... aux]);
    };
  
    return(
        <div className="toplist">
            <div className="description">
                <div className="titleToplist">{props.title}</div>
                <div className="text">{props.textTop}</div>
            </div>
            <div className="picture" style={{backgroundImage: "url("+props.data.img+")", backgroundSize: "cover"}}>
            </div>
            <div className="topics">
                <div className="titleTopics">Destaques do programa</div>
                <div className="list">
                  <List
                  sx={{ width: '100%', bgcolor: '#e4e4fe'}}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    </ListSubheader>
                  }
                >
                  <ListItemButton className='bottomBorder' onClick={() => {handleClick(0)}}>
                    <ListItemText primary="Por que existimos?" />
                    {open[0] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open[0]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={props.data.subtopic} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton className='bottomBorder' onClick={() => {handleClick(1)}}>
                    <ListItemText primary="Quem somos?" />
                    {open[1] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open[1]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={props.data.subtopic2} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton className = 'bottomBorder' onClick={() => {handleClick(2)}}>
                    
                    <ListItemText primary="Junte-se ao programa" />
                    {open[2] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in = {open[2]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={props.data.subtopic3} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
                </div>
            </div>
        </div>
    )
}