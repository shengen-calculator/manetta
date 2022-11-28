import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" sx={{textDecoration: 'none'}} href="https://mui.com/">
                MANETTA
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
};
export default Copyright;