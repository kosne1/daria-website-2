import {Box} from "@chakra-ui/react";
import {Header} from "../Layout/Header/Header";
import {AllSpots} from "../Layout/BackgroundSpots/AllSpots";
import {useWindowSize} from '../../../hooks/useWindowSize';

export const MainPage = () => {
    return <Box>
        <AllSpots/>
        <Header/>
    </Box>
}