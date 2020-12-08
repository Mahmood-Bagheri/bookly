import { LabeledValue } from "antd/lib/select";
import { Publisher } from "components/PublisherBox";
import { mock } from "helpers/mock";
import { yearGenerator } from "helpers/yearGenerator";

export const categoryOptions: LabeledValue[] = mock<Category.Base>(
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

export const yearsOptions: LabeledValue[] = yearGenerator(1300, 1399)
    .sort((a, b) => b - a)
    .map(year => ({ label: year, value: year, key: year.toString() }));
