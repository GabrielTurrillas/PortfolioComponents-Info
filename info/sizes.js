const size = {
  mobileS: '320px',
  mobileM: '375px', //375-64=311
  mobileL: '425px', //425−64=361
  tablet: '768px', //768−64=704
  laptop: '1024px', //1024−160=864
  laptopL: '1440px', //1440-160=1280
  desktop: '2560px'
}


export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};