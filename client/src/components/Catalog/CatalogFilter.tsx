// import {useGetFilterQuery} from "../../api/productApi";
// import CatalogItem from "./CatalogItem";
import React, {useState} from "react";
import {Text, Paragraphy} from '../lib/Typography/Typography'
import {useGetAllCategoriesQuery} from "../../api/productApi";
import {Checkbox, RadioChangeEvent, TreeProps} from "antd";
import {CheckboxValueType} from "antd/es/checkbox/Group";
import { Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import {Category} from "../../api/types/category";
import {Key} from "antd/lib/table/interface";

const CatalogFilter = () => {
    const {data: categories, isError, isFetching} = useGetAllCategoriesQuery();


    const optionsWithDisabled = [{}];

    categories?.data.map(
        (category) => {
            optionsWithDisabled.push({ title: category.attributes.title, level: category.attributes.level, parent_id : category.attributes.parent_id})
        }
    )

    interface DataNode {
        title: string;
        key: string;
        children: DataNode[];
    }

    function convertToTreeData(data: Category[]): DataNode[] {
        const treeData: DataNode[] = [];
        const temp: DataNode[] = [];

        for (const nodeInfo of data) {
            const { id, attributes } = nodeInfo;
            const { title, parent_id, level } = attributes;
            const node: DataNode = { title, key: id.toString(), children: [] };

            if (level === 0) {
                temp.push(node);
                treeData.push(node);
            } else {
                const parentNode = temp.find((n) => n.key === parent_id.toString());
                if (parentNode) {
                    parentNode.children.push(node);
                    temp.push(node);
                }
            }
        }

        return treeData;
    }

    const nodeInfo = convertToTreeData(categories?.data||[]);
    console.log('nodeInfo')
    console.log(nodeInfo)

    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    return <>
        <Paragraphy fontSize={'18px'} weight={'400'} margin={'0px 0px 30px 0px'}>Категории:</Paragraphy>
        {/*<Checkbox.Group onChange={handleChange} options={optionsWithDisabled}>*/}
        {/*</Checkbox.Group>*/}

        <Tree
            checkable
            onCheck={onCheck}
            onSelect={onSelect}
            treeData={nodeInfo}
        />
    </>
}

export default CatalogFilter;