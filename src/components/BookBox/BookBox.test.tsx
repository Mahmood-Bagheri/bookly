import { fireEvent, screen } from "@testing-library/react";
import { setupWrapper } from "helpers/test";
import { BookBox } from "./BookBox";
import { BookBoxComponentProps } from "./BookBox.types.d";

describe("<BookBox />", () => {
    const onDeleteBook = jest.fn();
    const onLikeStateChange = jest.fn();

    const props: BookBoxComponentProps = {
        id: "1",
        author: "Mahmood Bagheri",
        initialLikeState: true,
        title: "I'm thinking to you",
        imageSrc: "https://source.unsplash.com/500x500/?book&sig=1",
        onDeleteBook,
        onLikeStateChange,
    };

    const wrapper = setupWrapper(BookBox, props);

    it("Should render title mese aadam", () => {
        const title = screen.getByText(props.title);
        expect(title).toBeInTheDocument();
    });

    it("Should fire like on click of heart button", () => {
        const likeButton = screen.getByTestId(/likeButton/);
        fireEvent.click(likeButton);
        expect(props.onLikeStateChange).toBeCalledTimes(1);
    });
});
