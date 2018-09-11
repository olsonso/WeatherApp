import { injectGlobal } from 'styled-components';
import media from "styled-media-query";

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Monoton');
  @import url('https://fonts.googleapis.com/css?family=Poiret+One');
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');


  body {
    padding: 0;
    margin: 0;
    font-family: 'Poiret One', cursive;
  }

  h1 {
      font-family: 'Monoton', cursive;
      font-size:3rem;
      color:black;
      letter-spacing: .5rem;
      margin:0px;

      ${media.lessThan("medium")`
        /* screen width is less than 768px (medium) */
          font-size:2rem;
      `}
  }

  h2 {
    font-family: 'Permanent Marker', cursive;
    font-size: 16px;
  }

  h3 {
    font-family: 'Permanent Marker', cursive;
    margin:0px;
    padding-bottom:2px;
  }
`
