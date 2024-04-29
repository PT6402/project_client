/* eslint-disable react/prop-types */
// @mui material components
import List from "@mui/material/List";

function SidenavList({ children }) {
  return (
    <List
      sx={{
        pl: 2,
        ml: 3,
      }}
    >
      {children}
    </List>
  );
}

export default SidenavList;
