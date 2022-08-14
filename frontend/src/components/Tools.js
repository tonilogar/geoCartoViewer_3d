import React from 'react';
import '../css/Tools.css'

function Tools() {
  return (
    <section className="tools">
      <svg className="tools--MenuOpen" viewBox="0 0 92.833 92.833">
        <g
          fill="#030000"
          stroke="#000"
          strokeDashoffset="300.69"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="0.9"
          strokeWidth="7.383"
          paintOrder="markers fill stroke">
          <path d="M11.85 45.884H82.095V45.911H11.85z"></path>
          <path d="M11.9 18.461H82.14500000000001V18.488H11.9z"></path>
          <path d="M12.058 73.691H82.303V73.718H12.058z"></path>
        </g>
      </svg>
      <svg className="tools--MenuClose" viewBox="0 0 92.833 92.833">
        <path
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeLinecap="round"
          strokeWidth="10.338"
          d="M14.451 14.313l63.763 64.176">
        </path>
        <path
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10.32"
          d="M78.236 14.398L14.53 78.461">
        </path>
      </svg>
      <abbr title="Select project">
        <svg className="tools--Projects" viewBox="0 0 650 650">
          <g fill="#010002">
            <path
              d="M289.44 79.226L153.66 18.679a12.68 12.68 0 00-10.356 0L7.524 79.226a12.716 12.716 0 00-.81 22.822l135.78 72.405a12.624 12.624 0 005.983 1.496c2.061 0 4.112-.495 5.994-1.496l135.78-72.405c4.281-2.284 6.886-6.81 6.712-11.661s-3.095-9.186-7.522-11.161zm-140.96 69.61L41.63 91.856 148.48 44.21l106.86 47.646z"
              transform="matrix(1.8871 0 0 2.06 47.852 24.525)">
            </path>
            <path
              d="M278.28 133.4l-129.79 69.228L18.7 133.4c-6.217-3.318-13.908-.968-17.198 5.232-3.302 6.201-.968 13.897 5.227 17.198l135.78 72.421a12.729 12.729 0 0011.977 0l135.78-72.421c6.195-3.301 8.528-10.998 5.227-17.198s-10.998-8.544-17.204-5.232z"
              transform="matrix(1.8871 0 0 2.06 47.852 24.525)">
            </path>
            <path
              d="M278.28 183.06l-129.79 69.218L18.7 183.06c-6.217-3.318-13.908-.957-17.198 5.232-3.302 6.201-.968 13.897 5.227 17.198l135.78 72.416a12.729 12.729 0 0011.977 0l135.78-72.416c6.195-3.301 8.528-10.998 5.227-17.198-3.307-6.19-10.987-8.55-17.204-5.232z"
              transform="matrix(1.8871 0 0 2.06 47.852 24.525)">
            </path>
          </g>
        </svg>
      </abbr>
    </section>
    )
  }

export { Tools };
