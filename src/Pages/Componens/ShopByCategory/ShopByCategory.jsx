import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const handleTabClick = () => {
        console.log('Clicked');
    }
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
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
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