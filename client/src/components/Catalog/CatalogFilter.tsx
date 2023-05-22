// import {useGetFilterQuery} from "../../api/productApi";
// import CatalogItem from "./CatalogItem";
import React, {useState} from "react";
import {Text, Paragraphy} from '../lib/Typography/Typography'
import {useGetAllCategoriesQuery} from "../../api/productApi";
import {Checkbox, RadioChangeEvent, TreeProps} from "antd";
import {CheckboxValueType} from "antd/es/checkbox/Group";
import { Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import style from './CatalogFilter.module.scss'
import {Category} from "../../api/types/category";
import {Key} from "antd/lib/table/interface";
import {Button} from "../lib/Button/Button";
import {render} from "react-dom";

const CatalogFilter = (props: {setFilter: (filter: Key[]) => void, setFilterStatus: (filterStatus:boolean) => void}) => {
    const {data: categories, isError, isFetching} = useGetAllCategoriesQuery();


    // const [checkedKeys, setCheckedKeys] = useState([]);
    const [checkedKeys, setCheckedKeys] = useState<Key[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

    // const {checkedKeys} = this.state;
    interface DataNode {
        title: string;
        key: string;
        children: DataNode[];
    }

    var nodeInfo = convertToTreeData(categories?.data||[]);

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
    const applyFilters = () => {
        props.setFilterStatus(false);

    }

    const resetFilters = () => {
        props.setFilterStatus(true);
        setCheckedKeys([])
        console.log('checkedKeys:', checkedKeys)
    }

    console.log('nodeInfo')
    console.log(nodeInfo)

    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
        // var ck = selectedKeys.map(item => {
        //     setSelectedKeys([item.key])
        //     return item.key;
        // });
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys);
        props.setFilter(checkedKeys as Key[]);
        var ck = info.checkedNodes.map(item => {
            setCheckedKeys([item.key])
            console.log('checkedKeys:', checkedKeys)
            setSelectedKeys([item.key])
            return item.key;
        });
        // setCheckedKeys(ck
        // )
        // setCheckedKeys({
        //     checkedKeys: ck
        // });
    };

    return <>
        <Paragraphy fontSize={'18px'} weight={'400'} margin={'0px 0px 30px 0px'}>Категории:</Paragraphy>
        <Tree
            checkable
            onCheck={onCheck}
            onSelect={onSelect}
            treeData={nodeInfo}
            checkedKeys={checkedKeys}
            // selectedKeys={selectedKeys}
        />
        <div className={style.catalogFilterButtons}>
            <Button onClick={applyFilters}>Применить</Button>
            <Button onClick={resetFilters}>Сбросить фильтры</Button>
        </div>
    </>
}

export default CatalogFilter;