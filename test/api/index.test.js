import { getThemAll } from '../../src/api/index';
import axios from 'axios';
import * as urls from '../../src/api/url';


describe('index', () => {
//Using spys to test urls
//The Method we are Testsing

// getThemAll = () => axios.get(urls.POKE_URL);


  it('Mocking axios and spying', () => {
    //We need to import axios, We then write a spy to allow axios to recieve get
    const spyOnAxios = jest.spyOn(axios, 'get');
    //We need to import urls, We then write a spy to allow urls to recieve POKE_URL
    const spyOnUrls = jest.spyOn(urls, 'POKE_URL');
    //These spies will allow our method to run without any errors. It will not actually make a GET REQUEST

    //Run the method
    getThemAll();

    //Our test will make sure we have called the method with the correct arguments
    expect(spyOnAxios).toBeCalledWith(spyOnUrls);
  })
})
