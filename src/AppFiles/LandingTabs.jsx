import React, {useEffect, useState} from "react";
import {LandingTable} from "./LandingTable";
import "../css/LandingTabs.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {lang} from "../specConfigs";
import {getConsentsForSearch, setSearchObject} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {PaginationTable} from "./PaginationTable";

export const LandingTabs = () => {
    return (
        <div>
            <Tabs id="status-tab" activeKey={key} onSelect={(k) => setKey(k)}>
                {lang.map(({label, id, description}) => (
                    <Tab key={id} eventKey={id} title={label}>
                        <LandingTable status={id} description={description} currentTab={{key}}/>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};
