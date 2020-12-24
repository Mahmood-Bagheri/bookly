import { screen } from "@testing-library/react";
import { generateFakeImageUrl } from "helpers/generateFakeImageUrl";
import { setupWrapper } from "helpers/setupWrapper";
import { $ElementProps } from "types/global";
import { BookBox } from "./BookBox";

describe("<BookBox />", () => {
    const onDeleteBook = jest.fn();

    const props: $ElementProps<typeof BookBox> = {
        id: "1",
        author: "Mahmood Bagheri",
        initialLikeState: true,
        title: "I'm thinking to you",
        imageSrc: generateFakeImageUrl(),
        onDeleteBook,
    };

    it("Should render title mese aadam", () => {
        const title = screen.getByText(props.title);
        expect(title).toBeInTheDocument();
    });

    // it("Should fire like on click of heart button", () => {
    //     const likeButton = screen.getByTestId(/likeButton/);
    //     fireEvent.click(likeButton);
    //     expect(props.onLikeStateChange).toBeCalledTimes(1);
    // });
});
