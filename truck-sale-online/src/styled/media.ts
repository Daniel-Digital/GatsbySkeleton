export const DESKTOP_VIEW = '1000px';
export const TABLET_VIEW = '1000px';

export const mediaQueries = {
  isDesktop: `@media (min-width: ${DESKTOP_VIEW})`,
  isNotDesktop: `@media (max-width: ${DESKTOP_VIEW})`,

  isTablet: `@media (min-width: ${TABLET_VIEW})`,
  isNotTablet: `@media (max-width: ${TABLET_VIEW})`,
};
