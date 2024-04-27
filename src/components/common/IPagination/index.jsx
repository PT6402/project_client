/* eslint-disable react/prop-types */
import { forwardRef, createContext, useContext, useMemo } from "react";

import IBox from "components/common/IBox";

import IPaginationItemRoot from "components/common/IPagination/IPaginationItemRoot";

const Context = createContext();

const IPagination = forwardRef(
  ({ item, variant, color, size, active, children, ...rest }, ref) => {
    const context = useContext(Context);
    const paginationSize = context ? context.size : null;
    const value = useMemo(
      () => ({ variant, color, size }),
      [variant, color, size]
    );

    return (
      <Context.Provider value={value}>
        {item ? (
          <IPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            color={active ? context.color : "secondary"}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </IPaginationItemRoot>
        ) : (
          <IBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </IBox>
        )}
      </Context.Provider>
    );
  }
);
IPagination.displayName = "IPagination";
IPagination.defaultProps = {
  item: false,
  variant: "gradient",
  color: "info",
  size: "medium",
  active: false,
};

export default IPagination;
