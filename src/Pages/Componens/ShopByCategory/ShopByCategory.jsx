import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from './SingleCategory';
import { useLocation, useNavigate } from 'react-router-dom';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState("teddy bear");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        fetch(`https://big-bear-toys-server.vercel.app/categoryWise/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                navigate(from, {replace: true})
            })
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className='w-10/12 mx-auto text-center'>
            <h1 className='text-4xl mt-10'>Shop By Category</h1>
            <p className='text-lg font-light mt-2 mb-14'>Some of the most common top online shopping categories include electronics, furry, toys .</p>
            <Tabs className='min-h-screen'>
                <TabList className='bg-green-200 border-none'>
                    <Tab onClick={() => handleTabClick("teddy bear")}>Teddy Bears</Tab>
                    <Tab onClick={() => handleTabClick("shock monkey")}>Sock monkey</Tab>
                    <Tab onClick={() => handleTabClick("zhuzhu pet")}>ZhuZhu Pets</Tab>
                </TabList>

                <TabPanel>
                </TabPanel>
                <TabPanel>
                </TabPanel>
                <TabPanel>
                </TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                    {
                        toys.map(toy => <SingleCategory key={toy._id} toy={toy}></SingleCategory>)
                    }
                </div>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;