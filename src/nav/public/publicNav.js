import React, {Component} from 'react';


class PublicNav extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <a href="/" class="navbar-brand">Ema</a>
                        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse" id="navbar-main">
                        <ul class="nav navbar-nav">

                            <li class="dropdown">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="themes">Environments<span class="caret"></span></a>
                                <ul class="dropdown-menu" aria-labelledby="themes">
                                    <li><a href="#" >View Environment</a></li>
                                    <li><a href="#">Create Environment</a></li>
                                    <li><a href="#">Manage Environments</a></li>
                                    <li><a href="#">Consumer Properties</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Configuration</a></li>
                                    <li><a href="#">Update Configuration</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Performance <span class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Performance</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Admin<span class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Manage Environments</a></li>
                                    <li><a href="#">Add Environment</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Manage Users</a></li>
                                    <li><a href="#">Add User Profile</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Manage Groups</a></li>
                                    <li><a href="#">Add Group</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Manage Roles</a></li>
                                    <li><a href="#">Add Role</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        );
    }
}

export default PublicNav;