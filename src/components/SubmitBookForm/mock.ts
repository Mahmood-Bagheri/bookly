import { LabeledValue } from "antd/lib/select";
import { Category } from "components/BookCategoryBox";
import { Publisher } from "components/PublisherBox";
import { mock } from "helpers/mock";

export const categoryOptions: LabeledValue[] = mock<Category>(
    "categories",
    10
).map(item => ({
    key: item.id,
    value: item.id,
    label: item.categoryTitle,
}));

export const publishersOptions: LabeledValue[] = mock<Publisher>(
    "publishers",
    10
).map(item => ({
    key: item.id,
    value: item.id,
    label: item.title,
}));
