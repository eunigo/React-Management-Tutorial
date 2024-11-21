import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
});

const customers = [{
  'id':0,
  'image':'https://randomuser.me/api/portraits/men/1.jpg',

  'name':'나공주',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
  
},
{
  'id':1,
  'image':'https://randomuser.me/api/portraits/men/2.jpg',

  'name':'홍길동',
  'birthday':'880316',
  'gender':'남자',
  'job':'교수'
  
},
{
  'id':2,
  'image':'https://randomuser.me/api/portraits/women/1.jpg',

  'name':'이순신',
  'birthday':'800104',
  'gender':'여자',
  'job':'요리사'
  
}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>

        {
          customers.map(c => {
            return (
            <Customer
            key={c.id}
            id={c.id}
            name={c.name}
            image={c.image}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
            );
          })
        }
           </TableBody>


        </Table>
       
       </Paper>
    );
  }
}

export default withStyles(styles)(App);  
