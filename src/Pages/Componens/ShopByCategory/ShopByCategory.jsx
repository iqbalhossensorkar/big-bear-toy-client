import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from './SingleCategory';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const handleTabClick = () => {
        console.log('Clicked');
    }

    useEffect(() => {
        fetch('http://localhost:5000/categoryWise')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])
    return (
        <div className='w-10/12 mx-auto text-center'>
            <h1 className='text-4xl mt-10'>Shop By Category</h1>
            <p className='text-lg font-light mt-2 mb-14'>Some of the most common top online shopping categories include electronics, furry, toys .</p>
            <Tabs className='min-h-screen'>
                <TabList className='bg-green-200 border-none'>
                    <Tab onClick={handleTabClick}>Teddy Bears</Tab>
                    <Tab>Sock monkey</Tab>
                    <Tab>ZhuZhu Pets</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                        {
                            toys.map(toy => <SingleCategory key={toy._id} toy={toy}></SingleCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;