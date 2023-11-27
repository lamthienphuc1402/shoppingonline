import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };

  }
  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <Nav.Link key={item._id}><Link className='link' to={'/product/category/' + item._id}>{item.name}</Link></Nav.Link>
      );
    });   
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavbarBrand><Link className='brand' to='/'>Kiki Shopping</Link></NavbarBrand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 justify-content-center"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link><Link className='link' to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link className='link' to='/gmap'>Where's Kiki</Link></Nav.Link>

              {cates}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }}
              />
              <Button variant="outline-success" onClick={(e) => this.btnSearchClick(e)}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    this.props.navigate('/product/search/' + this.state.txtKeyword);
    
  }

  
}
export default withRouter(Menu);