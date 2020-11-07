import React, { FunctionComponent } from "react";
/* components */
import { Modal as AntDesignModal } from "antd";
import { Button } from "components/Button";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { ModalComponentProps } from "./Modal.types";
/* styles */
import s from "./Modal.module.scss";

export const Modal: FunctionComponent<ModalComponentProps> = props => {
    const { className, ...restProps } = props;

    const footerContent = () => (
        <>
            <Button onClick={props.onCancel}>نه</Button>
            <Button type="primary" onClick={props.onOk}>
                باشه
            </Button>
        </>
    );
    return (
        <AntDesignModal
            className={s.modal}
            {...restProps}
            footer={footerContent()}
        />
    );
};
