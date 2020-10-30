import React from "react";
import {
    Box,
    Content,
    Dropdown,
    Header,
    Image,
    Price,
    PriceBox,
    PriceUnit,
    Publisher,
    SubTitle,
    Title,
} from "./styles";
type BookProps = {};

export const Book: React.FunctionComponent<BookProps> = props => {
    return (
        <Box>
            <Header>
                <Publisher>Publisher</Publisher>
                <Dropdown>Dropdown</Dropdown>
            </Header>

            <Image />

            <Content>
                <Title>Title</Title>
                <SubTitle>SubTitle</SubTitle>

                <PriceBox>
                    <Price>Price</Price>
                    <PriceUnit>Price Unit</PriceUnit>
                </PriceBox>
            </Content>
        </Box>
    );
};
