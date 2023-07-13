//JSX: JS files that have react components in them//
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form.jsx";
const LoginPage = () => {
    const theme = useTheme();
    const inNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return <Box>
        <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center"><Typography
            fontWeight="bold"
            fontSize="32px"
            color="primary"
            >
            NexusNet

            </Typography></Box>
           <Box width={isNonMobileScreens ? "50%" : "93%"}
           p="2rem"
           m="2rem auto"
           borderRadius="1.5rem"
           backgroundColor={theme.palette.background.alt}
           >
            <Typography fontWeight="500" variant= "h5" sx={{ mb: "1.5rem"}}>
                Welcome to NexusNet, the Social Media for the Next Generation.
            </Typography>
            <Form />
           </Box>
    </Box>;
};

export default LoginPage;
