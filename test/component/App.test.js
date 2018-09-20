/* eslint-disable */
import Vuex from 'vuex'

import { shallow, createLocalVue, mount } from 'vue-test-utils';
import App from '@/App.vue';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('<App />', () => {
  let wrapper;
  let actions;
  let store;


  beforeEach(() => {

  });

  it('renders MainTable Component', () => {

  })

  it('calls FETCH_DATA on mount', () => {

  })

});
