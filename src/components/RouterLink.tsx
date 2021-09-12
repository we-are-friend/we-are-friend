import React, { forwardRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { UrlObject } from 'url';
// import { useTranslation } from 'next-i18next';
interface RouterLinkProps {
  className?: string;
  children?: any;
  hrefAs?: string | UrlObject | undefined;
}

export type NextLinkComposedProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> &
  Omit<NextLinkProps, 'href'> & {
    to: NextLinkProps['href'];
    href?: any;
  } & RouterLinkProps &
  MuiLinkProps;

// eslint-disable-next-line react/display-name
const RouterLink = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  (props, ref) => {
    const { to, as, replace, scroll, shallow, prefetch, children, ...other } =
      props;
    // const { i18n } = useTranslation();
    return (
      <NextLink
        passHref
        as={as}
        href={to}
        // locale={i18n.language}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        <MuiLink ref={ref} underline="none" {...other}>
          {children}
        </MuiLink>
      </NextLink>
    );
  },
);

export default RouterLink;
