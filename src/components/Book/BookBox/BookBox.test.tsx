import { screen } from '@testing-library/react';
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';
import { setupWrapper } from 'helpers/setupWrapper';
import { $ElementProps } from 'types/global';
import { BookBox } from './BookBox';

describe('<BookBox />', () => {
    const onDeleteBook = jest.fn();

    const props: $ElementProps<typeof BookBox> = {
        id: '1',
        author: 'Mahmood Bagheri',
        initialLikeState: true,
        title: 'جز از کل',
        imageSrc: generateFakeImageUrl(),
        onDeleteBook,
    };
    const wrapper = setupWrapper(BookBox, props);

    it('Should render title mese aadam', () => {
        const title = wrapper.getByText(props.title);
        expect(title).toBeInTheDocument();
    });
});
