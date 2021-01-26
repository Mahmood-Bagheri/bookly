import React, { FC } from 'react';
/* components */
import { CategoryDetailsBoxShimmer } from './CategoryDetailsBoxShimmer';
import { Text } from 'components/Text';
import { Image } from 'components/Image';
import { Typography } from 'antd';
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { CategoryDetailsBoxProps } from './CategoryDetailsBox.types';
/* styles */
import s from './CategoryDetailsBox.module.scss';
import { AclService } from 'services/rbac';
import { useUpdateCategory } from 'hooks';
import { useParams } from 'react-router-dom';
import { queryCache } from 'services/react-query/reactQueryService';
import API_URLS from 'constants/apiUrls';

export const CategoryDetailsBox: FC<CategoryDetailsBoxProps> = ({
    className,
    categoryTitle,
    imageSrc,
    loading = false,
    ...restProps
}) => {
    const [updateCategory] = useUpdateCategory();
    const params = useParams<{ categoryId: string }>();

    if (loading) {
        return <CategoryDetailsBoxShimmer />;
    }

    return (
        <div
            className={clsx(s.box, `shadow p-4 mb-4`, className)}
            {...restProps}
        >
            <div className='d-flex flex-column align-items-center'>
                {/* <Image className={s.categoryImage} src={imageSrc} /> */}
                {/*  <AclService permission="category.update">
                    <Typography.Paragraph
                        className={s.name}
                        editable={{
                            onChange: newCategoryTitle => {
                                updateCategory({
                                    categoryTitle: newCategoryTitle,
                                    categoryId: params.categoryId,
                                });
                            },
                        }}
                    >
                        {categoryTitle}
                    </Typography.Paragraph>
                </AclService> */}
                <Text className={s.name}>
                    دسته بندی کتاب های {categoryTitle}
                </Text>
            </div>
            {/* <Text className={clsx(s.description)}>{description}</Text> */}
        </div>
    );
};
