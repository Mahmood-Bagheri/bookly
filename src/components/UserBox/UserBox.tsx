import React, { FC } from 'react';
/* components */
import { Text } from 'components/Text';
import { Image } from 'components/Image';
import { UserBoxShimmer } from './UserBoxShimmer';
/* modules */
import clsx from 'classnames';
import dayJs from 'dayjs';
import { useToggle } from 'hooks/useToggle';
/* helpers */
/* assets */
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
/* types */
import { UserBoxProps, RoleUnionType } from './UserBox.types';
/* styles */
import s from './UserBox.module.scss';

export const UserBox: FC<UserBoxProps> = ({
    className,
    name,
    role,
    biography,
    _id,
    image,
    createdAt,
    updatedAt,
    ...restProps
}) => {
    const [biographyExpanded, toggleExpantion] = useToggle(false);
    const registerationDate = dayJs().from(createdAt, true);

    return (
        <div
            className={clsx(s.box, `shadow p-4 mb-4`, className)}
            {...restProps}
        >
            <div className='d-flex align-items-center'>
                <Image
                    className={s.profileImage}
                    src={`${process.env.REACT_APP_API_URL}/${image.filename}`}
                />

                <div className={s.nameRoleWrap}>
                    <Text className={s.name}>{name}</Text>
                    <Text className={s.role}>{transformRole(role)}</Text>
                </div>
                <div className={s.registerDate}>
                    عضو از {registerationDate} پیش
                </div>
            </div>
            <Text className={s.biographyTitle}>بیوگرافی کاربر</Text>
            <Text
                className={clsx(s.biography, {
                    [s.collapsed]: !biographyExpanded,
                })}
            >
                {biography}
            </Text>
        </div>
    );
};

// todo -> checkout how we can make bettter (generalize) this part

const transformRole = (role: RoleUnionType) => {
    switch (role) {
        case 'ADMIN':
            return 'مدیر';
        case 'AUTHOR':
            return 'نویسنده';
        case 'USER':
            return 'کاربر';
        default:
            return 'بدون نقش!';
    }
};
