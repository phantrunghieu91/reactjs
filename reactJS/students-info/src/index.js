import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
];

const headers = [];
for(let key in students[0]) {
  headers.push(key);
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <table>
    <thead>
      <tr>
        {
          headers.map(header => {
            return <th style={
              {
                textTransform: 'capitalize'
              }
            }>{header}</th>
          })
        }
      </tr>
    </thead>
    <tbody>
      {
        students.map(student => {
          return (
            <tr>
              <td>{student.company}</td>
              <td>{student.contact}</td>
              <td>{student.country}</td>
            </tr>
          );
        })
      }
    </tbody>
  </table>
)
