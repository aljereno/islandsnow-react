import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Menu,
  Dropdown,
  Icon,
  Grid,
  List,
  DropdownItem,
  Image,
  Button,
  Form,
  Divider
} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Container>
          <img className="ui centered image"
               src="//cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749" alt="Logo"/>
        </Container>
    )
  }
}

class MiddleMenu extends React.Component {

  render() {
    return (
        <Menu className="midmenu" borderless >
          <Grid container columns centered>
            <Dropdown item text='MEN'>
              <Dropdown.Menu>
                <DropdownItem>Tank Tops</DropdownItem>
                <DropdownItem>Long Sleeve Shirts</DropdownItem>
                <DropdownItem>Aloha Shirts</DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='WOMEN'>
              <Dropdown.Menu>
                <DropdownItem>Tank Tops</DropdownItem>
                <DropdownItem>Long Sleeve Shirts</DropdownItem>
                <DropdownItem>Hats</DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='KIDS'>
              <Dropdown.Menu>
                <DropdownItem>Shirts</DropdownItem>
                <DropdownItem>Onesies</DropdownItem>
                <DropdownItem>Sweatshirts</DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='BRANDS'>
              <Dropdown.Menu>
                <DropdownItem>Aloha Surf Project</DropdownItem>
                <DropdownItem>Amuse Society</DropdownItem>
                <DropdownItem>Farmers Market Hawaii</DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALE</Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid
               src="//cdn.shopify.com/s/files/1/1035/5187/files/AH7I2380_1024x.jpg?v=1548389088"
               alt="Full Width"/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Grid columns='equal' className='footer-background'>
          <Grid.Column>
            NAVIGATION
            <Divider />
            <List>
              <List.Item>About us</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Store Locations</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            MAIN MENU
            <Divider/>
            <List>
              <List.Item>MEN</List.Item>
              <List.Item>WOMEN</List.Item>
              <List.Item>KIDS</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            CONNECT
            <Divider />
            <List>
              <List.Item>Sign up for the latest updates</List.Item>
            </List>
            <Form>
              <Form.Input placeholder="Enter Email Address"/>

              <Button type="submit">Submit</Button>
            </Form>

          </Grid.Column>
        </Grid>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
