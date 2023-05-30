// import {useGetFilterQuery} from "../../api/productApi";
// import CatalogItem from "./CatalogItem";
import React, {useState} from 'react';
import {Paragraphy} from '../lib/Typography/Typography';
import {useGetAllCategoriesQuery} from '../../api/productApi';
import {Tree} from 'antd';
import style from './CatalogFilter.module.scss';
import {Category} from '../../api/types/category';
import {Key} from 'antd/lib/table/interface';
import {Button} from '../lib/Button/Button';

const CatalogFilter = (props: {
    setFilter: (filter: Key[]) => void;
    setFilterStatus: (filterStatus: boolean) => void;
}) => {
    const {
        data: categories,
        isError,
        isFetching,
    } = useGetAllCategoriesQuery();

    const [checkedKeys, setCheckedKeys] = useState<number[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<any[]>([]);

    interface DataNode {
        title: string;
        key: string;
        children: DataNode[];
    }

    var nodeInfo = convertToTreeData(categories?.data || []);

    function convertToTreeData(data: Category[]): DataNode[] {
        const treeData: DataNode[] = [];
        const temp: DataNode[] = [];

        for (const nodeInfo of data) {
            const {id, attributes} = nodeInfo;
            const {title, parent_id, level} = attributes;
            const node: DataNode = {title, key: id.toString(), children: []};

            if (level === 0) {
                temp.push(node);
                treeData.push(node);
            } else {
                const parentNode = temp.find(
                    (n) => n.key === parent_id.toString()
                );
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
        props.setFilter(checkedKeys);
    };

    const resetFilters = () => {
        setCheckedKeys([]);
        props.setFilterStatus(true);
        props.setFilter(checkedKeys);
    };

    const onCheck = (keys: any, e: any) => {
        setCheckedKeys(keys);
    };

    const onSelect = (keys: any, e: any) => {
        setSelectedKeys(keys);
    };

    return (
        <>
            <Paragraphy
                fontSize={'18px'}
                weight={'400'}
                margin={'0px 0px 20px 0px'}
            >
                Категории:
            </Paragraphy>
            <Tree
                checkable
                onCheck={onCheck}
                onSelect={onSelect}
                treeData={nodeInfo}
                checkedKeys={checkedKeys}
                selectedKeys={selectedKeys}
            />
            <div className={style.catalogFilterButtons}>
                <Button onClick={applyFilters}>Применить</Button>
                <Button onClick={resetFilters}>Сбросить фильтры</Button>
            </div>
        </>
    );
};

export default CatalogFilter;
