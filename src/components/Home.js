import React, { Component } from 'react'
import ReactWizard from "react-bootstrap-wizard";
import { Form, Container, Row, Col } from "react-bootstrap";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //this is given column order for table
      orderOfcolumns: ["Effective Date",
        "Account Description",
        "Account ID",
        "Transaction ID",
        "Amount",
        "Balance",
        "Debit",
        "Credit",
        "Memo",
        "Job Number",
        "Entities",
        "MapNo",
        "Leadsheet",
        "L/S Subtotal",
        "Class"],
      //all columns avaliables
      columns: ["Effective Date",
        "Transaction ID",
        "Memo",
        "Job Number",
        "Amount",
        "Balance",
        "Debit",
        "Credit",
        "Account Description",
        "Account ID",
        "Entities",
        "MapNo",
        "Leadsheet",
        "L/S Subtotal",
        "Class"],
      //colums selected by user
      selectedColumns: [
        "Transaction ID",
        "Effective Date",
        "Memo",
        "Amount",
        "Job Number",
        "Account Description",
        "Account ID",
        "Entities",
        "MapNo",
      ],
      //table data
      data: [
        {
          "Effective Date": "4/1/2019",
          "Transaction ID": "GJ2169",
          "Memo": "BD DEBIT MEMO - APR 1, 2019 - GARDAWORLD",
          "Job Number": 0,
          "Amount": 25000,
          "Balance": "",
          "Debit": 39715.9,
          "Credit": 147299,
          "Account Description": "Cash on Hand",
          "Account ID": 1010,
          "Entities": "",
          "MapNo": 1101.001,
          "Leadsheet": "A",
          "L/S Subtotal": "",
          "Class": "Assets - Current - Other Quick"
        },
        {
          "Effective Date": "4/2/2019",
          "Transaction ID": "GJ2171",
          "Memo": "BD CASH",
          "Job Number": 0,
          "Amount": "",
          "Balance": 9268.9,
          "Debit": 30447,
          "Credit": 148010,
          "Account Description": "Cash on Hand",
          "Account ID": 1010,
          "Entities": "",
          "MapNo": 1101.001,
          "Leadsheet": "A",
          "L/S Subtotal": "",
          "Class": "Assets - Current - Other Quick"
        },
        {
          "Effective Date": "4/3/2019",
          "Transaction ID": "GJ2172",
          "Memo": "BD CASH",
          "Job Number": 0,
          "Amount": "",
          "Balance": 7264.9,
          "Debit": 23182.1,
          "Credit": 148018,
          "Account Description": "Cash on Hand",
          "Account ID": 1010,
          "Entities": "",
          "MapNo": 1101.001,
          "Leadsheet": "A",
          "L/S Subtotal": "",
          "Class": "Assets - Current - Other Quick"
        }
      ]
    }

   
  }
 
  isDefaultChecked=(column)=>{
    return this.state.selectedColumns.some(x=>x==column);    
  }

  getOrderedCloumns=(selectedColumns,columns,orderOfcolumns)=>{
    let orderedColumns=[];
    let unorderedColumns=[];
    orderOfcolumns.forEach(o => {
         const exists=selectedColumns.some(x=>x==o);
         if(exists) {
         orderedColumns.push(o)
        }
       
         
    });
    //merge at end if order is not given
    return orderedColumns

    //merge remaincoums with ordered coumns
  }


  render() {
    const { columns, orderOfcolumns, selectedColumns,data } = this.state
    return (
      <>
        <Row>
          {
            columns.map((coulmn, i) => {
              return (
                <Col xs={3}>
                  <Form.Check
                  
                    key={i}
                    custom
                    inline
                    label={coulmn}
                    defaultChecked={this.isDefaultChecked(coulmn)}
                    type={'checkbox'}
                    id={i}
                  />

                </Col>

              )
            })
          }
        </Row>
        <Row>
          <p></p><p></p>
        <BootstrapTable data={data} striped hover>
          {
            this.getOrderedCloumns(selectedColumns,columns,orderOfcolumns).map((column,i)=>{
             
              return <TableHeaderColumn isKey={i==0}  key={i} dataField={column}>{column}</TableHeaderColumn>

            })
          }
      
  </BootstrapTable>
        </Row>
      </>
    );
  }
}



