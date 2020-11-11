import React, { FC, Fragment } from "react";
/* components */
import { BookDetailsBox } from "components/BookDetailsBox";
import { BookDescriptionText } from "components/BookDescriptionText";
import { CommentsGrid } from "components/CommentsGrid";
import { CommentInputBox } from "components/CommentInputBox";
import { Container } from "components/Container";
import { RbacRender } from "services/rbac";

/* modules */
import { randomDate } from "helpers/randomDate";

const Book: FC = props => {
    const comments = [
        {
            id: "123",
            username: "سمیه",
            date: randomDate(new Date("2020/1/1")),
            body: "خیلی خوب بود :)",
        },
    ];
    const description = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`;
    return (
        <Container>
            <div className="row">
                <div className="col-xl-4">
                    <BookDetailsBox
                        title="کتاب جز از کل"
                        author="استیو تولتز"
                    />
                    <RbacRender permission="comments.create">
                        <CommentInputBox
                            onSubmit={comment => console.log(comment)}
                        />
                    </RbacRender>
                </div>
                <div className="col-xl-8 mt-3 mt-xl-0">
                    <BookDescriptionText description={description} />

                    <RbacRender permission="comments.read">
                        <CommentsGrid loading={false} comments={comments} />
                    </RbacRender>
                </div>
            </div>
        </Container>
    );
};

export default Book;
