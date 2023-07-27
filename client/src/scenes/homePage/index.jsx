//JSX: JS files that have react components in them//

import { Box, useMediaQuery } from "@mui/material";
import Navbar from "/Users/sudeepta/client/src/scenes/navBar";
import { useSelector } from "react-redux";


const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const {_id, picturePath } = useSelector((state) => state.user);
    return (
        <Box
        width= "100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between">
            <Box flexBasis={ isNonMobileScreens ? "26%" : undefined}>
                <UserWidget userId ={_id} picturePath={picturePath} />
            </Box>
            <Box 
            flexBasis ={isNonMobileScreens ? "42%" : undefined}
            my={isNonMobileScreens ? undefined : "2rem"}
            >
            </Box>
            {isNonMobileScreens && (
                <Box flexBasis ="26%"></Box>
            )}
            <Navbar />
        </Box>
    );
};

export default HomePage;
