import React, { FC } from 'react';
/* components */
import { Form } from 'antd';
import { Row } from 'components/Row';
import { Col } from 'components/Col';
import { UploadDropbox } from 'components/UploadDropbox';
import { Text } from 'components/Text';
import { Button } from 'components/Button';
import { Select } from 'components/Select';
import { Input } from 'components/Input';
import { ReadingBookSvg } from 'components/ReadingBookSvg';
/* modules */
import clsx from 'classnames';
import { useParams } from 'react-router-dom';
import { useCategories, usePublishers, useAuthors } from 'hooks';
/* helpers */
import { map } from 'lodash/fp';
/* assets */
/* mock */
import { yearsOptions } from './mock';
/* types */
import { SubmitBookFormProps } from './SubmitBookForm.types';
import { Publisher } from 'types/publisher';

/* utils */
import { getDropboxConfig, renderSubmitBookTitle } from './utils';
/* styles */
import s from './SubmitBookForm.module.scss';

export const SubmitBookForm: FC<SubmitBookFormProps> = ({
    onSubmit,
    loading = false,
}) => {
    const [form] = Form.useForm();
    const { bookId } = useParams<Book.Id>();
    const { data: categories } = useCategories();
    const { data: publishers } = usePublishers();
    const { data: authors } = useAuthors();

    if (!categories || !publishers) {
        return <div>loading...</div>;
    }

    return (
        <div className={clsx(s.box, `shadow p-3`)}>
            <Text className={s.title}>{renderSubmitBookTitle(bookId)}</Text>

            <Form
                form={form}
                layout='vertical'
                className='mt-3'
                onFinish={onSubmit}
            >
                <Row>
                    <Col lg={4}>
                        <ReadingBookSvg className='d-block d-lg-none mb-2' />

                        <Form.Item name='title' label='نام کتاب'>
                            <Input.Text />
                        </Form.Item>

                        <Form.Item name='author' label='نویسنده'>
                            <Select
                                options={map((author: Author.Query.Result) => ({
                                    value: author._id,
                                    label: author.name,
                                }))(authors)}
                            />
                        </Form.Item>

                        <Form.Item name='releaseYear' label='سال نشر'>
                            <Select options={yearsOptions} allowClear />
                        </Form.Item>

                        <Form.Item name='category' label='دسته بندی'>
                            <Select
                                options={map(
                                    (category: Category.Query.Result) => ({
                                        value: category._id,
                                        label: category.title,
                                    })
                                )(categories)}
                            />
                        </Form.Item>
                    </Col>
                    <Col lg={4}>
                        <Form.Item name='description' label='توضیحات'>
                            <Input.Textarea />
                        </Form.Item>
                        <Form.Item name='publisher' label='ناشر'>
                            <Select
                                options={map(
                                    (publisher: Publisher.Query.Result) => ({
                                        value: publisher._id,
                                        label: publisher.title,
                                    })
                                )(publishers)}
                            />
                        </Form.Item>

                        <Form.Item
                            name='image'
                            label='عکس کتاب'
                            valuePropName='file'
                        >
                            <UploadDropbox {...getDropboxConfig(form)} />
                        </Form.Item>
                    </Col>
                    <Col
                        lg={4}
                        className='d-flex flex-column justify-content-between align-items-end'
                    >
                        <ReadingBookSvg className='d-none d-lg-block' />

                        <Form.Item>
                            <Button
                                className='mt-4'
                                size='large'
                                type='primary'
                                htmlType='submit'
                                loading={loading}
                            >
                                {renderSubmitBookTitle(bookId)}
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
