import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PageTreeItem from '../PageTreeItem.vue';

describe('NavBar', () => {
  it('should display children on click event', async () => {
    const data = {
      id: '3',
      name: 'Office Events',
      children: [
        {
          id: '6',
          name: '2018',
          children: [
            {
              id: '10',
              name: 'Summer Picnic'
            },
            {
              id: '11',
              name: "Valentine's Day Party"
            },
            {
              id: '12',
              name: "New Year's Party"
            }
          ]
        },
        {
          id: '7',
          name: '2017',
          children: [
            {
              id: '13',
              name: 'Company Anniversary Celebration'
            }
          ]
        }
      ]
    };

    const wrapper = mount(PageTreeItem, {
      propsData: {
        data
      }
    });

    await wrapper.find('li').trigger('click');

    expect(wrapper.html()).toMatchSnapshot();
  });
});
