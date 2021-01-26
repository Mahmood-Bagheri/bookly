import React, { FC } from 'react';
/* components */
import { FormInstance, useForm } from 'antd/lib/form/Form';
import { Form } from 'antd';
import { Row } from 'components/Row';
import { Input } from 'components/Input';
import { Col } from 'components/Col';
import { Button } from 'components/Button';
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { CreatePublisherFormProps } from './CreatePublisherForm.types';
import { ValidationRuleType } from 'types/global';
/* styles */
import s from './CreatePublisherForm.module.scss';
import { UploadDropbox } from 'components/UploadDropbox';
import { DraggerProps } from 'antd/lib/upload';

export const CreatePublisherForm: FC<CreatePublisherFormProps> = ({
    loading = false,
    onSubmit,
    ...restProps
}) => {
    const [form] = useForm();
    return (
        <Form form={form} onFinish={v => onSubmit(v, form)} layout='vertical'>
            <Row className='mb-2'>
                <Col lg={4}>
                    <Form.Item
                        name='image'
                        label='عکس ناشر'
                        valuePropName='file'
                    >
                        <UploadDropbox {...getDropboxConfig(form)} />
                    </Form.Item>

                    <Form.Item
                        name='title'
                        rules={rules.title}
                        label='نام ناشر'
                    >
                        <Input.Text />
                    </Form.Item>
                </Col>
                <Col lg={4}>
                    <Form.Item
                        name='description'
                        rules={rules.description}
                        label='توضیحات ناشر'
                    >
                        <Input.Textarea rows={9} />
                    </Form.Item>
                </Col>
                <Col lg={1} className='d-flex justify-content-start'>
                    <Button htmlType='submit' loading={loading} type='primary'>
                        افرودن ناشر
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export const rules: ValidationRuleType = {
    title: [
        {
            required: true,
            message: 'نام ناشر را وارد کنید',
        },
    ],
    description: [
        {
            required: true,
            message: 'توضیحات ناشر را وارد کنید',
        },
    ],
};

export const getDropboxConfig = (form: FormInstance): DraggerProps => {
    const dropboxConfigsObject: DraggerProps = {
        showUploadList: false,
        multiple: false,
        accept: 'image/x-png,image/gif,image/jpeg',
        beforeUpload: file => {
            return false;
        },
        onChange: file => {
            form.setFieldsValue({ image: file.file });
        },
    };

    return dropboxConfigsObject;
};
