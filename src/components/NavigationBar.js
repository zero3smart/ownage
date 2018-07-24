import React from 'react';
import PropTypes from 'prop-types';
import '../assets/stylesheets/components/NavigationBar.scss';
import headerLogo from '../assets/images/header_logo.png';
import headerLogoDesc from '../assets/images/header_logo_desc.png';
import headerApple from '../assets/images/header_apple.png';
import headerPlay from '../assets/images/header_play.png';
import headerCart from '../assets/images/header_cart.png';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Badge
} from 'reactstrap';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            cartCount: 4
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const title = (
            <div className='title'>
                <img src={headerCart} alt='Header Cart' width='15' />Cart
                <Badge color='warning' className='cart-badge'>{this.state.cartCount}</Badge>
            </div>
        );

        return (
            <div>
                <Navbar light expand='lg' id='nav1'>
                    <NavbarBrand href='/'>
                        <h1>
                            <img src={headerLogo} alt='Header Logo' />
                            <img src={headerLogoDesc} alt='Header Logo Desc' />
                        </h1>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink href='/'>
                                    <img src={headerApple} alt='Header Apple' />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/'>
                                    <img src={headerPlay} alt='Header Play' />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <div className='vertical-separator' />
                            </NavItem>
                            <NavItem>
                                <NavLink href='/' className='header-anchor'>
                                    Log In
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <div className='vertical-separator' />
                            </NavItem>
                            <NavItem>
                                <NavLink href='/' className='header-anchor'>
                                    Sign Up
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar id='basic-nav-dropdown'>
                                <DropdownToggle nav caret>
                                    {title}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Navbar light expand='lg' id='nav2'>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href='/prank-all-videos'>
                                    <span>PRANK CALL VIDEOS</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/request-prank'>
                                    <span>REQUEST A PRANK</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/apps'>
                                    <span>APPS</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/store'>
                                    <span>STORE</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/blog'>
                                    <span>BLOG</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <div className='ml-auto'>
                            <div className='has-search'>
                                <Input type='email' name='email' id='search' placeholder='Search' />
                                <span className='fa fa-search form-control-feedback' />
                            </div>
                        </div>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
