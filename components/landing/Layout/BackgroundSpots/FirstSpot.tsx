import {Box} from "@chakra-ui/react";

export const FirstSpot = ({height, width}) => {
    return <Box position="absolute" height={height} width={width}
                backgroundColor="rgba(202, 202, 202, 1);" zIndex={-100}/>;
}