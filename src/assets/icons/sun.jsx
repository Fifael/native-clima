import React from 'react';

const Sun = ({ size = 300 }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={size}
            height={size}
            viewBox="0 0 64 64"
        >
            <defs>
                <filter id="blur" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.05" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">{`
                      /*
                      ** SUN
                      */
                      @keyframes am-weather-sun {
                        0% {
                          -webkit-transform: rotate(0deg);
                             -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                                  transform: rotate(0deg);
                        }
                      
                        100% {
                          -webkit-transform: rotate(360deg);
                             -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                                  transform: rotate(360deg);
                        }
                      }
                      
                      .am-weather-sun {
                        -webkit-animation-name: am-weather-sun;
                           -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                                animation-name: am-weather-sun;
                        -webkit-animation-duration: 9s;
                           -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                                animation-duration: 9s;
                        -webkit-animation-timing-function: linear;
                           -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                                animation-timing-function: linear;
                        -webkit-animation-iteration-count: infinite;
                           -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                                animation-iteration-count: infinite;
                      }
                      
                      @keyframes am-weather-sun-shiny {
                        0% {
                          stroke-dasharray: 3px 10px;
                          stroke-dashoffset: 0px;
                        }
                      
                        50% {
                          stroke-dasharray: 0.1px 10px;
                          stroke-dashoffset: -1px;
                        }
                      
                        100% {
                          stroke-dasharray: 3px 10px;
                          stroke-dashoffset: 0px;
                        }
                      }
                      
                      .am-weather-sun-shiny line {
                        -webkit-animation-name: am-weather-sun-shiny;
                           -moz-animation-name: am-weather-sun-shiny;
                            -ms-animation-name: am-weather-sun-shiny;
                                animation-name: am-weather-sun-shiny;
                        -webkit-animation-duration: 2s;
                           -moz-animation-duration: 2s;
                            -ms-animation-duration: 2s;
                                animation-duration: 2s;
                        -webkit-animation-timing-function: linear;
                           -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                                animation-timing-function: linear;
                        -webkit-animation-iteration-count: infinite;
                           -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                                animation-iteration-count: infinite;
                      }
                `}</style>
            </defs>
            <g filter="url(#blur)" id="day">
                <g transform="translate(32,32)">
                    <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                        <g>
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                </g>
            </g>
        </svg>
    );
};

export default Sun;
