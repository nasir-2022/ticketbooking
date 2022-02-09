'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ticketbooking documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-95964dba9dd4b69bd3943307f4cd24a6e716c99f76a5103c665149530ac3776184f836df0ceae4db19f8080f05aebfe1df5d8d82b2083c2b746884de2a3b66f9"' : 'data-target="#xs-controllers-links-module-AppModule-95964dba9dd4b69bd3943307f4cd24a6e716c99f76a5103c665149530ac3776184f836df0ceae4db19f8080f05aebfe1df5d8d82b2083c2b746884de2a3b66f9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-95964dba9dd4b69bd3943307f4cd24a6e716c99f76a5103c665149530ac3776184f836df0ceae4db19f8080f05aebfe1df5d8d82b2083c2b746884de2a3b66f9"' :
                                            'id="xs-controllers-links-module-AppModule-95964dba9dd4b69bd3943307f4cd24a6e716c99f76a5103c665149530ac3776184f836df0ceae4db19f8080f05aebfe1df5d8d82b2083c2b746884de2a3b66f9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-95964dba9dd4b69bd3943307f4cd24a6e716c99f76a5103c665149530ac3776184f836df0ceae4db19f8080f05aebfe1df5d8d82b2083c2b746884de2a3b66f9"' : 'data-target="#xs-injectables-links-module-AppModule-95964dba9dd4b69bd3943307f4cd24a6e716c99f76a5103c665149530ac3776184f836df0ceae4db19f8080f05aebfe1df5d8d82b2083c2b746884de2a3b66f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-95964dba9dd4b69bd3943307f4cd24a6e716c99f76a5103c665149530ac3776184f836df0ceae4db19f8080f05aebfe1df5d8d82b2083c2b746884de2a3b66f9"' :
                                        'id="xs-injectables-links-module-AppModule-95964dba9dd4b69bd3943307f4cd24a6e716c99f76a5103c665149530ac3776184f836df0ceae4db19f8080f05aebfe1df5d8d82b2083c2b746884de2a3b66f9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TicketModule.html" data-type="entity-link" >TicketModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TicketModule-7caa9ba3a7a859bbd0e53252525211675fe380e53cac00f309a3dc18269f339e82b0f7b00c1af9fbf32cce9bd232393f4cf939f024ee3bbf109bbf6b34367acd"' : 'data-target="#xs-controllers-links-module-TicketModule-7caa9ba3a7a859bbd0e53252525211675fe380e53cac00f309a3dc18269f339e82b0f7b00c1af9fbf32cce9bd232393f4cf939f024ee3bbf109bbf6b34367acd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TicketModule-7caa9ba3a7a859bbd0e53252525211675fe380e53cac00f309a3dc18269f339e82b0f7b00c1af9fbf32cce9bd232393f4cf939f024ee3bbf109bbf6b34367acd"' :
                                            'id="xs-controllers-links-module-TicketModule-7caa9ba3a7a859bbd0e53252525211675fe380e53cac00f309a3dc18269f339e82b0f7b00c1af9fbf32cce9bd232393f4cf939f024ee3bbf109bbf6b34367acd"' }>
                                            <li class="link">
                                                <a href="controllers/TicketController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TicketModule-7caa9ba3a7a859bbd0e53252525211675fe380e53cac00f309a3dc18269f339e82b0f7b00c1af9fbf32cce9bd232393f4cf939f024ee3bbf109bbf6b34367acd"' : 'data-target="#xs-injectables-links-module-TicketModule-7caa9ba3a7a859bbd0e53252525211675fe380e53cac00f309a3dc18269f339e82b0f7b00c1af9fbf32cce9bd232393f4cf939f024ee3bbf109bbf6b34367acd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TicketModule-7caa9ba3a7a859bbd0e53252525211675fe380e53cac00f309a3dc18269f339e82b0f7b00c1af9fbf32cce9bd232393f4cf939f024ee3bbf109bbf6b34367acd"' :
                                        'id="xs-injectables-links-module-TicketModule-7caa9ba3a7a859bbd0e53252525211675fe380e53cac00f309a3dc18269f339e82b0f7b00c1af9fbf32cce9bd232393f4cf939f024ee3bbf109bbf6b34367acd"' }>
                                        <li class="link">
                                            <a href="injectables/TicketService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-22c616db5a6190b1ff6d0144eaf1805e5ad40b934e1dc4d2c12d58594e9fc7c2430c8326a6a8b6479b0957a4cf4ea62e30636b7d931882fc8bf94ebc8baada4e"' : 'data-target="#xs-controllers-links-module-UserModule-22c616db5a6190b1ff6d0144eaf1805e5ad40b934e1dc4d2c12d58594e9fc7c2430c8326a6a8b6479b0957a4cf4ea62e30636b7d931882fc8bf94ebc8baada4e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-22c616db5a6190b1ff6d0144eaf1805e5ad40b934e1dc4d2c12d58594e9fc7c2430c8326a6a8b6479b0957a4cf4ea62e30636b7d931882fc8bf94ebc8baada4e"' :
                                            'id="xs-controllers-links-module-UserModule-22c616db5a6190b1ff6d0144eaf1805e5ad40b934e1dc4d2c12d58594e9fc7c2430c8326a6a8b6479b0957a4cf4ea62e30636b7d931882fc8bf94ebc8baada4e"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-22c616db5a6190b1ff6d0144eaf1805e5ad40b934e1dc4d2c12d58594e9fc7c2430c8326a6a8b6479b0957a4cf4ea62e30636b7d931882fc8bf94ebc8baada4e"' : 'data-target="#xs-injectables-links-module-UserModule-22c616db5a6190b1ff6d0144eaf1805e5ad40b934e1dc4d2c12d58594e9fc7c2430c8326a6a8b6479b0957a4cf4ea62e30636b7d931882fc8bf94ebc8baada4e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-22c616db5a6190b1ff6d0144eaf1805e5ad40b934e1dc4d2c12d58594e9fc7c2430c8326a6a8b6479b0957a4cf4ea62e30636b7d931882fc8bf94ebc8baada4e"' :
                                        'id="xs-injectables-links-module-UserModule-22c616db5a6190b1ff6d0144eaf1805e5ad40b934e1dc4d2c12d58594e9fc7c2430c8326a6a8b6479b0957a4cf4ea62e30636b7d931882fc8bf94ebc8baada4e"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TicketController.html" data-type="entity-link" >TicketController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/TicketBooking.html" data-type="entity-link" >TicketBooking</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CustomException.html" data-type="entity-link" >CustomException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExceptionExceptionFilter.html" data-type="entity-link" >ExceptionExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketDto.html" data-type="entity-link" >TicketDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TicketRepository.html" data-type="entity-link" >TicketRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TicketService.html" data-type="entity-link" >TicketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidationPipeOptions.html" data-type="entity-link" >ValidationPipeOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});