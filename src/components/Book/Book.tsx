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

export type BookBaseProps = {
    publisher: string;
    title: string;
    subTitle: string;
    price: string;
    priceUnit: string;
};

export type BookComponentProps = React.HtmlHTMLAttributes<HTMLDivElement> &
    BookBaseProps;

export const Book: React.FunctionComponent<Partial<BookComponentProps>> = ({
    price = "price",
    priceUnit = "price Unit",
    publisher = "Publisher",
    subTitle = "Sub title",
    title = "title",
    ...restProps
}) => {
    return (
        <Box {...restProps}>
            <Header>
                <Publisher>{publisher}</Publisher>
                <Dropdown>Dropdown</Dropdown>
            </Header>

            <Image />

            <Content>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>

                <PriceBox>
                    <Price>{price}</Price>
                    <PriceUnit>{priceUnit}</PriceUnit>
                </PriceBox>
            </Content>
        </Box>
    );
};
