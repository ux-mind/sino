import { css } from "frontity";
import { font } from "./functions";

import Ubuntu_Light_woff2 from "../../assets/fonts/Ubuntu-Light.woff2";
import Ubuntu_Light_woff from "../../assets/fonts/Ubuntu-Light.woff";
import Ubuntu_Regular_woff2 from "../../assets/fonts/Ubuntu-Regular.woff2";
import Ubuntu_Regular_woff from "../../assets/fonts/Ubuntu-Regular.woff";
import Ubuntu_Medium_woff2 from "../../assets/fonts/Ubuntu-Medium.woff2";
import Ubuntu_Medium_woff from "../../assets/fonts/Ubuntu-Medium.woff";
import Ubuntu_Bold_woff2 from "../../assets/fonts/Ubuntu-Bold.woff2";
import Ubuntu_Bold_woff from "../../assets/fonts/Ubuntu-Bold.woff";
import Barlow_woff2 from "../../assets/fonts/Barlow-Medium.woff2";
import Barlow_woff from "../../assets/fonts/Barlow-Medium.woff";

export const globalstyles = css`
  :root {
    /* Vars */
    --font: "Ubuntu", Arial, sans-serif;
    --logo-font: "Barlow", Arial, sans-serif;

    /* Colors */
    --white: #fdfdfd;
    --black: #1e1e1e;

    --gray-menu: #394c62;
    --gray-900: #9f9f9f;

    --error: #eb5757;
    --success: #6fcf97;
    --lightblue-250: #4fd1f9;
    --lightblue-300: #2db9e4;
    --blue-600: #4279b8;

    --container-padding-xl: calc((100vw - 1372px) / 2);
    --container-padding-lg: calc((100vw - 950px) / 2);
    --container-padding-md: calc((100vw - 730px) / 2);
    --container-padding-xs: calc((100vw - 528px) / 2);
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Light_woff2}") format("woff2"),
      url("${Ubuntu_Light_woff}") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Regular_woff2}") format("woff2"),
      url("${Ubuntu_Regular_woff}") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Medium_woff2}") format("woff2"),
      url("${Ubuntu_Medium_woff}") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Ubuntu";
    src: url("${Ubuntu_Bold_woff2}") format("woff2"),
      url("${Ubuntu_Bold_woff}") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Barlow";
    src: url("${Barlow_woff2}") format("woff2"),
      url("${Barlow_woff}") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    &.scroll-hidden body {
      overflow: hidden;
    }
  }
  body {
    overflow: overlay;
    margin: 0;
    font-family: var(--font);
    background: var(--white);
  }
  a {
    text-decoration: none;
    color: var(--black);
  }

  /* Datepicker styles */
  div.air-datepicker {
    background: var(--white);
    z-index: 2;
    width: 100vw;
    height: 100vh;
    max-width: 325px;
    max-height: 320px;
    box-sizing: border-box;
    padding: 12px 28px;
    box-shadow: 0px 0px 8px rgba(49, 49, 49, 0.05);
    border-radius: 8px;
    border: none;
    .air-datepicker-nav {
      padding: 4px 0 10px;
    }
    & .air-datepicker--pointer {
      display: none;
    }
    &-nav--title,
    &-nav--title i {
      ${font(14, 16)};
      font-weight: 500;
      letter-spacing: 0.01em;
      color: var(--black);
    }
    &-nav--action[data-action="prev"] {
      transform: translateX(-6px);
    }
    &-nav--action[data-action="next"] {
      transform: translateX(6px);
    }
    &--content {
      padding: 0;
      padding-top: 20px;
    }
    &-body--day-names {
      margin: 0;
      margin-bottom: 20px;
      grid-template-columns: repeat(7, 32px);
      grid-column-gap: 8px;
    }
    &-body--day-name {
      color: var(--gray-900);
      ${font(10, 11)};
      font-weight: 500;
      letter-spacing: -0.01em;
    }
    &-body--cells {
      grid-row-gap: 16px;
      grid-column-gap: 18px;
      grid-template-rows: repeat(5, 24px);
      grid-template-columns: repeat(7, 24px);
    }
    &-cell,
    &-cell.-current- {
      color: var(--black);
      font-weight: 500;
      ${font(14, 16)};
    }
    &-cell.-selected-,
    &-cell.-selected-.-focus- {
      border-radius: 50%;
      background: var(--blue-600);
    }
    @media screen and (max-width: 373px) {
      div.air-datepicker {
        max-width: calc(100vw - 48px);
      }
    }
  }
  :root {
    --wp-admin-theme-color: #007cba;
    --wp-admin-theme-color-darker-10: #006ba1;
    --wp-admin-theme-color-darker-20: #005a87;
  }
  #start-resizable-editor-section {
    display: none;
  }
  .wp-block-audio figcaption {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  .wp-block-audio audio {
    width: 100%;
    min-width: 300px;
  }
  .wp-block-button__link {
    color: #fff;
    background-color: #32373c;
    border: none;
    border-radius: 1.55em;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125em;
    padding: 0.667em 1.333em;
    text-align: center;
    text-decoration: none;
    overflow-wrap: break-word;
  }
  .wp-block-button__link:active,
  .wp-block-button__link:focus,
  .wp-block-button__link:hover,
  .wp-block-button__link:visited {
    color: #fff;
  }
  .wp-block-button__link.aligncenter {
    text-align: center;
  }
  .wp-block-button__link.alignright {
    text-align: right;
  }
  .wp-block-buttons > .wp-block-button.has-custom-width {
    max-width: none;
  }
  .wp-block-buttons > .wp-block-button.has-custom-width .wp-block-button__link {
    width: 100%;
  }
  .wp-block-buttons > .wp-block-button.wp-block-button__width-25 {
    width: calc(25% - 0.5em);
  }
  .wp-block-buttons > .wp-block-button.wp-block-button__width-50 {
    width: calc(50% - 0.5em);
  }
  .wp-block-buttons > .wp-block-button.wp-block-button__width-75 {
    width: calc(75% - 0.5em);
  }
  .wp-block-buttons > .wp-block-button.wp-block-button__width-100 {
    width: calc(100% - 0.5em);
  }
  .wp-block-button.is-style-squared,
  .wp-block-button__link.wp-block-button.is-style-squared {
    border-radius: 0;
  }
  .wp-block-button.no-border-radius,
  .wp-block-button__link.no-border-radius {
    border-radius: 0 !important;
  }
  .is-style-outline > .wp-block-button__link,
  .wp-block-button__link.is-style-outline {
    border: 2px solid;
  }
  .is-style-outline > .wp-block-button__link:not(.has-text-color),
  .wp-block-button__link.is-style-outline:not(.has-text-color) {
    color: #32373c;
  }
  .is-style-outline > .wp-block-button__link:not(.has-background),
  .wp-block-button__link.is-style-outline:not(.has-background) {
    background-color: transparent;
  }
  .wp-block-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .wp-block-buttons.is-vertical {
    flex-direction: column;
  }
  .wp-block-buttons.is-vertical > .wp-block-button {
    margin-right: 0;
  }
  .wp-block-buttons.is-vertical > .wp-block-button:last-child {
    margin-bottom: 0;
  }
  .wp-block-buttons > .wp-block-button {
    display: inline-block;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }
  .wp-block-buttons > .wp-block-button:last-child {
    margin-right: 0;
  }
  .wp-block-buttons.is-content-justification-left {
    justify-content: flex-start;
  }
  .wp-block-buttons.is-content-justification-left.is-vertical {
    align-items: flex-start;
  }
  .wp-block-buttons.is-content-justification-center {
    justify-content: center;
  }
  .wp-block-buttons.is-content-justification-center.is-vertical {
    align-items: center;
  }
  .wp-block-buttons.is-content-justification-right {
    justify-content: flex-end;
  }
  .wp-block-buttons.is-content-justification-right > .wp-block-button {
    margin-left: 0.5em;
    margin-right: 0;
  }
  .wp-block-buttons.is-content-justification-right
    > .wp-block-button:first-child {
    margin-left: 0;
  }
  .wp-block-buttons.is-content-justification-right.is-vertical {
    align-items: flex-end;
  }
  .wp-block-buttons.aligncenter {
    text-align: center;
  }
  .wp-block-buttons.alignleft .wp-block-button {
    margin-left: 0;
    margin-right: 0.5em;
  }
  .wp-block-buttons.alignleft .wp-block-button:last-child {
    margin-right: 0;
  }
  .wp-block-buttons.alignright .wp-block-button {
    margin-right: 0;
    margin-left: 0.5em;
  }
  .wp-block-buttons.alignright .wp-block-button:first-child {
    margin-left: 0;
  }
  .wp-block-calendar {
    text-align: center;
  }
  .wp-block-calendar tbody td,
  .wp-block-calendar th {
    padding: 0.25em;
    border: 1px solid #ddd;
  }
  .wp-block-calendar tfoot td {
    border: none;
  }
  .wp-block-calendar table {
    width: 100%;
    border-collapse: collapse;
  }
  .wp-block-calendar table th {
    font-weight: 400;
    background: #ddd;
  }
  .wp-block-calendar a {
    text-decoration: underline;
  }
  .wp-block-calendar table caption,
  .wp-block-calendar table tbody {
    color: #40464d;
  }
  .wp-block-categories.alignleft {
    margin-right: 2em;
  }
  .wp-block-categories.alignright {
    margin-left: 2em;
  }
  .wp-block-code code {
    display: block;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
  .wp-block-columns {
    display: flex;
    margin-bottom: 1.75em;
    flex-wrap: wrap;
  }
  @media (min-width: 782px) {
    .wp-block-columns {
      flex-wrap: nowrap;
    }
  }
  .wp-block-columns.has-background {
    padding: 1.25em 2.375em;
  }
  .wp-block-columns.are-vertically-aligned-top {
    align-items: flex-start;
  }
  .wp-block-columns.are-vertically-aligned-center {
    align-items: center;
  }
  .wp-block-columns.are-vertically-aligned-bottom {
    align-items: flex-end;
  }
  .wp-block-column {
    flex-grow: 1;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word;
  }
  @media (max-width: 599px) {
    .wp-block-column {
      flex-basis: 100% !important;
    }
  }
  @media (min-width: 600px) and (max-width: 781px) {
    .wp-block-column:not(:only-child) {
      flex-basis: calc(50% - 1em) !important;
      flex-grow: 0;
    }
    .wp-block-column:nth-child(2n) {
      margin-left: 2em;
    }
  }
  @media (min-width: 782px) {
    .wp-block-column {
      flex-basis: 0;
      flex-grow: 1;
    }
    .wp-block-column[style*="flex-basis"] {
      flex-grow: 0;
    }
    .wp-block-column:not(:first-child) {
      margin-left: 2em;
    }
  }
  .wp-block-column.is-vertically-aligned-top {
    align-self: flex-start;
  }
  .wp-block-column.is-vertically-aligned-center {
    -ms-grid-row-align: center;
    align-self: center;
  }
  .wp-block-column.is-vertically-aligned-bottom {
    align-self: flex-end;
  }
  .wp-block-column.is-vertically-aligned-bottom,
  .wp-block-column.is-vertically-aligned-center,
  .wp-block-column.is-vertically-aligned-top {
    width: 100%;
  }
  .wp-block-cover,
  .wp-block-cover-image {
    position: relative;
    background-size: cover;
    background-position: 50%;
    min-height: 430px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
  }
  .wp-block-cover-image.has-parallax,
  .wp-block-cover.has-parallax {
    background-attachment: fixed;
  }
  @supports (-webkit-overflow-scrolling: touch) {
    .wp-block-cover-image.has-parallax,
    .wp-block-cover.has-parallax {
      background-attachment: scroll;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .wp-block-cover-image.has-parallax,
    .wp-block-cover.has-parallax {
      background-attachment: scroll;
    }
  }
  .wp-block-cover-image.is-repeated,
  .wp-block-cover.is-repeated {
    background-repeat: repeat;
    background-size: auto;
  }
  .wp-block-cover-image.has-background-dim:not([class*="-background-color"]),
  .wp-block-cover.has-background-dim:not([class*="-background-color"]) {
    background-color: #000;
  }
  .wp-block-cover-image.has-background-dim:before,
  .wp-block-cover.has-background-dim:before {
    content: "";
    background-color: inherit;
  }
  .wp-block-cover-image.has-background-dim:not(.has-background-gradient):before,
  .wp-block-cover-image .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim:not(.has-background-gradient):before,
  .wp-block-cover .wp-block-cover__gradient-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity: 0.5;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-10
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-10:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-10
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-10:not(.has-background-gradient):before {
    opacity: 0.1;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-20
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-20:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-20
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-20:not(.has-background-gradient):before {
    opacity: 0.2;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-30
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-30:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-30
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-30:not(.has-background-gradient):before {
    opacity: 0.3;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-40
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-40:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-40
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-40:not(.has-background-gradient):before {
    opacity: 0.4;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-50
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-50:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-50
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-50:not(.has-background-gradient):before {
    opacity: 0.5;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-60
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-60:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-60
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-60:not(.has-background-gradient):before {
    opacity: 0.6;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-70
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-70:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-70
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-70:not(.has-background-gradient):before {
    opacity: 0.7;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-80
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-80:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-80
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-80:not(.has-background-gradient):before {
    opacity: 0.8;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-90
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-90:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-90
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-90:not(.has-background-gradient):before {
    opacity: 0.9;
  }
  .wp-block-cover-image.has-background-dim.has-background-dim-100
    .wp-block-cover__gradient-background,
  .wp-block-cover-image.has-background-dim.has-background-dim-100:not(.has-background-gradient):before,
  .wp-block-cover.has-background-dim.has-background-dim-100
    .wp-block-cover__gradient-background,
  .wp-block-cover.has-background-dim.has-background-dim-100:not(.has-background-gradient):before {
    opacity: 1;
  }
  .wp-block-cover-image.alignleft,
  .wp-block-cover-image.alignright,
  .wp-block-cover.alignleft,
  .wp-block-cover.alignright {
    max-width: 420px;
    width: 100%;
  }
  .wp-block-cover-image:after,
  .wp-block-cover:after {
    display: block;
    content: "";
    font-size: 0;
    min-height: inherit;
  }
  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .wp-block-cover-image:after,
    .wp-block-cover:after {
      content: none;
    }
  }
  .wp-block-cover-image.aligncenter,
  .wp-block-cover-image.alignleft,
  .wp-block-cover-image.alignright,
  .wp-block-cover.aligncenter,
  .wp-block-cover.alignleft,
  .wp-block-cover.alignright {
    display: flex;
  }
  .wp-block-cover-image .wp-block-cover__inner-container,
  .wp-block-cover .wp-block-cover__inner-container {
    width: 100%;
    z-index: 1;
    color: #fff;
  }
  .wp-block-cover-image .wp-block-subhead:not(.has-text-color),
  .wp-block-cover-image h1:not(.has-text-color),
  .wp-block-cover-image h2:not(.has-text-color),
  .wp-block-cover-image h3:not(.has-text-color),
  .wp-block-cover-image h4:not(.has-text-color),
  .wp-block-cover-image h5:not(.has-text-color),
  .wp-block-cover-image h6:not(.has-text-color),
  .wp-block-cover-image p:not(.has-text-color),
  .wp-block-cover .wp-block-subhead:not(.has-text-color),
  .wp-block-cover h1:not(.has-text-color),
  .wp-block-cover h2:not(.has-text-color),
  .wp-block-cover h3:not(.has-text-color),
  .wp-block-cover h4:not(.has-text-color),
  .wp-block-cover h5:not(.has-text-color),
  .wp-block-cover h6:not(.has-text-color),
  .wp-block-cover p:not(.has-text-color) {
    color: inherit;
  }
  .wp-block-cover-image.is-position-top-left,
  .wp-block-cover.is-position-top-left {
    align-items: flex-start;
    justify-content: flex-start;
  }
  .wp-block-cover-image.is-position-top-center,
  .wp-block-cover.is-position-top-center {
    align-items: flex-start;
    justify-content: center;
  }
  .wp-block-cover-image.is-position-top-right,
  .wp-block-cover.is-position-top-right {
    align-items: flex-start;
    justify-content: flex-end;
  }
  .wp-block-cover-image.is-position-center-left,
  .wp-block-cover.is-position-center-left {
    align-items: center;
    justify-content: flex-start;
  }
  .wp-block-cover-image.is-position-center-center,
  .wp-block-cover.is-position-center-center {
    align-items: center;
    justify-content: center;
  }
  .wp-block-cover-image.is-position-center-right,
  .wp-block-cover.is-position-center-right {
    align-items: center;
    justify-content: flex-end;
  }
  .wp-block-cover-image.is-position-bottom-left,
  .wp-block-cover.is-position-bottom-left {
    align-items: flex-end;
    justify-content: flex-start;
  }
  .wp-block-cover-image.is-position-bottom-center,
  .wp-block-cover.is-position-bottom-center {
    align-items: flex-end;
    justify-content: center;
  }
  .wp-block-cover-image.is-position-bottom-right,
  .wp-block-cover.is-position-bottom-right {
    align-items: flex-end;
    justify-content: flex-end;
  }
  .wp-block-cover-image.has-custom-content-position.has-custom-content-position
    .wp-block-cover__inner-container,
  .wp-block-cover.has-custom-content-position.has-custom-content-position
    .wp-block-cover__inner-container {
    margin: 0;
    width: auto;
  }
  .wp-block-cover__video-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    height: 100%;
    z-index: 0;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .wp-block-cover-image-text,
  .wp-block-cover-text,
  section.wp-block-cover-image h2 {
    color: #fff;
  }
  .wp-block-cover-image-text a,
  .wp-block-cover-image-text a:active,
  .wp-block-cover-image-text a:focus,
  .wp-block-cover-image-text a:hover,
  .wp-block-cover-text a,
  .wp-block-cover-text a:active,
  .wp-block-cover-text a:focus,
  .wp-block-cover-text a:hover,
  section.wp-block-cover-image h2 a,
  section.wp-block-cover-image h2 a:active,
  section.wp-block-cover-image h2 a:focus,
  section.wp-block-cover-image h2 a:hover {
    color: #fff;
  }
  .wp-block-cover-image .wp-block-cover.has-left-content {
    justify-content: flex-start;
  }
  .wp-block-cover-image .wp-block-cover.has-right-content {
    justify-content: flex-end;
  }
  .wp-block-cover-image.has-left-content .wp-block-cover-image-text,
  .wp-block-cover.has-left-content .wp-block-cover-text,
  section.wp-block-cover-image.has-left-content > h2 {
    margin-left: 0;
    text-align: left;
  }
  .wp-block-cover-image.has-right-content .wp-block-cover-image-text,
  .wp-block-cover.has-right-content .wp-block-cover-text,
  section.wp-block-cover-image.has-right-content > h2 {
    margin-right: 0;
    text-align: right;
  }
  .wp-block-cover-image .wp-block-cover-image-text,
  .wp-block-cover .wp-block-cover-text,
  section.wp-block-cover-image > h2 {
    font-size: 2em;
    line-height: 1.25;
    z-index: 1;
    margin-bottom: 0;
    max-width: 840px;
    padding: 0.44em;
    text-align: center;
  }
  .wp-block-embed.alignleft,
  .wp-block-embed.alignright,
  .wp-block[data-align="left"] > [data-type="core/embed"],
  .wp-block[data-align="right"] > [data-type="core/embed"] {
    max-width: 360px;
    width: 100%;
  }
  .wp-block-embed.alignleft .wp-block-embed__wrapper,
  .wp-block-embed.alignright .wp-block-embed__wrapper,
  .wp-block[data-align="left"]
    > [data-type="core/embed"]
    .wp-block-embed__wrapper,
  .wp-block[data-align="right"]
    > [data-type="core/embed"]
    .wp-block-embed__wrapper {
    min-width: 280px;
  }
  .wp-block-embed {
    margin-bottom: 1em;
  }
  .wp-block-embed figcaption {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  .wp-block-embed iframe {
    max-width: 100%;
  }
  .wp-block-embed__wrapper {
    position: relative;
  }
  .wp-embed-responsive .wp-has-aspect-ratio .wp-block-embed__wrapper:before {
    content: "";
    display: block;
    padding-top: 50%;
  }
  .wp-embed-responsive .wp-has-aspect-ratio iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .wp-embed-responsive .wp-embed-aspect-21-9 .wp-block-embed__wrapper:before {
    padding-top: 42.85%;
  }
  .wp-embed-responsive .wp-embed-aspect-18-9 .wp-block-embed__wrapper:before {
    padding-top: 50%;
  }
  .wp-embed-responsive .wp-embed-aspect-16-9 .wp-block-embed__wrapper:before {
    padding-top: 56.25%;
  }
  .wp-embed-responsive .wp-embed-aspect-4-3 .wp-block-embed__wrapper:before {
    padding-top: 75%;
  }
  .wp-embed-responsive .wp-embed-aspect-1-1 .wp-block-embed__wrapper:before {
    padding-top: 100%;
  }
  .wp-embed-responsive .wp-embed-aspect-9-16 .wp-block-embed__wrapper:before {
    padding-top: 177.77%;
  }
  .wp-embed-responsive .wp-embed-aspect-1-2 .wp-block-embed__wrapper:before {
    padding-top: 200%;
  }
  .wp-block-file {
    margin-bottom: 1.5em;
  }
  .wp-block-file.aligncenter {
    text-align: center;
  }
  .wp-block-file.alignright {
    text-align: right;
  }
  .wp-block-file .wp-block-file__button {
    background: #32373c;
    border-radius: 2em;
    color: #fff;
    font-size: 0.8em;
    padding: 0.5em 1em;
  }
  .wp-block-file a.wp-block-file__button {
    text-decoration: none;
  }
  .wp-block-file a.wp-block-file__button:active,
  .wp-block-file a.wp-block-file__button:focus,
  .wp-block-file a.wp-block-file__button:hover,
  .wp-block-file a.wp-block-file__button:visited {
    box-shadow: none;
    color: #fff;
    opacity: 0.85;
    text-decoration: none;
  }
  .wp-block-file * + .wp-block-file__button {
    margin-left: 0.75em;
  }
  .blocks-gallery-grid,
  .wp-block-gallery {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .blocks-gallery-grid .blocks-gallery-image,
  .blocks-gallery-grid .blocks-gallery-item,
  .wp-block-gallery .blocks-gallery-image,
  .wp-block-gallery .blocks-gallery-item {
    margin: 0 1em 1em 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: calc(50% - 1em);
  }
  .blocks-gallery-grid .blocks-gallery-image:nth-of-type(2n),
  .blocks-gallery-grid .blocks-gallery-item:nth-of-type(2n),
  .wp-block-gallery .blocks-gallery-image:nth-of-type(2n),
  .wp-block-gallery .blocks-gallery-item:nth-of-type(2n) {
    margin-right: 0;
  }
  .blocks-gallery-grid .blocks-gallery-image figure,
  .blocks-gallery-grid .blocks-gallery-item figure,
  .wp-block-gallery .blocks-gallery-image figure,
  .wp-block-gallery .blocks-gallery-item figure {
    margin: 0;
    height: 100%;
  }
  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .blocks-gallery-grid .blocks-gallery-image figure,
    .blocks-gallery-grid .blocks-gallery-item figure,
    .wp-block-gallery .blocks-gallery-image figure,
    .wp-block-gallery .blocks-gallery-item figure {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
    }
  }
  .blocks-gallery-grid .blocks-gallery-image img,
  .blocks-gallery-grid .blocks-gallery-item img,
  .wp-block-gallery .blocks-gallery-image img,
  .wp-block-gallery .blocks-gallery-item img {
    display: block;
    max-width: 100%;
    height: auto;
    width: 100%;
  }
  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .blocks-gallery-grid .blocks-gallery-image img,
    .blocks-gallery-grid .blocks-gallery-item img,
    .wp-block-gallery .blocks-gallery-image img,
    .wp-block-gallery .blocks-gallery-item img {
      width: auto;
    }
  }
  .blocks-gallery-grid .blocks-gallery-image figcaption,
  .blocks-gallery-grid .blocks-gallery-item figcaption,
  .wp-block-gallery .blocks-gallery-image figcaption,
  .wp-block-gallery .blocks-gallery-item figcaption {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 3em 0.77em 0.7em;
    color: #fff;
    text-align: center;
    font-size: 0.8em;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3) 70%,
      transparent
    );
    box-sizing: border-box;
    margin: 0;
  }
  .blocks-gallery-grid .blocks-gallery-image figcaption img,
  .blocks-gallery-grid .blocks-gallery-item figcaption img,
  .wp-block-gallery .blocks-gallery-image figcaption img,
  .wp-block-gallery .blocks-gallery-item figcaption img {
    display: inline;
  }
  .blocks-gallery-grid figcaption,
  .wp-block-gallery figcaption {
    flex-grow: 1;
  }
  .blocks-gallery-grid.is-cropped .blocks-gallery-image a,
  .blocks-gallery-grid.is-cropped .blocks-gallery-image img,
  .blocks-gallery-grid.is-cropped .blocks-gallery-item a,
  .blocks-gallery-grid.is-cropped .blocks-gallery-item img,
  .wp-block-gallery.is-cropped .blocks-gallery-image a,
  .wp-block-gallery.is-cropped .blocks-gallery-image img,
  .wp-block-gallery.is-cropped .blocks-gallery-item a,
  .wp-block-gallery.is-cropped .blocks-gallery-item img {
    width: 100%;
  }
  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .blocks-gallery-grid.is-cropped .blocks-gallery-image a,
    .blocks-gallery-grid.is-cropped .blocks-gallery-image img,
    .blocks-gallery-grid.is-cropped .blocks-gallery-item a,
    .blocks-gallery-grid.is-cropped .blocks-gallery-item img,
    .wp-block-gallery.is-cropped .blocks-gallery-image a,
    .wp-block-gallery.is-cropped .blocks-gallery-image img,
    .wp-block-gallery.is-cropped .blocks-gallery-item a,
    .wp-block-gallery.is-cropped .blocks-gallery-item img {
      height: 100%;
      flex: 1;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
  .blocks-gallery-grid.columns-1 .blocks-gallery-image,
  .blocks-gallery-grid.columns-1 .blocks-gallery-item,
  .wp-block-gallery.columns-1 .blocks-gallery-image,
  .wp-block-gallery.columns-1 .blocks-gallery-item {
    width: 100%;
    margin-right: 0;
  }
  @media (min-width: 600px) {
    .blocks-gallery-grid.columns-3 .blocks-gallery-image,
    .blocks-gallery-grid.columns-3 .blocks-gallery-item,
    .wp-block-gallery.columns-3 .blocks-gallery-image,
    .wp-block-gallery.columns-3 .blocks-gallery-item {
      width: calc(33.33333% - 0.66667em);
      margin-right: 1em;
    }
    .blocks-gallery-grid.columns-4 .blocks-gallery-image,
    .blocks-gallery-grid.columns-4 .blocks-gallery-item,
    .wp-block-gallery.columns-4 .blocks-gallery-image,
    .wp-block-gallery.columns-4 .blocks-gallery-item {
      width: calc(25% - 0.75em);
      margin-right: 1em;
    }
    .blocks-gallery-grid.columns-5 .blocks-gallery-image,
    .blocks-gallery-grid.columns-5 .blocks-gallery-item,
    .wp-block-gallery.columns-5 .blocks-gallery-image,
    .wp-block-gallery.columns-5 .blocks-gallery-item {
      width: calc(20% - 0.8em);
      margin-right: 1em;
    }
    .blocks-gallery-grid.columns-6 .blocks-gallery-image,
    .blocks-gallery-grid.columns-6 .blocks-gallery-item,
    .wp-block-gallery.columns-6 .blocks-gallery-image,
    .wp-block-gallery.columns-6 .blocks-gallery-item {
      width: calc(16.66667% - 0.83333em);
      margin-right: 1em;
    }
    .blocks-gallery-grid.columns-7 .blocks-gallery-image,
    .blocks-gallery-grid.columns-7 .blocks-gallery-item,
    .wp-block-gallery.columns-7 .blocks-gallery-image,
    .wp-block-gallery.columns-7 .blocks-gallery-item {
      width: calc(14.28571% - 0.85714em);
      margin-right: 1em;
    }
    .blocks-gallery-grid.columns-8 .blocks-gallery-image,
    .blocks-gallery-grid.columns-8 .blocks-gallery-item,
    .wp-block-gallery.columns-8 .blocks-gallery-image,
    .wp-block-gallery.columns-8 .blocks-gallery-item {
      width: calc(12.5% - 0.875em);
      margin-right: 1em;
    }
    .blocks-gallery-grid.columns-1 .blocks-gallery-image:nth-of-type(1n),
    .blocks-gallery-grid.columns-1 .blocks-gallery-item:nth-of-type(1n),
    .wp-block-gallery.columns-1 .blocks-gallery-image:nth-of-type(1n),
    .wp-block-gallery.columns-1 .blocks-gallery-item:nth-of-type(1n) {
      margin-right: 0;
    }
    .blocks-gallery-grid.columns-2 .blocks-gallery-image:nth-of-type(2n),
    .blocks-gallery-grid.columns-2 .blocks-gallery-item:nth-of-type(2n),
    .wp-block-gallery.columns-2 .blocks-gallery-image:nth-of-type(2n),
    .wp-block-gallery.columns-2 .blocks-gallery-item:nth-of-type(2n) {
      margin-right: 0;
    }
    .blocks-gallery-grid.columns-3 .blocks-gallery-image:nth-of-type(3n),
    .blocks-gallery-grid.columns-3 .blocks-gallery-item:nth-of-type(3n),
    .wp-block-gallery.columns-3 .blocks-gallery-image:nth-of-type(3n),
    .wp-block-gallery.columns-3 .blocks-gallery-item:nth-of-type(3n) {
      margin-right: 0;
    }
    .blocks-gallery-grid.columns-4 .blocks-gallery-image:nth-of-type(4n),
    .blocks-gallery-grid.columns-4 .blocks-gallery-item:nth-of-type(4n),
    .wp-block-gallery.columns-4 .blocks-gallery-image:nth-of-type(4n),
    .wp-block-gallery.columns-4 .blocks-gallery-item:nth-of-type(4n) {
      margin-right: 0;
    }
    .blocks-gallery-grid.columns-5 .blocks-gallery-image:nth-of-type(5n),
    .blocks-gallery-grid.columns-5 .blocks-gallery-item:nth-of-type(5n),
    .wp-block-gallery.columns-5 .blocks-gallery-image:nth-of-type(5n),
    .wp-block-gallery.columns-5 .blocks-gallery-item:nth-of-type(5n) {
      margin-right: 0;
    }
    .blocks-gallery-grid.columns-6 .blocks-gallery-image:nth-of-type(6n),
    .blocks-gallery-grid.columns-6 .blocks-gallery-item:nth-of-type(6n),
    .wp-block-gallery.columns-6 .blocks-gallery-image:nth-of-type(6n),
    .wp-block-gallery.columns-6 .blocks-gallery-item:nth-of-type(6n) {
      margin-right: 0;
    }
    .blocks-gallery-grid.columns-7 .blocks-gallery-image:nth-of-type(7n),
    .blocks-gallery-grid.columns-7 .blocks-gallery-item:nth-of-type(7n),
    .wp-block-gallery.columns-7 .blocks-gallery-image:nth-of-type(7n),
    .wp-block-gallery.columns-7 .blocks-gallery-item:nth-of-type(7n) {
      margin-right: 0;
    }
    .blocks-gallery-grid.columns-8 .blocks-gallery-image:nth-of-type(8n),
    .blocks-gallery-grid.columns-8 .blocks-gallery-item:nth-of-type(8n),
    .wp-block-gallery.columns-8 .blocks-gallery-image:nth-of-type(8n),
    .wp-block-gallery.columns-8 .blocks-gallery-item:nth-of-type(8n) {
      margin-right: 0;
    }
  }
  .blocks-gallery-grid .blocks-gallery-image:last-child,
  .blocks-gallery-grid .blocks-gallery-item:last-child,
  .wp-block-gallery .blocks-gallery-image:last-child,
  .wp-block-gallery .blocks-gallery-item:last-child {
    margin-right: 0;
  }
  .blocks-gallery-grid.alignleft,
  .blocks-gallery-grid.alignright,
  .wp-block-gallery.alignleft,
  .wp-block-gallery.alignright {
    max-width: 420px;
    width: 100%;
  }
  .blocks-gallery-grid.aligncenter .blocks-gallery-item figure,
  .wp-block-gallery.aligncenter .blocks-gallery-item figure {
    justify-content: center;
  }
  .wp-block-group {
    box-sizing: border-box;
  }
  h1.has-background,
  h2.has-background,
  h3.has-background,
  h4.has-background,
  h5.has-background,
  h6.has-background {
    padding: 1.25em 2.375em;
  }
  .wp-block-image {
    margin-bottom: 1em;
  }
  .wp-block-image img {
    max-width: 100%;
  }
  .wp-block-image.aligncenter {
    text-align: center;
  }
  .wp-block-image.alignfull img,
  .wp-block-image.alignwide img {
    width: 100%;
  }
  .wp-block-image .aligncenter,
  .wp-block-image .alignleft,
  .wp-block-image .alignright {
    display: table;
  }
  .wp-block-image .aligncenter > figcaption,
  .wp-block-image .alignleft > figcaption,
  .wp-block-image .alignright > figcaption {
    display: table-caption;
    caption-side: bottom;
  }
  .wp-block-image .alignleft {
    float: left;
    margin: 0.5em 1em 0.5em 0;
  }
  .wp-block-image .alignright {
    float: right;
    margin: 0.5em 0 0.5em 1em;
  }
  .wp-block-image .aligncenter {
    margin-left: auto;
    margin-right: auto;
  }
  .wp-block-image figcaption {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  .wp-block-image.is-style-circle-mask img,
  .wp-block-image.is-style-rounded img {
    border-radius: 9999px;
  }
  @supports ((-webkit-mask-image: none) or (mask-image: none)) or
    (-webkit-mask-image: none) {
    .wp-block-image.is-style-circle-mask img {
      -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
      mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
      mask-mode: alpha;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: contain;
      mask-size: contain;
      -webkit-mask-position: center;
      mask-position: center;
      border-radius: 0;
    }
  }
  .wp-block-latest-comments__comment {
    line-height: 1.1;
    list-style: none;
    margin-bottom: 1em;
  }
  .has-avatars .wp-block-latest-comments__comment {
    min-height: 2.25em;
    list-style: none;
  }
  .has-avatars
    .wp-block-latest-comments__comment
    .wp-block-latest-comments__comment-excerpt,
  .has-avatars
    .wp-block-latest-comments__comment
    .wp-block-latest-comments__comment-meta {
    margin-left: 3.25em;
  }
  .has-dates .wp-block-latest-comments__comment,
  .has-excerpts .wp-block-latest-comments__comment {
    line-height: 1.5;
  }
  .wp-block-latest-comments__comment-excerpt p {
    font-size: 0.875em;
    line-height: 1.8;
    margin: 0.36em 0 1.4em;
  }
  .wp-block-latest-comments__comment-date {
    display: block;
    font-size: 0.75em;
  }
  .wp-block-latest-comments .avatar,
  .wp-block-latest-comments__comment-avatar {
    border-radius: 1.5em;
    display: block;
    float: left;
    height: 2.5em;
    margin-right: 0.75em;
    width: 2.5em;
  }
  .wp-block-latest-posts.alignleft {
    margin-right: 2em;
  }
  .wp-block-latest-posts.alignright {
    margin-left: 2em;
  }
  .wp-block-latest-posts.wp-block-latest-posts__list {
    list-style: none;
  }
  .wp-block-latest-posts.wp-block-latest-posts__list li {
    clear: both;
  }
  .wp-block-latest-posts.is-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }
  .wp-block-latest-posts.is-grid li {
    margin: 0 1.25em 1.25em 0;
    width: 100%;
  }
  @media (min-width: 600px) {
    .wp-block-latest-posts.columns-2 li {
      width: calc(50% - 0.625em);
    }
    .wp-block-latest-posts.columns-2 li:nth-child(2n) {
      margin-right: 0;
    }
    .wp-block-latest-posts.columns-3 li {
      width: calc(33.33333% - 0.83333em);
    }
    .wp-block-latest-posts.columns-3 li:nth-child(3n) {
      margin-right: 0;
    }
    .wp-block-latest-posts.columns-4 li {
      width: calc(25% - 0.9375em);
    }
    .wp-block-latest-posts.columns-4 li:nth-child(4n) {
      margin-right: 0;
    }
    .wp-block-latest-posts.columns-5 li {
      width: calc(20% - 1em);
    }
    .wp-block-latest-posts.columns-5 li:nth-child(5n) {
      margin-right: 0;
    }
    .wp-block-latest-posts.columns-6 li {
      width: calc(16.66667% - 1.04167em);
    }
    .wp-block-latest-posts.columns-6 li:nth-child(6n) {
      margin-right: 0;
    }
  }
  .wp-block-latest-posts__post-author,
  .wp-block-latest-posts__post-date {
    display: block;
    color: #555;
    font-size: 0.8125em;
  }
  .wp-block-latest-posts__post-excerpt {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  .wp-block-latest-posts__featured-image a {
    display: inline-block;
  }
  .wp-block-latest-posts__featured-image img {
    height: auto;
    width: auto;
  }
  .wp-block-latest-posts__featured-image.alignleft {
    margin-right: 1em;
  }
  .wp-block-latest-posts__featured-image.alignright {
    margin-left: 1em;
  }
  .wp-block-latest-posts__featured-image.aligncenter {
    margin-bottom: 1em;
    text-align: center;
  }
  .block-editor-image-alignment-control__row .components-base-control__field {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .block-editor-image-alignment-control__row
    .components-base-control__field
    .components-base-control__label {
    margin-bottom: 0;
  }
  ol.has-background,
  ul.has-background {
    padding: 1.25em 2.375em;
  }
  .wp-block-media-text {
    direction: ltr;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 50% 1fr;
    grid-template-columns: 50% 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }
  .wp-block-media-text.has-media-on-the-right {
    -ms-grid-columns: 1fr 50%;
    grid-template-columns: 1fr 50%;
  }
  .wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__content,
  .wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__media {
    -ms-grid-row-align: start;
    align-self: start;
  }
  .wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__content,
  .wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__media,
  .wp-block-media-text .wp-block-media-text__content,
  .wp-block-media-text .wp-block-media-text__media {
    -ms-grid-row-align: center;
    align-self: center;
  }
  .wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__content,
  .wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__media {
    -ms-grid-row-align: end;
    align-self: end;
  }
  .wp-block-media-text .wp-block-media-text__media {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1;
    margin: 0;
  }
  .wp-block-media-text .wp-block-media-text__content {
    direction: ltr;
    padding: 0 8%;
    word-break: break-word;
  }
  .wp-block-media-text.has-media-on-the-right .wp-block-media-text__media,
  .wp-block-media-text .wp-block-media-text__content {
    -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 1;
    grid-row: 1;
  }
  .wp-block-media-text.has-media-on-the-right .wp-block-media-text__content {
    -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 1;
    grid-row: 1;
  }
  .wp-block-media-text__media img,
  .wp-block-media-text__media video {
    max-width: unset;
    width: 100%;
    vertical-align: middle;
  }
  .wp-block-media-text.is-image-fill .wp-block-media-text__media {
    height: 100%;
    min-height: 250px;
    background-size: cover;
  }
  .wp-block-media-text.is-image-fill .wp-block-media-text__media > a {
    display: block;
    height: 100%;
  }
  .wp-block-media-text.is-image-fill .wp-block-media-text__media img {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  @media (max-width: 600px) {
    .wp-block-media-text.is-stacked-on-mobile {
      -ms-grid-columns: 100% !important;
      grid-template-columns: 100% !important;
    }
    .wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__media {
      -ms-grid-column: 1;
      grid-column: 1;
      -ms-grid-row: 1;
      grid-row: 1;
    }
    .wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__content {
      -ms-grid-column: 1;
      grid-column: 1;
      -ms-grid-row: 2;
      grid-row: 2;
    }
  }
  .wp-block-navigation:not(.has-background)
    .wp-block-navigation__container
    .wp-block-navigation__container {
    color: #1e1e1e;
    background-color: #fff;
  }
  .items-justified-left > ul {
    justify-content: flex-start;
  }
  .items-justified-center > ul {
    justify-content: center;
  }
  .items-justified-right > ul {
    justify-content: flex-end;
  }
  .wp-block-navigation-link {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0;
  }
  .wp-block-navigation-link .wp-block-navigation__container:empty {
    display: none;
  }
  .wp-block-navigation__container {
    list-style: none;
    margin: 0;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .is-vertical .wp-block-navigation__container {
    display: block;
  }
  .has-child > .wp-block-navigation-link__content {
    padding-right: 0.5em;
  }
  .has-child .wp-block-navigation__container {
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-color: inherit;
    color: inherit;
    position: absolute;
    left: 0;
    top: 100%;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.1s linear;
    visibility: hidden;
  }
  .has-child
    .wp-block-navigation__container
    > .wp-block-navigation-link
    > .wp-block-navigation-link__content {
    flex-grow: 1;
  }
  .has-child
    .wp-block-navigation__container
    > .wp-block-navigation-link
    > .wp-block-navigation-link__submenu-icon {
    padding-right: 0.5em;
  }
  @media (min-width: 782px) {
    .has-child .wp-block-navigation__container {
      left: 1.5em;
    }
    .has-child .wp-block-navigation__container .wp-block-navigation__container {
      left: 100%;
      top: -1px;
    }
    .has-child
      .wp-block-navigation__container
      .wp-block-navigation__container:before {
      content: "";
      position: absolute;
      right: 100%;
      height: 100%;
      display: block;
      width: 0.5em;
      background: transparent;
    }
    .has-child
      .wp-block-navigation__container
      .wp-block-navigation-link__submenu-icon
      svg {
      transform: rotate(0);
    }
  }
  .has-child:hover {
    cursor: pointer;
  }
  .has-child:hover > .wp-block-navigation__container {
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-direction: column;
  }
  .has-child:focus-within {
    cursor: pointer;
  }
  .has-child:focus-within > .wp-block-navigation__container {
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-direction: column;
  }
  .wp-block-navigation[style*="text-decoration"] .wp-block-navigation-link,
  .wp-block-navigation[style*="text-decoration"] .wp-block-navigation__container {
    text-decoration: inherit;
  }
  .wp-block-navigation[style*="text-decoration"]
    .wp-block-navigation-link__content {
    text-decoration: inherit;
  }
  .wp-block-navigation[style*="text-decoration"]
    .wp-block-navigation-link__content:active,
  .wp-block-navigation[style*="text-decoration"]
    .wp-block-navigation-link__content:focus {
    text-decoration: inherit;
  }
  .wp-block-navigation:not([style*="text-decoration"])
    .wp-block-navigation-link__content {
    text-decoration: none;
  }
  .wp-block-navigation:not([style*="text-decoration"])
    .wp-block-navigation-link__content:active,
  .wp-block-navigation:not([style*="text-decoration"])
    .wp-block-navigation-link__content:focus {
    text-decoration: none;
  }
  .wp-block-navigation-link__content {
    color: inherit;
    padding: 0.5em 1em;
  }
  .wp-block-navigation-link__content + .wp-block-navigation-link__content {
    padding-top: 0;
  }
  .has-text-color .wp-block-navigation-link__content {
    color: inherit;
  }
  .wp-block-navigation-link__label {
    word-break: normal;
    overflow-wrap: break-word;
  }
  .wp-block-navigation-link__submenu-icon {
    height: inherit;
    padding: 0.375em 1em 0.375em 0;
  }
  .wp-block-navigation-link__submenu-icon svg {
    fill: currentColor;
  }
  @media (min-width: 782px) {
    .wp-block-navigation-link__submenu-icon svg {
      transform: rotate(90deg);
    }
  }
  .is-small-text {
    font-size: 0.875em;
  }
  .is-regular-text {
    font-size: 1em;
  }
  .is-large-text {
    font-size: 2.25em;
  }
  .is-larger-text {
    font-size: 3em;
  }
  .has-drop-cap:not(:focus):first-letter {
    float: left;
    font-size: 8.4em;
    line-height: 0.68;
    font-weight: 100;
    margin: 0.05em 0.1em 0 0;
    text-transform: uppercase;
    font-style: normal;
  }
  p.has-background {
    padding: 1.25em 2.375em;
  }
  p.has-text-color a {
    color: inherit;
  }
  .wp-block-post-author {
    display: flex;
    flex-wrap: wrap;
  }
  .wp-block-post-author__byline {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.5em;
  }
  .wp-block-post-author__avatar {
    margin-right: 1em;
  }
  .wp-block-post-author__bio {
    margin-bottom: 0.7em;
    font-size: 0.7em;
  }
  .wp-block-post-author__content {
    flex-grow: 1;
    flex-basis: 0;
  }
  .wp-block-post-author__name {
    font-weight: 700;
    margin: 0;
  }
  .wp-block-post-comments-form input[type="submit"] {
    color: #fff;
    background-color: #32373c;
    border: none;
    border-radius: 1.55em;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125em;
    padding: 0.667em 1.333em;
    text-align: center;
    text-decoration: none;
    overflow-wrap: break-word;
  }
  .wp-block-post-comments-form input[type="submit"]:active,
  .wp-block-post-comments-form input[type="submit"]:focus,
  .wp-block-post-comments-form input[type="submit"]:hover,
  .wp-block-post-comments-form input[type="submit"]:visited {
    color: #fff;
  }
  .wp-block-preformatted {
    white-space: pre-wrap;
  }
  .wp-block-pullquote {
    padding: 3em 0;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
  }
  .wp-block-pullquote.alignleft,
  .wp-block-pullquote.alignright {
    max-width: 420px;
  }
  .wp-block-pullquote.alignleft p,
  .wp-block-pullquote.alignright p {
    font-size: 1.25em;
  }
  .wp-block-pullquote p {
    font-size: 1.75em;
    line-height: 1.6;
  }
  .wp-block-pullquote cite,
  .wp-block-pullquote footer {
    position: relative;
  }
  .wp-block-pullquote .has-text-color a {
    color: inherit;
  }
  .wp-block-pullquote:not(.is-style-solid-color) {
    background: none;
  }
  .wp-block-pullquote.is-style-solid-color {
    border: none;
  }
  .wp-block-pullquote.is-style-solid-color blockquote {
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    max-width: 60%;
  }
  .wp-block-pullquote.is-style-solid-color blockquote p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2em;
  }
  .wp-block-pullquote.is-style-solid-color blockquote cite {
    text-transform: none;
    font-style: normal;
  }
  .wp-block-pullquote cite {
    color: inherit;
  }
  .wp-block-query-loop {
    max-width: 100%;
    list-style: none;
    padding: 0;
  }
  .wp-block-query-loop li {
    clear: both;
  }
  .wp-block-query-loop.is-flex-container {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
  }
  .wp-block-query-loop.is-flex-container li {
    margin: 0 0 1.25em;
    width: 100%;
  }
  @media (min-width: 600px) {
    .wp-block-query-loop.is-flex-container li {
      margin-right: 1.25em;
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-2 > li {
      width: calc(50% - 0.625em);
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-2
      > li:nth-child(2n) {
      margin-right: 0;
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-3 > li {
      width: calc(33.33333% - 0.83333em);
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-3
      > li:nth-child(3n) {
      margin-right: 0;
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-4 > li {
      width: calc(25% - 0.9375em);
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-4
      > li:nth-child(4n) {
      margin-right: 0;
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-5 > li {
      width: calc(20% - 1em);
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-5
      > li:nth-child(5n) {
      margin-right: 0;
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-6 > li {
      width: calc(16.66667% - 1.04167em);
    }
    .wp-block-query-loop.is-flex-container.is-flex-container.columns-6
      > li:nth-child(6n) {
      margin-right: 0;
    }
  }
  .wp-block-quote.is-large,
  .wp-block-quote.is-style-large {
    margin-bottom: 1em;
    padding: 0 1em;
  }
  .wp-block-quote.is-large p,
  .wp-block-quote.is-style-large p {
    font-size: 1.5em;
    font-style: italic;
    line-height: 1.6;
  }
  .wp-block-quote.is-large cite,
  .wp-block-quote.is-large footer,
  .wp-block-quote.is-style-large cite,
  .wp-block-quote.is-style-large footer {
    font-size: 1.125em;
    text-align: right;
  }
  .wp-block-rss.wp-block-rss {
    box-sizing: border-box;
  }
  .wp-block-rss.alignleft {
    margin-right: 2em;
  }
  .wp-block-rss.alignright {
    margin-left: 2em;
  }
  .wp-block-rss.is-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
  }
  .wp-block-rss.is-grid li {
    margin: 0 1em 1em 0;
    width: 100%;
  }
  @media (min-width: 600px) {
    .wp-block-rss.columns-2 li {
      width: calc(50% - 1em);
    }
    .wp-block-rss.columns-3 li {
      width: calc(33.33333% - 1em);
    }
    .wp-block-rss.columns-4 li {
      width: calc(25% - 1em);
    }
    .wp-block-rss.columns-5 li {
      width: calc(20% - 1em);
    }
    .wp-block-rss.columns-6 li {
      width: calc(16.66667% - 1em);
    }
  }
  .wp-block-rss__item-author,
  .wp-block-rss__item-publish-date {
    display: block;
    color: #555;
    font-size: 0.8125em;
  }
  .wp-block-search .wp-block-search__button {
    background: #f7f7f7;
    border: 1px solid #ccc;
    padding: 0.375em 0.625em;
    color: #32373c;
    margin-left: 0.625em;
    word-break: normal;
  }
  .wp-block-search .wp-block-search__button.has-icon {
    line-height: 0;
  }
  .wp-block-search .wp-block-search__button svg {
    min-width: 1.5em;
    min-height: 1.5em;
  }
  .wp-block-search .wp-block-search__inside-wrapper {
    display: flex;
    flex: auto;
    flex-wrap: nowrap;
    max-width: 100%;
  }
  .wp-block-search .wp-block-search__label {
    width: 100%;
  }
  .wp-block-search .wp-block-search__input {
    flex-grow: 1;
    min-width: 3em;
    border: 1px solid #949494;
  }
  .wp-block-search.wp-block-search__button-only .wp-block-search__button {
    margin-left: 0;
  }
  .wp-block-search.wp-block-search__button-inside
    .wp-block-search__inside-wrapper {
    padding: 4px;
    border: 1px solid #949494;
  }
  .wp-block-search.wp-block-search__button-inside
    .wp-block-search__inside-wrapper
    .wp-block-search__input {
    border-radius: 0;
    border: none;
    padding: 0 0 0 0.25em;
  }
  .wp-block-search.wp-block-search__button-inside
    .wp-block-search__inside-wrapper
    .wp-block-search__input:focus {
    outline: none;
  }
  .wp-block-search.wp-block-search__button-inside
    .wp-block-search__inside-wrapper
    .wp-block-search__button {
    padding: 0.125em 0.5em;
  }
  .wp-block-separator.is-style-wide {
    border-bottom-width: 1px;
  }
  .wp-block-separator.is-style-dots {
    background: none !important;
    border: none;
    text-align: center;
    max-width: none;
    line-height: 1;
    height: auto;
  }
  .wp-block-separator.is-style-dots:before {
    content: "···";
    color: currentColor;
    font-size: 1.5em;
    letter-spacing: 2em;
    padding-left: 2em;
    font-family: serif;
  }
  .wp-block-custom-logo {
    line-height: 0;
  }
  .wp-block-custom-logo .aligncenter {
    display: table;
  }
  .wp-block-custom-logo.is-style-rounded img {
    border-radius: 9999px;
  }
  .wp-block-social-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 0;
    padding-right: 0;
    text-indent: 0;
    margin-left: 0;
  }
  .wp-block-social-links .wp-social-link a,
  .wp-block-social-links .wp-social-link a:hover {
    text-decoration: none;
    border-bottom: 0;
    box-shadow: none;
  }
  .wp-block-social-links .wp-social-link.wp-social-link.wp-social-link {
    margin: 4px 8px 4px 0;
  }
  .wp-block-social-links .wp-social-link a {
    padding: 0.25em;
  }
  .wp-block-social-links .wp-social-link svg {
    width: 1em;
    height: 1em;
  }
  .wp-block-social-links.has-small-icon-size {
    font-size: 16px;
  }
  .wp-block-social-links,
  .wp-block-social-links.has-normal-icon-size {
    font-size: 24px;
  }
  .wp-block-social-links.has-large-icon-size {
    font-size: 36px;
  }
  .wp-block-social-links.has-huge-icon-size {
    font-size: 48px;
  }
  .wp-block-social-links.aligncenter {
    justify-content: center;
    display: flex;
  }
  .wp-block-social-links.alignright {
    justify-content: flex-end;
  }
  .wp-social-link {
    display: block;
    border-radius: 9999px;
    transition: transform 0.1s ease;
    height: auto;
  }
  @media (prefers-reduced-motion: reduce) {
    .wp-social-link {
      transition-duration: 0s;
    }
  }
  .wp-social-link a {
    display: block;
    line-height: 0;
    transition: transform 0.1s ease;
  }
  .wp-social-link a,
  .wp-social-link a:active,
  .wp-social-link a:hover,
  .wp-social-link a:visited,
  .wp-social-link svg {
    color: currentColor;
    fill: currentColor;
  }
  .wp-social-link:hover {
    transform: scale(1.1);
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link {
    background-color: #f0f0f0;
    color: #444;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-amazon {
    background-color: #f90;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-bandcamp {
    background-color: #1ea0c3;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-behance {
    background-color: #0757fe;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-codepen {
    background-color: #1e1f26;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-deviantart {
    background-color: #02e49b;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dribbble {
    background-color: #e94c89;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dropbox {
    background-color: #4280ff;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-etsy {
    background-color: #f45800;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-facebook {
    background-color: #1778f2;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-fivehundredpx {
    background-color: #000;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-flickr {
    background-color: #0461dd;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-foursquare {
    background-color: #e65678;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-github {
    background-color: #24292d;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-goodreads {
    background-color: #eceadd;
    color: #382110;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-google {
    background-color: #ea4434;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-instagram {
    background-color: #f00075;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-lastfm {
    background-color: #e21b24;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-linkedin {
    background-color: #0d66c2;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-mastodon {
    background-color: #3288d4;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-medium {
    background-color: #02ab6c;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-meetup {
    background-color: #f6405f;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-patreon {
    background-color: #ff424d;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pinterest {
    background-color: #e60122;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pocket {
    background-color: #ef4155;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-reddit {
    background-color: #fe4500;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-skype {
    background-color: #0478d7;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-snapchat {
    background-color: #fefc00;
    color: #fff;
    stroke: #000;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-soundcloud {
    background-color: #ff5600;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-spotify {
    background-color: #1bd760;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-telegram {
    background-color: #2aabee;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-tiktok {
    background-color: #000;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-tumblr {
    background-color: #011835;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitch {
    background-color: #6440a4;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitter {
    background-color: #1da1f2;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vimeo {
    background-color: #1eb7ea;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vk {
    background-color: #4680c2;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-wordpress {
    background-color: #3499cd;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-yelp {
    background-color: #d32422;
    color: #fff;
  }
  .wp-block-social-links:not(.is-style-logos-only) .wp-social-link-youtube {
    background-color: red;
    color: #fff;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link {
    background: none;
    padding: 4px;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-amazon {
    color: #f90;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-bandcamp {
    color: #1ea0c3;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-behance {
    color: #0757fe;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-codepen {
    color: #1e1f26;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-deviantart {
    color: #02e49b;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-dribbble {
    color: #e94c89;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-dropbox {
    color: #4280ff;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-etsy {
    color: #f45800;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-facebook {
    color: #1778f2;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-fivehundredpx {
    color: #000;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-flickr {
    color: #0461dd;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-foursquare {
    color: #e65678;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-github {
    color: #24292d;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-goodreads {
    color: #382110;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-google {
    color: #ea4434;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-instagram {
    color: #f00075;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-lastfm {
    color: #e21b24;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-linkedin {
    color: #0d66c2;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-mastodon {
    color: #3288d4;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-medium {
    color: #02ab6c;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-meetup {
    color: #f6405f;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-patreon {
    color: #ff424d;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-pinterest {
    color: #e60122;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-pocket {
    color: #ef4155;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-reddit {
    color: #fe4500;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-skype {
    color: #0478d7;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-snapchat {
    color: #fff;
    stroke: #000;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-soundcloud {
    color: #ff5600;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-spotify {
    color: #1bd760;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-telegram {
    color: #2aabee;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-tiktok {
    color: #000;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-tumblr {
    color: #011835;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-twitch {
    color: #6440a4;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-twitter {
    color: #1da1f2;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-vimeo {
    color: #1eb7ea;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-vk {
    color: #4680c2;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-wordpress {
    color: #3499cd;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-yelp {
    background-color: #d32422;
    color: #fff;
  }
  .wp-block-social-links.is-style-logos-only .wp-social-link-youtube {
    color: red;
  }
  .wp-block-social-links.is-style-pill-shape .wp-social-link {
    width: auto;
  }
  .wp-block-social-links.is-style-pill-shape .wp-social-link a {
    padding-left: 0.66667em;
    padding-right: 0.66667em;
  }
  .wp-block-spacer {
    clear: both;
  }
  p.wp-block-subhead {
    font-size: 1.1em;
    font-style: italic;
    opacity: 0.75;
  }
  .wp-block-tag-cloud.aligncenter {
    text-align: center;
  }
  .wp-block-tag-cloud.alignfull {
    padding-left: 1em;
    padding-right: 1em;
  }
  .wp-block-table {
    overflow-x: auto;
  }
  .wp-block-table table {
    width: 100%;
  }
  .wp-block-table .has-fixed-layout {
    table-layout: fixed;
    width: 100%;
  }
  .wp-block-table .has-fixed-layout td,
  .wp-block-table .has-fixed-layout th {
    word-break: break-word;
  }
  .wp-block-table.aligncenter,
  .wp-block-table.alignleft,
  .wp-block-table.alignright {
    display: table;
    width: auto;
  }
  .wp-block-table.aligncenter td,
  .wp-block-table.aligncenter th,
  .wp-block-table.alignleft td,
  .wp-block-table.alignleft th,
  .wp-block-table.alignright td,
  .wp-block-table.alignright th {
    word-break: break-word;
  }
  .wp-block-table .has-subtle-light-gray-background-color {
    background-color: #f3f4f5;
  }
  .wp-block-table .has-subtle-pale-green-background-color {
    background-color: #e9fbe5;
  }
  .wp-block-table .has-subtle-pale-blue-background-color {
    background-color: #e7f5fe;
  }
  .wp-block-table .has-subtle-pale-pink-background-color {
    background-color: #fcf0ef;
  }
  .wp-block-table.is-style-stripes {
    border-spacing: 0;
    border-collapse: inherit;
    background-color: transparent;
    border-bottom: 1px solid #f0f0f0;
  }
  .wp-block-table.is-style-stripes tbody tr:nth-child(odd) {
    background-color: #f0f0f0;
  }
  .wp-block-table.is-style-stripes.has-subtle-light-gray-background-color
    tbody
    tr:nth-child(odd) {
    background-color: #f3f4f5;
  }
  .wp-block-table.is-style-stripes.has-subtle-pale-green-background-color
    tbody
    tr:nth-child(odd) {
    background-color: #e9fbe5;
  }
  .wp-block-table.is-style-stripes.has-subtle-pale-blue-background-color
    tbody
    tr:nth-child(odd) {
    background-color: #e7f5fe;
  }
  .wp-block-table.is-style-stripes.has-subtle-pale-pink-background-color
    tbody
    tr:nth-child(odd) {
    background-color: #fcf0ef;
  }
  .wp-block-table.is-style-stripes td,
  .wp-block-table.is-style-stripes th {
    border-color: transparent;
  }
  .wp-block-text-columns,
  .wp-block-text-columns.aligncenter {
    display: flex;
  }
  .wp-block-text-columns .wp-block-column {
    margin: 0 1em;
    padding: 0;
  }
  .wp-block-text-columns .wp-block-column:first-child {
    margin-left: 0;
  }
  .wp-block-text-columns .wp-block-column:last-child {
    margin-right: 0;
  }
  .wp-block-text-columns.columns-2 .wp-block-column {
    width: 50%;
  }
  .wp-block-text-columns.columns-3 .wp-block-column {
    width: 33.33333%;
  }
  .wp-block-text-columns.columns-4 .wp-block-column {
    width: 25%;
  }
  pre.wp-block-verse {
    font-family: inherit;
    overflow: auto;
    white-space: nowrap;
  }
  .wp-block-video {
    margin-left: 0;
    margin-right: 0;
  }
  .wp-block-video video {
    width: 100%;
  }
  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .wp-block-video [poster] {
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
  .wp-block-video.aligncenter {
    text-align: center;
  }
  .wp-block-video figcaption {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
  .wp-block-post-featured-image a {
    display: inline-block;
  }
  .wp-block-post-featured-image img {
    max-width: 100%;
    height: auto;
  }
  :root .has-pale-pink-background-color {
    background-color: #f78da7;
  }
  :root .has-vivid-red-background-color {
    background-color: #cf2e2e;
  }
  :root .has-luminous-vivid-orange-background-color {
    background-color: #ff6900;
  }
  :root .has-luminous-vivid-amber-background-color {
    background-color: #fcb900;
  }
  :root .has-light-green-cyan-background-color {
    background-color: #7bdcb5;
  }
  :root .has-vivid-green-cyan-background-color {
    background-color: #00d084;
  }
  :root .has-pale-cyan-blue-background-color {
    background-color: #8ed1fc;
  }
  :root .has-vivid-cyan-blue-background-color {
    background-color: #0693e3;
  }
  :root .has-vivid-purple-background-color {
    background-color: #9b51e0;
  }
  :root .has-white-background-color {
    background-color: #fff;
  }
  :root .has-very-light-gray-background-color {
    background-color: #eee;
  }
  :root .has-cyan-bluish-gray-background-color {
    background-color: #abb8c3;
  }
  :root .has-very-dark-gray-background-color {
    background-color: #313131;
  }
  :root .has-black-background-color {
    background-color: #000;
  }
  :root .has-pale-pink-color {
    color: #f78da7;
  }
  :root .has-vivid-red-color {
    color: #cf2e2e;
  }
  :root .has-luminous-vivid-orange-color {
    color: #ff6900;
  }
  :root .has-luminous-vivid-amber-color {
    color: #fcb900;
  }
  :root .has-light-green-cyan-color {
    color: #7bdcb5;
  }
  :root .has-vivid-green-cyan-color {
    color: #00d084;
  }
  :root .has-pale-cyan-blue-color {
    color: #8ed1fc;
  }
  :root .has-vivid-cyan-blue-color {
    color: #0693e3;
  }
  :root .has-vivid-purple-color {
    color: #9b51e0;
  }
  :root .has-white-color {
    color: #fff;
  }
  :root .has-very-light-gray-color {
    color: #eee;
  }
  :root .has-cyan-bluish-gray-color {
    color: #abb8c3;
  }
  :root .has-very-dark-gray-color {
    color: #313131;
  }
  :root .has-black-color {
    color: #000;
  }
  :root .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
    background: linear-gradient(135deg, #0693e3, #9b51e0);
  }
  :root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background {
    background: linear-gradient(135deg, #00d084, #0693e3);
  }
  :root .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
    background: linear-gradient(135deg, #7adcb4, #00d082);
  }
  :root .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
    background: linear-gradient(135deg, #fcb900, #ff6900);
  }
  :root .has-luminous-vivid-orange-to-vivid-red-gradient-background {
    background: linear-gradient(135deg, #ff6900, #cf2e2e);
  }
  :root .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
    background: linear-gradient(135deg, #eee, #a9b8c3);
  }
  :root .has-cool-to-warm-spectrum-gradient-background {
    background: linear-gradient(
      135deg,
      #4aeadc,
      #9778d1 20%,
      #cf2aba 40%,
      #ee2c82 60%,
      #fb6962 80%,
      #fef84c
    );
  }
  :root .has-blush-light-purple-gradient-background {
    background: linear-gradient(135deg, #ffceec, #9896f0);
  }
  :root .has-blush-bordeaux-gradient-background {
    background: linear-gradient(135deg, #fecda5, #fe2d2d 50%, #6b003e);
  }
  :root .has-purple-crush-gradient-background {
    background: linear-gradient(135deg, #34e2e4, #4721fb 50%, #ab1dfe);
  }
  :root .has-luminous-dusk-gradient-background {
    background: linear-gradient(135deg, #ffcb70, #c751c0 50%, #4158d0);
  }
  :root .has-hazy-dawn-gradient-background {
    background: linear-gradient(135deg, #faaca8, #dad0ec);
  }
  :root .has-pale-ocean-gradient-background {
    background: linear-gradient(135deg, #fff5cb, #b6e3d4 50%, #33a7b5);
  }
  :root .has-electric-grass-gradient-background {
    background: linear-gradient(135deg, #caf880, #71ce7e);
  }
  :root .has-subdued-olive-gradient-background {
    background: linear-gradient(135deg, #fafae1, #67a671);
  }
  :root .has-atomic-cream-gradient-background {
    background: linear-gradient(135deg, #fdd79a, #004a59);
  }
  :root .has-nightshade-gradient-background {
    background: linear-gradient(135deg, #330968, #31cdcf);
  }
  :root .has-midnight-gradient-background {
    background: linear-gradient(135deg, #020381, #2874fc);
  }
  :root .has-link-color a {
    color: #00e;
    color: var(--wp--style--color--link, #00e);
  }
  .has-small-font-size {
    font-size: 0.8125em;
  }
  .has-normal-font-size,
  .has-regular-font-size {
    font-size: 1em;
  }
  .has-medium-font-size {
    font-size: 1.25em;
  }
  .has-large-font-size {
    font-size: 2.25em;
  }
  .has-huge-font-size,
  .has-larger-font-size {
    font-size: 2.625em;
  }
  .has-text-align-center {
    text-align: center;
  }
  .has-text-align-left {
    text-align: left;
  }
  .has-text-align-right {
    text-align: right;
  }
  #end-resizable-editor-section {
    display: none;
  }
  .aligncenter {
    clear: both;
  }
  :root {
    --wp-admin-theme-color: #007cba;
    --wp-admin-theme-color-darker-10: #006ba1;
    --wp-admin-theme-color-darker-20: #005a87;
  }
  #start-resizable-editor-section {
    display: none;
  }
  .wp-block-audio figcaption {
    color: #555;
    font-size: 13px;
    text-align: center;
  }
  .is-dark-theme .wp-block-audio figcaption {
    color: hsla(0, 0%, 100%, 0.65);
  }
  .wp-block-code {
    font-family: Menlo, Consolas, monaco, monospace;
    color: #1e1e1e;
    padding: 0.8em 1em;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .wp-block-embed figcaption {
    color: #555;
    font-size: 13px;
    text-align: center;
  }
  .is-dark-theme .wp-block-embed figcaption {
    color: hsla(0, 0%, 100%, 0.65);
  }
  .blocks-gallery-caption {
    color: #555;
    font-size: 13px;
    text-align: center;
  }
  .is-dark-theme .blocks-gallery-caption {
    color: hsla(0, 0%, 100%, 0.65);
  }
  .wp-block-image figcaption {
    color: #555;
    font-size: 13px;
    text-align: center;
  }
  .is-dark-theme .wp-block-image figcaption {
    color: hsla(0, 0%, 100%, 0.65);
  }
  .wp-block-pullquote {
    border-top: 4px solid;
    border-bottom: 4px solid;
    margin-bottom: 1.75em;
    color: currentColor;
  }
  .wp-block-pullquote__citation,
  .wp-block-pullquote cite,
  .wp-block-pullquote footer {
    color: currentColor;
    text-transform: uppercase;
    font-size: 0.8125em;
    font-style: normal;
  }
  .wp-block-navigation ul,
  .wp-block-navigation ul li {
    list-style: none;
  }
  .wp-block-navigation-link.wp-block-navigation-link {
    margin: 0;
  }
  .wp-block-quote {
    border-left: 0.25em solid;
    margin: 0 0 1.75em;
    padding-left: 1em;
  }
  .wp-block-quote__citation,
  .wp-block-quote cite,
  .wp-block-quote footer {
    color: currentColor;
    font-size: 0.8125em;
    margin-top: 1em;
    position: relative;
    font-style: normal;
  }
  .wp-block-quote.has-text-align-right {
    border-left: none;
    border-right: 0.25em solid;
    padding-left: 0;
    padding-right: 1em;
  }
  .wp-block-quote.has-text-align-center {
    border: none;
    padding-left: 0;
  }
  .wp-block-quote.is-large,
  .wp-block-quote.is-style-large {
    border: none;
  }
  .wp-block-search .wp-block-search__label {
    font-weight: 700;
  }
  .wp-block-group.has-background {
    padding: 1.25em 2.375em;
    margin-top: 0;
    margin-bottom: 0;
  }
  .wp-block-separator {
    border: none;
    border-bottom: 2px solid;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.4;
  }
  .wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
    max-width: 100px;
  }
  .wp-block-separator.has-background:not(.is-style-dots) {
    border-bottom: none;
    height: 1px;
  }
  .wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots) {
    height: 2px;
  }
  .wp-block-table {
    border-collapse: collapse;
  }
  .wp-block-table thead {
    border-bottom: 3px solid;
  }
  .wp-block-table tfoot {
    border-top: 3px solid;
  }
  .wp-block-table td,
  .wp-block-table th {
    padding: 0.5em;
    border: 1px solid;
    word-break: normal;
  }
  .wp-block-table figcaption {
    color: #555;
    font-size: 13px;
    text-align: center;
  }
  .is-dark-theme .wp-block-table figcaption {
    color: hsla(0, 0%, 100%, 0.65);
  }
  .wp-block-video figcaption {
    color: #555;
    font-size: 13px;
    text-align: center;
  }
  .is-dark-theme .wp-block-video figcaption {
    color: hsla(0, 0%, 100%, 0.65);
  }
  .wp-block-template-part.has-background {
    padding: 1.25em 2.375em;
    margin-top: 0;
    margin-bottom: 0;
  }
  #end-resizable-editor-section {
    display: none;
  }
  .wp-block-archives-dropdown label{display:block}.wp-block-avatar.aligncenter{text-align:center}.wp-block-audio{margin:0 0 1em}.wp-block-audio figcaption{margin-top:.5em;margin-bottom:1em}.wp-block-audio audio{width:100%;min-width:300px}.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;cursor:pointer;display:inline-block;font-size:1.125em;padding:calc(.667em + 2px) calc(1.333em + 2px);text-align:center;text-decoration:none;word-break:break-word;box-sizing:border-box}.wp-block-button__link:active,.wp-block-button__link:focus,.wp-block-button__link:hover,.wp-block-button__link:visited{color:#fff}.wp-block-button__link.aligncenter{text-align:center}.wp-block-button__link.alignright{text-align:right}.wp-block-buttons>.wp-block-button.has-custom-width{max-width:none}.wp-block-buttons>.wp-block-button.has-custom-width .wp-block-button__link{width:100%}.wp-block-buttons>.wp-block-button.has-custom-font-size .wp-block-button__link{font-size:inherit}.wp-block-buttons>.wp-block-button.wp-block-button__width-25{width:calc(25% - var(--wp--style--block-gap, .5em)*0.75)}.wp-block-buttons>.wp-block-button.wp-block-button__width-50{width:calc(50% - var(--wp--style--block-gap, .5em)*0.5)}.wp-block-buttons>.wp-block-button.wp-block-button__width-75{width:calc(75% - var(--wp--style--block-gap, .5em)*0.25)}.wp-block-buttons>.wp-block-button.wp-block-button__width-100{width:100%;flex-basis:100%}.wp-block-buttons.is-vertical>.wp-block-button.wp-block-button__width-25{width:25%}.wp-block-buttons.is-vertical>.wp-block-button.wp-block-button__width-50{width:50%}.wp-block-buttons.is-vertical>.wp-block-button.wp-block-button__width-75{width:75%}.wp-block-button.is-style-squared,.wp-block-button__link.wp-block-button.is-style-squared{border-radius:0}.wp-block-button.no-border-radius,.wp-block-button__link.no-border-radius{border-radius:0!important}.is-style-outline>:where(.wp-block-button__link),:where(.wp-block-button__link).is-style-outline{border:2px solid;padding:.667em 1.333em}.is-style-outline>.wp-block-button__link:not(.has-text-color),.wp-block-button__link.is-style-outline:not(.has-text-color){color:currentColor}.is-style-outline>.wp-block-button__link:not(.has-background),.wp-block-button__link.is-style-outline:not(.has-background){background-color:transparent}.wp-block-buttons.is-vertical{flex-direction:column}.wp-block-buttons.is-vertical>.wp-block-button:last-child{margin-bottom:0}.wp-block-buttons>.wp-block-button{display:inline-block;margin:0}.wp-block-buttons.is-content-justification-left{justify-content:flex-start}.wp-block-buttons.is-content-justification-left.is-vertical{align-items:flex-start}.wp-block-buttons.is-content-justification-center{justify-content:center}.wp-block-buttons.is-content-justification-center.is-vertical{align-items:center}.wp-block-buttons.is-content-justification-right{justify-content:flex-end}.wp-block-buttons.is-content-justification-right.is-vertical{align-items:flex-end}.wp-block-buttons.is-content-justification-space-between{justify-content:space-between}.wp-block-buttons.aligncenter{text-align:center}.wp-block-buttons:not(.is-content-justification-space-between,.is-content-justification-right,.is-content-justification-left,.is-content-justification-center) .wp-block-button.aligncenter{margin-left:auto;margin-right:auto;width:100%}.wp-block-button.aligncenter,.wp-block-calendar{text-align:center}.wp-block-calendar tbody td,.wp-block-calendar th{padding:.25em;border:1px solid #ddd}.wp-block-calendar tfoot td{border:none}.wp-block-calendar table{width:100%;border-collapse:collapse}.wp-block-calendar table th{font-weight:400;background:#ddd}.wp-block-calendar a{text-decoration:underline}.wp-block-calendar table caption,.wp-block-calendar table tbody{color:#40464d}.wp-block-categories.alignleft{margin-right:2em}.wp-block-categories.alignright{margin-left:2em}.wp-block-code code{display:block;font-family:inherit;overflow-wrap:break-word;white-space:pre-wrap}.wp-block-columns{display:flex;margin-bottom:1.75em;box-sizing:border-box;flex-wrap:wrap!important;align-items:normal!important}@media (min-width:782px){.wp-block-columns{flex-wrap:nowrap!important}}.wp-block-columns.are-vertically-aligned-top{align-items:flex-start}.wp-block-columns.are-vertically-aligned-center{align-items:center}.wp-block-columns.are-vertically-aligned-bottom{align-items:flex-end}@media (max-width:781px){.wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column{flex-basis:100%!important}}@media (min-width:782px){.wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column{flex-basis:0;flex-grow:1}.wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column[style*=flex-basis]{flex-grow:0}}.wp-block-columns.is-not-stacked-on-mobile{flex-wrap:nowrap!important}.wp-block-columns.is-not-stacked-on-mobile>.wp-block-column{flex-basis:0;flex-grow:1}.wp-block-columns.is-not-stacked-on-mobile>.wp-block-column[style*=flex-basis]{flex-grow:0}:where(.wp-block-columns.has-background){padding:1.25em 2.375em}.wp-block-column{flex-grow:1;min-width:0;word-break:break-word;overflow-wrap:break-word}.wp-block-column.is-vertically-aligned-top{align-self:flex-start}.wp-block-column.is-vertically-aligned-center{align-self:center}.wp-block-column.is-vertically-aligned-bottom{align-self:flex-end}.wp-block-column.is-vertically-aligned-bottom,.wp-block-column.is-vertically-aligned-center,.wp-block-column.is-vertically-aligned-top{width:100%}.wp-block-comments-pagination>.wp-block-comments-pagination-next,.wp-block-comments-pagination>.wp-block-comments-pagination-numbers,.wp-block-comments-pagination>.wp-block-comments-pagination-previous{margin-right:.5em;margin-bottom:.5em}.wp-block-comments-pagination>.wp-block-comments-pagination-next:last-child,.wp-block-comments-pagination>.wp-block-comments-pagination-numbers:last-child,.wp-block-comments-pagination>.wp-block-comments-pagination-previous:last-child{margin-right:0}.wp-block-comments-pagination .wp-block-comments-pagination-previous-arrow{margin-right:1ch;display:inline-block}.wp-block-comments-pagination .wp-block-comments-pagination-previous-arrow:not(.is-arrow-chevron){transform:scaleX(1)}.wp-block-comments-pagination .wp-block-comments-pagination-next-arrow{margin-left:1ch;display:inline-block}.wp-block-comments-pagination .wp-block-comments-pagination-next-arrow:not(.is-arrow-chevron){transform:scaleX(1)}.wp-block-comments-pagination.aligncenter{justify-content:center}.wp-block-comment-template{margin-bottom:0;max-width:100%;list-style:none;padding:0}.wp-block-comment-template li{clear:both}.wp-block-comment-template ol{margin-bottom:0;max-width:100%;list-style:none;padding-left:2rem}.wp-block-cover,.wp-block-cover-image{position:relative;background-size:cover;background-position:50%;min-height:430px;width:100%;display:flex;justify-content:center;align-items:center;padding:1em;box-sizing:border-box}.wp-block-cover-image.has-parallax,.wp-block-cover.has-parallax{background-attachment:fixed}@supports (-webkit-touch-callout:inherit){.wp-block-cover-image.has-parallax,.wp-block-cover.has-parallax{background-attachment:scroll}}@media (prefers-reduced-motion:reduce){.wp-block-cover-image.has-parallax,.wp-block-cover.has-parallax{background-attachment:scroll}}.wp-block-cover-image.is-repeated,.wp-block-cover.is-repeated{background-repeat:repeat;background-size:auto}.wp-block-cover-image.has-background-dim:not([class*=-background-color]),.wp-block-cover-image .has-background-dim:not([class*=-background-color]),.wp-block-cover.has-background-dim:not([class*=-background-color]),.wp-block-cover .has-background-dim:not([class*=-background-color]){background-color:#000}.wp-block-cover-image .has-background-dim.has-background-gradient,.wp-block-cover .has-background-dim.has-background-gradient{background-color:transparent}.wp-block-cover-image.has-background-dim:before,.wp-block-cover.has-background-dim:before{content:"";background-color:inherit}.wp-block-cover-image.has-background-dim:not(.has-background-gradient):before,.wp-block-cover-image .wp-block-cover__background,.wp-block-cover-image .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim:not(.has-background-gradient):before,.wp-block-cover .wp-block-cover__background,.wp-block-cover .wp-block-cover__gradient-background{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;opacity:.5}.wp-block-cover-image.has-background-dim.has-background-dim-10 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-10 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-10:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-10 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-10 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-10:not(.has-background-gradient):before{opacity:.1}.wp-block-cover-image.has-background-dim.has-background-dim-20 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-20 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-20:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-20 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-20 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-20:not(.has-background-gradient):before{opacity:.2}.wp-block-cover-image.has-background-dim.has-background-dim-30 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-30 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-30:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-30 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-30 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-30:not(.has-background-gradient):before{opacity:.3}.wp-block-cover-image.has-background-dim.has-background-dim-40 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-40 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-40:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-40 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-40 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-40:not(.has-background-gradient):before{opacity:.4}.wp-block-cover-image.has-background-dim.has-background-dim-50 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-50 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-50:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-50 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-50 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-50:not(.has-background-gradient):before{opacity:.5}.wp-block-cover-image.has-background-dim.has-background-dim-60 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-60 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-60:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-60 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-60 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-60:not(.has-background-gradient):before{opacity:.6}.wp-block-cover-image.has-background-dim.has-background-dim-70 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-70 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-70:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-70 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-70 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-70:not(.has-background-gradient):before{opacity:.7}.wp-block-cover-image.has-background-dim.has-background-dim-80 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-80 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-80:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-80 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-80 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-80:not(.has-background-gradient):before{opacity:.8}.wp-block-cover-image.has-background-dim.has-background-dim-90 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-90 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-90:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-90 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-90 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-90:not(.has-background-gradient):before{opacity:.9}.wp-block-cover-image.has-background-dim.has-background-dim-100 .wp-block-cover__background,.wp-block-cover-image.has-background-dim.has-background-dim-100 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-100:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-100 .wp-block-cover__background,.wp-block-cover.has-background-dim.has-background-dim-100 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-100:not(.has-background-gradient):before{opacity:1}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-0,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-0,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-0,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-0{opacity:0}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-10,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-10,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-10,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-10{opacity:.1}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-20,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-20,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-20,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-20{opacity:.2}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-30,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-30,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-30,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-30{opacity:.3}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-40,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-40,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-40,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-40{opacity:.4}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-50,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-50,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-50,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-50{opacity:.5}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-60,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-60,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-60,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-60{opacity:.6}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-70,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-70,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-70,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-70{opacity:.7}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-80,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-80,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-80,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-80{opacity:.8}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-90,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-90,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-90,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-90{opacity:.9}.wp-block-cover-image .wp-block-cover__background.has-background-dim.has-background-dim-100,.wp-block-cover-image .wp-block-cover__gradient-background.has-background-dim.has-background-dim-100,.wp-block-cover .wp-block-cover__background.has-background-dim.has-background-dim-100,.wp-block-cover .wp-block-cover__gradient-background.has-background-dim.has-background-dim-100{opacity:1}.wp-block-cover-image .block-library-cover__padding-visualizer,.wp-block-cover .block-library-cover__padding-visualizer{z-index:2}.wp-block-cover-image.alignleft,.wp-block-cover-image.alignright,.wp-block-cover.alignleft,.wp-block-cover.alignright{max-width:420px;width:100%}.wp-block-cover-image:after,.wp-block-cover:after{display:block;content:"";font-size:0;min-height:inherit}@supports (position:sticky){.wp-block-cover-image:after,.wp-block-cover:after{content:none}}.wp-block-cover-image.aligncenter,.wp-block-cover-image.alignleft,.wp-block-cover-image.alignright,.wp-block-cover.aligncenter,.wp-block-cover.alignleft,.wp-block-cover.alignright{display:flex}.wp-block-cover-image .wp-block-cover__inner-container,.wp-block-cover .wp-block-cover__inner-container{width:100%;z-index:1;color:#fff}.wp-block-cover-image.is-light .wp-block-cover__inner-container,.wp-block-cover.is-light .wp-block-cover__inner-container{color:#000}.wp-block-cover-image h1:not(.has-text-color),.wp-block-cover-image h2:not(.has-text-color),.wp-block-cover-image h3:not(.has-text-color),.wp-block-cover-image h4:not(.has-text-color),.wp-block-cover-image h5:not(.has-text-color),.wp-block-cover-image h6:not(.has-text-color),.wp-block-cover-image p:not(.has-text-color),.wp-block-cover h1:not(.has-text-color),.wp-block-cover h2:not(.has-text-color),.wp-block-cover h3:not(.has-text-color),.wp-block-cover h4:not(.has-text-color),.wp-block-cover h5:not(.has-text-color),.wp-block-cover h6:not(.has-text-color),.wp-block-cover p:not(.has-text-color){color:inherit}.wp-block-cover-image.is-position-top-left,.wp-block-cover.is-position-top-left{align-items:flex-start;justify-content:flex-start}.wp-block-cover-image.is-position-top-center,.wp-block-cover.is-position-top-center{align-items:flex-start;justify-content:center}.wp-block-cover-image.is-position-top-right,.wp-block-cover.is-position-top-right{align-items:flex-start;justify-content:flex-end}.wp-block-cover-image.is-position-center-left,.wp-block-cover.is-position-center-left{align-items:center;justify-content:flex-start}.wp-block-cover-image.is-position-center-center,.wp-block-cover.is-position-center-center{align-items:center;justify-content:center}.wp-block-cover-image.is-position-center-right,.wp-block-cover.is-position-center-right{align-items:center;justify-content:flex-end}.wp-block-cover-image.is-position-bottom-left,.wp-block-cover.is-position-bottom-left{align-items:flex-end;justify-content:flex-start}.wp-block-cover-image.is-position-bottom-center,.wp-block-cover.is-position-bottom-center{align-items:flex-end;justify-content:center}.wp-block-cover-image.is-position-bottom-right,.wp-block-cover.is-position-bottom-right{align-items:flex-end;justify-content:flex-end}.wp-block-cover-image.has-custom-content-position.has-custom-content-position .wp-block-cover__inner-container,.wp-block-cover.has-custom-content-position.has-custom-content-position .wp-block-cover__inner-container{margin:0;width:auto}.wp-block-cover-image img.wp-block-cover__image-background,.wp-block-cover-image video.wp-block-cover__video-background,.wp-block-cover img.wp-block-cover__image-background,.wp-block-cover video.wp-block-cover__video-background{position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%;max-width:none;max-height:none;-o-object-fit:cover;object-fit:cover;outline:none;border:none;box-shadow:none}.wp-block-cover__image-background,.wp-block-cover__video-background{z-index:0}.wp-block-cover-image-text,.wp-block-cover-image-text a,.wp-block-cover-image-text a:active,.wp-block-cover-image-text a:focus,.wp-block-cover-image-text a:hover,.wp-block-cover-text,.wp-block-cover-text a,.wp-block-cover-text a:active,.wp-block-cover-text a:focus,.wp-block-cover-text a:hover,section.wp-block-cover-image h2,section.wp-block-cover-image h2 a,section.wp-block-cover-image h2 a:active,section.wp-block-cover-image h2 a:focus,section.wp-block-cover-image h2 a:hover{color:#fff}.wp-block-cover-image .wp-block-cover.has-left-content{justify-content:flex-start}.wp-block-cover-image .wp-block-cover.has-right-content{justify-content:flex-end}.wp-block-cover-image.has-left-content .wp-block-cover-image-text,.wp-block-cover.has-left-content .wp-block-cover-text,section.wp-block-cover-image.has-left-content>h2{margin-left:0;text-align:left}.wp-block-cover-image.has-right-content .wp-block-cover-image-text,.wp-block-cover.has-right-content .wp-block-cover-text,section.wp-block-cover-image.has-right-content>h2{margin-right:0;text-align:right}.wp-block-cover-image .wp-block-cover-image-text,.wp-block-cover .wp-block-cover-text,section.wp-block-cover-image>h2{font-size:2em;line-height:1.25;z-index:1;margin-bottom:0;max-width:840px;padding:.44em;text-align:center}.wp-block-embed.alignleft,.wp-block-embed.alignright,.wp-block[data-align=left]>[data-type="core/embed"],.wp-block[data-align=right]>[data-type="core/embed"]{max-width:360px;width:100%}.wp-block-embed.alignleft .wp-block-embed__wrapper,.wp-block-embed.alignright .wp-block-embed__wrapper,.wp-block[data-align=left]>[data-type="core/embed"] .wp-block-embed__wrapper,.wp-block[data-align=right]>[data-type="core/embed"] .wp-block-embed__wrapper{min-width:280px}.wp-block-cover .wp-block-embed{min-width:320px;min-height:240px}.wp-block-embed{margin:0 0 1em;overflow-wrap:break-word}.wp-block-embed figcaption{margin-top:.5em;margin-bottom:1em}.wp-block-embed iframe{max-width:100%}.wp-block-embed__wrapper{position:relative}.wp-embed-responsive .wp-has-aspect-ratio .wp-block-embed__wrapper:before{content:"";display:block;padding-top:50%}.wp-embed-responsive .wp-has-aspect-ratio iframe{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%}.wp-embed-responsive .wp-embed-aspect-21-9 .wp-block-embed__wrapper:before{padding-top:42.85%}.wp-embed-responsive .wp-embed-aspect-18-9 .wp-block-embed__wrapper:before{padding-top:50%}.wp-embed-responsive .wp-embed-aspect-16-9 .wp-block-embed__wrapper:before{padding-top:56.25%}.wp-embed-responsive .wp-embed-aspect-4-3 .wp-block-embed__wrapper:before{padding-top:75%}.wp-embed-responsive .wp-embed-aspect-1-1 .wp-block-embed__wrapper:before{padding-top:100%}.wp-embed-responsive .wp-embed-aspect-9-16 .wp-block-embed__wrapper:before{padding-top:177.77%}.wp-embed-responsive .wp-embed-aspect-1-2 .wp-block-embed__wrapper:before{padding-top:200%}.wp-block-file{margin-bottom:1.5em}.wp-block-file.aligncenter{text-align:center}.wp-block-file.alignright{text-align:right}.wp-block-file .wp-block-file__embed{margin-bottom:1em}.wp-block-file .wp-block-file__button{background:#32373c;border-radius:2em;color:#fff;font-size:.8em;padding:.5em 1em}.wp-block-file a.wp-block-file__button{text-decoration:none}.wp-block-file a.wp-block-file__button:active,.wp-block-file a.wp-block-file__button:focus,.wp-block-file a.wp-block-file__button:hover,.wp-block-file a.wp-block-file__button:visited{box-shadow:none;color:#fff;opacity:.85;text-decoration:none}.wp-block-file *+.wp-block-file__button{margin-left:.75em}.blocks-gallery-grid:not(.has-nested-images),.wp-block-gallery:not(.has-nested-images){display:flex;flex-wrap:wrap;list-style-type:none;padding:0;margin:0}.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image,.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item{margin:0 1em 1em 0;display:flex;flex-grow:1;flex-direction:column;justify-content:center;position:relative;width:calc(50% - 1em)}.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image:nth-of-type(2n),.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item:nth-of-type(2n),.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image:nth-of-type(2n),.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item:nth-of-type(2n){margin-right:0}.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image figure,.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item figure,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image figure,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item figure{margin:0;height:100%;display:flex;align-items:flex-end;justify-content:flex-start}.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image img,.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item img,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image img,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item img{display:block;max-width:100%;height:auto;width:auto}.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image figcaption,.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item figcaption,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image figcaption,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item figcaption{position:absolute;bottom:0;width:100%;max-height:100%;overflow:auto;padding:3em .77em .7em;color:#fff;text-align:center;font-size:.8em;background:linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.3) 70%,transparent);box-sizing:border-box;margin:0;z-index:2}.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image figcaption img,.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item figcaption img,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image figcaption img,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item figcaption img{display:inline}.blocks-gallery-grid:not(.has-nested-images) figcaption,.wp-block-gallery:not(.has-nested-images) figcaption{flex-grow:1}.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-image a,.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-image img,.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-item a,.blocks-gallery-grid:not(.has-nested-images).is-cropped .blocks-gallery-item img,.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-image a,.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-image img,.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-item a,.wp-block-gallery:not(.has-nested-images).is-cropped .blocks-gallery-item img{width:100%;height:100%;flex:1;-o-object-fit:cover;object-fit:cover}.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-image,.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-item,.wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-image,.wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-item{width:100%;margin-right:0}@media (min-width:600px){.blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-image,.blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-item,.wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-image,.wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-item{width:calc(33.33333% - .66667em);margin-right:1em}.blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-image,.blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-item,.wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-image,.wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-item{width:calc(25% - .75em);margin-right:1em}.blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-image,.blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-item,.wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-image,.wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-item{width:calc(20% - .8em);margin-right:1em}.blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-image,.blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-item,.wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-image,.wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-item{width:calc(16.66667% - .83333em);margin-right:1em}.blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-image,.blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-item,.wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-image,.wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-item{width:calc(14.28571% - .85714em);margin-right:1em}.blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-image,.blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-item,.wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-image,.wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-item{width:calc(12.5% - .875em);margin-right:1em}.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-image:nth-of-type(1n),.blocks-gallery-grid:not(.has-nested-images).columns-1 .blocks-gallery-item:nth-of-type(1n),.blocks-gallery-grid:not(.has-nested-images).columns-2 .blocks-gallery-image:nth-of-type(2n),.blocks-gallery-grid:not(.has-nested-images).columns-2 .blocks-gallery-item:nth-of-type(2n),.blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-image:nth-of-type(3n),.blocks-gallery-grid:not(.has-nested-images).columns-3 .blocks-gallery-item:nth-of-type(3n),.blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-image:nth-of-type(4n),.blocks-gallery-grid:not(.has-nested-images).columns-4 .blocks-gallery-item:nth-of-type(4n),.blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-image:nth-of-type(5n),.blocks-gallery-grid:not(.has-nested-images).columns-5 .blocks-gallery-item:nth-of-type(5n),.blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-image:nth-of-type(6n),.blocks-gallery-grid:not(.has-nested-images).columns-6 .blocks-gallery-item:nth-of-type(6n),.blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-image:nth-of-type(7n),.blocks-gallery-grid:not(.has-nested-images).columns-7 .blocks-gallery-item:nth-of-type(7n),.blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-image:nth-of-type(8n),.blocks-gallery-grid:not(.has-nested-images).columns-8 .blocks-gallery-item:nth-of-type(8n),.wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-image:nth-of-type(1n),.wp-block-gallery:not(.has-nested-images).columns-1 .blocks-gallery-item:nth-of-type(1n),.wp-block-gallery:not(.has-nested-images).columns-2 .blocks-gallery-image:nth-of-type(2n),.wp-block-gallery:not(.has-nested-images).columns-2 .blocks-gallery-item:nth-of-type(2n),.wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-image:nth-of-type(3n),.wp-block-gallery:not(.has-nested-images).columns-3 .blocks-gallery-item:nth-of-type(3n),.wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-image:nth-of-type(4n),.wp-block-gallery:not(.has-nested-images).columns-4 .blocks-gallery-item:nth-of-type(4n),.wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-image:nth-of-type(5n),.wp-block-gallery:not(.has-nested-images).columns-5 .blocks-gallery-item:nth-of-type(5n),.wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-image:nth-of-type(6n),.wp-block-gallery:not(.has-nested-images).columns-6 .blocks-gallery-item:nth-of-type(6n),.wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-image:nth-of-type(7n),.wp-block-gallery:not(.has-nested-images).columns-7 .blocks-gallery-item:nth-of-type(7n),.wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-image:nth-of-type(8n),.wp-block-gallery:not(.has-nested-images).columns-8 .blocks-gallery-item:nth-of-type(8n){margin-right:0}}.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-image:last-child,.blocks-gallery-grid:not(.has-nested-images) .blocks-gallery-item:last-child,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-image:last-child,.wp-block-gallery:not(.has-nested-images) .blocks-gallery-item:last-child{margin-right:0}.blocks-gallery-grid:not(.has-nested-images).alignleft,.blocks-gallery-grid:not(.has-nested-images).alignright,.wp-block-gallery:not(.has-nested-images).alignleft,.wp-block-gallery:not(.has-nested-images).alignright{max-width:420px;width:100%}.blocks-gallery-grid:not(.has-nested-images).aligncenter .blocks-gallery-item figure,.wp-block-gallery:not(.has-nested-images).aligncenter .blocks-gallery-item figure{justify-content:center}.wp-block-gallery:not(.is-cropped) .blocks-gallery-item{align-self:flex-start}figure.wp-block-gallery.has-nested-images{align-items:normal}.wp-block-gallery.has-nested-images figure.wp-block-image:not(#individual-image){width:calc(50% - var(--wp--style--unstable-gallery-gap, 16px)/2);margin:0}.wp-block-gallery.has-nested-images figure.wp-block-image{display:flex;flex-grow:1;justify-content:center;position:relative;flex-direction:column;max-width:100%}.wp-block-gallery.has-nested-images figure.wp-block-image>a,.wp-block-gallery.has-nested-images figure.wp-block-image>div{margin:0;flex-direction:column;flex-grow:1}.wp-block-gallery.has-nested-images figure.wp-block-image img{display:block;height:auto;max-width:100%!important;width:auto}.wp-block-gallery.has-nested-images figure.wp-block-image figcaption{background:linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.3) 70%,transparent);bottom:0;color:#fff;font-size:13px;left:0;margin-bottom:0;max-height:60%;overflow:auto;padding:0 8px 8px;position:absolute;text-align:center;width:100%;box-sizing:border-box}.wp-block-gallery.has-nested-images figure.wp-block-image figcaption img{display:inline}.wp-block-gallery.has-nested-images figure.wp-block-image figcaption a{color:inherit}.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded>a,.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded>div{flex:1 1 auto}.wp-block-gallery.has-nested-images figure.wp-block-image.is-style-rounded figcaption{flex:initial;background:none;color:inherit;margin:0;padding:10px 10px 9px;position:relative}.wp-block-gallery.has-nested-images figcaption{flex-grow:1;flex-basis:100%;text-align:center}.wp-block-gallery.has-nested-images:not(.is-cropped) figure.wp-block-image:not(#individual-image){margin-top:0;margin-bottom:auto}.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image){align-self:inherit}.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image)>a,.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image)>div:not(.components-drop-zone){display:flex}.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) a,.wp-block-gallery.has-nested-images.is-cropped figure.wp-block-image:not(#individual-image) img{width:100%;flex:1 0 0%;height:100%;-o-object-fit:cover;object-fit:cover;}.wp-block-gallery.has-nested-images.columns-1 figure.wp-block-image:not(#individual-image){width:100%}@media (min-width:600px){.wp-block-gallery.has-nested-images.columns-3 figure.wp-block-image:not(#individual-image){width:calc(33.33333% - var(--wp--style--unstable-gallery-gap, 16px)*0.66667)}.wp-block-gallery.has-nested-images.columns-4 figure.wp-block-image:not(#individual-image){width:calc(25% - var(--wp--style--unstable-gallery-gap, 16px)*0.75)}.wp-block-gallery.has-nested-images.columns-5 figure.wp-block-image:not(#individual-image){width:calc(20% - var(--wp--style--unstable-gallery-gap, 16px)*0.8)}.wp-block-gallery.has-nested-images.columns-6 figure.wp-block-image:not(#individual-image){width:calc(16.66667% - var(--wp--style--unstable-gallery-gap, 16px)*0.83333)}.wp-block-gallery.has-nested-images.columns-7 figure.wp-block-image:not(#individual-image){width:calc(14.28571% - var(--wp--style--unstable-gallery-gap, 16px)*0.85714)}.wp-block-gallery.has-nested-images.columns-8 figure.wp-block-image:not(#individual-image){width:calc(12.5% - var(--wp--style--unstable-gallery-gap, 16px)*0.875)}.wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image){width:calc(33.33% - var(--wp--style--unstable-gallery-gap, 16px)*0.66667)}.wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image):first-child:nth-last-child(2),.wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image):first-child:nth-last-child(2)~figure.wp-block-image:not(#individual-image){width:calc(50% - var(--wp--style--unstable-gallery-gap, 16px)*0.5)}.wp-block-gallery.has-nested-images.columns-default figure.wp-block-image:not(#individual-image):first-child:last-child{width:100%}}.wp-block-gallery.has-nested-images.alignleft,.wp-block-gallery.has-nested-images.alignright{max-width:420px;width:100%}.wp-block-gallery.has-nested-images.aligncenter{justify-content:center}.wp-block-group{box-sizing:border-box}h1.has-background,h2.has-background,h3.has-background,h4.has-background,h5.has-background,h6.has-background{padding:1.25em 2.375em}.wp-block-image{margin:0 0 1em}.wp-block-image img{height:auto;max-width:100%;vertical-align:bottom}.wp-block-image:not(.is-style-rounded)>a,.wp-block-image:not(.is-style-rounded) img{border-radius:inherit}.wp-block-image.aligncenter{text-align:center}.wp-block-image.alignfull img,.wp-block-image.alignwide img{height:auto;width:100%}.wp-block-image.aligncenter,.wp-block-image .aligncenter,.wp-block-image.alignleft,.wp-block-image .alignleft,.wp-block-image.alignright,.wp-block-image .alignright{display:table}.wp-block-image.aligncenter>figcaption,.wp-block-image .aligncenter>figcaption,.wp-block-image.alignleft>figcaption,.wp-block-image .alignleft>figcaption,.wp-block-image.alignright>figcaption,.wp-block-image .alignright>figcaption{display:table-caption;caption-side:bottom}.wp-block-image .alignleft{float:left;margin:.5em 1em .5em 0}.wp-block-image .alignright{float:right;margin:.5em 0 .5em 1em}.wp-block-image .aligncenter{margin-left:auto;margin-right:auto}.wp-block-image figcaption{margin-top:.5em;margin-bottom:1em}.wp-block-image.is-style-circle-mask img,.wp-block-image.is-style-rounded img,.wp-block-image .is-style-rounded img{border-radius:9999px}@supports ((-webkit-mask-image:none) or (mask-image:none)) or (-webkit-mask-image:none){.wp-block-image.is-style-circle-mask img{-webkit-mask-image:url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');mask-image:url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');mask-mode:alpha;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-position:center;mask-position:center;border-radius:0}}.wp-block-image figure{margin:0}ol.wp-block-latest-comments{margin-left:0}.wp-block-latest-comments .wp-block-latest-comments{padding-left:0}.wp-block-latest-comments__comment{line-height:1.1;list-style:none;margin-bottom:1em}.has-avatars .wp-block-latest-comments__comment{min-height:2.25em;list-style:none}.has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-excerpt,.has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-meta{margin-left:3.25em}.has-dates .wp-block-latest-comments__comment,.has-excerpts .wp-block-latest-comments__comment{line-height:1.5}.wp-block-latest-comments__comment-excerpt p{font-size:.875em;line-height:1.8;margin:.36em 0 1.4em}.wp-block-latest-comments__comment-date{display:block;font-size:.75em}.wp-block-latest-comments .avatar,.wp-block-latest-comments__comment-avatar{border-radius:1.5em;display:block;float:left;height:2.5em;margin-right:.75em;width:2.5em}.wp-block-latest-posts.alignleft{margin-right:2em}.wp-block-latest-posts.alignright{margin-left:2em}.wp-block-latest-posts.wp-block-latest-posts__list{list-style:none;padding-left:0}.wp-block-latest-posts.wp-block-latest-posts__list li{clear:both}.wp-block-latest-posts.is-grid{display:flex;flex-wrap:wrap;padding:0}.wp-block-latest-posts.is-grid li{margin:0 1.25em 1.25em 0;width:100%}@media (min-width:600px){.wp-block-latest-posts.columns-2 li{width:calc(50% - .625em)}.wp-block-latest-posts.columns-2 li:nth-child(2n){margin-right:0}.wp-block-latest-posts.columns-3 li{width:calc(33.33333% - .83333em)}.wp-block-latest-posts.columns-3 li:nth-child(3n){margin-right:0}.wp-block-latest-posts.columns-4 li{width:calc(25% - .9375em)}.wp-block-latest-posts.columns-4 li:nth-child(4n){margin-right:0}.wp-block-latest-posts.columns-5 li{width:calc(20% - 1em)}.wp-block-latest-posts.columns-5 li:nth-child(5n){margin-right:0}.wp-block-latest-posts.columns-6 li{width:calc(16.66667% - 1.04167em)}.wp-block-latest-posts.columns-6 li:nth-child(6n){margin-right:0}}.wp-block-latest-posts__post-author,.wp-block-latest-posts__post-date{display:block;font-size:.8125em}.wp-block-latest-posts__post-excerpt{margin-top:.5em;margin-bottom:1em}.wp-block-latest-posts__featured-image a{display:inline-block}.wp-block-latest-posts__featured-image img{height:auto;width:auto;max-width:100%}.wp-block-latest-posts__featured-image.alignleft{margin-right:1em;float:left}.wp-block-latest-posts__featured-image.alignright{margin-left:1em;float:right}.wp-block-latest-posts__featured-image.aligncenter{margin-bottom:1em;text-align:center}ol,ul{box-sizing:border-box}ol.has-background,ul.has-background{padding:1.25em 2.375em}.wp-block-media-text{
  direction:ltr;
  display:grid;grid-template-columns:50% 1fr;grid-template-rows:auto}.wp-block-media-text.has-media-on-the-right{grid-template-columns:1fr 50%}.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__content,.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__media{align-self:start}.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__content,.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__media,.wp-block-media-text .wp-block-media-text__content,.wp-block-media-text .wp-block-media-text__media{align-self:center}.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__content,.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__media{align-self:end}.wp-block-media-text .wp-block-media-text__media{
  grid-column:1;grid-row:1;
  margin:0}.wp-block-media-text .wp-block-media-text__content{direction:ltr;
  grid-column:2;grid-row:1;
  padding:0 8%;word-break:break-word}.wp-block-media-text.has-media-on-the-right .wp-block-media-text__media{
  grid-column:2;grid-row:1
  }.wp-block-media-text.has-media-on-the-right .wp-block-media-text__content{
  grid-column:1;grid-row:1
  }.wp-block-media-text__media img,.wp-block-media-text__media video{height:auto;max-width:unset;width:100%;vertical-align:middle}.wp-block-media-text.is-image-fill .wp-block-media-text__media{height:100%;min-height:250px;background-size:cover}.wp-block-media-text.is-image-fill .wp-block-media-text__media>a{display:block;height:100%}.wp-block-media-text.is-image-fill .wp-block-media-text__media img{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}@media (max-width:600px){.wp-block-media-text.is-stacked-on-mobile{grid-template-columns:100%!important}.wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__media{grid-column:1;grid-row:1}.wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__content{grid-column:1;grid-row:2}}.wp-block-navigation{position:relative;--navigation-layout-justification-setting:flex-start;--navigation-layout-direction:row;--navigation-layout-wrap:wrap;--navigation-layout-justify:flex-start;--navigation-layout-align:center}.wp-block-navigation ul{margin-top:0;margin-bottom:0;margin-left:0;padding-left:0}.wp-block-navigation ul,.wp-block-navigation ul li{list-style:none;padding:0}.wp-block-navigation .wp-block-navigation-item{display:flex;align-items:center;position:relative}.wp-block-navigation .wp-block-navigation-item .wp-block-navigation__submenu-container:empty{display:none}.wp-block-navigation .wp-block-navigation-item__content{color:inherit;display:block;padding:0}.wp-block-navigation.has-text-decoration-underline .wp-block-navigation-item__content,.wp-block-navigation.has-text-decoration-underline .wp-block-navigation-item__content:active,.wp-block-navigation.has-text-decoration-underline .wp-block-navigation-item__content:focus{text-decoration:underline}.wp-block-navigation.has-text-decoration-line-through .wp-block-navigation-item__content,.wp-block-navigation.has-text-decoration-line-through .wp-block-navigation-item__content:active,.wp-block-navigation.has-text-decoration-line-through .wp-block-navigation-item__content:focus{text-decoration:line-through}.wp-block-navigation:where(:not([class*=has-text-decoration])) a,.wp-block-navigation:where(:not([class*=has-text-decoration])) a:active,.wp-block-navigation:where(:not([class*=has-text-decoration])) a:focus{text-decoration:none}.wp-block-navigation .wp-block-navigation__submenu-icon{align-self:center;line-height:0;display:inline-block;font-size:inherit;padding:0;background-color:inherit;color:currentColor;border:none;width:.6em;height:.6em;margin-left:.25em}.wp-block-navigation .wp-block-navigation__submenu-icon svg{display:inline-block;stroke:currentColor;width:inherit;height:inherit;margin-top:.075em}.wp-block-navigation.is-vertical{--navigation-layout-direction:column;--navigation-layout-justify:initial;--navigation-layout-align:flex-start}.wp-block-navigation.no-wrap{--navigation-layout-wrap:nowrap}.wp-block-navigation.items-justified-center{--navigation-layout-justification-setting:center;--navigation-layout-justify:center}.wp-block-navigation.items-justified-center.is-vertical{--navigation-layout-align:center}.wp-block-navigation.items-justified-right{--navigation-layout-justification-setting:flex-end;--navigation-layout-justify:flex-end}.wp-block-navigation.items-justified-right.is-vertical{--navigation-layout-align:flex-end}.wp-block-navigation.items-justified-space-between{--navigation-layout-justification-setting:space-between;--navigation-layout-justify:space-between}.wp-block-navigation .has-child :where(.wp-block-navigation__submenu-container){background-color:inherit;color:inherit;position:absolute;z-index:2;display:flex;flex-direction:column;align-items:normal;opacity:0;transition:opacity .1s linear;visibility:hidden;width:0;height:0;overflow:hidden;left:-1px;top:100%}.wp-block-navigation .has-child :where(.wp-block-navigation__submenu-container)>.wp-block-navigation-item>.wp-block-navigation-item__content{display:flex;flex-grow:1}.wp-block-navigation .has-child :where(.wp-block-navigation__submenu-container)>.wp-block-navigation-item>.wp-block-navigation-item__content .wp-block-navigation__submenu-icon{margin-right:0;margin-left:auto}.wp-block-navigation .has-child :where(.wp-block-navigation__submenu-container) .wp-block-navigation-item__content{margin:0}@media (min-width:782px){.wp-block-navigation .has-child :where(.wp-block-navigation__submenu-container) .wp-block-navigation__submenu-container{left:100%;top:-1px}.wp-block-navigation .has-child :where(.wp-block-navigation__submenu-container) .wp-block-navigation__submenu-container:before{content:"";position:absolute;right:100%;height:100%;display:block;width:.5em;background:transparent}.wp-block-navigation .has-child :where(.wp-block-navigation__submenu-container) .wp-block-navigation__submenu-icon{margin-right:.25em}.wp-block-navigation .has-child :where(.wp-block-navigation__submenu-container) .wp-block-navigation__submenu-icon svg{transform:rotate(-90deg)}}.wp-block-navigation .has-child:where(:not(.open-on-click)):hover>.wp-block-navigation__submenu-container{visibility:visible;overflow:visible;opacity:1;width:auto;height:auto;min-width:200px}.wp-block-navigation .has-child:where(:not(.open-on-click):not(.open-on-hover-click)):focus-within>.wp-block-navigation__submenu-container{visibility:visible;overflow:visible;opacity:1;width:auto;height:auto;min-width:200px}.wp-block-navigation .has-child .wp-block-navigation-submenu__toggle[aria-expanded=true]~.wp-block-navigation__submenu-container{visibility:visible;overflow:visible;opacity:1;width:auto;height:auto;min-width:200px}.wp-block-navigation.has-background .has-child .wp-block-navigation__submenu-container{left:0;top:100%}@media (min-width:782px){.wp-block-navigation.has-background .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container{left:100%;top:0}}.wp-block-navigation-submenu{position:relative;display:flex}.wp-block-navigation-submenu .wp-block-navigation__submenu-icon svg{stroke:currentColor}button.wp-block-navigation-item__content{background-color:transparent;border:none;color:currentColor;font-size:inherit;font-family:inherit;line-height:inherit;font-style:inherit;font-weight:inherit;text-transform:inherit;text-align:left}.wp-block-navigation-submenu__toggle{cursor:pointer}.wp-block-navigation-item.open-on-click .wp-block-navigation-submenu__toggle{padding-right:.85em}.wp-block-navigation-item.open-on-click .wp-block-navigation-submenu__toggle+.wp-block-navigation__submenu-icon{margin-left:-.6em;pointer-events:none}.wp-block-navigation,.wp-block-navigation .wp-block-page-list,.wp-block-navigation:where(.has-background),.wp-block-navigation:where(.has-background) .wp-block-navigation .wp-block-page-list,.wp-block-navigation:where(.has-background) .wp-block-navigation__container,.wp-block-navigation__container,.wp-block-navigation__responsive-close,.wp-block-navigation__responsive-container,.wp-block-navigation__responsive-container-content,.wp-block-navigation__responsive-dialog{gap:inherit}.wp-block-navigation:where(.has-background) .wp-block-navigation-item__content,.wp-block-navigation :where(.wp-block-navigation__submenu-container) .wp-block-navigation-item__content{padding:.5em 1em}.wp-block-navigation.items-justified-right .wp-block-navigation__container .has-child .wp-block-navigation__submenu-container,.wp-block-navigation.items-justified-right .wp-block-page-list>.has-child .wp-block-navigation__submenu-container,.wp-block-navigation.items-justified-space-between .wp-block-page-list>.has-child:last-child .wp-block-navigation__submenu-container,.wp-block-navigation.items-justified-space-between>.wp-block-navigation__container>.has-child:last-child .wp-block-navigation__submenu-container{left:auto;right:0}.wp-block-navigation.items-justified-right .wp-block-navigation__container .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,.wp-block-navigation.items-justified-right .wp-block-page-list>.has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,.wp-block-navigation.items-justified-space-between .wp-block-page-list>.has-child:last-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,.wp-block-navigation.items-justified-space-between>.wp-block-navigation__container>.has-child:last-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container{left:-1px;right:-1px}@media (min-width:782px){.wp-block-navigation.items-justified-right .wp-block-navigation__container .has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,.wp-block-navigation.items-justified-right .wp-block-page-list>.has-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,.wp-block-navigation.items-justified-space-between .wp-block-page-list>.has-child:last-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container,.wp-block-navigation.items-justified-space-between>.wp-block-navigation__container>.has-child:last-child .wp-block-navigation__submenu-container .wp-block-navigation__submenu-container{left:auto;right:100%}}.wp-block-navigation:not(.has-background) .wp-block-navigation__submenu-container{background-color:#fff;color:#000;border:1px solid rgba(0,0,0,.15)}.wp-block-navigation__container{display:flex;flex-wrap:var(--navigation-layout-wrap,wrap);flex-direction:var(--navigation-layout-direction,initial);justify-content:var(--navigation-layout-justify,initial);align-items:var(--navigation-layout-align,initial);list-style:none;margin:0;padding-left:0}.wp-block-navigation__container .is-responsive{display:none}.wp-block-navigation__container:only-child,.wp-block-page-list:only-child{flex-grow:1}.wp-block-navigation__responsive-container{display:none;position:fixed;top:0;left:0;right:0;bottom:0}.wp-block-navigation__responsive-container .wp-block-navigation__responsive-container-content{display:flex;flex-wrap:var(--navigation-layout-wrap,wrap);flex-direction:var(--navigation-layout-direction,initial);justify-content:var(--navigation-layout-justify,initial);align-items:var(--navigation-layout-align,initial)}.wp-block-navigation__responsive-container:not(.is-menu-open.is-menu-open){color:inherit!important;background-color:inherit!important}.wp-block-navigation__responsive-container.is-menu-open{display:flex;flex-direction:column;background-color:inherit;padding:2rem;overflow:auto;z-index:100000}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content{padding-top:calc(2rem + 24px);overflow:visible;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:var(--navigation-layout-justification-setting,inherit)}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content,.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__container,.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-page-list{justify-content:flex-start}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__submenu-icon{display:none}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .has-child .submenu-container,.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .has-child .wp-block-navigation__submenu-container{opacity:1;visibility:visible;height:auto;width:auto;overflow:initial;min-width:200px;position:static;border:none;padding-left:2rem;padding-right:2rem}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__container,.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__submenu-container{gap:inherit}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__submenu-container{padding-top:var(--wp--style--block-gap,2em)}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation-item__content{padding:0}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation-item,.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-navigation__container,.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-content .wp-block-page-list{display:flex;flex-direction:column;align-items:var(--navigation-layout-justification-setting,initial)}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item,.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item .wp-block-navigation__submenu-container,.wp-block-navigation__responsive-container.is-menu-open .wp-block-page-list{color:inherit!important;background:transparent!important}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__submenu-container.wp-block-navigation__submenu-container.wp-block-navigation__submenu-container.wp-block-navigation__submenu-container{right:auto;left:auto}@media (min-width:600px){.wp-block-navigation__responsive-container:not(.hidden-by-default):not(.is-menu-open){display:block;width:100%;position:relative;z-index:auto;background-color:inherit}.wp-block-navigation__responsive-container:not(.hidden-by-default):not(.is-menu-open) .wp-block-navigation__responsive-container-close{display:none}.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__submenu-container.wp-block-navigation__submenu-container.wp-block-navigation__submenu-container.wp-block-navigation__submenu-container{left:0}}.wp-block-navigation:not(.has-background) .wp-block-navigation__responsive-container.is-menu-open{background-color:#fff;color:#000}.wp-block-navigation__toggle_button_label{font-size:1rem;font-weight:700}.wp-block-navigation__responsive-container-close,.wp-block-navigation__responsive-container-open{vertical-align:middle;cursor:pointer;color:currentColor;background:transparent;border:none;margin:0;padding:0}.wp-block-navigation__responsive-container-close svg,.wp-block-navigation__responsive-container-open svg{fill:currentColor;pointer-events:none;display:block;width:24px;height:24px}.wp-block-navigation__responsive-container-open{display:flex}@media (min-width:600px){.wp-block-navigation__responsive-container-open:not(.always-shown){display:none}}.wp-block-navigation__responsive-container-close{position:absolute;top:0;right:0;z-index:2}.wp-block-navigation__responsive-close{width:100%}.wp-block-navigation__responsive-close:focus{outline:none}.is-menu-open .wp-block-navigation__responsive-close,.is-menu-open .wp-block-navigation__responsive-container-content,.is-menu-open .wp-block-navigation__responsive-dialog{box-sizing:border-box}.wp-block-navigation__responsive-dialog{position:relative}html.has-modal-open{overflow:hidden}.wp-block-navigation .wp-block-navigation-item__label{word-break:normal;overflow-wrap:break-word}.wp-block-navigation .wp-block-navigation-item__description{display:none}.wp-block-navigation .wp-block-page-list{display:flex;flex-direction:var(--navigation-layout-direction,initial);justify-content:var(--navigation-layout-justify,initial);align-items:var(--navigation-layout-align,initial);flex-wrap:var(--navigation-layout-wrap,wrap);background-color:inherit}.wp-block-navigation .wp-block-navigation-item{background-color:inherit}.is-small-text{font-size:.875em}.is-regular-text{font-size:1em}.is-large-text{font-size:2.25em}.is-larger-text{font-size:3em}.has-drop-cap:not(:focus):first-letter{float:left;font-size:8.4em;line-height:.68;font-weight:100;margin:.05em .1em 0 0;text-transform:uppercase;font-style:normal}p.has-drop-cap.has-background{overflow:hidden}p.has-background{padding:1.25em 2.375em}:where(p.has-text-color:not(.has-link-color)) a{color:inherit}.wp-block-post-author{display:flex;flex-wrap:wrap}.wp-block-post-author__byline{width:100%;margin-top:0;margin-bottom:0;font-size:.5em}.wp-block-post-author__avatar{margin-right:1em}.wp-block-post-author__bio{margin-bottom:.7em;font-size:.7em}.wp-block-post-author__content{flex-grow:1;flex-basis:0}.wp-block-post-author__name{margin:0}.wp-block-post-comments .alignleft{float:left}.wp-block-post-comments .alignright{float:right}.wp-block-post-comments .navigation:after{content:"";display:table;clear:both}.wp-block-post-comments .commentlist{clear:both;list-style:none;margin:0;padding:0}.wp-block-post-comments .commentlist .comment{min-height:2.25em;padding-left:3.25em}.wp-block-post-comments .commentlist .comment p{font-size:1em;line-height:1.8;margin:1em 0}.wp-block-post-comments .commentlist .children{list-style:none;margin:0;padding:0}.wp-block-post-comments .comment-author{line-height:1.5}.wp-block-post-comments .comment-author .avatar{border-radius:1.5em;display:block;float:left;height:2.5em;margin-top:.5em;margin-right:.75em;width:2.5em}.wp-block-post-comments .comment-author cite{font-style:normal}.wp-block-post-comments .comment-meta{font-size:.875em;line-height:1.5}.wp-block-post-comments .comment-meta b{font-weight:400}.wp-block-post-comments .comment-meta .comment-awaiting-moderation{margin-top:1em;margin-bottom:1em;display:block}.wp-block-post-comments .comment-body .commentmetadata{font-size:.875em}.wp-block-post-comments .comment-form-author label,.wp-block-post-comments .comment-form-comment label,.wp-block-post-comments .comment-form-email label,.wp-block-post-comments .comment-form-url label{display:block;margin-bottom:.25em}.wp-block-post-comments .comment-form input:not([type=submit]):not([type=checkbox]),.wp-block-post-comments .comment-form textarea{display:block;box-sizing:border-box;width:100%}.wp-block-post-comments .comment-form-cookies-consent{display:flex;gap:.25em}.wp-block-post-comments .comment-form-cookies-consent #wp-comment-cookies-consent{margin-top:.35em}.wp-block-post-comments .comment-reply-title{margin-bottom:0}.wp-block-post-comments .comment-reply-title :where(small){font-size:var(--wp--preset--font-size--medium,smaller);margin-left:.5em}.wp-block-post-comments .reply{font-size:.875em;margin-bottom:1.4em}.wp-block-post-comments input:not([type=submit]),.wp-block-post-comments textarea{border:1px solid #949494;font-size:1em;font-family:inherit}.wp-block-post-comments input:not([type=submit]):not([type=checkbox]),.wp-block-post-comments textarea{padding:calc(.667em + 2px)}.wp-block-post-comments input[type=submit]{border:none}.wp-block-post-comments-form[style*=font-weight] :where(.comment-reply-title){font-weight:inherit}.wp-block-post-comments-form[style*=font-family] :where(.comment-reply-title){font-family:inherit}.wp-block-post-comments-form[class*=-font-size] :where(.comment-reply-title),.wp-block-post-comments-form[style*=font-size] :where(.comment-reply-title){font-size:inherit}.wp-block-post-comments-form[style*=line-height] :where(.comment-reply-title){line-height:inherit}.wp-block-post-comments-form[style*=font-style] :where(.comment-reply-title){font-style:inherit}.wp-block-post-comments-form[style*=letter-spacing] :where(.comment-reply-title){letter-spacing:inherit}.wp-block-post-comments-form input[type=submit]{border:none;box-shadow:none;cursor:pointer;display:inline-block;text-align:center;overflow-wrap:break-word}.wp-block-post-comments-form input:not([type=submit]),.wp-block-post-comments-form textarea{border:1px solid #949494;font-size:1em;font-family:inherit}.wp-block-post-comments-form input:not([type=submit]):not([type=checkbox]),.wp-block-post-comments-form textarea{padding:calc(.667em + 2px)}.wp-block-post-comments-form .comment-form input:not([type=submit]):not([type=checkbox]),.wp-block-post-comments-form .comment-form textarea{display:block;box-sizing:border-box;width:100%}.wp-block-post-comments-form .comment-form-author label,.wp-block-post-comments-form .comment-form-email label,.wp-block-post-comments-form .comment-form-url label{display:block;margin-bottom:.25em}.wp-block-post-comments-form .comment-form-cookies-consent{display:flex;gap:.25em}.wp-block-post-comments-form .comment-form-cookies-consent #wp-comment-cookies-consent{margin-top:.35em}.wp-block-post-comments-form .comment-reply-title{margin-bottom:0}.wp-block-post-comments-form .comment-reply-title :where(small){font-size:var(--wp--preset--font-size--medium,smaller);margin-left:.5em}.wp-block-post-excerpt__more-link{display:inline-block}.wp-block-post-featured-image{margin-left:0;margin-right:0}.wp-block-post-featured-image a{display:block}.wp-block-post-featured-image img{max-width:100%;width:100%;height:auto;vertical-align:bottom}.wp-block-post-featured-image.alignfull img,.wp-block-post-featured-image.alignwide img{width:100%}.wp-block-post-terms__separator{white-space:pre-wrap}.wp-block-post-title{word-break:break-word}.wp-block-post-title a{display:inline-block}.wp-block-preformatted{white-space:pre-wrap}.wp-block-preformatted.has-background{padding:1.25em 2.375em}.wp-block-pullquote{margin:0 0 1em;padding:3em 0;text-align:center;overflow-wrap:break-word;box-sizing:border-box}.wp-block-pullquote blockquote,.wp-block-pullquote cite,.wp-block-pullquote p{color:inherit}.wp-block-pullquote.alignleft,.wp-block-pullquote.alignright,.wp-block-pullquote.has-text-align-left,.wp-block-pullquote.has-text-align-right{max-width:420px}.wp-block-pullquote.alignleft p,.wp-block-pullquote.alignright p,.wp-block-pullquote.has-text-align-left p,.wp-block-pullquote.has-text-align-right p{font-size:1.25em}.wp-block-pullquote p{font-size:1.75em;line-height:1.6}.wp-block-pullquote cite,.wp-block-pullquote footer{position:relative}.wp-block-pullquote .has-text-color a{color:inherit}.wp-block-pullquote.has-text-align-left blockquote{text-align:left}.wp-block-pullquote.has-text-align-right blockquote{text-align:right}.wp-block-pullquote.is-style-solid-color{border:none}.wp-block-pullquote.is-style-solid-color blockquote{margin-left:auto;margin-right:auto;max-width:60%}.wp-block-pullquote.is-style-solid-color blockquote p{margin-top:0;margin-bottom:0;font-size:2em}.wp-block-pullquote.is-style-solid-color blockquote cite{text-transform:none;font-style:normal}.wp-block-pullquote cite{color:inherit}.wp-block-post-template,.wp-block-query-loop{margin-top:0;margin-bottom:0;max-width:100%;list-style:none;padding:0}.wp-block-post-template.wp-block-post-template,.wp-block-query-loop.wp-block-post-template{background:none}.wp-block-post-template.is-flex-container,.wp-block-query-loop.is-flex-container{flex-direction:row;display:flex;flex-wrap:wrap;gap:1.25em}.wp-block-post-template.is-flex-container li,.wp-block-query-loop.is-flex-container li{margin:0;width:100%}@media (min-width:600px){.wp-block-post-template.is-flex-container.is-flex-container.columns-2>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-2>li{width:calc(50% - .625em)}.wp-block-post-template.is-flex-container.is-flex-container.columns-3>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-3>li{width:calc(33.33333% - .83333em)}.wp-block-post-template.is-flex-container.is-flex-container.columns-4>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-4>li{width:calc(25% - .9375em)}.wp-block-post-template.is-flex-container.is-flex-container.columns-5>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-5>li{width:calc(20% - 1em)}.wp-block-post-template.is-flex-container.is-flex-container.columns-6>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-6>li{width:calc(16.66667% - 1.04167em)}}.wp-block-query-pagination>.wp-block-query-pagination-next,.wp-block-query-pagination>.wp-block-query-pagination-numbers,.wp-block-query-pagination>.wp-block-query-pagination-previous{margin-right:.5em;margin-bottom:.5em}.wp-block-query-pagination>.wp-block-query-pagination-next:last-child,.wp-block-query-pagination>.wp-block-query-pagination-numbers:last-child,.wp-block-query-pagination>.wp-block-query-pagination-previous:last-child{margin-right:0}.wp-block-query-pagination .wp-block-query-pagination-previous-arrow{margin-right:1ch;display:inline-block}.wp-block-query-pagination .wp-block-query-pagination-previous-arrow:not(.is-arrow-chevron){transform:scaleX(1)}.wp-block-query-pagination .wp-block-query-pagination-next-arrow{margin-left:1ch;display:inline-block}.wp-block-query-pagination .wp-block-query-pagination-next-arrow:not(.is-arrow-chevron){transform:scaleX(1)}.wp-block-query-pagination.aligncenter{justify-content:center}.wp-block-quote{box-sizing:border-box;overflow-wrap:break-word}.wp-block-quote.is-large:not(.is-style-plain),.wp-block-quote.is-style-large:not(.is-style-plain){margin-bottom:1em;padding:0 1em}.wp-block-quote.is-large:not(.is-style-plain) p,.wp-block-quote.is-style-large:not(.is-style-plain) p{font-size:1.5em;font-style:italic;line-height:1.6}.wp-block-quote.is-large:not(.is-style-plain) cite,.wp-block-quote.is-large:not(.is-style-plain) footer,.wp-block-quote.is-style-large:not(.is-style-plain) cite,.wp-block-quote.is-style-large:not(.is-style-plain) footer{font-size:1.125em;text-align:right}.wp-block-read-more{display:block;width:-moz-fit-content;width:fit-content}.wp-block-read-more:not([style*=text-decoration]),.wp-block-read-more:not([style*=text-decoration]):active,.wp-block-read-more:not([style*=text-decoration]):focus{text-decoration:none}ul.wp-block-rss{list-style:none;padding:0}ul.wp-block-rss.wp-block-rss{box-sizing:border-box}ul.wp-block-rss.alignleft{margin-right:2em}ul.wp-block-rss.alignright{margin-left:2em}ul.wp-block-rss.is-grid{display:flex;flex-wrap:wrap;padding:0;list-style:none}ul.wp-block-rss.is-grid li{margin:0 1em 1em 0;width:100%}@media (min-width:600px){ul.wp-block-rss.columns-2 li{width:calc(50% - 1em)}ul.wp-block-rss.columns-3 li{width:calc(33.33333% - 1em)}ul.wp-block-rss.columns-4 li{width:calc(25% - 1em)}ul.wp-block-rss.columns-5 li{width:calc(20% - 1em)}ul.wp-block-rss.columns-6 li{width:calc(16.66667% - 1em)}}.wp-block-rss__item-author,.wp-block-rss__item-publish-date{display:block;font-size:.8125em}.wp-block-search__button{background:#f7f7f7;border:1px solid #ccc;padding:.375em .625em;color:#32373c;margin-left:.625em;word-break:normal;font-size:inherit;font-family:inherit;line-height:inherit}.wp-block-search__button.has-icon{line-height:0}.wp-block-search__button svg{min-width:1.5em;min-height:1.5em;fill:currentColor}.wp-block-search__inside-wrapper{display:flex;flex:auto;flex-wrap:nowrap;max-width:100%}.wp-block-search__label{width:100%}.wp-block-search__input{padding:8px;flex-grow:1;min-width:3em;border:1px solid #949494;font-size:inherit;font-family:inherit;line-height:inherit}.wp-block-search.wp-block-search__button-only .wp-block-search__button{margin-left:0}.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper{padding:4px;border:1px solid #949494}.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input{border-radius:0;border:none;padding:0 0 0 .25em}.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input:focus{outline:none}.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__button{padding:.125em .5em}.wp-block-search.aligncenter .wp-block-search__inside-wrapper{margin:auto}.wp-block-separator{border-top:1px solid;border-bottom:1px solid}.wp-block-separator.is-style-dots{background:none!important;border:none;text-align:center;line-height:1;height:auto}.wp-block-separator.is-style-dots:before{content:"···";color:currentColor;font-size:1.5em;letter-spacing:2em;padding-left:2em;font-family:serif}.wp-block-site-logo{line-height:0}.wp-block-site-logo a{display:inline-block}.wp-block-site-logo.is-default-size img{width:120px;height:auto}.wp-block-site-logo a,.wp-block-site-logo img{border-radius:inherit}.wp-block-site-logo.aligncenter{margin-left:auto;margin-right:auto;text-align:center}.wp-block-site-logo.is-style-rounded{border-radius:9999px}.wp-block-social-links{padding-left:0;padding-right:0;text-indent:0;margin-left:0;background:none}.wp-block-social-links .wp-social-link a,.wp-block-social-links .wp-social-link a:hover{text-decoration:none;border-bottom:0;box-shadow:none}.wp-block-social-links .wp-social-link a{padding:.25em}.wp-block-social-links .wp-social-link svg{width:1em;height:1em}.wp-block-social-links .wp-social-link span:not(.screen-reader-text){margin-left:.5em;margin-right:.5em;font-size:.65em}.wp-block-social-links.has-small-icon-size{font-size:16px}.wp-block-social-links,.wp-block-social-links.has-normal-icon-size{font-size:24px}.wp-block-social-links.has-large-icon-size{font-size:36px}.wp-block-social-links.has-huge-icon-size{font-size:48px}.wp-block-social-links.aligncenter{justify-content:center;display:flex}.wp-block-social-links.alignright{justify-content:flex-end}.wp-block-social-link{display:block;border-radius:9999px;transition:transform .1s ease;height:auto}@media (prefers-reduced-motion:reduce){.wp-block-social-link{transition-duration:0s;transition-delay:0s}}.wp-block-social-link a{align-items:center;display:flex;line-height:0;transition:transform .1s ease}.wp-block-social-link:hover{transform:scale(1.1)}.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor,.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor:active,.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor:hover,.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor:visited,.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor svg{color:currentColor;fill:currentColor}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link{background-color:#f0f0f0;color:#444}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-amazon{background-color:#f90;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-bandcamp{background-color:#1ea0c3;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-behance{background-color:#0757fe;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-codepen{background-color:#1e1f26;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-deviantart{background-color:#02e49b;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dribbble{background-color:#e94c89;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dropbox{background-color:#4280ff;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-etsy{background-color:#f45800;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-facebook{background-color:#1778f2;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-fivehundredpx{background-color:#000;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-flickr{background-color:#0461dd;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-foursquare{background-color:#e65678;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-github{background-color:#24292d;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-goodreads{background-color:#eceadd;color:#382110}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-google{background-color:#ea4434;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-instagram{background-color:#f00075;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-lastfm{background-color:#e21b24;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-linkedin{background-color:#0d66c2;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-mastodon{background-color:#3288d4;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-medium{background-color:#02ab6c;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-meetup{background-color:#f6405f;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-patreon{background-color:#ff424d;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pinterest{background-color:#e60122;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pocket{background-color:#ef4155;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-reddit{background-color:#fe4500;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-skype{background-color:#0478d7;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-snapchat{background-color:#fefc00;color:#fff;stroke:#000}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-soundcloud{background-color:#ff5600;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-spotify{background-color:#1bd760;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-telegram{background-color:#2aabee;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-tiktok{background-color:#000;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-tumblr{background-color:#011835;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitch{background-color:#6440a4;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitter{background-color:#1da1f2;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vimeo{background-color:#1eb7ea;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vk{background-color:#4680c2;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-wordpress{background-color:#3499cd;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-yelp{background-color:#d32422;color:#fff}.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-youtube{background-color:red;color:#fff}.wp-block-social-links.is-style-logos-only .wp-social-link{background:none}.wp-block-social-links.is-style-logos-only .wp-social-link a{padding:0}.wp-block-social-links.is-style-logos-only .wp-social-link svg{width:1.25em;height:1.25em}.wp-block-social-links.is-style-logos-only .wp-social-link-amazon{color:#f90}.wp-block-social-links.is-style-logos-only .wp-social-link-bandcamp{color:#1ea0c3}.wp-block-social-links.is-style-logos-only .wp-social-link-behance{color:#0757fe}.wp-block-social-links.is-style-logos-only .wp-social-link-codepen{color:#1e1f26}.wp-block-social-links.is-style-logos-only .wp-social-link-deviantart{color:#02e49b}.wp-block-social-links.is-style-logos-only .wp-social-link-dribbble{color:#e94c89}.wp-block-social-links.is-style-logos-only .wp-social-link-dropbox{color:#4280ff}.wp-block-social-links.is-style-logos-only .wp-social-link-etsy{color:#f45800}.wp-block-social-links.is-style-logos-only .wp-social-link-facebook{color:#1778f2}.wp-block-social-links.is-style-logos-only .wp-social-link-fivehundredpx{color:#000}.wp-block-social-links.is-style-logos-only .wp-social-link-flickr{color:#0461dd}.wp-block-social-links.is-style-logos-only .wp-social-link-foursquare{color:#e65678}.wp-block-social-links.is-style-logos-only .wp-social-link-github{color:#24292d}.wp-block-social-links.is-style-logos-only .wp-social-link-goodreads{color:#382110}.wp-block-social-links.is-style-logos-only .wp-social-link-google{color:#ea4434}.wp-block-social-links.is-style-logos-only .wp-social-link-instagram{color:#f00075}.wp-block-social-links.is-style-logos-only .wp-social-link-lastfm{color:#e21b24}.wp-block-social-links.is-style-logos-only .wp-social-link-linkedin{color:#0d66c2}.wp-block-social-links.is-style-logos-only .wp-social-link-mastodon{color:#3288d4}.wp-block-social-links.is-style-logos-only .wp-social-link-medium{color:#02ab6c}.wp-block-social-links.is-style-logos-only .wp-social-link-meetup{color:#f6405f}.wp-block-social-links.is-style-logos-only .wp-social-link-patreon{color:#ff424d}.wp-block-social-links.is-style-logos-only .wp-social-link-pinterest{color:#e60122}.wp-block-social-links.is-style-logos-only .wp-social-link-pocket{color:#ef4155}.wp-block-social-links.is-style-logos-only .wp-social-link-reddit{color:#fe4500}.wp-block-social-links.is-style-logos-only .wp-social-link-skype{color:#0478d7}.wp-block-social-links.is-style-logos-only .wp-social-link-snapchat{color:#fff;stroke:#000}.wp-block-social-links.is-style-logos-only .wp-social-link-soundcloud{color:#ff5600}.wp-block-social-links.is-style-logos-only .wp-social-link-spotify{color:#1bd760}.wp-block-social-links.is-style-logos-only .wp-social-link-telegram{color:#2aabee}.wp-block-social-links.is-style-logos-only .wp-social-link-tiktok{color:#000}.wp-block-social-links.is-style-logos-only .wp-social-link-tumblr{color:#011835}.wp-block-social-links.is-style-logos-only .wp-social-link-twitch{color:#6440a4}.wp-block-social-links.is-style-logos-only .wp-social-link-twitter{color:#1da1f2}.wp-block-social-links.is-style-logos-only .wp-social-link-vimeo{color:#1eb7ea}.wp-block-social-links.is-style-logos-only .wp-social-link-vk{color:#4680c2}.wp-block-social-links.is-style-logos-only .wp-social-link-wordpress{color:#3499cd}.wp-block-social-links.is-style-logos-only .wp-social-link-yelp{color:#d32422}.wp-block-social-links.is-style-logos-only .wp-social-link-youtube{color:red}.wp-block-social-links.is-style-pill-shape .wp-social-link{width:auto}.wp-block-social-links.is-style-pill-shape .wp-social-link a{padding-left:.66667em;padding-right:.66667em}.wp-block-spacer{clear:both}.wp-block-tag-cloud.aligncenter{text-align:center}.wp-block-tag-cloud.alignfull{padding-left:1em;padding-right:1em}.wp-block-tag-cloud a{display:inline-block;margin-right:5px}.wp-block-tag-cloud span{display:inline-block;margin-left:5px;text-decoration:none}.wp-block-tag-cloud.is-style-outline{display:flex;flex-wrap:wrap;gap:1ch}.wp-block-tag-cloud.is-style-outline a{border:1px solid;font-size:unset!important;margin-right:0;padding:1ch 2ch;text-decoration:none!important}.wp-block-table{margin:0 0 1em;overflow-x:auto}.wp-block-table table{border-collapse:collapse;width:100%}.wp-block-table .has-fixed-layout{table-layout:fixed;width:100%}.wp-block-table .has-fixed-layout td,.wp-block-table .has-fixed-layout th{word-break:break-word}.wp-block-table.aligncenter,.wp-block-table.alignleft,.wp-block-table.alignright{display:table;width:auto}.wp-block-table.aligncenter td,.wp-block-table.aligncenter th,.wp-block-table.alignleft td,.wp-block-table.alignleft th,.wp-block-table.alignright td,.wp-block-table.alignright th{word-break:break-word}.wp-block-table .has-subtle-light-gray-background-color{background-color:#f3f4f5}.wp-block-table .has-subtle-pale-green-background-color{background-color:#e9fbe5}.wp-block-table .has-subtle-pale-blue-background-color{background-color:#e7f5fe}.wp-block-table .has-subtle-pale-pink-background-color{background-color:#fcf0ef}.wp-block-table.is-style-stripes{border-spacing:0;border-collapse:inherit;background-color:transparent;border-bottom:1px solid #f0f0f0}.wp-block-table.is-style-stripes tbody tr:nth-child(odd){background-color:#f0f0f0}.wp-block-table.is-style-stripes.has-subtle-light-gray-background-color tbody tr:nth-child(odd){background-color:#f3f4f5}.wp-block-table.is-style-stripes.has-subtle-pale-green-background-color tbody tr:nth-child(odd){background-color:#e9fbe5}.wp-block-table.is-style-stripes.has-subtle-pale-blue-background-color tbody tr:nth-child(odd){background-color:#e7f5fe}.wp-block-table.is-style-stripes.has-subtle-pale-pink-background-color tbody tr:nth-child(odd){background-color:#fcf0ef}.wp-block-table.is-style-stripes td,.wp-block-table.is-style-stripes th{border-color:transparent}.wp-block-table .has-border-color>*,.wp-block-table .has-border-color td,.wp-block-table .has-border-color th,.wp-block-table .has-border-color tr{border-color:inherit}.wp-block-table table[style*=border-style]>*,.wp-block-table table[style*=border-style] td,.wp-block-table table[style*=border-style] th,.wp-block-table table[style*=border-style] tr{border-style:inherit}.wp-block-table table[style*=border-width]>*,.wp-block-table table[style*=border-width] td,.wp-block-table table[style*=border-width] th,.wp-block-table table[style*=border-width] tr{border-width:inherit;border-style:inherit}.wp-block-text-columns,.wp-block-text-columns.aligncenter{display:flex}.wp-block-text-columns .wp-block-column{margin:0 1em;padding:0}.wp-block-text-columns .wp-block-column:first-child{margin-left:0}.wp-block-text-columns .wp-block-column:last-child{margin-right:0}.wp-block-text-columns.columns-2 .wp-block-column{width:50%}.wp-block-text-columns.columns-3 .wp-block-column{width:33.33333%}.wp-block-text-columns.columns-4 .wp-block-column{width:25%}pre.wp-block-verse{font-family:inherit;overflow:auto;white-space:pre-wrap}.wp-block-video{margin:0 0 1em}.wp-block-video video{width:100%}@supports (position:sticky){.wp-block-video [poster]{-o-object-fit:cover;object-fit:cover}}.wp-block-video.aligncenter{text-align:center}.wp-block-video figcaption{margin-top:.5em;margin-bottom:1em}:root{--wp--preset--font-size--normal:16px;--wp--preset--font-size--huge:42px}:root .has-very-light-gray-background-color{background-color:#eee}:root .has-very-dark-gray-background-color{background-color:#313131}:root .has-very-light-gray-color{color:#eee}:root .has-very-dark-gray-color{color:#313131}:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background{background:linear-gradient(135deg,#00d084,#0693e3)}:root .has-purple-crush-gradient-background{background:linear-gradient(135deg,#34e2e4,#4721fb 50%,#ab1dfe)}:root .has-hazy-dawn-gradient-background{background:linear-gradient(135deg,#faaca8,#dad0ec)}:root .has-subdued-olive-gradient-background{background:linear-gradient(135deg,#fafae1,#67a671)}:root .has-atomic-cream-gradient-background{background:linear-gradient(135deg,#fdd79a,#004a59)}:root .has-nightshade-gradient-background{background:linear-gradient(135deg,#330968,#31cdcf)}:root .has-midnight-gradient-background{background:linear-gradient(135deg,#020381,#2874fc)}.has-regular-font-size{font-size:1em}.has-larger-font-size{font-size:2.625em}.has-normal-font-size{font-size:var(--wp--preset--font-size--normal)}.has-huge-font-size{font-size:var(--wp--preset--font-size--huge)}.has-text-align-center{text-align:center}.has-text-align-left{text-align:left}.has-text-align-right{text-align:right}#end-resizable-editor-section{display:none}.aligncenter{clear:both}.items-justified-left{justify-content:flex-start}.items-justified-center{justify-content:center}.items-justified-right{justify-content:flex-end}.items-justified-space-between{justify-content:space-between}.screen-reader-text{border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;word-wrap:normal!important}.screen-reader-text:focus{background-color:#ddd;clip:auto!important;-webkit-clip-path:none;clip-path:none;color:#444;display:block;font-size:1em;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}html :where(.has-border-color),html :where([style*=border-width]){border-style:solid}html :where(img[class*=wp-image-]){height:auto;max-width:100%}
  .blocks-gallery-caption {
    font-size: 1.8rem;
    line-height: calc(30/18);
    font-weight: 300;
  }
  ul li {
    font-size: 1.8rem;
    line-height: calc(30/18);
    margin: 0;
    margin-bottom: 8px;
    font-weight: 300;
  }
`;
